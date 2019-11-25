import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义数据
var state={
    isShow:false
}

//定义方法
var mutation={
    setShow(){
        state.isShow=true
    },
    setHidden(){
        state.isShow=false
    }
}

//实例化store
const store=new Vuex.Store({
    state:state,
    mutations:mutation
})

//将store暴露出去
export default store