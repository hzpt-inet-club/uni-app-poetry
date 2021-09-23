<template>
	<view style="display: flex;flex-direction: column;">
		<view class="top_bar">
			<text style="color: #FFFFFF;font-size: 40rpx;height: 50rpx;width: 170rpx;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;"  >{{nowAddress}}</text>
			<image @click="open" src="../../static/images/location-icon.png" style="width: 32rpx;height: 40rpx;margin-top: 10rpx;margin-left: 15rpx;"></image>
			<uni-popup ref="popup" type="center"  style="color: #FFFFFF;">{{addressInformation}}
			<button @click="nowLocation()">重新定位</button>
			</uni-popup>
			<image @click="jumpToButton()" src="../../static/images/microphone-icon.png" style="width: 32rpx;height: 40rpx;margin-top: 10rpx;margin-left: 15rpx;margin-left:450rpx;"></image>
		</view>
		<view>
		<!-- 	轮播图 -->
		<view class="uni-padding-wrap" style="margin-top: 30rpx;">
		            <view class="page-section swiper">
		                <view class="page-section-spacing">
		                    <swiper class="swiper" autoplay="true"  circular="true" previous-margin="70rpx" next-margin="30rpx" >
		                        <swiper-item style="height: 300rpx;width: 80%;" v-for="(item,index) in imgList" :key='item.id'>
		                           <image :src="item.urll" style="height: 300rpx;width: 94%;border-radius: 15rpx;"></image>
		                        </swiper-item>		                  
		                    </swiper>
		                </view>
		            </view>
		        </view>
				
		<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>	
		<view class="nav_c">
			
			<view style="">
			<view class="icon_c" @click="jumpToHero()">
				<image src="../../static/images/knowledge.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">英雄人物</text>
			</view>
			
			<view>
			<view class="icon_c" @click="jumpToMap()">
				<image src="../../static/images/stamp.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">红色足迹</text>
			</view>
			
			<view>
			<view class="icon_c" @click="jumpToImage()">
				<image src="../../static/images/picture.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">峥嵘岁月</text>
			</view>
			
			<view>
			<view class="icon_c" @click="jumpToRecord()">
				<image src="../../static/images/record.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">党史百科</text>
			</view>

			<view>
			<view class="icon_c" @click="jumpToRostrum()">
				<image src="../../static/images/pulpit.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">浙江讲坛</text>
			</view>

			<view>
			<view class="icon_c" @click="jumpToVideo()">
				<image src="../../static/images/image.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">百年征程</text>
			</view>
			
			<view>
			<view class="icon_c" @click="jumpToVideo()">
				<image src="../../static/game.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">趣味学习</text>
			</view>
			
			<view>
			<view class="icon_c" @click="jumpToMovie()()">
				<image src="../../static/movie.png" style="width: 60rpx;height: 50rpx;margin-top: 35rpx;margin-left: 30rpx;"></image>
			</view>
			<text style="font-size: 25rpx;margin-left: 65rpx;">红色影院</text>
			</view>
				
			
		</view>
		<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>	
		<view class="picture_but" >
			<image src="https://www.dairenhao.xyz/view/zhonggong1.jpeg" style="width: 300rpx;height: 370rpx;"></image>
			<view style="width: 400rpx;">
				<image src="https://www.dairenhao.xyz/view/zhonggong2.jpeg" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;"></image>
				<image src="https://www.dairenhao.xyz/view/zhonggong3.jpeg" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;"></image>
				<image src="https://www.dairenhao.xyz/view/zhonggong4.jpeg" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
				<image src="https://www.dairenhao.xyz/view/zhonggong5.jpeg" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
			</view>
		</view>
		<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>	
		<view class="party_history"> 
		<view>
			<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;"></image>
			<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">党史百科</text>
			<image src="../../static/ellipsis.png" style="width: 40rpx;height: 40rpx;margin-left: 450rpx;" @click="jumpToRecord()"></image>
		</view>
		<view style="padding-top: 40rpx;">
			<image @click="jumpToArticle()" src="../../static/images/cyclopdia-1.png" style="width: 215rpx;height: 320rpx;" ></image>
			<image @click="jumpToArticle()" src="../../static/images/cyclopdia-2.png" style="width: 215rpx;height: 320rpx;margin-left: 20rpx;" ></image>
			<image @click="jumpToArticle()" src="../../static/images/cyclopdia-3.png" style="width: 215rpx;height: 320rpx;margin-left: 20rpx;" ></image>
		</view>
		</view>
		<view class="pulpit">
			<view>
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;"></image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">党史讲坛</text>
				<image src="../../static/ellipsis.png" style="width: 40rpx;height: 40rpx;margin-left: 450rpx;" @click="jumpToRostrum()"></image>
			</view>
			<view style="padding-top: 20rpx;width: 100%;display: flex;flex-direction: column;">
			<view @click="jumpToShow()" style="display: flex;flex-direction: row;padding-left: 20rpx;padding-right: 40rpx;margin-top: 20rpx;" v-for="item in lis" :key="item.index">
				
				<image :src="item.urll" style="width: 280rpx;height: 190rpx;"  ></image>
				<view style="display: flex;flex-direction: column;width: 340rpx;overflow: hidden;">
				<text style="margin-left: 10rpx;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;margin-top: 50rpx;">{{item.name}}</text>
				<!-- <text style="margin-top: 10rpx;margin-left: 10rpx;">简介</text>
				<text style="margin-top: 10rpx;margin-left: 10rpx;font-size: 25rpx;color:#a7a6a6;">发布人   发布时间</text> -->
				
				</view>
				<image src="../../static/v.png" style="width:40rpx;height: 40rpx;margin-top: 50rpx;"></image>
			</view>
			</view>
		</view>
		</view>
	</view>	 
