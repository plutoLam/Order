<template>
	<div class="recommend-item">
		<a href="#">
			<img :src="recommendItem.image">
		</a>
		<h3>{{recommendItem.name}}</h3>
		<span class="price">￥{{recommendItem.price}}</span>
		<!-- <span class="add">+</span> -->
		<add class="add" @click.native="add()"></add>
	</div>
</template>

<script>
	import Add from 'components/add/Add.vue'
	export default {
		name: "RecommendItem",
		components: {
			Add,
		},
		data() {
			return {

			}
		},
		props: {
			recommendItem: Object
		},
		methods: {
			add() {
				// console.log('add');
				this.$store.commit('addCart', this.recommendItem)
			}
		},
	}
</script>

<style scoped>
	.recommend-item {
		/* flex: 0 0 400px; */
		/* width: 120px; */
		height: 9.375rem;
		position: relative;
		color: #000000;
		background-color: white;
	}

	img {
		width: 7.5rem;
		height: 7.5rem;
		border-top-left-radius: 0.3125rem;
		border-top-right-radius: 0.3125rem;
		/* height: 9.375rem; */
	}

	h3 {
		font-size: 0.0625rem;
		margin-top: 0.29rem;
		margin-left: 0.375rem;
	}

	.price {
		position: absolute;
		left: 0.375rem;
		bottom: 0.325rem;
		font-size: 0.875rem;
	}

	.add {
		position: absolute;
		right: 0.375rem;
		bottom: 0.325rem;
	}
</style>