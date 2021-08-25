<template>
	<view class="message-card">
		<communication :messages="messages"></communication>
		<view class="send_card">
			<view class="send_input">
				<uni-easyinput 
					@input="changeType" 
					v-model="value" 
					borderColor="#FB7575" 
					class="send_input_item" 
					:type="input_type" 
					focus	
					maxlength="-1"
					:clearable="false"
					placeholder="请输入内容" 
					style="width: 500rpx;"></uni-easyinput>
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
	import uniEasyinput from '@/components/uni-easyinput/uni-easyinput.vue'
	export default {
		data() {
			return {
				userName:'xiaoxunyao',
				value:'',
				input_type:'text',
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
			uniEasyinput,
			cmdAvatar
		},
		computed: {
			
		},
		onLoad() {
			this.changeBackgroundImage()
		},
		methods: {
			changeBackgroundImage(){
			    uni.setNavigationBarTitle({
					title: this.userName //这是修改后的导航栏文字
			    })   
			},
			changeType(){
				if(this.value.length > 20){
					this.input_type = "textarea"
				}else{
					this.input_type = "text"
				}
			}
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
		width: 75%;
	}
	.send_input_item{
		margin-top: 15rpx;
		margin-left: 70rpx;
		background-color: #fff;
		border-radius: 50rpx;
	}
	.send_button{
		order: 1;
		width: 15%;
		margin-left: 50rpx;
	}
	.send_button_item{
		margin-top: 15rpx;
		font-size: 25rpx;
		color: #fff;
		background-color: #FB7575;
		width: 100rpx;
	}
</style>
