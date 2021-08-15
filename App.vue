<script>
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap(() => {
				uni.navigateTo({
					url: "/pages/push/index",
					animationDuration: 150
				})		
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
