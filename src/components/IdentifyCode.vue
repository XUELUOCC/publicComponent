<template>
  <div>
      <!-- <navBar></navBar> -->
      <h3>其他</h3>
      <div @click='refreshCode'>
          <identify :identifyCode="identifyCode"></identify>
      </div>
  </div>
</template>

<script>
import navBar from '../common/NavBar/NavBar'
import identify from '../common/identify/Identify.vue'
export default {
    components:{
        navBar,
        identify
    },
    data () {
        return {
            msg: '',
            identifyCode:'',
            identifyCodes:'1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm'
        }
    },
    mounted(){
        this.identifyCode="";
        this.makeCode(this.identifyCodes,4)
    },
    methods: {
        refreshCode(){
            this.identifyCode="";
            this.makeCode(this.identifyCodes,4);
            console.log('当前验证码==',this.identifyCode)
        },
        makeCode(o,l){
            for(let i=0;i<l;i++){
                this.identifyCode+=this.identifyCodes[
                    this.randomNum(0,this.identifyCodes.length)
                ];
            }
        },
        randomNum(min,max){
            return Math.floor(Math.random()*(max-min)+min);
        }
    }
}
</script>

<style scoped>

</style>
