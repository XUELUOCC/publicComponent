<template>
  <div class="page">
    <div class="container">
      <div
      class="one"
      v-for="(item,index) in pageList" :key="index"
      :style="{'z-index':pageList.length-index}"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      >
      {{item.name}}
      </div>
      <div class="tree" id="leftPage" ></div>
    </div>

  </div>
</template>>

<script>
export default {
  data(){
    return{
      flag:false,
      movelLen:'',
      startLen:'',
      endLen:'',
      pageList:[
        {
          name:'第一页',
          pageNum:1
        },
        {
          name:'第二页',
          pageNum:2
        },
        {
          name:'第三页',
          pageNum:3
        },
      ],
      leftPageDiv:'',
      oDiv:'',
      flag1:false,
      flag2:false,
    }
  },
  watch:{

  },
  mounted(){

  },
  methods:{
    turnClick(){
      this.flag=true;
    },
    //动态控制宽度
    touchStart(e){
      console.log(e)
      // console.log(index)
      e.preventDefault();
      this.oDiv=e.currentTarget
      this.startLen=e.changedTouches[0].pageX;
      document.getElementById('leftPage').style.right=0+'px'
    },
    touchMove(e){
      console.log(e)
      // console.log(e.changedTouches[0].pageX)
      this.endLen=e.changedTouches[0].pageX;
      this.moveLen=this.oDiv.offsetWidth+this.endLen -this.startLen;
      console.log(this.moveLen)
      if(this.moveLen<(375/3)){
        this.moveLen=0;
        this.oDiv.style.transition='1s'
        this.oDiv.style.boxShadow="0 0 0 0"
        document.getElementById('leftPage').style.right=375+'px'
        setTimeout(()=>{
           this.oDiv.style.zIndex=-1;
        },900)
      }
      if(this.movelLen>375){
        this.moveLen=375
        document.getElementById('leftPage').style.right=0+'px'
      }
      this.oDiv.style.width=this.moveLen+'px'
      document.getElementById('leftPage').style.right=Math.abs(this.endLen -this.startLen)+'px'
      document.getElementById('leftPage').style.width=(this.endLen -this.startLen)+'px'
    },
    touchEnd(e){
      console.log('手指松开')
      this.oDiv.style.width=0+'px'
      this.oDiv.style.transition='1s'
      this.oDiv.style.boxShadow="0 0 0 0"
      // setTimeout(()=>{

      // },900)
      document.getElementById('leftPage').style.width=60+'px'
      document.getElementById('leftPage').style.transition='1s'
      document.getElementById('leftPage').style.right=375+'px'
      setTimeout(()=>{
        console.log(document.getElementById('leftPage').style.width)
        this.oDiv.style.zIndex=-1;
        document.getElementById('leftPage').style.right=0+'px'
        document.getElementById('leftPage').style.width=1+'px'
        document.getElementById('leftPage').style.transition='0'
      },900)
    }
  }
}
</script>
<style scoped>
.page{
  width:100%;
  height:400px;
}
.container{
  width:100%;
  height:400px;
  border:1px solid red;
  position:relative;
  /* overflow: hidden; */
}
.one{
  width:100%;
  height:400px;
  background-color:antiquewhite;
  position:absolute;
  z-index:2;
  box-shadow: 4px 4px 4px 4px rgba(65, 68, 68, 0.5);
  /* border:1px solid red; */
  display:flex;
  justify-content:center;
  align-items: center;
}
.one1{
  width:100%;
  height:400px;
  background-color:antiquewhite;
  position:absolute;
  z-index:1;
  box-shadow: 4px 4px 4px 4px rgba(65, 68, 68, 0.5);
  /* border:1px solid red; */
  display:flex;
  justify-content:center;
  align-items: center;
}
.two{
  width:100%;
  height:400px;
  position:absolute;
  z-index:0;
  background-color:#409eff;
}
.item{
  width:100px;
  transition:2s;
}
.tree{
  width:1px;
  height:100%;
  position:absolute;
  right:0;
  z-index:999;
  background-color:antiquewhite;
  box-shadow: -10px -1px 5px  rgba(65, 68, 68, 0.5) inset,-5px -1px 3px  rgba(65, 68, 68, 0.5);
  border-left:1px solid #ddd;
}
.itemLeft{
  width:80px;
  transition:2s;
}
</style>
