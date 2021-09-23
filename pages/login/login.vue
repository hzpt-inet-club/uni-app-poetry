<template>
	<view>
		<view class="login-card">
			</view>
			<!-- 登陆界面 -->
			<text class="login_welcome">你 好</text>
			
			<view class="horizontal_line"></view>
			<input  class="login_number"  v-model="number" placeholder="账号" placeholder-class="" />
			<input class="login_password"  v-model="password" placeholder="密码" type="password" />
			<button class="login_button" @click="login()" >马上登录</button>
			<button class="register_button" @click="open_register()">注册</button>
			<text class="forget_password" @click="open_change()">忘记密码？</text>
					
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:'',
				password:'', 
			}
		},
		methods: {
			login(){
				if(this.number == 'admin' && this.password == '888888'){
					uni.setStorageSync('show',true)
					uni.switchTab({
						url:'../myself/index?show=true'
					});
				}
			},
			open_change(){
				uni.navigateTo({
					url:'../change_password/change_password'
				})
			},
			open_register(){
				uni.navigateTo({
					url:'../register/register'
				})
			},
		}
	}
</script>

<style>
.login-card{
	  position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	   background-image: url(../../static/1.jpg);
	    z-index: -1; 
		background-size: 100% 100%;
}
.login_welcome{
			width: 100%;
			display: block;
			font-size: 140rpx;
			text-align: center;
			margin-top: 170rpx;
			color: #FFFFFF;
			font-family: 隶书;
}
.login_text{
	width: 100%;
	display: block;
	font-size: 70rpx;
	text-align: center;
	font-weight: bolder;
	margin-top: 70rpx;
	color: #FFFFFF;
	font-weight: bolder;
}
.login_number{
	border: #FFFFFF 1px solid;
	width: 500rpx;
	margin: 0 auto;
	font-size: 35rpx;
	border-radius: 65rpx;
	height: 100rpx;
	padding-left: 100rpx;
	margin-top: 80rpx;
	background-image: url(../../static/login_user.png) ;
	background-size: 8% 50%;
	background-repeat: no-repeat;
	background-position: 5% 50%;
	color: #FFFFFF;
	background-color: rgba(0,0,0,0.3);
}
.login_password{
	border: #FFFFFF 1px solid;
	width: 500rpx;
	margin: 0 auto;
	font-size: 35rpx;
	border-radius: 65rpx;
	height: 100rpx;
	padding-left: 100rpx;
	margin-top: 60rpx;
	background-image: url(../../static/lock.png);
	background-size: 10% 60%;
	background-repeat: no-repeat;
	background-position: 3% 50%;
	color: #FFFFFF;
	background-color: rgba(0,0,0,0.3);
}
.login_button{
	margin-top: 300rpx;
	width: 590rpx;
	margin: 0 auto; 
	font-size: 45rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	margin-top: 100rpx;
	background-color: #d44541;
	font-weight: bolder;
}
.register_button{
	width: 590rpx;
	margin: 0 auto; 
	font-size: 45rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	margin-top: 100rpx;
	background-color: #a08c8b;
	font-weight: bolder;
}
.forget_password{
	width: 100%;
	display: block;
	font-size: 30rpx;
	text-align: center;
	color: #FFFFFF;
	margin-top: 70rpx;
}
.horizontal_line{
	border: 2px solid #FFFFFF;
	width: 100rpx;
	margin: 0 auto;
	margin-top: 50rpx;
}
.openChange{
	background-color: #f3dfd6;
	width: 100%;
	height: 1000rpx;
	border-top-left-radius:45rpx;
	border-top-right-radius:45rpx;
}

</style>
