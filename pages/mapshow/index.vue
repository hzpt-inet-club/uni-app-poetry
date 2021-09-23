<template>
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasMap" id="canvasMap" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchMap"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasMap" id="canvasMap" class="charts" @touchstart="touchMap"></canvas>
			<!--#endif-->
			<!-- #ifdef MP-WEIXIN -->
			<ad unit-id="adunit-908b0a16e90e2a5f" ad-type="grid" grid-count="8" ad-theme="white"></ad>
			<!-- #endif -->
		</view>
		<view style="width: 100%;height: 10rpx;background-color: #bc1a32;"></view>
		<text style="font-size: 45rpx;margin-top: 40rpx;margin-left: 40rpx;" v-if="showList">杭州市</text>
		<view style="padding: 40rpx;" v-if="showList">
			<view @click="jumpToShow()" v-for="item in historyList" :key="item.index" style="margin-top: 10rpx;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;">
				<text>{{item}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/js_sdk/u-charts/u-charts.js';
	import  { isJSON } from '@/common/checker.js';
	var _self;
	var canvaMap=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
				province:'',
				showList:false,
				content:{
					
				},
				historyList:[
					 "浙江党史教育基地巡礼：杭州市革命烈士纪念馆",
					    "浙江党史教育基地巡礼：衙前农民运动纪念馆",
					    "浙江党史教育基地巡礼：浙江革命烈士纪念馆",
					    "浙江党史教育基地巡礼：中国共产党杭州历史馆（杭州）",
					    "浙江党史教育基地巡礼：中国工农红军北上抗日先遣队纪念馆（淳安）",
					    "浙江党史教育基地巡礼：浙江革命历史纪念馆（下城）",
					    "浙江党史教育基地巡礼：五四宪法历史资料陈列馆",
					    "浙江党史教育基地巡礼：中国社区建设展示中心",
					    "浙江党史教育基地巡礼：浙东人民解放军金萧支队纪念馆"
				]
			}
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(750);
			this.getServerData();
		},
		methods: {
			getServerData(){
				uni.request({
					url: 'https://geo.datav.aliyun.com/areas_v3/bound/330000_full.json',
					data:{
					},
					success: function(res) {
						
						let cMap={series:[]};
						//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
						cMap.series=res.data.features;
						_self.showMap("canvasMap",cMap);
					},
					fail: () => {
						_self.tips="网络错误，小程序端请检查合法域名";
					},
				});
			},
			showMap(canvasId,chartData){
				canvaMap=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'map',
					fontSize:11,
					padding:[0,0,0,0],
					legend:{
						show:false
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
          dataLabel:true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						map: {
              border:true,
              borderWidth:1,
              borderColor:'#666666',
              fillOpacity:0.6
						}
					}
				});
			},
			touchMap(e){
				let that = this
				canvaMap.showToolTip(e, {
					format: function (item) {
						that.province = item.properties.name 
						console.log(that.province)
						return that.province
					}
				});
				
				// uni.request({
				// 	url:'https://www.dairenhao.xyz/competition/redMark/getLocationTitleList',
				// 	 data: {						 
				// 			 location: that.province     
				// 	    },
				// 		method:'GET',
				// 		header:null,
				// 		success: (res) => {
				// 			// uni.navigateTo({
				// 			// 	url:'../articleall/articleall?prov='+that.province,
								
				// 			// })
				// 			console.log(res)
				// 		}
				// })
				if(that.province == '杭州市'){
					that.showList = true
				}
			},
			jumpToShow(){
				uni.navigateTo({
					url:'../maparticle/index'
				})
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 750upx;
		background-color: #FFFFFF;
		margin-top: 100rpx;
	}
	
	.charts {
		width: 750upx;
		height: 750upx;
		background-color: #FFFFFF;
	}
</style>
