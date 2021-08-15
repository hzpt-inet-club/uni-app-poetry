<template>
	
	<view class="integral_card">
		<title-card title="积分榜"></title-card>
		<view class="integral_content">
			<view v-for="(item,index) in integral_users" class="integral_content_item">
				<view class="integral_image">
					<cmd-avatar class="integral_images" :src="item.image_src"></cmd-avatar>
				</view>
				<view class="integral_item">
					<view class="integral_name">
						{{item.name}}
					</view>
					<view class="integral_name">
						{{item.designation}}
					</view>
					<view class="integral_name">
						{{item.grade}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import titleCard from '@/components/index-card/title-card/title-card.vue'
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	export default {
		name:"integral-card",
		components: {
			titleCard,
			cmdAvatar
		},
		props:{
			integral_users:{
				type:Array,
				default:[]
			}
		}
	}
</script>

<style>
	/* 积分榜卡片的 css 样式 */
	.integral_card{
		width: 100%;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	/* 积分榜内容卡片的 css 样式 */
	.integral_content{
		width: 100%;
		order: 2;	
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	/* 具体排行用户的 css 样式 */
	.integral_content_item{
		width: 30%;
		margin-left: 20rpx;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	/* 具体头像框的 css 样式 */
	.integral_images{
		width: 70rpx;
		height: 70rpx;
	}
	/* 具体头像的 css 样式 */
	.integral_image{
		margin-top: 10%;
		margin-left: 10rpx;
		width: 100rpx;
		height: 100rpx;
	}
	/* 具体内容的 css 样式 */
	.integral_item{
		margin-top: 10rpx;
		margin-left: 10rpx;
		margin-bottom: 10rpx;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.integral_name{
		width: 100%;
		height: 30%;
	}
</style>
