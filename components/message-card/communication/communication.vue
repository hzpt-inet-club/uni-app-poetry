<template>
	<view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
		@scroll="scroll">
			<view v-for="(i,index) in messages">
				<view v-if="i.my === false" class="message-item message-item-left">
					<view class="message-avatar-left">
						<cmd-avatar :src="i.avatat_url"></cmd-avatar>
					</view>
					<view class="message-text-left">
						<view class="triangle-left"></view>
						<span v-if="i.text_status === false" class="rotationtiao-left">{{i.text}}</span>
						<image v-else class="rotationtiao-image-left" :src="i.text"></image>
					</view>
				</view>
				<view v-else class="message-item message-item-right">
					<view class="message-text-right">
						<view class="triangle-right"></view>
						<span v-if="i.text_status === false" class="rotationtiao-right">{{i.text}}</span>
						<image v-else class="rotationtiao-image-right" :src="i.text"></image>
					</view>
					<view class="message-avatar-right">
						<cmd-avatar :src="i.avatat_url"></cmd-avatar>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import cmdAvatar from '@/components/cmd-avatar/cmd-avatar.vue'
	export default {
		name:"communication",
		props: {
			messages: {
				type: Array,
				default: []
			}
		},
		data(){
			return{
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
			}
		},
		components: {
			cmdAvatar,
		},
		methods:{
			upper: function(e) {
				console.log("最上面了")
			},
			lower: function(e) {
				console.log("最下面了")
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>
	.message-item{
		margin-top: 10rpx;
		margin-left: 10rpx;
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.message-item-left{
		justify-content:flex-start
	}
	.message-item-right{
		justify-content:flex-end
	}
	.message-avatar-left{
		order: 0;
		width: 100rpx;
		height: 100rpx;
	}
	.message-text-left{
		order: 1;
		margin-left: 10rpx;
		margin-top: 15rpx;
		width: 600rpx;
		float: left;
		position: relative;
		padding: 0 0 0 5px;
	}
	.triangle-left{
		width:0;
		height:0;
		border-top:5px solid transparent;
		border-bottom:5px solid transparent;
		border-right:5px solid #fff;
		position: absolute;
		left: 0;
		top: 6px;
	}
	.rotationtiao-left{
		float: left;
		padding: 5px 10px;
		background-color: #fff;
		font-size: 14px;
		border-radius: 2px;
	}
	.rotationtiao-image-left{
		float: left;
		padding: 5px 10px;
		background-color: #fff;
		width: 80%;
		border-radius: 2px;
	}
	
	.message-avatar-right{
		order: 1;
		width: 100rpx;
		height: 100rpx;
	}
	.message-text-right{
		order: 0;
		margin-right: 10rpx;
		margin-top: 15rpx;
		width: 600rpx;
		float: left;
		position: relative;
		padding: 0 5px 0 0;
	}
	.triangle-right{
		width:0;
		height:0;
		border-top:5px solid transparent;
		border-bottom:5px solid transparent;
		border-left:5px solid #98E165;
		position: absolute;
		right: 0;
		top: 6px;
	}
	.rotationtiao-right{
		float: right;
		padding: 5px 10px;
		background-color: #98E165;
		font-size: 14px;
		border-radius: 2px;
	}
	.rotationtiao-image-right{
		float: right;
		padding: 5px 10px;
		background-color: #98E165;
		width: 80%;
		border-radius: 2px;
	}
	.scroll-Y {
		height: 1400rpx;
		background-color: #DEDEDE;
	}
</style>
