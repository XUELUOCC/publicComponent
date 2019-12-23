<template>
  <div>
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <!-- <mt-button icon="back">返回</mt-button> -->
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
      <!-- <navBar></navBar> -->
      <!-- <h1>首页</h1> -->
        <!-- <a-tree-select
    style="width: 300px"
    :treeData="treeData"
    treeCheckable
    @select='select'
    :showCheckedStrategy="SHOW_PARENT"
    searchPlaceholder="Please select"
  /> -->
  </div>
</template>

<script>
import navBar from '../common/NavBar/NavBar'
  import { TreeSelect } from 'ant-design-vue';
  const SHOW_PARENT = TreeSelect.SHOW_PARENT;
export default {
     components:{
        navBar
    },
  data () {
    return {
      msg: '',
      // value:'',
       SHOW_PARENT,
      treeData : [
        {
          title:'all',
          value:'0-2',
          key:'0-2'
        },
      {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
       
      },
      {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
       
      },
    ]
    }
  },
  methods: {
      // onChange(value) {
      //   console.log('onChange ', value);
      //   this.value = value;
      // },
      select(value,event){
        console.log(event)
          console.log(event.checked)
          this.treeData.forEach((item,index)=>{
            item.checked=event.checked
          })
          // if(value=='0-2'){
          //   this.treeData.forEach((item,index)=>{
          //     item.checked=true
          //   })
          //   console.log(this.treeData)
          // }
      }
  }
}
</script>

<style scoped>

</style>
