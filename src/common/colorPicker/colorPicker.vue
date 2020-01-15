<template>
  <div>
      <h3>颜色选择器(未完成，思路转换成画布)</h3>
      <div class="content">
        <div class="colorPickerContent">
          <div class="colorPicker">
            <div class="left" ref="left"></div>
            <div class="right" ref="right"></div>
          </div>
          <div class="roll" @click="getColor" ref="roll"></div>
        </div>
        <div class="bottom">
          <input type="text" class="inputs" v-model="color">
          <div>
            <span style="margin-right:10px;color:#409eff">清除</span>
            <button class="btn" >确定</button>
          </div>     
        </div>
      </div>

      <div class="test" :style="{background:color}"></div>
      
  </div>
   
</template>

<script>

export default {
  data () {
    return {
      color:'',
  
    }
  },
  mounted(){
   
  },
  methods: {
    colorClick(e){
      console.log(e)
    },
    getColor(event){
      var g=event.clientX- this.$refs.roll.offsetLeft;
      var b=event.clientY- this.$refs.roll.offsetTop;
      console.log(g,b) 
      this.color='rgb('+'0,'+g+','+b+')';
      // console.log(this.color)
    }
  
  }
}
</script>

<style scoped>
.test{
  width:100px;
  height:30px;
  border:1px solid #ccc;
  margin:20px 30px;
}
.content{
  border:1px solid #ccc;
  width:510px;
  height:auto;
  padding:10px;
  margin-left:20px;
}
.colorPickerContent{
  width:490px;
  height:350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.colorPicker{
    width: 450px;
    height: 350px;
    position: relative;
    background: rgb(213, 0, 255);
}
.left{
  width:100%;
  height:100%;
  position:absolute;
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
}
.right{
  width:100%;
  height:100%;
  position:absolute;
  background: linear-gradient(to top, #000, transparent);
}
.roll{
  width: 27px;
  height: 350px;
  background: linear-gradient(to bottom, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red 100%);
}
.bottom{
  width:100%;
  height:50px;
   padding:5px;
  display:flex;
  justify-content: space-between;
  align-items: center;
}
.inputs{
  width:150px;
  height:30px;
  border:1px solid #ccc;
  border-radius:4px;
}
.btn{
  background-color:#fff;
  color:#606266;
  border:1px solid #ccc;
  border-radius:4px;
  padding: 4px 15px;
}
.btn:hover{
  border:1px solid #409eff;
  color:#409eff;
}
</style>
