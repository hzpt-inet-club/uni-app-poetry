<template>
	<view>
		<view class="message-top">
			<view @click="return_button" class="return-card">
				<image class="return-image" src="../../../static/return-white.png"></image>
			</view>
			<view class="title-card">
				{{userName}}
			</view>
			<view class="ellipsis-card">
				<image class="message-ellipsis-image" src="../../../static/ellipsis_white.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"message-top",
		props:{
			userName:{
				type:String,
				default:""
			}
		},
		components: {
		},
		methods:{
			return_button(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
	.message-top{
		height: 81rpx;
		background-color: #FB7575;
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.return-card{
		order: 0;
		margin-left: 20rpx;
		margin-top: 20rpx;
		width: 20%;
	}
	.return-image{
		width: 51rpx;
		height: 51rpx;
	}
	.title-card{
		order: 1;
		margin-left: 60rpx;
		margin-top: 20rpx;
		width: 40%;
		text-align: center;
	}
	.ellipsis-card{
		order: 2;
		width: 20%;
		margin-left: 100rpx;
	}
	.message-ellipsis-image{
		width: 81rpx;
		height: 81rpx;
	}
</style>
