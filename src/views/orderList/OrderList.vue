<template>
	<div class="order-list">
		<nav-bar @back='back()'>
			<div slot="title">订单列表</div>
		</nav-bar>
		<order-list-item v-for="(item, index) in orderlist" :orderItem="item" :key="index"></order-list-item>
	</div>
</template>

<script>
	import NavBar from 'components/navBar/NavBar'
	import OrderListItem from './childComps/OrderListItem'
	import { mapState } from 'vuex'
	export default {
		name: 'OrderList',
		components: {
			NavBar,
			OrderListItem
		},
		computed: {
			...mapState(['orderlist'])
		}
	}
</script>

<style scoped>
	.order-list {
		/* background-color: pink; */
		overflow-y: scroll;
		background-color: #eee;
		width: 100%;
		height: 100vh;
	}
</style>