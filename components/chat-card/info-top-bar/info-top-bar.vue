<template>
	<view>
		<view class="info-top-bar">
			<view class="info-title-text">
				<h1>消息</h1>
			</view>
			<view class="info-plus">
				<image class="info-top-image" src="../../../static/white_plus.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"info-top-bar",
		methods:{
			
		}
	}
</script>

<style>
	.info-top-bar{
		/* 颜色 */
		background-color: #FB7575;
		/* 高度 */
		height: 160rpx;
		width: 100%;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.info-title-text{
		order: 0;
		width: 150rpx;
		margin-top: 55rpx;
		margin-left: 310rpx;
		color: #FFFFFF;
	}
	.info-plus{
		order: 1;
		width: 100rpx;
		margin-top: 70rpx;
		margin-left: 190rpx;
	}
	.info-top-image{
		width: 51rpx;
		height: 51rpx;
	}
</style>
