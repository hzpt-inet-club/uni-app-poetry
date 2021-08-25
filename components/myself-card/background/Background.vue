<template>
	<image class="image-bg" :src="url"/>
</template>

<script>
	export default {
		name:"Background",
		data() {
			return {
			}
		},
		props:{
			url:{
				type:String,
				default:""
			}
		},
		components: {
		},
		computed: {
			
		},
		onReady(){
			
		},
		onLoad() {
			
		},
		methods: {
		}
	}
</script>

<style>
	.image-bg {
	    position: absolute;
	    z-index: -1;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    right: 0;
	    width: 100%;
	    height: 100%;
	}
</style>
