<template>
	<view>
		<view v-for="item in imgList" :key="item.index">
			<image style="width: 100%;height: 700rpx;" :src="item"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
						"http://www.zjds.org.cn/u/cms/www/202104/20093043z0ht.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093044gp20.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093045jzl0.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093046ye7k.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093046svns.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200930470pbw.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093048zx5d.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200930487sl9.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200930493zkq.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093051cueq.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093052yzip.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093053he2d.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093053yw9l.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093054zvjy.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093055i16s.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093056gwkz.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200930561l7g.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093057wicq.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093058syyz.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093058nqrc.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093059c7lc.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093100wgb1.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093101yn3s.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200931023wwx.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200931020lp8.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093103r447.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/200931042zpo.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093105k3r9.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093106m1hf.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093107ei3t.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093109onxp.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093108nror.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093109yajj.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093110jnx1.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093111kxop.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093112kevv.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093113kh6j.jpg",
					    "http://www.zjds.org.cn/u/cms/www/202104/20093113wn9w.jpg"
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
