<template>
	<view>
		<view class="uni-padding-wrap" style="margin-top: 30rpx;">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" circular="true" previous-margin="70rpx" next-margin="30rpx">
						<swiper-item style="height: 300rpx;width: 80%;" v-for="(item,index) in imgList" :key='item.id'>
							<image :src="item.urll" style="height: 300rpx;width: 94%;border-radius: 15rpx;" @click="jumpToShow()"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class="party_history">
			<view>
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;"></image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">专栏名称</text>
			</view>
			<view style="padding-top: 40rpx;display: flex;flex-direction: row;flex-wrap: wrap;">
				<view style="width: 315rpx;padding: 30rpx;display: flex;flex-direction: column;" v-for="item in lis" :key="item.index">
				<image @click="jumpToShow()" :src="item.urll" style="width: 300rpx;height: 200rpx;border-radius: 25rpx;"></image>
				<text>{{item.name}}</text>
				<!-- <text style="font-size: 25rpx;">视频简介</text> -->
				</view>
				
			</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						id: 1,
						urll: 'https://www.dairenhao.xyz/view/pic1.png'
					},
					{
						id: 2,
						urll: 'https://www.dairenhao.xyz/view/pic1.png'
					},
					{
						id: 3,
						urll: 'https://www.dairenhao.xyz/view/pic1.png'
					}
				],
				lis:[
				{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'血与火：新中国是这样炼成的'
				},{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第1集《开天辟地》'
				},{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第2集《青春启航》'
				},{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第3集《安源大罢工》'
				},{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第4集《京汉风云》'
				},{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第5集《南昌城头一声枪响》'
				},
				{
					urll:'https://www.dairenhao.xyz/view/pic1.png',
					name:'第7集《支部建在连上》'
				},
				]
			}
		},
		methods: {
			jumpToShow(){
				uni.navigateTo({
					url:'../vidershow/index'
				})
			}
		}
	}
</script>

<style>
	.party_history{
		margin-top: 20rpx;
	}
</style>
