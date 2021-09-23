<template>
	<view>
		<view class="swiper-css zqui-rel" :style="{ height: hpx }">
			<swiper class="swiper" :style="{ height: hpx }" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
			 :duration="duration" @change="guideAction" next-margin="50rpx">
				<swiper-item class="flex1" v-for="(item, index) in imageList" :key="index">
					<view class="flex-column title-box">
						<view class="guide-title">{{item.name}}</view>
						<view class="guide-subtitle">{{item.subtitle}}</view>
					</view>
					<image class="flex-column image-size" mode="aspectFit" :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 按钮样式切换 -->
			<template v-if="cur != 2">
				<view class=" flex-column dots">
					<block v-for="(item,index) in imageList" :key="index">
						<view class="dot" :class="{'active':  index == cur}"></view>
					</block>
				</view>
			</template>
			<!-- 第三张图使用按钮《立即进入》 -->
			<template v-if="cur == 2">
				<button class="flex-column cu-btn footer" @click="launchApp">立即体验</button>
			</template>
			<!-- 右上角跳过按钮 -->
			<view class="btn-box" @click="launchApp"><text class="passbtn">跳过</text></view>
		</view>
	</view>
</template>

<script>
	const animation = weex.requireModule('animation');
	export default {
		data() {
			return {
				//修改图片,文字描述
				imageList: [{
						name: '跨端数量多',
						subtitle: '一套代码，可发布到I0S、Android、小程序、H5等多个平台。',
						src: ''
					},
					{
						name: '性能体验优秀',
						subtitle: '体验更好的Hybrid框架，加载页面速度更快。\nAPP端支持WEEX原生渲染，可支持更流畅的用户体验。',
						src: ''
					},
					{
						name: '学习成本低',
						subtitle: '基于通用前端技术楼，采用VUE语法+微信小程序APl，无额外学习成本。',
						src: ''
					}
				],
				indicatorDots: false,
				autoplay: false,
				interval: 10000,
				duration: 500,
				iStatusBarHeight: '0px',
				hpx: '100%',
				cur: 0,
				dotsStyles: ''
			};
		},
		onLoad() {
			let that = this;
			plus.navigator.closeSplashscreen();
			uni.getSystemInfo({
				success: function(res) {
					that.hpx = res.windowHeight + 'px';
				}
			});
		},
		onReady() {
			this.move(0, 1);
		},
		methods: {
			launchApp() {
				//跳过引导页,储存本地值,下次进入直接跳过
				uni.setStorage({
					key: 'launchFlag',
					data: true,
					success() {
						uni.switchTab({
							
							url: '/pages/index/index'
						});
					}
				});
			},
			guideAction(event) {
				let that = this,
					index = event.detail.current;
				that.cur = index;
				if (index == 0) {
					that.move(0, 1);
					that.moveTwo(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(0);
				}
				if (index == 1) {
					that.moveTwo(0, 1);
					that.move(150, 0.1);
					that.moveThree(150, 0.1);
					that.lefMainAction(uni.upx2px(80) + 'px');
				}
				if (index == 2) {
					that.moveThree(0, 1);
					that.moveTwo(150, 0.1);
					that.move(150, 0.1);
					that.lefMainAction(uni.upx2px(160) + 'px');
				}
			},
			lefMainAction(mum) {
				var testLM = this.$refs.lefMain;
				animation.transition(
					testLM, {
						styles: {
							transform: 'translate(' + mum + ',0px)'
						},
						duration: 400, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			move(tran, opa) {
				var testEl = this.$refs.box1;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box2;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveTwo(tran, opa) {
				var testEl = this.$refs.box3;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box4;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			},
			moveThree(tran, opa) {
				var testEl = this.$refs.box5;
				animation.transition(
					testEl, {
						styles: {
							transform: 'translate(' + tran + 'px,0px)',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
				var textE2 = this.$refs.box6;
				animation.transition(
					textE2, {
						styles: {
							transform: 'translate(0px,' + tran + 'px) scale(' + opa + ')',
							transformOrigin: 'center center',
							opacity: opa
						},
						duration: 800, //ms
						timingFunction: 'ease',
						delay: 0 //ms
					},
					function() {}
				);
			}
		}
	};
</script>

<style lang="scss">
	page {
		background-color: #FFFFFF;
		min-height: 100%;
		height: 100%;
	}

	.guide {
		flex-direction: column;
		flex: 1;
	}

	.flex1 {
		flex: 1;
		width: 100%;
		height: 100%;
	}

	.image-size {
		width: 630rpx;
		height: 600rpx;
		margin-left: 60rpx;
	}

	.title-box {
		padding: 250rpx 0 120rpx 64rpx;
	}

	.guide-title {
		font-size: 48rpx;
		font-weight: bold;
		color: rgba(58, 61, 68, 1);
	}

	.guide-subtitle {
		margin-top: 20rpx;
		font-size: 35rpx;
		color: rgba(131, 136, 146, 1);
		line-height: 50rpx;
	}

	.footer {
		width: 231rpx;
		height: 80rpx;
		text-align: center;
		position: fixed;
		bottom: 116rpx;
		left: 37%;
		font-size: 30rpx;
		color: #FFFFFF;
		background-color: #bc1a32;
	}

	.btn-box {
		position: absolute;
		z-index: 999;
		right: 40rpx;
		top: 120rpx;
	}

	.dots {
		display: flex;
		justify-content: center;
		position: absolute;
		z-index: 999;
		height: 151rpx;
		left: 0;
		right: 0;
		bottom: 20rpx;
	}

	.passbtn {
		color: #838892;
		text-align: center;
		border-width: 1rpx;
		border-color: rgba(0, 0, 0, 0.5);
		border-style: solid;
		border-radius: 30rpx;
		font-size: 28rpx;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
		padding-left: 25rpx;
		padding-right: 25rpx;
	}

	.dot {
		margin: 0 4rpx;
		width: 15rpx;
		height: 15rpx;
		background: #CDD2DD;
		border-radius: 8rpx;
		transition: all .6s;
	}

	.dot.active {
		width: 40rpx;
		background: #838892 !important;
	}

	/* 相对定位 */
	.zqui-rel {
		position: relative;
	}

	.swiper-css {
		width: 750rpx;
	}

	.swiper-item {
		width: 750rpx;
	}
</style>
