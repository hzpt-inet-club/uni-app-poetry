<template>
	<view>
		<view class="change_background"></view>
		<view class="change_form" >
			<text class="change_welcome">修改密码</text>
			<view class="change_horizontal"></view>
			 <input class="change_password" placeholder="新密码"  />
			<input class="change_email" placeholder="输入联系方式" />
			<view style="display: flex;width: 540rpx;margin: 0 auto;margin-top: 100rpx;">
			<input class="verification" placeholder="输入验证码" />
			<button class="change_verification">获取验证码</button>
			</view>
			<button class="change_submit" @click="submit()">提交</button> 
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			submit(){
				uni.navigateTo({
					url:'../change_success/index'
				})
			}
		}
	}
</script>

<style>
.change_background{
	position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	 background-image: url(../../static/1.jpg);
	  z-index: -1;
	background-size: 100% 100%;
	
}
 .change_form{
	width: 100%;
	height: 1300rpx;
	overflow: hidden;
	background-color: rgba(240,211,215,0.9);
	margin-top: 400rpx;
	border-top-left-radius:45rpx;
	border-top-right-radius:45rpx;
	
}
.change_welcome{
	width: 100%;
	display: block;
	font-size: 60rpx;
	margin-top: 40rpx;
	font-weight: bolder;
	text-align: center; 
	color: #bb2f30;
}
.change_horizontal{
border: 2px solid #bb2f30;
	width: 80rpx;
	margin: 0 auto;
	margin-top: 50rpx;	
}
.change_submit{
	width: 540rpx;
	margin: 0 auto; 
	font-size: 45rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	background-color: #d44541;
	margin-top: 100rpx;
	font-weight: bolder;
	
}
.change_password{
	border: #c8c1c8 2px solid;
	width: 450rpx;
	margin: 0 auto;
	font-size: 35rpx;
	border-radius: 65rpx;
	height: 100rpx;
	padding-left: 100rpx;
	margin-top: 80rpx;
	background-image: url(../../static/register_unlock.png) ;
	background-size: 12% 50%;
	background-repeat: no-repeat;
	background-position: 5% 50%;
}
.change_email{
	border: #c8c1c8 2px solid;
	width: 450rpx;
	margin: 0 auto;
	font-size: 35rpx;
	border-radius: 65rpx;
	height: 100rpx;
	padding-left: 100rpx;
	margin-top: 80rpx;
	background-image: url(../../static/register_email.png) ;
	background-size: 10% 50%;
	background-repeat: no-repeat;
	background-position: 5% 50%;
}
.verification{
	border: #c8c1c8 2px solid;
	width: 280rpx;
	font-size: 35rpx;
	padding-left: 20rpx;
	border-radius: 65rpx;
	height: 100rpx;
}
.change_verification{
	margin-left: 20rpx;
	width: 210rpx;
	font-size: 30rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	line-height: 100rpx;
	background-color: #d44541;
	
}
</style>
