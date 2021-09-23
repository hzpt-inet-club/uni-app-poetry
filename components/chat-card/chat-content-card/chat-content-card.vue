<template>
	<view class="tab-control">
		<view v-for="(user,index) in users" @click="contentClick(user.id)" class="content-card">
			<view class="info-card-item">
				<view class="info-image">
					<cmd-avatar class="info-image-item" :src="user.image_url"></cmd-avatar>
				</view>
				<view class="info-text">
					<view class="info-text-item-card">
						<view class="info-text-item">
							{{user.title_text}}
						</view>
						<view class="info-time-item">
							{{user.time_text}}
						</view>
					</view>
					<view class="info-text-content">
						{{user.content_text}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	export default {
		name:"chat-content-card",
		props:{
			users:{
				type:Array,
				default:[]
			}
		},
		components: {
			cmdAvatar
		},
		methods:{
			contentClick(id){
				uni.navigateTo({
					url:'/pages/message/index',
					 success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
					},
					fail(res) {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style>
	.tab-control{
		width: 100%;
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.content-card{
		order: 1;
		width: 100%;
		border-bottom: 2rpx solid #999999;
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.info-card-item{
		width: 100%;
		height: 160rpx;
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.info-image{
		order: 0;
		width: 20%;
		margin-left: 30rpx;
	}
	.info-image-item{
		margin-top: 30rpx;
		margin-left: 30rpx;
		width: 100rpx;
		height: 100rpx;
	}
	.info-text{
		width: 70%;
		margin-left: 20rpx;
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	.info-text-item-card{
		order: 0;
		width: 100%;
		margin-top: 30rpx;
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.info-text-item{
		order: 0;
		width: 80%;
	}
	.info-time-item{
		order: 1;
		color: #555555;
		font-size: 25rpx;
	}
	.info-text-content{
		order: 1;
		
		width: 100%;
	}
</style>
