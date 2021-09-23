<template>
	<view>
		<view class="register_background"></view>
		<view class="register_form" >
			<text class="register_welcome">注册</text>
			<view class="register_horizontal"></view>
			<input class="register_number" placeholder="用户名" />
			<input class="register_password" placeholder="密码" />
			<input class="register_email" placeholder="联系方式" />
			<button class="register_submit" @click="submit( )" >注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:'',
				password:'',
				email:''
			}
		},
		methods: {
			submit(){
				uni.navigateTo({
					url:'../login/login'
				})
			}
		}
	}
</script>

<style>
.register_background{
	position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	 background-image: url(../../static/1.jpg);
	  z-index: -1;
	background-size: 100% 100%;
	
}
.register_form{
	width: 100%;
	height: 1300rpx;
	overflow: hidden;
	background-color: rgba(240,211,215,0.9);
	margin-top: 400rpx;
	border-top-left-radius:45rpx;
	border-top-right-radius:45rpx;
	
}
.register_welcome{
	width: 100%;
	display: block;
	font-size: 60rpx;
	margin-top: 40rpx;
	font-weight: bolder;
	text-align: center; 
	color: #bb2f30;
}
.register_horizontal{
border: 2px solid #bb2f30;
	width: 80rpx;
	margin: 0 auto;
	margin-top: 50rpx;	
}
.register_submit{
	width: 540rpx;
	margin: 0 auto; 
	font-size: 45rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	background-color: #d44541;
	margin-top: 100rpx;
	font-weight: bolder;
	
}
.register_number{
	border: #c8c1c8 2px solid;
	width: 450rpx;
	margin: 0 auto;
	font-size: 35rpx;
	border-radius: 65rpx;
	height: 100rpx;
	padding-left: 100rpx;
	margin-top: 80rpx;
	background-image: url(../../static/register_user.png) ;
	background-size: 10% 50%;
	background-repeat: no-repeat;
	background-position: 5% 50%;
	
}
.register_password{
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
.register_email{
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
</style>
