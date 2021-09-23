<template>
	<view>
		<view class="change_background"></view>
		<view class="change_form" >
			<text class="success_hint">修改密码成功</text>
			<button class="change_submit" @click="submit()" >返回登录</button> 
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
					url:'../login/index'
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
	height: 500rpx;
	overflow: hidden;
	background-color: rgba(240,211,215,0.9);
	margin-top: 1200rpx;
	border-top-left-radius:45rpx;
	border-top-right-radius:45rpx;
	
}
.change_submit{
	width: 540rpx;
	margin: 0 auto; 
	font-size: 45rpx;
	border-radius: 65rpx;
	color: #FFFFFF;
	background-color: #d44541;
	margin-top: 70rpx;
	font-weight: bolder;
	
}
.success_hint{
	width: 100%;
	display: block;
	font-size: 60rpx;
	margin-top: 70rpx;
	font-weight: bolder;
	text-align: center; 
	color: #bb2f30;
}
</style>
