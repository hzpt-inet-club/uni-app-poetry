<template>
	<view class="register_box" :style="{ 'height': register_box_height + 'px' }">
		<Background :url="backageUrl"></Background>
		<view class="register_card">
			<RegisterTitle title="注册"></RegisterTitle>
			<view class="register_form">
				<view class="register_items">
					<input class="register_item" maxlength="12" v-model="register_form.userName" />
				</view>
				<view class="register_items">
					<input class="register_item" maxlength="16" v-model="register_form.cipher" />
				</view>
				<view class="register_items">
					<input class="register_item" maxlength="40" v-model="register_form.address" />
				</view>
				<view class="register_items">
					<button class="register_button" @click="register()">{{register_form.title}}</button>
				</view>
			</view>
			<view class="other_card">
				<view class="order">
					<span class="line"></span>
					<span class="txt">其他注册方式</span>
					<span class="line"></span>
				</view>
				<view class="icon_items">
					<view class="icon_item">
						<image class="icon" src="../../../static/qq.png"></image>
					</view>
					<view class="icon_item">
						<image class="icon" src="../../../static/we_chat.png"></image>
					</view>
					<view class="icon_item">
						<image class="icon" src="../../../static/micro_blog.png"></image>
					</view>
				</view>
			</view>
		</view>
	
	</view>
</template>

<script>
	import Background from '@/components/myself-card/background/Background.vue'
	import RegisterTitle from '@/components/myself-card/register-title/RegisterTitle.vue'
	export default {
		data() {
			return {
				backageUrl:"../../../static/myself_background.jpg",
				register_box_height:0,
				register_form:{
					userName:'请输入用户名',
					cipher:'请输入密码',
					address:'请输入联系方式',
					title:'注册'
				}
			}
		},
		components: {
			Background,
			RegisterTitle,
		},
		computed: {
			
		},
		onReady(){
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
					that.register_box_height = res.windowHeight;
			    }
			});
		},
		onLoad() {
			
		},
		methods: {
			register(){
				console.log("123")
			}
		}
	}
</script>

<style>
	/* 最外层的盒子 */
	.register_box{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column-reverse;
		justify-content: flex-start;
	}
	/* 表单内容区 */
	.register_card{
		order: 1;
		height: 1200rpx;
		background-color: rgba(255, 255, 255, 0.85);
		/* 设置圆角*/
		border-radius: 50rpx 50rpx ;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.register_form{
		margin-top: 20rpx;
		height: 650rpx;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.register_items{
		height: 150rpx;
	}
	.register_item{
		margin: auto;
		width: 500rpx;
		height: 100rpx;
		border-radius: 50rpx 50rpx ;
		color: #DEDEDE;
		border: 2rpx solid #DEDEDE;
	}
	
	.register_button{
		margin: auto;
		width: 500rpx;
		height: 100rpx;
		border-radius: 50rpx 50rpx ;
		color: #FFFFFF;
		background-color: #DD524D;
	}
	
	/* other区 */
	.other_card{
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 200rpx;
	}
	 .order {
	   height: 60rpx;
	   line-height: 60rpx;
	   text-align: center;
	}
	 .order .line {
	   display: inline-block;
	   width: 150rpx;
	   border-top: 1rpx solid #000 ;
	}
	.order .txt {
		color: #686868;
	   	vertical-align: -8%;
	}
	
	.icon_items{
		margin: auto;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: flex-start;
		height: 100rpx;
	}
	.icon_item{
		
		margin-left: 50rpx;
		width: 85rpx;
	}
	.icon{
		width: 81rpx;
		height: 81rpx;
	}
</style>
