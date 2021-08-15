<template>
	<view class="card">
		<view class="today_test">
			<h3>
				<sidebar></sidebar>
				{{title}}
			</h3>
		</view>
		<!-- 历史上的今天的省略 -->
		<view class="today_ellipsis">
			<image class="ellipsis_image" src="../../../static/ellipsis.png"></image>
		</view>
	</view>
	
</template>

<script>
	import sidebar from '@/components/index-card/sidebar/sidebar.vue'
	export default {
		name:"title-card",
		props:{
			title:{
				type:String,
				default:""
			}
		},
		components: {
			sidebar
		},
	}
</script>

<style>
	.card{
		width: 100%;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	/* 历史上的今天文本的 css 样式 */
	.today_test{
		order: 0;
		width: 85%;
		margin-left: 20rpx;
	}
	/* 省略模块的 css 样式 */
	.today_ellipsis{
		order: 1;
		width: 10%;
		margin-right: 20rpx;
	}
	/* 省略图片的 css 样式 */
	.ellipsis_image{
		width: 70rpx;
		height: 70rpx;
	}
</style>
