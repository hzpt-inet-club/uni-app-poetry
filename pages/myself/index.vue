<template>
	<view class="">
		<br>
		<button @click="register()"> 注册 </button>
		
		<br>
		<button @click="signIn()"> 登陆 </button>
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
			register(){
				uni.navigateTo({
					url:'/pages/myself/register/index',
					success: function(res) {
					    // 通过eventChannel向被打开页面传送数据
					    res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
					},
					fail(res) {
						console.log(res)
					}
				})
			},
			signIn(){
				console.log("2")
			}
		}
	}
</script>

<style>
	
</style>
