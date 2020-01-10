<template>
  <div>
      <!-- <h3>文字提示组件</h3> -->
      <div >
          <div class="contents" v-if="show">
              <!-- <div>我是文字提示组件{{show}}</div> -->
              <slot></slot>
              <span class="tips"></span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        visible:{
            type:Boolean,
            default:false
        }
    },
    data () {
        return {
            show:true,
        }
    },
    watch:{
        visible(){
            this.show=this.visible
            console.log(this.show)
        }
    },
    mounted(){
        console.log(this.visible)
    },
    methods: {
        child(){
            if(this.show==true){
                this.$emit('update:visible',this.show)
            }
        }
    },
}
</script>

<style scoped>
.contents{
    /* border:1px solid #ccc; */
    /* width:50px; */
    display: inline-block;
    border-radius: 4px;
    background-color:rgba(0,0,0,0.5);   
    color:#fff;
    padding:5px;
    position:relative;
}
.tips{
    position:absolute;
    bottom:-20px;
    left:20px;
    display: inline-block;
    width:0;
    height:0;
    border-width:10px;
    border-style: solid;
    border-color:rgba(0,0,0,0.5) transparent transparent transparent;

}
</style>
