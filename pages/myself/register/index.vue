<template>
	<view class="register_box" :style="{ 'height': register_box_height + 'px' }">
		<Background :url="backageUrl"></Background>
		<view class="register_card">
			
		</view>
	</view>
</template>

<script>
	import Background from '@/components/myself-card/background/Background.vue'
	export default {
		data() {
			return {
				backageUrl:"../../../static/myself_background.jpg",
				register_box_height:0
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
					that.register_box_height = res.windowHeight;
			    }
			});
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style>
	.register_box{
		display: flex;
		flex-wrap: nowrap;
		flex-direction: column-reverse;
		justify-content: flex-start;
	}
	.register_card{
		order: 1;
		height: 1200rpx;
		background-color: rgba(255, 255, 255, 0.83);
		/* 设置圆角*/
		border-radius: 50rpx 50rpx ;
	}
</style>
