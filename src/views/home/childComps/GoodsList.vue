<template>
	<div class="scrolllinkage-container">
		<div class="content">
			<div class="left-wrap" ref="leftWarp">
				<div>
					<div class="left-item" v-for="(item,index) in category" @click="selectMenu(index,$event)" ref="leftItemList"
						:class="{'current':currentIndex === index}">
						<span>{{item.name}}</span>
					</div>
				</div>
			</div>
			<div class="right-wrap" ref="rightWarp">
				<div>

					<div class="right-item" v-for="(item,index) in category" ref="rightItemList">
						<div class="title">· {{item.name}}</div>
						<div class="detail">
							<goods-list-item v-for="i in goods.filter(value => value.category == item.id)" :goodsItem="i">
							</goods-list-item>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Bscroll from 'better-scroll';
	import GoodsListItem from './GoodsListItem.vue'
	export default {
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		data() {
			return {
				listHeight: [],
				scrollY: ''
			};
		},
		props: {
			category: Array,
			goods: Array
		},
		computed: {
			currentIndex() {
				for (let i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i + 1];
					if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						return i;
					}
				}
				return 0; // eslint-disable-line
			}
		},
		mounted() {
			this._initScroll();
			this._calculateHeight();
		},
		methods: {
			_initScroll() {
				this.leftWarp = new Bscroll(this.$refs.leftWarp, {
					click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
				});
				this.rightWarp = new Bscroll(this.$refs.rightWarp, {
					click: true, // better-scroll 默认会阻止浏览器的原生 click 事件
					probeType: 3
				});
				this.rightWarp.on('scroll', pos => {
					if (pos.y <= 0) {
						this.scrollY = Math.abs(Math.round(pos.y));
					}
				});
			},
			_calculateHeight() {
				let rightItemList = this.$refs.rightItemList;
				// console.log('rightItemList', rightItemList)
				if (rightItemList) {   //rightItemList可能还没有加载出来，此时没有length
					let height = 0;
					this.listHeight.push(height);
					for (let i = 0; i < rightItemList.length; i++) {
						let item = rightItemList[i];
						height += item.clientHeight;
						this.listHeight.push(height);
					}
				}
			},
			selectMenu(index, event) {
				if (!event._constructed) {
					return;
				}
				let rightItemList = this.$refs.rightItemList;
				let el = rightItemList[index];
				this.rightWarp.scrollToElement(el, 300);
			}
		}
	};
</script>

<style>
	.scrolllinkage-container {
		position: relative;
		/* // top: 0;
		// left: 0;
		// position: relative; */
		height: 100vh;
		width: 100%;
	}

	.content {
		display: flex;
		position: absolute;
		top: 2.5rem;
		bottom: 3.125rem;
		width: 100%;
		overflow: hidden;
	}

	.left-wrap {
		/* flex: 0 1 auto; */
		width: 25%;
		background: #f3f5f7;
		/* height: 100vh; */
	}

	.left-item {
		width: 100%;
		height: 3.375rem;
		/* line-height: 3.375rem; */
		text-align: center;
		font-size: 13px;
		padding: 0 0.3125rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.current {
		background: #fff;
	}


	.right-wrap {
		/* flex: 1; */
		width: 75%;
	}

	.right-item .title {
		padding-left: 0.875rem;
		height: 1.625rem;
		line-height: 1.625rem;
		/* border-left: 0.125rem solid #d9dde1; */
		font-size: 0.75rem;
		color: #93999f;
		/* background: #f3f5f7; */
	}

	.detail {
		margin-top: 0.625rem;
		width: 100%;
	}

	.detail-content {
		/* height: 3.125rem; */
		padding-left: 0.625rem;
		line-height: 3.125rem;
		color: #93999f;
		/* font-size: 1.25rem; */
	}
</style>