<template>
	<!-- 顶部栏 -->
		<view class="top_bar">
			<!-- 头像 -->
			<view class="head_portrait">
				<cmd-avatar :src="imageSrc"></cmd-avatar>
			</view>
			<!-- 搜索框 -->
			<view class="search_box">
				<uni-search-bar 
					:radius="100" 
					:placeholder="searchValue"
					value="searchValue"
					bgColor="#F06C9B" 
					cancelButton="none" 
				></uni-search-bar>
			</view>
			<!-- 功能区 -->
			<view class="functional_area">
				<image class="functional_image" src="../../../static/function.png"></image>
			</view>
		</view>
</template>

<script>
	import cmdAvatar from '@/components/cmd-avatar/cmd-avatar.vue'
	export default {
		name:"top-bar",
		props:{
			imageSrc:{
				type:String,
				default:""
			},
			searchValue:{
				type:String,
				default:""
			}
		},
		components: {
			cmdAvatar,
		},
		methods:{
			
		}
	}
</script>

<style>
	/* 顶部栏的 css 样式 */
	.top_bar{
		/* 颜色 */
		background-color: #FB7575;
		/* 高度 */
		height: 160rpx;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	/* 头像框的 css 样式 */
	.head_portrait{
		/* 颜色 */
		/* background-color: #ff0000; */
		/* 位数 */
		order: 0;
		/* 宽度 */
		width: 100rpx;
		height: 100rpx;
		/* 上边框的距离 */
		margin-top: 10rpx;
		/* 左边的距离 */
		margin-left: 30rpx;
	}
	/* 搜索栏的 css 样式 */
	.search_box{
		/* 颜色 */
		/* background-color: #FF0000; */
		/* 位数 */
		order: 1;
		/* 宽度 */
		width: 450rpx;
		height: 100rpx;
		/* 上边框的距离 */
		margin-top: 10rpx;
		/* 左边的距离 */
		margin-left: 30rpx;
	}
	/* 功能区的 css 样式 */
	.functional_area{
		/* 颜色 */
		/* background-color: #FF0000; */
		/* 位数 */
		order: 2;
		/* 宽度 AND 高度*/
		width: 100rpx;
		height: 100rpx;
		/* 上边框的距离 */
		margin-top: 10rpx;
		/* 左边的距离 */
		margin-left:30rpx;
	}
	/* 功能区图片的 css 样式 */
	.functional_image{
		/* 上边框的距离 */
		margin-top: 15rpx;
		/* 宽度 AND 高度*/
		width: 70rpx;
		height: 70rpx;
	}
</style>
