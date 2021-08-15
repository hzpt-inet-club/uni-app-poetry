<template>
	<view class="status_bar" :style="{backgroundColor: color}">
		<!-- 这里是状态栏 -->
	</view>
</template>

<script>
	export default {
		name:"status-bar",
		props:{
			color:{
				type:String,
				default:"#FB7575"
			}
		}
	}
</script>

<style>
	.status_bar {
		/* 定义高度 */
	    height: var(--status-bar-height);
		/* 定义宽度 */
	    width: 100%;
		/* 定义颜色 */
		/* background-color: #FB7575; */
		
	}
</style>
