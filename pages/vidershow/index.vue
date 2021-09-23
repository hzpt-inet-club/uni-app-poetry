<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" style="width: 100%;" src="https://www.dairenhao.xyz/view/yibainianzhengcheng.mp4"
					@error="videoErrorCallback" enable-danmu controls></video>
			</view>
			<view>
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;">
				</image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">视频名称</text>
			</view>
			<view style="padding: 40rpx;">
				<text>血与火：新中国是这样炼成的</text>
				<br />
				<!-- <text>发布者</text>
				<text style="margin-left: 300rpx;">关键词</text> -->
			</view>
			<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>
			<view style="padding-top: 40rpx;">
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;">
				</image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">选集</text>

				<view
					style="padding-top: 40rpx;display: flex;flex-direction: row;flex-wrap: wrap;width: 90%;margin: 0 auto;justify-content: space-between;">
					<view style="width: 300rpx;padding: 10rpx;display: flex;flex-direction: column;" v-for="item in lis"
						:key="item.index">
						<image :src="item.urll" style="width: 300rpx;height: 200rpx;border-radius: 25rpx;"></image>
						<text>{{item.name}}</text>

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
				lis: [

					{
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第1集《开天辟地》'
					}, {
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第2集《青春启航》'
					}, {
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第3集《安源大罢工》'
					}, {
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第4集《京汉风云》'
					}, {
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第5集《南昌城头一声枪响》'
					},
					{
						urll: 'https://www.dairenhao.xyz/view/pic1.png',
						name: '第7集《支部建在连上》'
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
