<template>
	<view>
		<view class="uni-padding-wrap" style="margin-top: 20rpx;">
			<background style="height: 360rpx;"></background>
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper autoplay="true" class="swiper" circular="true" next-margin="170rpx" >
						<swiper-item style="height: 300rpx;width: 40%;display: flex;flex-direction: column;" v-for="(item,index) in imgList" :key='item.id'>
							<image :src="item.urll" style="height: 300rpx;width: 270rpx;margin-left: 320rpx;border-radius: 350rpx;margin-top: 40rpx	;"></image>
							<!-- <text style="background-color: #bc1a32;color: #FFFFFF;width: 40%;margin-left: 60rpx;font-size: 45rpx;margin-left: 250rpx;">{{item.name}}</text> -->
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<view style="margin-top: 70rpx;">
			<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;"></image>
			<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">英雄生平</text>
			
			
			<view style="display: flex;flex-direction: row;">
				<input style="border-radius: 25rpx;width: 500rpx;border: 1px solid #a6a4a4;font-size: 35rpx;margin-left: 40rpx;height: 60rpx;padding-left: 10rpx;" placeholder="请输入" />
				<button  style="height: 70rpx;font-size: 30rpx;margin-left: 10rpx;">搜索</button>
			</view>
			
			
			
			
		</view>
		
		<view style="display: flex;flex-direction: row;padding-left: 40rpx;padding-right: 40rpx;margin-top: 20rpx;" v-for="item in lis" :key="item.index">
			
			<image :src="item.img" style="width: 250rpx;height: 300rpx;" @click="jumpToShow()"></image>
			<view style="display: flex;flex-direction: column;width: 340rpx;overflow: hidden;">
			<text style="margin-left: 10rpx;font-size: 45rpx;margin-top: 80rpx;margin-left: 40rpx;">{{item.name}}</text>
			<!-- <text style="margin-top: 10rpx;margin-left: 10rpx;">内容</text>
			<text style="margin-top: 10rpx;margin-left: 10rpx;font-size: 25rpx;color:#a7a6a6;">发布人   发布时间</text> -->
			
			</view>
			
		</view>
	</view>
</template>

<script>
	import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	import Background from '@/components/myself-card/background/Background1.vue'
	import searchForm from '@/components/search-form/search-form.vue'
	export default {
		data() {
			return {
				imgList: [{
							id: 1,
							urll: 'https://dairenhao.xyz/view/t0175e3dfa0b9d51f40.jpg',
							name:'俞秀松',
						},
						{
							id: 2,
							urll: 'https://dairenhao.xyz/view/R-C.jpg',
							name:'朱枫',
						},
						{
							id: 3,
							urll: 'https://dairenhao.xyz/view/R-C.jpg',
							name:'朱镜我',
						}
					],
				lis:[{
					name:'俞秀松',
					img:'https://dairenhao.xyz/view/t0175e3dfa0b9d51f40.jpg',
				},{
					name:'朱枫',
					img:'https://dairenhao.xyz/view/R-C.jpg',
					},{
					name:'朱镜我',
					img:'https://dairenhao.xyz/view/R-C%20(1).jpg',
					},{
					name:'竺莲芬',
					img:'https://dairenhao.xyz/view/OIP-C.jpg'
				},{
					name:'周尚文',
					img:''
				},{
					name:'陆思采',
					img:''
				},
				{
					name:'陈寿昌',
					img:'https://dairenhao.xyz/view/R-C%20(2).jpg',
					}
				],
				searchVal: ''
			}
		},
		components:{
			Background
		},
		methods: {
			jumpToShow(){
				uni.navigateTo({
					url:'../heroshow/index'
				})
			},
			search(res) {
				uni.showToast({
					title: '搜索：' + res.value,
					icon: 'none'
				})
			},
			input(res) {
				this.searchVal = res.value
			},
			cancel(res) {
				uni.showToast({
					title: '点击取消，输入值为：' + res.value,
					icon: 'none'
				})
			},
			onBackPress() {
				// #ifdef APP-PLUS
				plus.key.hideSoftKeybord();
				// #endif
			}
		}
	}
</script>

<style>
.login-card{
	  position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	   background-image: url(../../static/background2.jpg);
	    z-index: -1;
		background-size: 100% ;
		background-repeat: no-repeat;
}
</style>
