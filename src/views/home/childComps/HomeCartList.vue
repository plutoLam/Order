<template>
	<div class="home-cart-list">
		<div class="head">
			<h3>已选{{cartlist.length}}份</h3>
			<a href="#" @click="deleteAll()">
				<img src="~assets/img/home/delete.png" alt="">
			</a>
		</div>
		<ul>
			<li v-for="item in cartlist">
				{{item.name}}
				<span class="price">￥{{item.price}}</span>
				<add-cut class="add-cut" :num="item.count" @add="add(item)" @cut="cut(item)"></add-cut>
			</li>
		</ul>
	</div>
</template>

<script>
	import AddCut from 'components/add/AddCut.vue'
	import { mapState } from 'vuex'
	export default {
		name: "HomeCartList",
		components: {
			AddCut,
		},
		computed: {
			...mapState(["cartlist"]),
		},
		methods: {
			add(item) {
				// console.log('add');
				this.$store.commit('addCart', item)

			},
			cut(item) {
				// console.log('cut');
				this.$store.commit('cutCart', item)
			},
			deleteAll() {
				this.$store.commit('deleteAll')
			}
		},
	}
</script>

<style scoped>
	.home-cart-list {
		position: fixed;
		z-index: 2;
		bottom: 60px;
		left: 50%;
		transform: translate(-50%, 0);
		width: 95%;
		/* height: 12.5rem; */
		background-color: white;
		color: black;
		border-radius: 4px;
	}

	.home-cart-list:before {
		content: '';
		width: 0;
		height: 0;
		/* border: 0.4375rem solid transparent; */
		/* border-left-color: #cccccc; */
		border-top: 0.4375rem solid white;
		border-right: 0.4375rem solid transparent;
		border-left: 0.4375rem solid transparent;
		position: absolute;
		left: 5%;
		bottom: -7px;
		margin-top: -20px;
	}

	.head {
		display: flex;
		justify-content: space-between;
		padding: 0.9375rem 0;
		margin: 0 0.8125rem;
		border-bottom: 0.0625rem solid #eee;
	}

	.head h3 {
		font-weight: 500;
	}

	.head img {
		width: 1.0625rem;
		height: 1.25rem;
	}

	ul li {
		padding: 0.625rem 0.8125rem;
		display: flex;
		position: relative;
	}

	ul li .price {
		position: absolute;
		left: 50%;
	}

	.add-cut {
		position: absolute;
		right: 0.8125rem;
	}
</style>