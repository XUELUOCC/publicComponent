<template>
  <div>
      <div class='content'>
          <h3>文字提示组件</h3>
          <tool-tip  class="toolTip" ref="model" :visible="visible" >
            <!--按钮区-->
            <div class="btn" >
                <el-button  @mouseover.native="open" @mouseleave.native="close">文字提示组件</el-button>
            </div>
            <!--按钮区-->
            <!--内容区-->
              <div class="text" slot="content" ref="heightContent">
                <span>菜单-1-----</span>
                <span>菜单-2</span>
                <span>菜单-3</span>
                <span>菜单-4</span>
                <span>菜单-5</span>
                <span>菜单-6</span>
                <!-- <img src="../../assets/logo.png" alt=""> -->
                <el-timeline :reverse="reverse">
                    <el-timeline-item
                    v-for="(activity, index) in activities"
                    :key="index"
                    :timestamp="activity.timestamp">
                    {{activity.content}}
                    </el-timeline-item>
                </el-timeline>
              </div>
            <!--内容区-->
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
            reverse: true,
            activities: [
                {
                content: '活动按期开始',
                timestamp: '2018-04-15'
                }, 
                {
                content: '通过审核',
                timestamp: '2018-04-13'
                }, 
                {
                content: '创建成功',
                timestamp: '2018-04-11'
                }
            ]
            }
    },
    mounted(){
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
    /* border:1px solid red; */
    height:40px;
}
.text img{
    width:100px;
    height:100px;
}
</style>
