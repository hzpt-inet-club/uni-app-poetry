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
		onLoad() {
			// this.title = options.title
			// this.content = options.content
			this.content = '![这是图片](http://www.zjds.org.cn/u/cms/www/202107/01153919n43n.png "Magic Gardens") 杭州市革命烈士纪念馆正门   杭州市革命烈士纪念馆位于浙江省杭州市钱塘江大桥北岸之江路2号。\n\n　　杭州是一座具有光荣革命传统的英雄之城。衙前农民运动、一师风潮、国民党陆军监狱的斗争、新登战役等,诸多发生在杭州的重大事件,在浙江乃至全国产生了重要的影响。\n\n　　杭州市革命烈士纪念馆是在1968年修建的蔡永祥烈士事迹陈列馆基础上,于2009年改扩建而成,是杭州市目前唯一综合性的革命史迹和烈士事迹宣传基地。纪念馆主体建筑由原来的800平方米扩建为1770 平方米,实际用于展览的空间由原来的600平方米扩大为1100平方米。结合观众参观需要,增加了报告厅、会议厅等多项便利设施。充实了革命史的内容, “以人带史,以史托人”,使人物与历史相结合,内容更加饱满丰富。采用了较为先进的展陈手段,力求达到生动、可看和可参与体验\n\n\n![这是图片](http://www.zjds.org.cn/u/cms/www/202107/01153952lm2o.png "Magic Gardens")   杭州解放纪念碑\n\n\n在纪念馆外广场上,一座蔡永祥舍身救列车的纪念雕塑巍然屹立。蔡永祥生前是守卫钱塘江大桥的解放军战士,1966年10月10日凌晨,为排除横卧在大桥铁轨上的一段大木头,保卫钱塘江大桥,保卫列车旅客的安全,献出了年轻的生命。在广场下山的路边,一座新建的杭州市见义勇为事迹陈列厅已向公众开放,这是全国首个群体性见义勇为烈士陈列厅。\n\n从山脚下到钱塘江畔之间,在一大片绿地中央,矗立着一座磅礴大气又个性独特的杭州解放纪念碑。纪念碑建于2001年,全部用赭红色的钢筋混凝土现浇而成,主体高约18米、宽约22米。\n\n杭州市革命烈士纪念馆于1995年2月被浙江省委宣传部公布为浙江省爱国主义教育基地。\n\n2009年被评为第一批浙江省党史教育基地。\n\n'
			
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
