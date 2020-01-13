<template>
  <div>
      <!-- <h3>文字提示组件</h3> -->
      <div class="content">
            <slot></slot>
          <div class="contents" v-if="show" ref="heightTest" :style="{top:heightContent}">
              <slot name="content"></slot>
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
            default:false,
        },
        // height:Number
    },
    data () {
        return {
            show:false,
            heightContent:''
        }
    },
    watch:{
        visible(){
            this.show=this.visible
            console.log(this.show)
        },
    },
    updated(){
        // console.log(this.$refs.heightTest)
        if(this.$refs.heightTest){
             this.heightContent='-'+(this.$refs.heightTest.clientHeight+15)+'px'
             console.log(this.$refs.heightTest.clientHeight)
             console.log(this.$refs.heightTest.offsetHeight)
        }
    },
    methods: {
        
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
    min-width:100px;
    min-height: 30px;
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
