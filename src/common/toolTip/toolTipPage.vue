<template>
  <div>
      <div class='content'>
          <!-- <a href="#" class="toolTip">文字提示组件</a> -->
          <div>
               <!-- <el-button style="block"  @mouseover.native="open" @mouseleave.native="close">文字提示组件</el-button> -->
          </div>
          <tool-tip  class="toolTip" ref="model" :visible="visible">
            <div class="btn">
                <el-button  @mouseover.native="open" @mouseleave.native="close">文字提示组件</el-button>
            </div>
              <!-- <div class="text">
                <span>菜单-1</span>
                <span>菜单-2</span>
                <span>菜单-3</span>
                <span>菜单-4</span>
                <span>菜单-5</span>
                <span>菜单-6</span>
              </div> -->
          </tool-tip>
          <div >
      </div>
      </div>
     
  </div>
</template>

<script>
import ToolTip from './ToolTip.vue'
export default {
    components:{
        ToolTip,
    },
    data () {
        return {
        visible:false,
        }
    },
    methods: {
        open(){
            // this.$refs.model.visible=true;   //this.$refs.model.visible-----是引用子组件中的值，当引用子组件中的值为父组件传过去的值时，且在子组件
                                                //中已经修改，此时将会报错，因为子组件不允许改变父组件中的值
            this.visible=true;
            console.log('kkk')
        },
        close(){
            this.visible=false;
        }
    }
}
</script>

<style scoped>
.content{
    width:100%;
    /* height:200px; */
    /* display:inline-block; */
    /* border:1px solid red; */
    padding-top:20px;
    /* position:relative; */
}
.toolTip{
    float:left;
    /* margin:0 0 40px 20px; */
    top:0;
    z-index:999;
}
.btn{
    position:absolute;
    left:20px;
}
</style>
