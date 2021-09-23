<template>
	<view class="title">
		<h1 style="color: #FB7575;">{{title}}</h1>
		<view class="register_text"></view>
	</view>
</template>

<script>
	export default {
		name:"RegisterTitle",
		data() {
			return {
			}
		},
		props:{
			title:{
				type:String,
				default:""
			}
		},
		components: {
		},
		computed: {
			
		},
		onReady(){
			
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style>
	.title{
		order: 0;
		height: 100rpx;
		margin-top: 5rpx;
		text-align: center;
	}
	.register_text{
		border-bottom: 1px solid #FB7575;
		width: 250rpx;
		margin: auto;
	}
</style>
