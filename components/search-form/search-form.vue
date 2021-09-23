<template>
	<view class="search d2">
		<form>
		    <input type="text" placeholder="搜索从这里开始...">
		    <button type="submit">搜索</button>
		</form>
	</view>
</template>

<script>
	export default {
		name: 'search-form',
	}
</script>

<style>
	
	* {box-sizing: border-box;}
	body{margin: 0;}
	div.search {padding: 30rpx 0}
	form {
	  position: relative;
	  width: 300rpx;
	  margin: 0 auto;
	}
	.d1 {background: #A3D0C3;}
	.d1 input {
	  width: 100%;
	  height: 42rpx;
	  padding-left: 10rpx;
	  border: 2rpx solid #7BA7AB;
	  border-radius: 5rpx;
	  outline: none;
	  background: #F9F0DA;
	  color: #9E9C9C;
	}
	.d1 button {
	  position: absolute; 
	  top: 0;
	  right: 0rpx;
	  width: 42rpx;
	  height: 42rpx;
	  border: none;
	  background: #7BA7AB;
	  border-radius: 0 5rpx 5rpx 0;
	  cursor: pointer;
	}
	.d1 button:before {
	  content: "\f002";
	  font-family: FontAwesome;
	  font-size: 16rpx;
	  color: #F9F0DA;
	}
	.d2 {background: #DABB52;}
	.d2 input, .d2 button {
	  border: none;
	  outline: none;
	  border-radius: 3rpx;
	}
	.d2 input {
	  width: 100%;
	  height: 42px;
	  background: #F9F0DA;
	  padding-left: 15px;
	}
	.d2 button {
	  height: 26rpx;
	  width: 26rpx;
	  position: absolute;
	  top: 8rpx;
	  right: 8px;
	  background: #F15B42;
	  cursor: pointer;
	}
	.d2 button:before {
	  content: "\f105";
	  font-family: FontAwesome;
	  color: #F9F0DA;
	  font-size: 20rpx;
	  font-weight: bold;
	}
	.d3 {background: #F9F0DA;}
	.d3 form {
	  background: #A3D0C3;
	}
	.d3 input, .d3 button {
	  border: none;
	  outline: none;
	  background: transparent;
	}
	.d3 input {
	  width: 100%;
	  height: 42rpx;
	  padding-left: 15rpx;
	}
	.d3 button {
	  height: 42rpx;
	  width: 42px;
	  position: absolute;
	  top: 0;
	  right: 0;
	  cursor: pointer;
	}
	.d3 button:before {
	  content: "\f002";
	  font-family: FontAwesome;
	  font-size: 16rpx;
	  color: #F9F0DA;
	}
	.d4 {background: #F15B42;}
	.d4 form {
	  background: #F9F0DA;
	  border-bottom: 4rpx solid #be290e;
	}
	.d4 input, .d4 button {
	  border: none;
	  outline: none;
	  background: transparent;
	}
	.d4 input {
	  width: 100%;
	  height: 42rpx;
	  padding-left: 15rpx;
	}
	.d4 button {
	  height: 42rpx;
	  width: 42rpx;
	  position: absolute;
	  top: 0;
	  right: 0;
	  cursor: pointer;
	}
	.d4 button:before {
	  content: "\f178";
	  font-family: FontAwesome;
	  font-size: 20rpx;
	  color: #be290e;
	}
	.d5 {background: #683B4D;}
	.d5 input, .d5 button {
	  outline: none;
	  background: transparent;
	}
	.d5 input {
	  width: 100%;
	  height: 42rpx;
	  padding-left: 15rpx;
	  border: 3px solid #F9F0DA;
	}
	.d5 button {
	  border: none;
	  height: 42rpx;
	  width: 42rpx;
	  position: absolute;
	  top: 0;
	  right: 0;
	  cursor: pointer;
	}
	.d5 button:before {
	  content: "\f002";
	  font-family: FontAwesome;
	  font-size: 16rpx;
	  color: #F9F0DA;
	}
	.d5 input:focus {
	  border-color: #311c24
	}
	.d6 {background: #B46381;}
	.d6 form {
	  height: 42rpx;
	}
	.d6 input {
	  height: 100%;
	  width: 0;
	  padding: 0 42rpx 0 15rpx;
	  border: none;
	  border-bottom: 2rpx solid transparent;
	  outline: none;
	  background: transparent;
	  transition: .4s cubic-bezier(0, 0.8, 0, 1);
	  position: absolute;
	  top: 0;
	  right: 0;
	  z-index: 2;
	}
	.d6 input:focus {
	  width: 300rpx;
	  z-index: 1;
	  border-bottom: 2rpx solid #F9F0DA;
	}
	.d6 button {
	  background: #683B4D;
	  border: none;
	  height: 42rpx;
	  width: 42rpx;
	  position: absolute;
	  top: 0;
	  right: 0;
	  cursor: pointer;
	}
	.d6 button:before {
	  content: "\f002";
	  font-family: FontAwesome;
	  font-size: 16rpx;
	  color: #F9F0DA;
	}
	.d7 {background: #7BA7AB;}
	.d7:after {content:""; clear:both; display:table}
	.d7 form {
	  width: auto;
	  float: right;
	  margin-right: 30rpx;
	}
	.d7 input {
	  width: 250rpx;
	  height: 42rpx;
	  padding-left: 15rpx;
	  border-radius: 42rpx;
	  border: 2rpx solid #324b4e;
	  background: #F9F0DA;
	  outline: none;
	  position: relative;
	  transition: .3s linear;
	}
	.d7 input:focus {
	  width: 300rpx;
	}
	.d7 button {
	  width: 42rpx;
	  height: 42rpx;
	  background: none;
	  border: none;
	  position: absolute;
	  top: -2rpx;
	  right: 0;
	}
	.d7 button:before{
	  content: "\f002";
	  font-family: FontAwesome;
	  color: #324b4e;
	}
</style>