</template>

<script>
	
	export default {
		data() {
			return {
				imgList:[
						{id:1,urll:'../../static/swip/banner.jpg'},
						{id:2,urll:'../../static/swip/banner4.jpg'},
						{id:3,urll:'../../static/swip/banner2.jpg'}
				],
				iconList:[
					{id:1,url:'../../static/images/knowledge.png',name:'党的知识',page:''},
					{id:2,url:'../../static/images/stamp.png',name:'红色印记',page:''},
					{id:3,url:'../../static/images/picture.png',name:'历史图片',page:''},
					{id:4,url:'../../static/images/record.png',name:'党史百科',page:''},
					{id:5,url:'../../static/images/pulpit.png',name:'党史讲坛',page:''},
					{id:6,url:'../../static/images/image.png',name:'影像记录',page:''},
				],
				nowAddress:'未定位',
				addressInformation:'',
				updat:true,
				lis:[{
					name:"金延锋：斗要敢于“逆水行舟” 奉献要善于“依水行舟”（视频）",
					urll:'https://www.dairenhao.xyz/view/jyf.png'
				},
				{
					name:"包晓峰:中国共产党革命斗争在浙江的实践",
					urll:'https://www.dairenhao.xyz/view/zjs.png'
				},
				{
					name:"王祖强:“忆百年征程，抒时代之声”——有请发言人实录",
					urll:'https://WWW.dairenhao.xyz/view/wzq.png'
				},
				{
					name:"王祖强:“数”说百年党史，守好红色根脉",
					urll:'https://WWW.dairenhao.xyz/view/dang.png'
				},
				{
					name:"王祖强：“三个地”串起浙江红色百年史",
					urll:'https://WWW.dairenhao.xyz/view/sa.png'
				},
				{
					name:"王祖强：见证70年 浙里寻印记",
					urll:'https://WWW.dairenhao.xyz/view/ti.png'
				},
				]
			}
		},
		onLoad() {
			this.nowLocation()
			uni.setStorageSync('show',false)
		},
		methods: {
			jumpToRecord(){
				uni.navigateTo({
					url:'../history/index'
				})
			},
			jumpToMap(){
				uni.navigateTo({
					url:'../mapshow/index'
				})
			},
			jumpToRostrum(){
				uni.navigateTo({
					url:'../rostrum/index'
				})
			},
			jumpToImage(){
				uni.switchTab({
					url:'../historyimage/index'
				})
			},
			jumpToHero(){
				uni.navigateTo({
					url:'../heros/index'
				})
			},
			jumpToVideo(){
				uni.switchTab({
					url:'../video/index'
				})
			},
			jumpToArticle(){
				uni.navigateTo({
					url:'../articleshow/index'
				})
			},
			jumpToShow(){
				uni.navigateTo({
					url:'../rostrunshow/index'
				})
			},
			jumpToMovie(){
				uni.navigateTo({
					url:'../movies/movies'
				})
			},
			jumpToButton(){
				uni.navigateTo({
					url:'../button/button'
				})
			},
			nowLocation(){
				let that = this
				uni.getLocation({
					geocode:true,
					success:function(res){
						var addr = res.address
						that.nowAddress = addr.street +addr.streetNum
						that.addressInformation = addr.province +addr.city+addr.district+addr.street+addr.streetNum
					}
				})
			},
			 open(){
			        // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			        this.$refs.popup.open('top')
			      }
		}
	}
</script>

<style>
	.top_bar{
		/* 颜色 */
		background-color: #bc1a32;
		/* 高度 */
		height: 70rpx;
		/* flex布局 */
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content:flex-start;
		padding-top: 90rpx;
		padding-left: 20rpx;
		position: sticky;
		top: 0;
		z-index: 999;
	}
	.Carousel{
		width: 100%;
		height: 200rpx;
	}
	.nav_c{
		height: 350rpx;
		width: 100%;
		display: flex;
		display: -webkit-box;  
		flex-direction: row;
		position: relative;
		margin-top: 20rpx;
		flex-wrap:wrap
	}
	.icon_c{
		background-color: #edc282;
		width: 120rpx;
		height: 120rpx;
		margin-left: 55rpx;
		border-radius: 100rpx;
		display: flex;
		flex-direction: column;
	}
	.picture_but{
		padding: 30rpx;
		display: flex;
		flex-direction: row;
	}
	.party_history{
		padding:30rpx;
		margin-top: 20rpx;
	}
	.pulpit{
		padding:30rpx;
		margin-top: 20rpx;
	}
</style>
