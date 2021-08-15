<template>
	<view>
		<!-- 状态栏 -->
		<status-bar></status-bar>
		<!-- 顶部栏 -->
		<top-bar :imageSrc="image_src" :searchValue="searchValue"></top-bar>
		<!-- 内容区 -->
		<view class="content_car">
			<!-- 滚动的内容区 -->
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
			@scroll="scroll">
				<!-- 推荐的内容区 -->
				<recommend-card :imgList="imgList"></recommend-card>
				<!-- 历史上的今天 -->
				<today-card :publisher="publisher"></today-card>
				<!-- 灰色线条 -->
				<grey-line></grey-line>
				<!-- 积分榜 -->
				<integral-card :integral_users="integral_users"></integral-card>
				<!-- 灰色线条 -->
				<grey-line></grey-line>
				<!-- 热点咨询 -->
				<info-card title="热点资讯" :contents="contents"></info-card>
				<!-- 视频 -->
				<video-card title="视频" :video="video"></video-card>
				<!-- 实时 -->
				<info-card title="实时" :contents="contents"></info-card>
				<!-- 灰色线条 -->
				<grey-line></grey-line>
				<!-- 附近 -->
				<info-card title="附近" :contents="contents"></info-card>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import store from '@/store/index.js'
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	import statusBar from "@/components/status-bar/status-bar.vue"
	import topBar from "@/components/index-card/top-bar/top-bar.vue"
	import recommendCard from '@/components/index-card/recommend-card/recommend-card.vue'
	import sidebar from '@/components/index-card/sidebar/sidebar.vue'
	import todayCard from '@/components/index-card/today-card/today-card.vue'
	import greyLine from '@/components/index-card/grey-line/grey-line.vue'
	import integralCard from '@/components/index-card/integral-card/integral-card.vue'
	import contentCard from '@/components/index-card/content-card/content-car.vue'
	import videoCard from '@/components/index-card/video-card/video-card.vue'
	import infoCard from '@/components/index-card/info-card/info-card.vue'
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				searchValue: '',
				image_src:"https://avatars.githubusercontent.com/u/43719490?v=4",
				imgList: [
					{
				        url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
				        id: 1
				    },
					{
				        url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
				        id: 2
				    },
					{
				        url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
				        id: 3
					},
					{
				        url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
				        id: 4
				    }
				],
				publisher:{
					name:"晓寻遥",
					time:"2021-08-05 12:53",
					views:100,
					content:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
				},
				integral_users:[
					{
						image_src:'https://avatars.githubusercontent.com/u/43719490?v=4',
						name:'晓寻遥',
						designation:'程序员',
						grade:'10'
					},
					{
						image_src:'https://avatars.githubusercontent.com/u/43719490?v=4',
						name:'晓寻遥',
						designation:'程序员',
						grade:'10'
					},
					{
						image_src:'https://avatars.githubusercontent.com/u/43719490?v=4',
						name:'晓寻遥',
						designation:'程序员',
						grade:'10'
					}
				],
				contents:[
					{
						name:"晓寻遥",
						time:"2021-08-05 12:53",
						views:100,
						content:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"	
					},
					{
						name:"晓寻遥",
						time:"2021-08-05 12:53",
						views:100,
						content:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"	
					},
					{
						name:"晓寻遥",
						time:"2021-08-05 12:53",
						views:100,
						content:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"	
					},
					{
						name:"晓寻遥",
						time:"2021-08-05 12:53",
						views:100,
						content:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题"	
					}
				],
				video:[
					{
						image_src:'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
						video_title:'标题标题标题标题标题标题标题'
					},
					{
						image_src:'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
						video_title:'标题标题标题标题标题标题标题'
					}
				]
			}
		},
		components: {
			cmdAvatar,
			statusBar,
			topBar,
			sidebar,
			todayCard,
			recommendCard,
			integralCard,
			contentCard,
			infoCard,
			videoCard,
			greyLine
		},
		computed: {
		    
		},
		onLoad() {
			
		},
		methods: {
			upper: function(e) {
				console.log("最上面了")
			},
			lower: function(e) {
				console.log("最下面了")
			},
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>
	/* 内容卡片的 css 样式 */
	.content_car{
		/* 颜色 */
		background-color: #FFF;
		/* 宽度 */
		width: 100%;
		/* 与上边有一个20rpx的容差 */
		margin-top: -30rpx;
		/* 设置圆角*/
		border-radius: 25rpx 25rpx ;
	}
	.scroll-Y {
		height: 1350rpx;
	}
</style>
