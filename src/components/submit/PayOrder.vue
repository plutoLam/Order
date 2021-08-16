<template>
	<div>
		<nav-bar @back='back()'>
			<div slot="title">支付页</div>
		</nav-bar>
		<van-notice-bar color="#FE6635" background="#FEFBE8" left-icon="info-o">
			支付后，如需查看订单信息，可再次扫码进入
		</van-notice-bar>

		<ul class="container">
			<li class="all-price">
				<span>订单小计</span>
				<span class="price">￥{{$store.getters.ALLMONEY}}</span>

			</li>
			<li>
				<van-notice-bar :scrollable='false' wrapable color="#FE6635" background="#ffff" left-icon="info-o">
					商家设置了金额零头处理，如有疑问请咨询服务员。
				</van-notice-bar>
			</li>
		</ul>
		<submit-tabbar>
			<span slot="left">还需支付 </span>
			<div slot="right" @click="pay()">支付并下单</div>
		</submit-tabbar>
	</div>
</template>

<script>
	import NavBar from 'components/navBar/NavBar'
	import SubmitTabbar from './SubmitTabbar'
	import { NoticeBar } from 'vant';
	import 'assets/css/cart.css'
	export default {
		name: 'PayOrder',
		components: {
			NavBar,
			SubmitTabbar,
			[NoticeBar.name]: NoticeBar
		},
		methods: {
			back() {
				this.$router.push({ name: 'submitorder' })
			},
			pay() {
				this.$store.commit('over')
				this.$router.push({ name: 'orderlist' })
			}
		},
	}
</script>

<style scoped>
	.all-price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.price {
		color: #FE6635;
		font-size: 1.375rem;
	}
</style>