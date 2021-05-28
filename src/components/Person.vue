<template>
  <div>
    <!-- <navBar></navBar> -->
      <h1>用户管理</h1>
      <common></common>

      <div id="person">
        <div class="inputs">
          <el-input
          style="width:50%;height:20px;margin:10px;"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="search">
        </el-input>
          <!-- <el-button type="primary" @click='search'>搜索</el-button> -->
        </div>

          <el-table  :data="dataList" id="out-table" border  stripe fit>
              <el-table-column label="职位名称" align="center" width="100" >
                 <template slot-scope="scope" >
                  {{ scope.row.posnName}}
                </template>
              </el-table-column>
              <el-table-column label="计划名称" align="center" width="150" >
                 <template slot-scope="scope">
                  {{scope.row.title}}
                </template>
              </el-table-column>
              <el-table-column label="计划内批次统计">
                <el-table-column label="批次" align="center" width="150">
                  <template slot-scope="scope" >
                    {{'批次'+ scope.row.batch}}
                </template>
                </el-table-column>
                <el-table-column label="批次内需求数量" align="center" width="150" >
                   <template slot-scope="scope" >
                  {{scope.row.shouldBeRecruited}}
                </template>
                </el-table-column>
               </el-table-column>
            </el-table>
        <el-button @click="download">导出</el-button>
        <el-button @click="download1">导出1</el-button>
      </div>

  </div>
</template>

<script>
import FileSaver from "file-saver";
    import XLSX from "xlsx";
import navBar from '../common/NavBar/NavBar'
import common from '../components/common'
export default {
   components:{
        navBar,
        common
    },
  data () {
    return {
      msg: '',
      search:'',
      dataList:[
        {
          posnName: '2016-05-02',
          title: '王辉',
          batch: '上海市普陀区金沙江路 1518 弄',
          shouldBeRecruited:0
        }, {
          date: '2016-05-04',
          name: '李云',
          address: '上海市普陀区金沙江路 1517 弄',
          grender:1
        }, {
          date: '2016-05-01',
          name: '赵虎',
          address: '上海市普陀区金沙江路 1519 弄',
          grender:0
        }, {
          date: '2016-05-03',
          name: '钱小龙',
          address: '上海市普陀区金沙江路 1516 弄',
          grender:1
        }
      ]
    }
  },
  methods: {
    setData(){
      // console.log(this.datas)
      // this.datas.forEach((item)=>{
      //   if(item.grender==0){
      //     item.grender='女'
      //   }else if(item.grender==1){
      //     item.grender='男'
      //   }
      // })
    } ,
      download(){
        /* 从表生成工作簿对象 */
        var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
        /* 获取二进制字符串作为输出 */
        var wbout = XLSX.write(wb, {
                  bookType: "xlsx",
                  bookSST: true,
                  type: "array"
                });
        try {
            FileSaver.saveAs(
            //Blob 对象表示一个不可变、原始数据的类文件对象。 //Blob 表示的不一定是JavaScript原生格式的数据。
            //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
            //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
            new Blob([wbout], { type: "application/octet-stream" }),
            //设置导出文件名称
            "sheetjs.xlsx"
            );
            } catch (e) {
                if (typeof console !== "undefined")
                    console.log(e, wbout);
              }
              return wbout;
      },
        download1(){
        /* 从表生成工作簿对象 */
        var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
        /* 获取二进制字符串作为输出 */
        var wbout = XLSX.write(wb, {
                  bookType: "xlsx",
                  bookSST: true,
                  type: "array"
                });
        try {
            FileSaver.saveAs(
            //Blob 对象表示一个不可变、原始数据的类文件对象。 //Blob 表示的不一定是JavaScript原生格式的数据。
            //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
            //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
            new Blob([wbout], { type: "application/octet-stream" }),
            //设置导出文件名称
            "sheetjs.xlsx"
            );
            } catch (e) {
                if (typeof console !== "undefined")
                    console.log(e, wbout);
              }
              return wbout;
      }


  },
  mounted(){
    this.setData()
  },
  //计算属性computed
  //用于计算在template模板中的变量，该变量一般为插值表达式中的变量
  //通过在computed中对该变量进行操作和计算，一般而言，操作的数据在data中，通过data中的数据来限制插值表达式中的变量
  //优点：
    //防止差值表达式中的复杂的逻辑堆叠
    //且其计算属性拥有缓存功能，即只要data中的相关联的数据不发生改变，其computed中的计算的变量或者属性就不会再次调用或者刷新
  computed:{
    tableData(){
      const search=this.search;
      if(search){
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
       return this.datas.filter(data => {
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              //Object.keys()---如果处理对象，将返回一个可进行枚举的属性数组，注意，是返回一个数组，是通过属性名组成的数组
              //Object.keys()---参数：要返回其枚举自身属性的对象；  返回值：一个表示给定对象的所有可枚举属性的字符串数组
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
      }
        return this.datas
      }
  }
}
</script>

<style scoped>
#person{
  width:800px;
  height:400px;
  margin:0 auto;
  border:1px solid red;
}
.inputs{
  width:100%;
  height:60px;
  /* border:1px solid red; */
}
</style>
