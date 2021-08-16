<template>
	<div class="home-recommend">
		<h5>老板推荐</h5>
		<div class="wrap">
			<div class="recommend">
				<recommend-item class="recommend-item" v-for="item in recommend" :recommendItem="item"></recommend-item>
			</div>
		</div>
	</div>
</template>

<script>
	import RecommendItem from './RecommendItem.vue'
	export default{
		name:"HomeRecommend",
		components:{
			RecommendItem
		},
		data(){
			return{
	
			}
		},
		props:{
			recommend:Array
		}
	}
</script>

<style scoped>
	.home-recommend{
		/* height: 12.5rem; */
		/* width: 100vh; */
		margin:0 0.75rem;
	}
	.home-recommend h5{
		font-size: 0.3125rem;
	}
	.wrap{
		margin-top: 0.375rem;
		width: 100%;
		/* background-color: pink; */
		height: 11.25rem;
		overflow: hidden;
	}
	.recommend{
		padding-bottom: 0.475rem;
		display: flex;
		/* background-color: purple; */
		/* height: 100%; */
		overflow-x: scroll;
	}
	.recommend-item{
		height: 180px;
		/* width: 200px; */
		flex: 0 0 7.5rem;
		/* background-color: #FA9A08; */
		margin-right: 0.625rem;
	}
</style>
