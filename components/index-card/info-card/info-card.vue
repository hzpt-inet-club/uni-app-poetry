<template>
	<view class="info-card">
		<title-card :title="title"></title-card>
		<content-card v-for="(item,index) in contents" :contents="item"></content-card>
	</view>
</template>

<script>
	import titleCard from '@/components/index-card/title-card/title-card.vue'
	import contentCard from '@/components/index-card/content-card/content-car.vue'
	export default {
		name:"info-card",
		props:{
			title:{
				type:String,
				default:""
			},
			contents:{
				type:Array,
				default:[]
			}
		},
		components: {
			titleCard,
			contentCard
		},
	}
</script>

<style>
	.info-card{
		width: 100%;
		/* flex布局 */
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
</style>
