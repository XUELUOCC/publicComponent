<template>
  <div id="app" >
    <h3>入口组件</h3>
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">
       <navBar></navBar>
       <router-view/>
    </div>
    <!-- <Footer></Footer> -->
    <!-- <Confirm></Confirm> -->
  </div>
</template>

<script>
import navBar from './common/NavBar/NavBar'
import Footer from './common/footer/Footer'
import Confirm from './common/confirm/confirm'
import store from './vuex/store.js'
export default {
  name: 'App',
  components:{
    navBar,
    Footer,
    Confirm
  },
  data(){
    return {
      isShow:''
    }
  },
  store,
  mounted(){
    this.isShow=this.$store.state.isShow
    console.log(this.isShow)
  },
  methods:{

  },

}
</script>

<style>
.bg{
  background-color: gray;
}

</style>
