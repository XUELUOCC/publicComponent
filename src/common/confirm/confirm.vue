<template>
  <div id="confirm" v-if='flag'>
      <div class="contents" >
          <div class="content-top">{{text.title}}</div>
          <div class="content-center">{{text.msg}}</div>
          <div class="content-bottom">
              <el-button type='primary' @click='ok' class="left">{{text.btn.ok}}</el-button>
              <el-button type='info' @click='no' class="right">{{text.btn.no}}</el-button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        flag:true,
        text:{
            title:'标题',
            msg:'这是一个弹出框组件',
            btn:{
                ok:'确定',
                no:'取消'
            }
        }
    }
  },
  methods: {
      ok(){
          this.flag=false;
      },
      no(){
          this.flag=false;
      }
  }
}
</script>

<style scoped>
 #confirm{
     position:fixed;
     left:0;
     top:0;
     right:0;
     bottom:0;
     background:rgba(0,0,0,0.3);   
 }
 .contents{
    width:250px;
    height:180px;
    border:1px solid #ccc;
    border-radius:10px;
    background-color:#fff;
    position:fixed;
    top:50%;
    left:50%;
    margin-top:-90px;
    margin-left:-125px;
}
.content-top{
    width:100%;
    height:40px;
    border-bottom:1px solid #ccc;
    text-align: center;
    font-size:20px;
    font-weight: 700;
    line-height:40px;
}
.content-center{
    width:90%;
    height:80px;
    margin:5px auto;
}
.content-bottom{
    width:85%;
    height:40px;
    margin:0 auto;
    /* border:1px solid red; */
    position:relative;
}
.left{
    position:absolute;
    left:0;
    width:40%;
}
.right{
    position:absolute;
    right:0;
    width:40%;
}
</style>
