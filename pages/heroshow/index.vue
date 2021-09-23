<template>
	<view style="margin: 0 auto;width: 90%;">
		<text style="width: 100%;font-size: 60rpx;text-align: center;display: block;margin-top: 30rpx;">俞秀松</text>
		<!-- <image src="../../static/stop.png" v-show="stateNow" @click="startshow()"  style="width: 70rpx;height: 70rpx;position: absolute;right: 40rpx;margin-top: -60rpx;"></image>
		<image src="../../static/play.png" v-show="!stateNow" @click="stopShow()" style="width: 70rpx;height: 70rpx;position: absolute;right: 40rpx;margin-top: -60rpx;"></image> -->
		<view style="width: 100%;height: 8rpx;background-color: #bc1a32;margin-top: 20rpx;"></view>
		<view style="padding: 10rpx;">
			
		</view>
		<MDParserHighlight :resource="content"></MDParserHighlight>
		<view class="page-section page-section-gap"  style="position: absolute;right: -500rpx;bottom: 20rpx;">
				<audio  controls style="text-align: left" :src="current.src"  :action="audioAction" ></audio>
		
		</view>
	</view>
	 </template>

<script>
	import MDParserHighlight from '@/components/cmder-MDParserHighlight/index.vue'
	export default {
		data() { 
			return {
				content:'1899年，俞秀松出生于诸暨市次坞镇溪埭村。1916年，17岁的俞秀松考入浙江省立第一师范学校。1919年，“五四”运动爆发，俞秀松积极响应，参与发动3000名学生声援北京、上海学生的爱国反帝大会，成为杭州爱国学生运动领袖之一。在校期间，俞秀松还参与\n\n　　创办进步刊物《浙江新潮》并任主编。\n\n　　1920年8月，中国共产党早期组织——上海共产主义小组成立，俞秀松是发起人之一。同年，俞秀松受陈独秀委托，筹建中国最早的青年团组织——上海社会主义青年团。1921年3月，上海成立了中国社会主义青年团临时中央执行委员会，俞秀松担任临时团中央书记。\n\n　　1922年11月后，俞秀松先后经历了国共合作、留学苏联、新疆统战等。1937年底，俞秀松遭诬陷被捕入狱。1938年6月转押苏联，后被冤杀。1962年5月，为表彰俞秀松烈士的革命功绩，党中央为俞秀松家属颁发了毛泽东主席签署的《革命牺牲工作人员家属光荣纪念证》。1996年，俄联邦军事检察院为其平反。这段尘封半个世纪的冤案，终于得以昭雪。',
				  current: {
					  
				                poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				                name: '致爱丽丝',
				                author: '暂无',
				                src: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3',
				            },
				            audioAction: {
				                method: 'pause'
				            },
							stateNow:false
			}
		},
		components:{
		    MDParserHighlight
		},
		methods: {
			startshow(){
				const innerAudioContext = uni.createInnerAudioContext();
				Audio.play()
				this.stateNow = !this.stateNow
			},
			stopShow(){
				Audio.pause()
				this.stateNow = !this.stateNow
			}
		}
	}
</script>

<style>

</style>
