<template>
  <div>
      <h3>日历组件</h3>
      <div class="date">
        <div class="dateTop">
          <div class="dateTopCenter">
            <span @click="DateYearReduce" class="el-icon-d-arrow-left"></span>
            <span @click="DateMonthReduce"  class="el-icon-arrow-left"></span>
            <!-- <span  class="el-icon-arrow-left"></span> -->
            <span v-text="date" ></span>
            <span @click="DateMonthAdd"  class="el-icon-arrow-right"></span>
            <!-- <span  class="el-icon-arrow-right"></span> -->
            <span @click="DateYearAdd" class="el-icon-d-arrow-right"></span>
          </div>
        </div>
        <div class="dateContent">
          <ul class="week">
            <li>
              <span v-for="item in list" :key="item.id" >{{item.value}}</span>
            </li>
          </ul>
          <ul class="weekList">
            <li v-for="(item,index) in dateList" :key="index"  >
              <span :class="{'item':itemIndex==index}" @click="setStyle(index)">{{item}}</span>
              <!-- <span :class="{'item':this.day==index}" @click="setStyle(index)">{{item}}</span> -->
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[
        {
          id:'1',
          value:'一'
        },
        {
          id:'2',
          value:'二'
        },
        {
          id:'3',
          value:'三'
        },
        {
          id:'4',
          value:'四'
        },
        {
          id:'5',
          value:'五'
        },
        {
          id:'6',
          value:'六'
        },
        {
          id:'7',
          value:'日'
        }
      ],
      dateList:[],
      listWeek:[],
      stamp:new Date(),
      date:'',
      year:'22',
      month:'33',
      day:'44',
      dayItems:'',
      flag:false,
      itemIndex:'',
      lastArr:'',  //上一个月的显示出来的天数数组
      tips:'',     //存储每个月第一天的索引
    }
  },
  mounted(){
    this.getList()
  },
  methods: {
    //重加载函数
    getList(){
      console.log('重加载')
      console.log(new Date().getDay())
      this.year=new Date().getFullYear();
      this.month= new Date().getMonth()+1;
      this.day=new Date().getDate();
      this.date=this.year+'年'+this.month+'月'+this.day+'日';
      console.log(this.date)
      this.setDay();
    },
    //年份递减
    DateYearReduce(){
      console.log(this.date)
      this.year=this.year-1;
      this.setDay()
      this.date=this.year+'年'+this.month+'月'+this.day+'日';
    },
    //年份增加
    DateYearAdd(){
       this.year=this.year+1;
       this.setDay()
       this.date=this.year+'年'+this.month+'月'+this.day+'日';
    },
    //月份递减
    DateMonthReduce(){
      this.month=this.month-1;
      if(this.month<1){
        console.log(this.month+'kkkkkkkkk')
        this.year--;
        this.month=12;
      }
      this.date=this.year+'年'+this.month+'月'+this.day+'日';
       this.setDay()
    },
    //月份增加
    DateMonthAdd(){
      console.log('增加是')
      console.log(this.month)
      this.month=parseInt(this.month) +1;
      console.log(this.month)
      if(this.month>12){
        this.year++;
        this.month=1;
      }
      console.log(this.month,this.year)
       this.setDay()
      this.date=this.year+'年'+this.month+'月'+this.day+'日';
    },
    setDay(){
      console.log(this.month)
      //当前显示的天数
      this.dateList=[];
      this.listWeek=[];
      this.dayItems=new Date(new Date(this.year,this.month,0).getTime()-1000*3600*24).getDate()+1;
      for(var i=1;i<this.dayItems+1;i++){
        this.dateList.push(i);
      }
      //上一个月的天数
      var lastDate=new Date(new Date(this.year,this.month-1,0).getTime()-1000*3600*24).getDate()+1;
      console.log(lastDate)
      //判断每个月的第一天星期
      var weekDay=new Date(this.year+'-'+this.month+'-'+1).getDay();
      console.log(this.year,this.month,this.day, weekDay)
      if(weekDay==0){
        weekDay=7;
      }
      //计算和添加空缺的几天
      //创建一个空数组listWeek，作为媒介，获取到weekDay的每一项
      for(var i=0;i<weekDay-1;i++){
        // this.dateList.unshift('')
        console.log(weekDay)
        console.log(i)
        this.listWeek.push(i)
        console.log(this.listWeek)
        console.log()
        //计算和添加空缺的几天
        this.dateList.unshift(lastDate-this.listWeek[i])    
      }
      //
      console.log(this.dateList)
      console.log(this.month,this.year)
      this.date=this.year+'年'+this.month+'月'+this.day+'日';

      //给当前日期添加样式
      for(var i=0;i<this.dateList.length;i++){
        if(this.day==this.dateList[i]){
          this.itemIndex=i;
          // this.flag=true;
        }
      }
    },
    //点击，span样式改变
    setStyle(index){
      console.log(index)
      console.log(this.listWeek.length)
      console.log(this.dateList)
      console.log(this.tips)
        for(var i=0;i<this.dateList.length;i++){
          //  console.log(this.dateList[i])
          if(index==i){
            console.log(index,i)
            this.itemIndex=i;
            this.day=this.dateList[i];
            this.lastArr=this.dateList.slice(0,this.listWeek.length) 
            console.log(this.lastArr)
            console.log(i)
            console.log(this.lastArr.length)
            if(this.lastArr.length>=i+1 ){
              console.log(i+1)
              if(this.month>1){
                this.date=this.year+'年'+(this.month-1)+'月'+this.day+'日';
              }else{
                this.date=(this.year-1)+'年'+12+'月'+this.day+'日';
              }
            console.log(this.date)
            }else{
              this.date=this.year+'年'+this.month+'月'+this.day+'日';
            }
            
          }
        }
       
    }
  }
}
</script>

<style scoped>
.date{
  width:100%;
  /* height:290px; */
  border:1px solid #ccc;
}
.dateTop{
  width:100%;
  height:50px;
  border-bottom:1px solid #ccc;
}
.dateContent{
  width:100%;
  /* height:240px; */
}
.week{
  list-style:none;
  width:100%;
  height:40px;
  margin:0;
}
.week li{
  width:100%;
  height:40px;
  border-bottom:1px solid #ccc;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding:0 5px;
}
.week li span{
  width:12%;
  display:inline-block;
  text-align: center;
}
.dateTopCenter{
  width:65%;
  height:100%;
  margin:0 auto;
  /* border:1px solid red; */
  display:flex;
  justify-content: center;
  align-items: center;
}
.dateTopCenter{
  font-size:18px;
}
.weekList{
  list-style: none;
  width:100%;
  /* height:200px; */
  display:flex;
  margin:0;
  justify-content: flex-start;
  flex-wrap:wrap;
  /* padding-left:5px; */
  /* align-items: center; */
}
.weekList li{
  width:14.27%;
  height:40px;
  border-bottom:1px solid #ccc;
}
.weekList li span{
  width:100%;
  height:100%;
  display:inline-block;
  text-align: center;
}

/*选中的样式*/
.item{
  color:#fff;
  background-color:#409eff;
}
/* span:hover{
  color:#fff;
  background-color:#409eff;
} */
</style>
