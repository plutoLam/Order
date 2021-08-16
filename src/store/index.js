import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  TableNum:1,
    cartlist:[],
  },
  mutations: {
	  changeTableNum(state,num){
			state.TableNum = num
		},
    addCart(state,obj){
      
      let oldgood = state.cartlist.find((item) => item.id == obj.id);
  	
      if (oldgood) {
        let index = state.cartlist.indexOf(oldgood)
        oldgood.count++
        // Vue.set(oldgood,'count',oldgood.count += 1)
        state.cartlist.splice(index, 1, oldgood);
        // console.log('old add',state.cartlist)
      } else {
        obj.count = 1;
        state.cartlist.splice(state.cartlist.length,0,obj)
        // console.log("goodlist", state.cartlist);
      }
        console.log('cart',state.cartlist);
    },
    cutCart(state,obj){
      // console.log('cut');
      if(obj.count>1){
        // let oldgood = state.cartlist.find((item) => item.id == obj.id);
        let index = state.cartlist.indexOf(obj)
        obj.count--
        state.cartlist.splice(index, 1, obj);
      }else if(obj.count == 1){
        let index = state.cartlist.indexOf(obj)
        state.cartlist.splice(index, 1);
      }
      // console.log('cart',state.cartlist);
    },
    deleteAll(state){
      console.log('all');
      state.cartlist.splice(0,state.cartlist.length)
    }
  },
  getters:{
    ALLMONEY(state){
      return state.cartlist.reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2) 
    }
    
  },
})
