<template>
	<view class="">
		<view v-if="!ifLogin">
		<br>
		<button @click="register()"> 注册 </button>
		<br>
		<button @click="signIn()"> 登陆 </button>
		</view>
		
		<view v-if="ifLogin">
		<view class="myself_top" >
			<image :src="img_src" class="round_icon"></image>
			<view style="margin-left: 70rpx;height: 170rpx;margin-top: 40rpx;">
			<text class="userName">用户名</text>
			<text class=" integration">20</text>
			</view>
		</view>
		<view class="myself_middle">
			<view class="number">
				<text class="number_name">收藏</text>
				<text class="number_quantity">10</text>
			</view>
			<view class="number">
				<text class="number_name">赞过</text>
				<text class="number_quantity">15</text>
			</view>
			<view class="number">
				<text class="number_name">关注我的</text>
				<text class="number_quantity">2</text>
			</view>
			<view class="number">
				<text class="number_name">我关注的</text>
				<text class="number_quantity">5</text>
			</view>
		</view>
		<view class="myself_bottom">
			<text class="more_mysel">更多</text>
			<view>
				
				<view class="panel" v-for="(item, index) in list" :key="item.id">
					
						<text class="panel-text">{{item.name}}</text>
						<uni-icons type="arrowright" size="25" color="#e5e5e5"  ></uni-icons>
						<view class="horizontal"></view>
					
				</view>
				<button @click="loginOut()" style="background-color: #bc1a32;color: #FFFFFF;">退出</button>
			</view>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img_src:'https://avatars.githubusercontent.com/u/43719490?v=4',
				list:[
					{name:'我的资料',id:'1'},
					{name:'账户信息',id:'2'},
					{name:'密码',id:'3'},
					{name:'关于我们',id:'4'},
					{name:'反馈',id:'5'},
					{name:'帮助',id:'6'},
				],
				ifLogin:false
			}
		},
		components: {
		},
		computed: {
			
		},
		onLoad() {
			uni.getStorageSync('show')
		},
		onShow() {
			this.ifLogin = uni.getStorageSync('show')
		},
		methods: {
			register(){
				
				uni.navigateTo({
					url:'../register/register',
					
					fail(res) {
						console.log(res)
					}
				})
			},
			signIn(){
				uni.navigateTo({
					url:'../login/login'
				})
			},
			loginOut(){
				uni.setStorageSync('show',false)
				this.ifLogin = false
			}
			
		
		}
	}
</script>

<style>
	
	page{
		background-color: #f1f1f1;
		overflow-y: hidden;
	}
	.myself_top{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 35rpx;
		height: 250rpx;
		margin: 0 auto;
		margin-top: 25rpx;
		display: flex;
	}
	.myself_middle{
		width: 90%;
		background-color: #FFFFFF;
		border-radius: 35rpx;
		height: 250rpx;
		margin: 0 auto;
		margin-top: 25rpx;
		display: flex;
	}
	.myself_bottom{
		width: 90%;
		background-color: #FFFFFF;
		border-top-left-radius:35rpx;
		border-top-right-radius:35rpx;
		height:838rpx;
		margin: 0 auto;
		margin-top: 25rpx;
	}
	.round_icon{
		width: 170rpx;
		height:170rpx;
		display: flex;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		top: 40rpx;
		left: 30rpx;
	}
	.userName{
		display: block;
		font-size: 50rpx;
		font-weight: bolder;
	}
	.integration{
		font-size: 40rpx;
	}
	.number{
		width: 25%;
	}
	.number_name{
		display: block;
		width: 100%;
		text-align: center;
		font-size: 30rpx;
		font-weight: bolder;
		margin-top: 80rpx;
	}
	.number_quantity{
		width: 100%;
		display: block;
		text-align: center;
		font-size: 25rpx;
		margin-top: 20rpx;
	}
	.more_mysel{
		font-size: 45rpx;
		font-weight: bolder;
		margin-left: 40rpx;
		height: 140rpx;
		line-height: 140rpx;
	}
	.horizontal{
		width: 100%;
		margin: 0 auto;
		height: 1rpx;
		background-color: #e5e5e5;
	}
	.panel{
		width: 85%;
		height: 90rpx;
		margin: 0 auto;
	}
	.panel-text{
		font-size: 40Srpx;
		display: inline-block;
		width: 89%;
		height: 90rpx;
		line-height: 90rpx;
	}
	
</style>
