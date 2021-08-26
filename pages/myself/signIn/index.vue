<template>
	<view class="signIn_box" :style="{ 'height': signIn_box_height + 'px' }">
		<Background :url="backageUrl"></Background>
		
		<view class="signIn_card">
			<view class="signIn_title">
				<h1>你好</h1>
			</view>
		</view>
	
	</view>
</template>

<script>
	import Background from '@/components/myself-card/background/Background.vue'
	export default {
		data() {
			return {
				backageUrl:"../../../static/myself_background.jpg",
				signIn_box_height:0,
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
		},
		computed: {
			
		},
		onReady(){
			var that = this;
			uni.getSystemInfo({
			    success: function (res) {
					that.signIn_box_height = res.windowHeight;
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
	.signIn_box{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column-reverse;
		justify-content: flex-start;
	}
	.signIn_card{
		height: 1500rpx;
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column;
		justify-content: flex-start;
	}
	
	.signIn_title{
		text-align: center;
		color: #FFF;
		font-size: 60rpx;
	}
</style>
