<template>
	<view class="recommend_card">
		<view class="recommend_text">
			<h2>推荐</h2>
		</view>
		<view class="recommend_carousel">
			<carousel :img-list="imgList" url-key="url"/>
		</view>
	</view>
</template>

<script>
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		name:"recommend-card",
		components: {
			carousel
		},
		props:{
			imgList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods:{
			
		}
	}
</script>

<style>
	/* 滚动内容推荐区域的 css 样式 */
	.recommend_card{
		margin-top: 5rpx;
		width: 100%;
	}
	/* 滚动内容推荐区域文本的 css 样式 */
	.recommend_text{
		text-align: center;
		width: 100%;
	}
</style>
