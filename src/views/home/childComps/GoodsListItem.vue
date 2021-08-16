<template>
	<div class="listItem">
		<a href="#" class="left">
			<img :src="goodsItem.image">
		</a>
		<div class="info">
			<h3>{{goodsItem.name}}</h3>
			<div class="price">
				<span class="one-price">￥{{goodsItem.price}}</span>
				<span class="unit">{{goodsItem.unit}}</span>
			</div>
			<add-cut class="addcut" @add="add()" @cut="cut" :num="num"></add-cut>
		</div>
	</div>
</template>

<script>
	import Add from 'components/add/Add.vue'
	import AddCut from 'components/add/AddCut.vue'
	import { mapState } from "vuex";
	export default {
		name: "GoodsListItem",
		components: {
			Add,
			AddCut,
		},
		props: {
			goodsItem: {
				type: Object,
				default() {
					return {
						// image: '/static/order/recommend/fengzhua.jpg'
					}
				}
			},
		},
		methods: {
			add() {
				// console.log('add');
				this.$store.commit('addCart', this.goodsItem)

			},
			cut() {
				// console.log('cut');
				this.$store.commit('cutCart', this.goodsItem)
			}
		},
		computed: {
			...mapState(["cartlist"]),

			num() {
				let index = this.cartlist.indexOf(this.goodsItem)
				// console.log(index);
				if (index != -1) {
					return this.cartlist[index].count
				} else {
					return 0
				}

			}
		}
	}
</script>

<style scoped>
	.listItem {
		width: 100%;
		height: 80px;
		margin-left: 0.3125rem;
		display: flex;
		margin-bottom: 0.5rem;
	}

	.left {
		width: 35%;
	}

	img {
		width: 100%;
		height: 100%;
		border-radius: 0.3125rem;
	}

	.info {
		margin-left: 0.3125rem;
		width: 60%;
		position: relative;
	}

	.info h3 {
		color: black;
		font-size: 0.9375rem;
	}

	.price {
		position: absolute;
		bottom: 0;
		color: black;
		font-size: 0.875rem;
	}

	.unit {
		color: #666666;
		font-size: 0.5rem;
	}

	.addcut {
		position: absolute;
		bottom: 0.3125rem;
		right: 8px;
	}
</style>