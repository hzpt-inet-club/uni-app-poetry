<template>
	<view class="message-card">
		<status-bar></status-bar>
		<message-top :userName="userName"></message-top>
		<communication :messages="messages"></communication>
		<view class="send_card">
			<view class="send_input">
				<input class="send_input_item" />
			</view>
			<view class="send_button">
				<button class="send_button_item"> 发送 </button>
			</view>
		</view>
	</view>
</template>

<script>
	import statusBar from '@/components/status-bar/status-bar.vue'
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	import communication from '@/components/message-card/communication/communication.vue'
	import messageTop from '@/components/message-card/message-top/message-top.vue'
	export default {
		data() {
			return {
				userName:'xiaoxunyao',
				messages:[
					{
						id:'1',
						my:true,
						avatat_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						text_status:false,
						text:"我发的信息"
					},
					{
						id:'2',
						my:false,
						avatat_url:"https://avatars.githubusercontent.com/u/67898563?v=4",
						text_status:false,
						text:"他发的信息"	
					},
					{
						id:'2',
						my:false,
						avatat_url:"https://avatars.githubusercontent.com/u/67898563?v=4",
						text_status:false,
						text:"他发的信息"	
					},
					{
						id:'2',
						my:false,
						avatat_url:"https://avatars.githubusercontent.com/u/67898563?v=4",
						text_status:false,
						text:"他发的信息"	
					},
					{
						id:'2',
						my:false,
						avatat_url:"https://avatars.githubusercontent.com/u/67898563?v=4",
						text_status:false,
						text:"他发的信息"	
					},
					{
						id:'2',
						my:false,
						avatat_url:"https://avatars.githubusercontent.com/u/67898563?v=4",
						text_status:true,
						text:"https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg"	
					},
					{
						id:'1',
						my:true,
						avatat_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						text_status:false,
						text:"我发的信息"
					},
					{
						id:'1',
						my:true,
						avatat_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						text_status:false,
						text:"我发的信息"
					},
					{
						id:'1',
						my:true,
						avatat_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						text_status:true,
						text:"https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg"
					},
					{
						id:'1',
						my:true,
						avatat_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						text_status:false,
						text:"我发的信息"
					},
				]
			}
		},
		components: {
			statusBar,
			messageTop,
			communication,
			cmdAvatar
		},
		computed: {
			
		},
		onLoad() {
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.send_card{
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.send_input{
		order: 0;
		width: 80%;
	}
	.send_input_item{
		margin-top: 15rpx;
		margin-left: 50rpx;
		background-color: #fff;
		height: 60rpx;
		width: 500rpx;
		border-radius: 50rpx;
		border: #FB7575 solid 1rpx;
	}
	.send_button{
		order: 1;
		width: 15%;
	}
	.send_button_item{
		margin-top: 15rpx;
		font-size: 25rpx;
		color: #fff;
		background-color: #FB7575;
		width: 100rpx;
	}
</style>
