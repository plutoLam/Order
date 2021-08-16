<template lang="">
  <div class="home-search">
    <form action="/">
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel"
        @blur="saveHistory" />
    </form>
    <van-empty image="search" description="历史记录为空" v-show="isEmpty" />
    <div class="search-list">
      <goods-list-item v-for="i in search" :goodsItem="i">
      </goods-list-item>
    </div>
    <div class="history" v-show="showHistory">
      <p>历史记录</p>
      <div class="history-list">
        <span v-for="(item, index) in history">{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import { Search, Empty } from 'vant';
  import GoodsListItem from './GoodsListItem.vue'
  export default {
    name: 'HomeSearch',
    components: {
      [Search.name]: Search,
      [Empty.name]: Empty,
      GoodsListItem,
    },
    data() {
      return {
        value: '',
        history: [],
      }
    },
    props: {
      goods: Array
    },
    computed: {
      search() {
        // console.log('search()');
        if (this.goods) {
          if (this.value != '') {
            let res = this.goods.filter(item => item.name.includes(this.value))
            if (res.length != 0) {
              this.saveHistory()
            }
            return res
          }
        }
      },
      isEmpty() {
        return false
      },
      showHistory() {
        if (this.value == '') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      saveHistory() {
        if (this.value != '') {
          if (this.history.indexOf(this.value) == -1) {
            // this.history.splice(this.history.length, 1, this.value)
            this.history.unshift(this.value)
          }
        }
      },
      onSearch(val) {
        // console.log('搜索', val);
        this.saveHistory()
      },
      onCancel() {
        this.$emit('onCancel')
      },
    },
  }
</script>
<style scoped>
  .home-search {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 1;
    background-color: white;
  }

  form {
    border-bottom: #eee 1px solid;
  }

  .history {
    position: absolute;
    top: 4.0625rem;
    width: 100%;
  }

  .history p {
    width: 100%;
    padding-bottom: .625rem;
    margin-left: .625rem;
    border-bottom: #eee 1px solid;
  }

  .history-list {
    margin: .625rem;
    display: flex;
    flex-wrap: wrap;
  }

  .history-list span {
    margin-right: .625rem;
    margin-bottom: .625rem;
    background-color: #F7F8FA;
    padding: .125rem .3125rem;
    border-radius: .3125rem;
    font-size: .875rem;
  }

  .search-list {
    width: 100%;
    height: 100vh;
    margin-top: .625rem;
    overflow: scroll;
  }
</style>