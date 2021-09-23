<template>
	<view>
		<view class="history_container" >
			<view class="history_card" v-for="item in history_list" :key="item.index">
				<image src="../../static/baike.jpg" style="width: 200rpx;height: 250rpx"></image>
				<view style="display: flex;flex-direction: column;margin-left: 30rpx;width: 400rpx;">
					<text style="font-size: 35rpx;margin-top: 20rpx;font-weight: bolder;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;	">{{item.title}}</text>
					<text style="font-size: 25rpx;overflow: hidden;text-overflow:ellipsis; white-space: nowrap;width: 300rpx;margin-top: 20rpx;">{{item.content}}</text>
					<text style="width: 200rpx;border-radius: 40rpx;color: #FFFFFF;
					background-image: linear-gradient(#f4dab0, #e6b26f);text-align: center;height: 70rxpx;line-height: 70rpx;box-shadow: #d0ccc8 2px 2px 2px;margin-left: 200rpx;margin-top: 30rpx;"
					@click="jumpToShow(item.title,item.content)">开始阅读</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				history_list:[
					{
						imgUrl:'',
						title:'农村包围城市”的革命道路是怎样开辟出来的？',
						content:'1927年9月，毛泽东率领起义部队在文家市里仁学校召开前委会议，他分析了敌大我小、敌强我弱的形势，主张改变原来攻打长沙的计划，把革命的中心由城市转向敌人统治比较薄弱的农村中去。与会大多数人接受了毛泽东的意见，支持向罗霄山脉中段进军的正确主张。会后，起义部队进至井冈山，打土豪分田地，建立革命政权，开展游击战战争，创造了以宁冈为中心的‘工农武装割据’局面。后来毛泽东从中国社会和革命的具体情况出发，将这一经验进行总结，指出在党的领导下，将武装斗争、土地革命、建立革命政权三者结合在一起，就是中国革命必须坚持走 &quot;农村包围城市，最后夺取全国胜利&quot; 的正确道路。'
					},
					{
						imgUrl:'',
						title:'共产主义小组的建立与中国共产党的成立\"共产主义小组的建立',
						content:'中国共产党的最早组织是在上海首先建立的。１９２０年８月，上海共产党早期组织正式成立。参加者有陈独秀、李汉俊、李达、陈望道、俞秀松等，陈独秀任书记。上海共产党早期组织成立后，实际上成为各地建党活动的联络中心，起着中国共产党发起组的重要作用。'
					},
					{
						imgUrl:'',
						title:'夺取民主革命的全国胜利',
						content:'重庆谈判和争取和平民主的努力中华民族经过浴血奋战赢得抗日战争胜利后，又面临着建什么国的斗争。中国共产党代表全国广大人民的根本利益，力图通过和平的途径来建设一个独立、民主、富强的新民主主义中国。代表大地主大资产阶级利益的国民党统治集团，企图抢夺抗战胜利果实，用内战的方式来剥夺人民已经取得的权利，使中国社会退回到抗战前一党专制独裁的反动统治。一场关系中国走向光明还是黑暗的大决战不可避免'
					},
					{
						imgUrl:'',
						title:'鸦片战争与近代中国社会的演变',
						content:'中国是一个历史悠久的东方大国。中华民族以自己的勤劳和智慧，曾经创造了在世界上领先的古代文明，对人类发展作出过重大贡献。但是，当历史步入近代时，中国却落伍了。'
					},
					{
						imgUrl:'',
						title:'总纲 ',
						content:'中国共产党是中国工人阶级的先锋队，同时是中国人民和中华民族的先锋队，是中国特色社会主义事业的领导核心，代表中国先进生产力的发展要求，代表中国先进文化的前进方向，代表中国最广大人民的根本利益。党的最高理想和最终目标是实现共产主义。'
					},
					{
						imgUrl:'',
						title:'毛泽东思想',
						content:'毛泽东思想是马克思列宁主义的基本理论与中国革命具体实践相结合的产物，是马克思主义中国化的第一个重大理论成果，是被实践证明过的正确的理论思想和经验总结，为中国特色社会主义理论体系的形成奠定了坚实的理论基础。'
					},
					{
						imgUrl:'',
						title:'邓小平理论',
						content:'邓小平理论坚持和发展了毛泽东思想，是马克思主义在中国发展的新阶段。它坚持解放思想、实事求是，在新的实践基础上继承前人又突破陈规，它开拓了马克思主义的新境界，使我们，成功地走出了一条具有中国特色的社会主义新道路。'
					},
					{
						imgUrl:'',
						title:'三个代表重要思想',
						content:'‘三个代表’是中国共产党的立党之本、是中国共产党的执政之基、是中国共产党力量之源‘三个代表’重要思想，集中概括了党和国家全部理论活动、实践活动，包括一切工作的根本方向、根本准则、根本依据，成为指引党和国家新世纪伟大进军的行动指南。'
					},
				]
			}
		},
		methods: {
			jumpToShow(title,content){
				uni.navigateTo({
					url:'../articleshow/index?title='+title+'&content='+content
				})
			}
		}
	}
</script>

<style>
.history_container{
	width: 100%;
}
.history_card{
	width: 90%;
	height: 250rpx;
	display: flex;
	flex-direction: row;
	margin: 0 auto;
	background-color: #FFFFFF;
	border-radius: 10rpx;
	margin-top: 30rpx;
	overflow: hidden;
}
page{
	background-color: #bc1a32;
	//背景导航栏颜色太浓
}
</style>
