<template>
	<view>	
		<view class="uni-padding-wrap" style="margin-top: 30rpx;">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" circular="true" next-margin="170rpx" >
						<swiper-item style="height: 300rpx;width: 70%;display: flex;flex-direction: column;" v-for="(item,index) in imgList" :key='item.id'>
							<image :src="item.urll" style="height: 300rpx;width: 90%;margin-left: 60rpx;"></image>
							<text style="background-color: #bc1a32;color: #FFFFFF;width: 90%;margin-left: 60rpx;font-size: 45rpx;">{{item.title}}</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		
		<!-- margin-top: 20rpx; -->
		<view @click="jumpToShow()" style="display: flex;flex-direction: row;padding-left: 40rpx;padding-right: 40rpx;margin-top: 20rpx;" v-for="item in lis" :key="item.index">
			
			<image :src="item.urll" style="width: 280rpx;height: 190rpx;"  ></image>
			<view style="display: flex;flex-direction: column;width: 340rpx;overflow: hidden;">
			<text style="margin-left: 10rpx;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;margin-top: 50rpx;">{{item.name}}</text>
			<!-- <text style="margin-top: 10rpx;margin-left: 10rpx;">简介</text>
			<text style="margin-top: 10rpx;margin-left: 10rpx;font-size: 25rpx;color:#a7a6a6;">发布人   发布时间</text>
			 -->
			</view>
			<image src="../../static/v.png" style="width:40rpx;height: 40rpx;margin-top: 50rpx;"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [{
						id: 1,
						urll: 'https://www.dairenhao.xyz/view/jyf.png',
						title:'金延锋'
					},
					{
						id: 2,
						urll: 'https://www.dairenhao.xyz/view/zjs.png',
						title:'包晓峰'
					},
					{
						id: 3,
						urll: 'https://WWW.dairenhao.xyz/view/wzq.png',
						title:'王祖强'
					}
				],
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
		methods: {
			jumpToShow(){
				uni.navigateTo({
					url:'../rostrunshow/index'
				})
			}
		}
	}
</script>

<style>

</style>
