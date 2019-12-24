<template>
  <div>
      <h3>日历组件</h3>
      <div class="date">
        <div class="dateTop">
          <div class="dateTopCenter">
            <span @click="DateYearReduce" class="el-icon-d-arrow-left"></span>
            <span @click="DateMonthReduce"  class="el-icon-arrow-left"></span>
            <!-- <span  class="el-icon-arrow-left"></span> -->
            <span>{{year}}年{{month}}月{{day}}号</span>
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
              <span :class="{'item':itemIndex==index}">{{item}}</span>
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
      stamp:new Date(),
      date:'',
      year:'',
      month:'',
      day:'',
      dayItems:'',
      // itemIndex:false
    }
  },
  mounted(){
    console.log(new Date().getDay())
    this.year=new Date().getFullYear();
    this.month= new Date().getMonth()+1;
    this.day=new Date().getDate();
    this.date=this.year+'-'+this.month+'-'+this.day;
    this.setDay();
  },
  methods: {
    //年份递减
    DateYearReduce(){
      console.log(this.date)
      this.year=this.year-1;
      this.setDay()
    },
    //年份增加
    DateYearAdd(){
       this.year=this.year+1;
       this.setDay()
    },
    //月份递减
    DateMonthReduce(){
      this.month=this.month-1;
      if(this.month<1){
        console.log(this.month+'kkkkkkkkk')
        this.year--;
        this.month=12;
      }
       this.setDay()
    },
    //月份增加
    DateMonthAdd(){
      console.log('增加是')
      console.log(this.month)
      this.month=parseInt(this.month+1) ;
      console.log(this.month)
      // if(this.month>=12){
        this.year++;
        this.month=1;
      // }
       this.setDay()
    },
    setDay(){
      //当前显示的天数
      this.dateList=[];
      // console.log(new Date(new Date(2019,10,0).getTime()-1000*3600*24).getDate()+1)
      this.dayItems=new Date(new Date(this.year,this.month,0).getTime()-1000*3600*24).getDate()+1;
      // console.log(this.dayItems)
      for(var i=1;i<this.dayItems+1;i++){
        this.dateList.push(i);
      }
      // console.log(this.dateList)
      //上一个月的天数
      if(parseInt(this.month-1)==0){
          this.year=parseInt(this.year-1) ;
          this.month='12'
      }
      var lastDate=new Date(new Date(this.year,this.month-1,0).getTime()-1000*3600*24).getDate()+1;
      // console.log(lastDate)
      //判断每个月的第一天星期
      var weekDay=new Date(this.year+'-'+this.month+'-'+1).getDay();
      // console.log(this.year,this.month,this.day, weekDay)
      if(weekDay==0){
        weekDay=7;
      }
      for(var i=0;i<weekDay-1;i++){
        this.dateList.unshift('')
      }
      console.log(this.dateList)

      //给当前日期添加样式
      for(var i=0;i<this.dateList.length;i++){
        if(this.day==this.dateList[i]){
          this.itemIndex=i;
        }
      }
    },
    setStyle(index){
      // console.log(index)
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
  border:1px solid red;
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
