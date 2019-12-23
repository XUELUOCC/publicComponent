<template>
  <div id='scroll' v-scroll="loadMore">
      <ul>
          <li v-for='item in persons' :key=item.id>{{item.value}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      newslist:[],
      persons:[
          {
              id:'0',
              value:'111',
              text:'一'
          },
           {
               id:'1',
              value:'111',
              text:'一'
          },
           {
               id:'2',
              value:'111',
              text:'一'
          },
          {
              id:'3',
              value:'111',
              text:'一'
          },
          {
              id:'4',
              value:'111',
              text:'一'
          },
          {
              id:'5',
              value:'111',
              text:'一'
          },
          {
              id:'6',
              value:'111',
              text:'一'
          },
          {
              id:'7',
              value:'111',
              text:'一'
          },
          {
              id:'8',
              value:'111',
              text:'一'
          },
          {
              id:'9',
              value:'111',
              text:'一'
          },
          {
              id:'10',
              value:'111',
              text:'一'
          },
      ]
    }
  },
  mounted(){
     
  },
  created(){
  },
  directives: {
    scroll: {
        //inserted:DOM节点刷新完成
        //scroll事件：是元素滚动才能触发！！！父元素#scroll并没有滚动，此时滚动的是#scroll中的子元素ul，注意！！！！是el滚动才能触发事件
        inserted: function (el, binding){
            el.addEventListener('scroll', ()=> {
                console.log('滚动')
                //scrollTop+clientHeight==scrollHeight --------滚动条到达底部的条件--------当>=时说明刷新出来的数据大于内容区域的范围
                if(el.scrollTop + el.clientHeight >= el.firstChild.scrollHeight) {
                    console.log('load dataing');
                    // console.log(this)
                    // console.log(binding.value)
                    binding.value()  //是指令传递的值，此时指令传递的为一个函数方法
                }
            })
        }

 }

},
  methods: {
    loadMore(){
        console.log('jjjjj')
       this.persons.push({
           id:this.persons.length+1,
            value:'111',
            text:'一'
       })
    }
  }
}
</script>

<style scoped>
ul{
    list-style: none;
    width:100%;
    height:100%;
    /* margin:0; */
}
ul li{
    text-align: center;
    font-size:18px;
    height:40px;
}
#scroll{
    width:100%;
    height:250px;
    border:1px solid red;
    overflow:auto;
}
</style>
