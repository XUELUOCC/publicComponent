<template>
  <div>
      <!-- <h3>文字提示组件</h3> -->
      <div class="content">
            <slot></slot>
          <div class="contents" v-if="show">
              <!-- <div>我是文字提示组件{{show}}</div> -->
               <div class="text">
                <span>菜单-1</span>
                <span>菜单-2</span>
                <span>菜单-3</span>
                <span>菜单-4</span>
                <span>菜单-5</span>
                <span>菜单-6</span>
              </div>
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
            show:false,
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
.content{
    position:relative;
    /* border:1px solid black; */
}
.contents{
    /* border:1px solid #ccc; */
    /* width:50px; */
    position:absolute;
    left:20px;
    top:-45px;
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
