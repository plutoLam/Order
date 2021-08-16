<template lang="">
  <div class="order-item">
    <div class="top">
      <h4>小民大排档(软件园店)</h4>
      <p :class="{noover:!orderItem.isOver}">{{isOver}}</p>
    </div>
    <div class="info-left">
      <p>菜品数量：共{{orderItem.count}}件菜品</p>
      <p>下单时间：{{orderItem.data|moment("YYYY-MM-DD HH:mm:ss")}}</p>
    </div>
    <h4 class="price">￥{{orderItem.ALLMONEY}}</h4>
  </div>
</template>
<script>
  import moment from 'moment'
  export default {
    name: 'OrderListItem',
    props: {
      orderItem: Object
    },
    computed: {
      isOver() {
        if (this.orderItem.isOver) {
          return '订单已完成'
        } else {
          return '订单未完成'
        }
      }
    },
    filters: {
      moment(value) {
        return moment(value).format('YYYY-MM-DD HH:mm:ss')
      }
    },
  }
</script>
<style scoped>
  .noover {
    color: #FE6635;
  }

  .order-item {
    position: relative;
    margin-left: 50%;
    transform: translate(-50%, 0);
    margin-top: .9375rem;
    width: 95%;
    height: 7.5rem;
    background-color: white;
    overflow: hidden;
    /* 高度塌陷 */
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin: .9375rem;
  }

  .top h4 {
    font-weight: 600;
  }

  .top p {
    font-size: .875rem;
    color: black;
  }

  .info-left {
    position: absolute;
    bottom: .875rem;
    left: .875rem;
  }

  .info-left p:nth-child(1) {
    margin-bottom: .375rem;
  }

  .price {
    position: absolute;
    bottom: 1.5rem;
    right: .875rem;
    font-weight: 500;
  }
</style>