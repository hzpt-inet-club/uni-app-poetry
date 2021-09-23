<template>
	<!-- 历史上的今天 -->
	<view class="today_card">
		<title-card title="历史上的今天"></title-card>
		<!-- 历史上的今天 内容的文本 -->
		<view class="today_content">
			{{publisher.content}}
		</view>
		<view class="today_notes">
			<view class="notes_test note_test">
				{{publisher.name}}
			</view>
			<view class="notes_test notes_left">
				{{publisher.time}}
			</view>
			<view class="notes_test notes_right">
				{{publisher.views}}
			</view>
		</view>
	</view>
</template>

<script>
	import titleCard from '@/components/index-card/title-card/title-card.vue'
	export default {
		name:"today-card",
		props:{
			publisher:{
				type:Object
			}
		},
		components: {
			titleCard
		},
	}
</script>

<style>
	/* 历史上的今天的 css 样式 */
	.today_card{
		width: 100%;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
	/* 内容的文本的 css 样式 */
	.today_content{
		order: 2;
		/* background-color: #4CD964; */
		margin-left: 30rpx;
		width: 100%;
		height: 100rpx;
	}
	.today_notes{
		order: 3;
		/* background-color: #f00; */
		margin-left: 30rpx;
		width: 100%;
		height: 50rpx;
		display: flex;
		flex-direction:"column";
		flex-wrap: nowrap;
		justify-content:flex-start;
	}
	.note_test{
		width: 8%;
	}
	.notes_test{
		font-size: 20rpx;
	}
	.notes_left{
		width: 80%;
		margin-left: 20rpx;
	}
	.notes_right{
		width: 8%;
		margin-right: 20rpx;
	}
</style>
