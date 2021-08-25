<template>
	<view class="box">
		
		<image src="../../../static/myself_background.jpg" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		components: {
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
	.box{
		width: 100%;
		height: 100%;
		image{
			z-index:-1; 
			width:100%; 
			height:100%; 
			position: fixed; 
			top:0; 
		}
	}
</style>
