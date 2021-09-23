<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" style="width: 100%;"
					src="https://www.dairenhao.xyz/view/yibainianzhengcheng.mp4"
					@error="videoErrorCallback" enable-danmu controls></video>
			</view>
			<view>
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;">
				</image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">视频名称</text>
			</view>
			<view style="padding: 40rpx;">
				<text>王祖强：'忆百年征程，抒时代之声'——有请发言人实录</text>
				
				<br/>
				<!-- <text>发布者</text>
				<text style="margin-left: 300rpx;">关键词</text> -->
				</view>
				<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>
				<view style="padding-top: 40rpx;">
					<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;">
					</image>
					<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">相关视频</text>
					
					<view style="padding-top: 40rpx;display: flex;flex-direction: row;flex-wrap: wrap;width: 90%;margin: 0 auto;justify-content: space-between;">
						<view style="width: 300rpx;padding: 10rpx;display: flex;flex-direction: column;" v-for="item in lis" :key="item.index">
						<image :src="item.urll" style="width: 300rpx;height: 200rpx;border-radius: 25rpx;"></image>
						<text style="overflow: hidden;text-overflow:ellipsis; white-space: nowrap;margin-top: 20rpx;">{{item.name}}</text>
						<text style="font-size: 25rpx;">视频简介</text>
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
				src: '',
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
		onReady: function(res) {
			// #ifndef MP-ALIPAY
			this.videoContext = uni.createVideoContext('myVideo')
			// #endif
		},
		methods: {

			videoErrorCallback: function(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style>

</style>
