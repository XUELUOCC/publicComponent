<template>
  <div id="bar">

      <router-link to='/homePage'>首页</router-link>
      <router-link to='/country' >书城</router-link>
      <router-link to='/person'>用户</router-link>
      <router-link to='/model'>弹窗组件</router-link>
      <router-link to='/identifyCode'>验证码组件</router-link>
      <router-link to='/infiniteScroll'>无限下拉滚动指令</router-link>


    
    
      
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted(){
    
  },
  methods: {
  
  }
}
</script>

<style scoped>
/* #bar{
  width:1000px;
  height:600px;
  border:1px solid red;
} */
.nav{
  width:300px;
  height:100%;
  overflow: hidden;
  float: left;
}
a{
  font-size: 18px;
  display:block;
}
</style>
