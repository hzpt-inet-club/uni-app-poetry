<template>
	<view>
		<!-- 状态栏 -->
		<!-- <status-bar></status-bar> -->
		<!-- 信息栏 -->
		<!-- <info-top-bar></info-top-bar> -->
		<view class="tab-control">
			<liuyuno-tabs :tabData="items" @tabClick='tabClick'/>
			<chat-content-card :users="users"></chat-content-card>
		</view>
	</view>
</template>

<script>
	import statusBar from "@/components/status-bar/status-bar.vue"
	import infoTopBar from '@/components/chat-card/info-top-bar/info-top-bar.vue'
	import liuyunoTabs from "@/components/liuyuno-tabs/liuyuno-tabs.vue"
	import cmdAvatar from "@/components/cmd-avatar/cmd-avatar.vue"
	import chatContentCard from '@/components/chat-card/chat-content-card/chat-content-card.vue'
	export default {
		data() {
			return {
				items:[
					"聊天列表","系统通知"
				],
				users:[]
			}
		},
		components: {
			statusBar,
			infoTopBar,
			cmdAvatar,
			chatContentCard,
			liuyunoTabs
		},
		computed: {
			
		},
		onLoad() {
			this.users = [
					{
						id:'1',
						image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						title_text:"XXX 赞了您的文章",
						time_text:"2021-8-8",
						content_text:"XXXX"
					},
					{
						id:'2',
						image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						title_text:"XXX 赞了您的文章",
						time_text:"2021-8-8",
						content_text:"XXXX"
					},
					{
						id:'3',
						image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
						title_text:"XXX 赞了您的文章",
						time_text:"2021-8-8",
						content_text:"XXXX"
					}
				]
		},
		methods: {
			tabClick(e){
				if(e === 0){
					this.users = 
					[
						{
							id:'1',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章",
							time_text:"2021-8-8",
							content_text:"XXXX"
						},
						{
							id:'2',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章",
							time_text:"2021-8-8",
							content_text:"XXXX"
						},
						{
							id:'3',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章",
							time_text:"2021-8-8",
							content_text:"XXXX"
						}
					]
				}else{
					this.users =
					[
						{
							id:'1',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章1",
							time_text:"2021-8-8",
							content_text:"XXXX"
						},
						{
							id:'2',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章1",
							time_text:"2021-8-8",
							content_text:"XXXX"
						},
						{
							id:'3',
							image_url:"https://avatars.githubusercontent.com/u/43719490?v=4",
							title_text:"XXX 赞了您的文章1",
							time_text:"2021-8-8",
							content_text:"XXXX"
						}
					]
				}
			}
		}
	}
</script>

<style>
	.tab-control{
		width: 100%;
		display: flex;
		flex-direction:"column";
		flex-wrap: wrap;
		justify-content:flex-start;
	}
</style>
