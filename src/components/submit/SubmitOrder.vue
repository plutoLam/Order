<template lang="">
  <div>
    <nav-bar @back='back()'>
      <div slot="title">提交订单</div>
      <div slot="order">
        <a href="#" class="order">
          <img src="~assets/img/home/order.png" alt="">
        </a>
      </div>
    </nav-bar>
    <ul class="container">
      <li v-for="item in cartlist">
        <a href="#">
          <img :src="item.image" alt="">
        </a>
        <div class="info">
          <div class="info-top">
            <span>{{item.name}}</span>
            <span>￥{{(item.price*item.count).toFixed(2)}}</span>
          </div>
          <div class="count">
            数量: {{item.count}}
          </div>
        </div>
      </li>
      <li class="border">
        <span class="all">
          小计￥<span class="price">{{ALLMONEY}}</span>
        </span>

      </li>
      <li class="remark">
        备注
        <a href="#">
          <img src="~assets/img/common/rightArr.png" alt="">
        </a>
      </li>
    </ul>
    <submit-tabbar @click.native="toPay()">
      <div slot="right">去支付</div>
    </submit-tabbar>
  </div>
</template>
<script>
  import NavBar from 'components/navBar/NavBar'
  import SubmitTabbar from './SubmitTabbar'
  import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'SubmitOrder',
    components: {
      NavBar,
      SubmitTabbar
    },
    methods: {
      toPay() {
        // console.log('topay');
        this.$router.push({ name: 'payorder' })
      },
      back() {
        // console.log('back');
        this.$router.push({ name: 'home' })
      }
    },
    computed: {
      ...mapState(["cartlist"]),
      ...mapGetters(['ALLMONEY'])
    }
  }
</script>
<style scoped>
  .order img {
    width: 1.35rem;
    height: 1.35rem;
  }

  .left {
    margin-top: .75rem;
  }

  .border {
    margin: 0;
    padding: 10px;
    border-bottom: 15px solid #F2F2F2;
    /* margin-bottom: 10px; */
  }

  .all {
    position: absolute;
    right: 10px;
    line-height: 30px;
  }

  .price {
    font-size: 18px;
    font-weight: 700;
  }

  .remark {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .remark img {
    width: 15px;
    height: 15px;
  }
</style>