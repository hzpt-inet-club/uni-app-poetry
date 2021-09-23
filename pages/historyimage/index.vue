<template>
	<view>
		<view class="uni-padding-wrap" style="margin-top: 30rpx;">
			<background style="height: 380rpx;"></background>
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper autoplay="true" class="swiper" circular="true">
						<swiper-item style="height: 300rpx;width: 100%;margin: 0 auto;" v-for="(item,index) in imgList"
							:key='item.id'>
							<image :src="item.urll"
							@click="jumpToShow()"
								style="height: 300rpx;width: 60%;border-radius: 15rpx;margin-left: 20%;"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

			<view style="margin-top: 50rpx;">
				<image src="../../static/images/title.png" style="width: 10rpx;height: 40rpx;margin-left: 40rpx;"></image>
				<text style="font-size: 45rpx;margin-left: 10rpx;font-weight: bold;">专栏名称</text>
			</view>
			
			<view class="picture_but" >
				<image src="../../static/images/oldPhotographs-L.png" style="width: 300rpx;height: 370rpx;"></image>
				<view style="width: 400rpx;">
					<image src="../../static/images/oldPhotographs-R1.png" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;"></image>
					<image src="../../static/images/oldPhotographs-R2.png" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;"></image>
					<image src="../../static/images/oldPhotographs-R3.png" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
					<image src="../../static/images/oldPhotographs-R4.png" style="width: 180rpx;height: 170rpx;margin-left: 20rpx;margin-top: 20rpx;"></image>
				</view>
			</view>
			<view style="height: 7rpx;width: 100%;background-color:#f2f0f1;"></view>	
			
			<view style="padding-top: 40rpx;display: flex;flex-direction: row;flex-wrap: wrap;">
				<view  style="width: 315rpx;padding: 30rpx;display: flex;flex-direction: column;" v-for="item in lis" :key="item.index">
				<image @click="jumpToShow()" :src="item.img" style="width: 300rpx;height: 200rpx;border-radius: 25rpx;" ></image>
				<text>{{item.name}}</text>
				
				</view>
				
			</view>
	</view>
</template>

<script>
	import Background from '@/components/myself-card/background/Background.vue'
	export default {
		data() {
			return {
				imgList: [{
						id: 1,
						urll: 'http://www.zjds.org.cn/u/cms/www/202104/20093043z0ht.jpg'
					},
					{
						id: 2,
						urll: 'http://www.zjds.org.cn/u/cms/www/202104/20093044gp20.jpg'
					},
					{
						id: 3,
						urll: 'http://www.zjds.org.cn/u/cms/www/202104/20093045jzl0.jpg'
					}
				],
				lis:[{
						name:'周恩来在浙图集',
						img:'http://www.zjds.org.cn/u/cms/www/202104/20093043z0ht.jpg'
				},
				{
						name:'毛泽东在浙江图集',
						img:'http://www.zjds.org.cn/u/cms/www/202104/200928432hhh.jpg'
				},
				{
						name:'邓小平在浙江图集',
						img:'http://www.zjds.org.cn/u/cms/www/202104/20092135orly.jpg'
				},
				{
						name:'浙江改革开放图集',
						img:'http://www.zjds.org.cn/u/cms/www/202104/20091850czd3.jpg'
				},
				{
						name:'浙江解放70周年图集',
						img:'http://www.zjds.org.cn/u/cms/www/202104/20092310c8u0.jpg'
				},
				]
			}
		},
		components: {
			Background
		},
		methods: {
			jumpToShow(){
				uni.navigateTo({
					url:'../imgshow/index'
				})
			}
		}
	}
</script>

<style>
.picture_but{
		padding: 20rpx;
		display: flex;
		flex-direction: row;
	}
</style>
