<template>
  <div>
      <!-- <navBar></navBar> -->
 <!-- <h1>设置页面</h1> -->
 
 <!-- <a-select defaultValue="lucy" style="width: 120px" >
      <a-select-option value="1">Jack</a-select-option>
      <a-select-option value="0">Lucy</a-select-option>
    </a-select> -->

    <el-button type="primary" @click='test'>弹窗</el-button>
  </div>
</template>

<script>
import navBar from '../common/NavBar/NavBar'
import store from '../vuex/store.js'
export default {
     components:{
        navBar
    },
  data () {
    return {
      msg: '',
      isShow:false
    }
  },
  store,
  methods: {
    test(){
      // this.$store.commit('setShow')
       console.log(this.$store.state.isShow)
      this.$Myconfirm({
        title:'弹窗主题',
        msg:'这是一个测试的弹窗组件',
        btn:{
          ok:'确定',
          no:'取消'
        }
      }).then(()=>{
        that.$message('你点击了确定')
        // this.$store.commit('setHidden')
        // console.log(this.$store.state.isShow)
      }).catch(()=>{
        // that.$message('你点击了取消')
        console.log('点击失败')
        // this.$store.commit('setHidden')
        //  console.log(this.$store.state.isShow)
      })
    }
  }
}
</script>

<style scoped>
.bg{
  background-color:gray;
}
</style>
