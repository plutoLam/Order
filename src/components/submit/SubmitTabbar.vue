<template lang="">
  <div class="tab">
    <div>
      <div class="left">
        <slot name="left"></slot>
      </div>
      <span class="price"><span class="rmb">￥</span>{{ALLMONEY}}</span>
    </div>
    <div class="topay" @click="topay">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
  import 'assets/css/cart.css'
  import { mapGetters } from 'vuex'
  export default {
    name: "SubmitTabbar",
    methods: {
      topay() {

      }
    },
    computed: {
      ...mapGetters(['ALLMONEY'])
    }
  }
</script>
<style scoped>
  .left {
    margin-top: .75rem;
  }

  .tab {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: #F8F8F8;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 1rem .625rem;
  }

  .price {
    font-size: 2.0rem;
    color: #FE6635;
  }

  .rmb {
    font-size: 1rem;
  }

  .topay {
    width: 39%;
    height: 2.625rem;
    background-color: #FE6635;
    text-align: center;
    line-height: 2.625rem;
    font-size: 14px;
    border-radius: 2.625rem;
    color: white;
  }
</style>