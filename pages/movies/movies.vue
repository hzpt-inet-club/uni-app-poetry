<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<view>
				<video id="myVideo" style="width: 100%;"
					:src="movieUrl"
					@error="videoErrorCallback" enable-danmu controls></video>
			</view>
			<view>
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;">
				</image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">{{movieName}}</text>
			</view>
		</view>
		<view style="padding: 40rpx;">
		<view v-for="item in movieList" style="margin-top: 20rpx;display: flex;flex-direction: row;justify-content: space-between;" :key="item.index">
			<text @click="startMovie(item.urll,item.name)" style="font-size: 45rpx;">{{item.name}}</text>
			<text v-if="movieName == item.name"  style="color: yellow;">正在播放</text>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				movieList:[
					{
						urll:'https://www.dairenhao.xyz/view/changbinghu(1).mp4',
						name:'冰血长津湖'
					},
					{
						urll:'http://vodpc-al.wasu.cn/pcsan24/pc/movie/2019-07/26/20190726144041383VUc6pxJ3.mp4?auth_key=69fb1d49bf6675b0294c24e33a892a32-1632333572-0c0d30f48e13af1bdc43afd3cb26cce8-&sk=f34d5055a14e2012dedbed16fb593c27&vid=9735037&cid=5&version=PadPlayer_V1.5.0',
						name:'狼牙山五壮士'
					},
					{
						urll:'http://union.cnzzstatic.com/html/prestrain.html',
						name:'秋收起义'
					},
					{
						urll:'https://yufu5.com/danm/?url=https://vod.bunediy.com/20200513/yWOpRYhy/index.m3u8',
						name:'英雄虎胆'
					},
					{
						urll:'http://vodpc-al.wasu.cn/pcsan24/pc/movie/2019-07/26/20190726144534725UafUwYLd.mp4?auth_key=fd9b1c37c04b80337fb2b012a1da4b25-1632334223-82ba2aafc1413dc519cfd03ceba3d38c-&sk=f34d5055a14e2012dedbed16fb593c27&vid=9734953&cid=5&version=PadPlayer_V1.5.0',
						name:'南征北战'
					},
					{
						urll:'http://vodpc-al.wasu.cn/pcsan24/pc/movie/2019-07/26/20190726144644239PE6PZ92c.mp4?auth_key=bc94954f1557ab2fc47eb661d17fb047-1632334629-55da6042e41073dc5d2cf3351ab07b57-&sk=f34d5055a14e2012dedbed16fb593c27&vid=9734888&cid=5&version=PadPlayer_V1.5.0',
						name:'小兵张嘎'
					},
					{
						urll:'https://flvhd.vodfile.m1905.com/exp/movie/2016/01/04/c6766965aebc98aaf59c34366a878db0.mp4?key1=202109230018&key2=0bf0265f8bddf664549caca949b8374c',
						name:'诱狼'
					},
				
				],
				movieUrl:'https://jx.jxbdzyw.com/m3u8/?url=https://vod3.bdzybf3.com/20210410/O1CHlqqV/index.m3u8',
				movieName:'冰血长津湖'
			}
		},
		methods: {
			onReady: function(res) {
				// #ifndef MP-ALIPAY
				this.videoContext = uni.createVideoContext('myVideo')
				// #endif
			},
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
				},
				startMovie(url,name){
					this.movieUrl = url
					this.movieName = name
				}
		}
	}
</script>

<style>

</style>
