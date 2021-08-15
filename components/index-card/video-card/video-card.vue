<template>
	<view class="video-card">
		<title-card :title="title"></title-card>
		<view class="video-items">
			<view v-for="(item,index) in video" class="video_item">
				<view class="video_image">
					<image class="video_image_item" :src="item.image_src"></image>
				</view>
				<view class="video_test">
					<view class="video_test_item">
						{{item.video_title}}
					</view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleCard from '@/components/index-card/title-card/title-card.vue'
	export default {
		name:"video-card",
		props:{
			video:{
				type:Array,
				default:[]
			},
			title:{
				type:String,
				default:""
			}
		},
		components: {
			titleCard
		},
	}
</script>

<style>
	.video-card{
		background-color: #DEDEDE;
		width: 100%;
		
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.video-items{
		width: 100%;
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.video_item{
		width: 45%;
		margin-left: 30rpx;
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		background-color: #4CD964;
		border-radius: 25rpx 25rpx ;
		
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.video_image{
		width: 340rpx;
		order: 0;
		height: 260rpx;
		border-radius: 25rpx 25rpx ;
	}
	.video_image_item{
		width: 340rpx;
		height: 260rpx;
		border-radius: 25rpx 25rpx 0rpx 0rpx ;
	}
	.video_test{
		width: 100%;
		order: 2;
		background-color: #fff;
		
		margin-top: -0rpx;
		border-radius: 0rpx 0rpx 25rpx 25rpx ;
	}
	.video_test_item{
		margin-left: 15rpx;
		margin-right: 15rpx;
	}
</style>
