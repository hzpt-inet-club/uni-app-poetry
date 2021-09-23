<template>
	<view style="width: 90%;margin: 0 auto;">
		
		<text style="text-align: center;font-size: 55rpx;font-weight: bolder;display: block;margin-top: 20rpx;">{{title}}</text>
		<MDParserHighlight :resource="content"></MDParserHighlight>
	</view>
</template>

<script>
	import MDParserHighlight from '@/components/cmder-MDParserHighlight/index.vue'
	export default {
		data() {
			return {
				title:'',
				content:''
			}
		},
		components:{
		    MDParserHighlight
		},
		onLoad(options) {
			this.title = options.title
			 this.content = options.content
			// this.show()
		},
		methods: {
			preview(src, e) {
			      // do something
			},
			navigate(href, e) {
			      // do something
			},
			show(){
				var that =this
				uni.request({
					url:"https://www.boyucode.com/cloud/text.md",
					success: (res) => {
					        console.log(res.data);
					        that.content = res.data
					}
				})
			}
		}
	}
</script>

<style>

</style>
