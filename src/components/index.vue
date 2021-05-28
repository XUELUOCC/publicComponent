<template>
  <section class="monitoringpoint">
    <section style="margin: 0px 20px 0px 20px;">

      <el-tabs v-model="needsTabs" @tab-click="planTabsClick">
        <el-tab-pane
          label="招聘需求统计"
          name="recruitmentNeeds"
        >
        <div style="padding-left: 20px;">

            <el-form :inline="true" :model="query" style="margin-top:20px;" size="small">
              <el-row :gutter="10">
                <el-form-item label="部门">
                  <el-select size="mini" v-model="query.deptName"
                             style="width: 200px;">
                    <el-option
                      v-for="item in selectOption_dept"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" icon="el-icon-search" @click="search">查询</el-button>
                  <el-button type="primary" size="mini" icon="el-icon-download" @click="download">下载</el-button>
                </el-form-item>
              </el-row>
            </el-form>
          </div>
          <div>
            <el-table v-loading="tableLoading" :data="dataList" id="out-table" border  stripe fit>
              <el-table-column label="职位名称" align="center" width="100" fixed>
                <template slot-scope="scope" >
                  {{ scope.row.posnName}}
                </template>
              </el-table-column>
              <el-table-column label="计划名称" align="center" width="150" fixed>
                <template slot-scope="scope">
                  {{scope.row.title}}
                </template>
              </el-table-column>
              <el-table-column label="计划内批次统计">
              <el-table-column label="批次" align="center" width="150">
                <template slot-scope="scope" v-if="scope.row.batch!=undefined && scope.row.batch != ''" >
                    {{'批次'+ scope.row.batch}}
                </template>
              </el-table-column>
              <el-table-column label="批次内需求数量" align="center" width="150" >
                <template slot-scope="scope" v-if="scope.row.batch!=undefined && scope.row.batch != ''">
                  {{scope.row.shouldBeRecruited}}
                </template>
              </el-table-column>
              <el-table-column label="已招聘数量" align="center" width="150" >
                <template slot-scope="scope">
                  {{scope.row.actualRecruitment}}
                </template>
              </el-table-column>
              <el-table-column label="期望到岗时间" align="center" width="160"  property="onboardPlanTime">
                <template slot-scope="scope" v-if="scope.row.batch!= null">
                  {{renderTime(scope.row.deadline)}}
                </template>
              </el-table-column>
              <el-table-column label="转化率" align="center" width="150" >
                <template slot-scope="scope" v-if="scope.row.actualRecruitment!=undefined && scope.row.recruitingNumbers!= undefined">
                  {{ (scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="完成度" align="center" width="150" >
                <template slot-scope="scope" v-if="scope.row.actualRecruitment!=undefined && scope.row.recruitingNumbers!= undefined">
                  {{ (scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100}}%
                </template>
              </el-table-column>

              <el-table-column label="预警" align="center" width="150" >
                <template slot-scope="scope">
                  <el-tag v-if="(scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100 < 90" type="info" effect="dark" size='mini' style="background-color: red">
                    完成度较低
                  </el-tag>
                  <el-tag v-if="(scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100 >= 90 && (scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100 <100 " type="info" effect="dark" size='mini' style="background-color: orange">
                    完成度较高
                  </el-tag>
                  <el-tag v-if="(scope.row.actualRecruitment/scope.row.recruitingNumbers) * 100 === 100  " type="info" effect="dark" size='mini' style="background-color: green">
                    已完成
                  </el-tag>
                </template>
              </el-table-column>
              </el-table-column>
            </el-table>
            <!-- 页码区 -->
            <div class="block">
              <el-pagination
                :current-page="page.curPage"
                :page-sizes="[10, 15, 20, 30]"
                :page-size="page.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="page.total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
              />
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane
          label="转化率统计表"
          name="underlingplan"
        >
          <div style="padding-left: 20px;">

            <el-form :inline="true" :model="underlingQuery" style="margin-top:20px;" size="small">
              <el-row :gutter="10">
                <el-form-item label="部门">
                  <el-select size="mini" v-model="underlingQuery.deptName"
                             style="width: 200px;">
                    <el-option
                      v-for="item in selectOption_dept"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" size="mini" icon="el-icon-search" @click="search">查询</el-button>
                  <!--<el-button type="primary" size="mini" icon="el-icon-download" @click="downloads">下载</el-button>-->
                </el-form-item>
              </el-row>
            </el-form>
          </div>
          <div>
            <el-table v-loading="underlingTableLoading" :data="underlingDataList" id = "table" border stripe fit >
              <el-table-column label="职位名称" align="center" width="100" fixed>
                <template slot-scope="scope" >
                  {{ scope.row.posnName}}
                </template>
              </el-table-column>
              <el-table-column label="计划名称" align="center" width="150" fixed>
                <template slot-scope="scope">
                  {{scope.row.title}}
                </template>
              </el-table-column>
              <el-table-column label="批次" align="center" width="100">
                <template slot-scope="scope" v-if="scope.row.batch!=undefined && scope.row.batch != ''" >
                  {{'批次'+ scope.row.batch}}
                </template>
              </el-table-column>
              <el-table-column label="需求数量" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.shouldBeRecruited}}
                </template>
              </el-table-column>
              <el-table-column
                width="70"
                align="center"
                :render-header="icons">
                <template slot-scope="scope" v-if="scope.row.resumeNum!=undefined && scope.row.shouldBeRecruited!= undefined && (scope.row.resumeNum/scope.row.shouldBeRecruited) * 100 >= 0" >
                  {{ (scope.row.resumeNum/scope.row.shouldBeRecruited) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="简历数量" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.resumeNum}}
                </template>
              </el-table-column>
              <el-table-column
                width="70"
                align="center"
                :render-header="icons">
                <template slot-scope="scope" v-if="scope.row.resumeNum!=undefined && scope.row.needResumeCount!= undefined &&(scope.row.needResumeCount/scope.row.resumeNum) * 100>=0">
                  {{ (scope.row.needResumeCount/scope.row.resumeNum) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="浏览简历数量" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.needResumeCount}}
                </template>
              </el-table-column>
              <el-table-column
                width="70"
                align="center"
                :render-header="icons">
                <template slot-scope="scope" v-if="scope.row.inviteNum!=undefined && scope.row.needResumeCount!= undefined && (scope.row.inviteNum/scope.row.needResumeCount) * 100 >=0">
                  {{ (scope.row.inviteNum/scope.row.needResumeCount) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="邀约通知" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.inviteNum}}
                </template>
              </el-table-column>
              <el-table-column
                width="70"
                align="center"
                :render-header="icons">
                <template slot-scope="scope" v-if="scope.row.inviteNum!=undefined && scope.row.interviewNum!= undefined && (scope.row.interviewNum/scope.row.inviteNum) * 100 >= 0">
                  {{ (scope.row.interviewNum/scope.row.inviteNum) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="面试数量" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.interviewNum}}
                </template>
              </el-table-column>
              <el-table-column
                width="70"
                align="center"
                :render-header="icons">
                <template slot-scope="scope" v-if="scope.row.offerNum!=undefined && scope.row.interviewNum!= undefined &&(scope.row.offerNum/scope.row.interviewNum )*100>= 0">
                  {{ (scope.row.offerNum/scope.row.interviewNum) * 100}}%
                </template>
              </el-table-column>
              <el-table-column label="offer总数量" align="center" width="100">
                <template slot-scope="scope">
                  {{scope.row.offerNum}}
                </template>
              </el-table-column>
            </el-table>
            <!-- 页码区 -->
            <div class="block">
              <el-pagination
                :current-page="underlingPage.curPage"
                :page-sizes="[10, 15, 20, 30]"
                :page-size="underlingPage.size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="underlingPage.total"
                @size-change="underlingHandleSizeChange"
                @current-change="underlingHandleCurrentChange"
              />
            </div>
          </div>

        </el-tab-pane>
      </el-tabs>
    </section>
  </section>
</template>

<script>
  import {getRecruitmentNeeds,getStatisticsList} from '@/api/recruiting/plan.js'
  import store from "@/store";
  import { queryCompanyDept } from '@/api/dept/company_dept'
  import FileSaver from "file-saver";
  import XLSX from "xlsx";
  export default {
    name: 'Needs',
    components: {},
    // 初始化
    data() {
      return {
        selectOption_dept: [], // 下拉菜单部门
        query: { // 用于查询,初始值
          deptName: ''
        },
        underlingQuery: { // 用于查询,初始值
          deptName: ''
        },
        loginCompanyId: '',
        needsTabs: 'recruitmentNeeds',
        tableLoading: false, // 加载中(招聘需求)
        underlingTableLoading: false, // 加载中(转换率)
        dataList: [], // 列表数据
        underlingDataList: [], // 列表数据
        page: { // 页码区
          curPage: 0,
          size: 10,
          total: 0
        },
        underlingPage: { // 页码区
          curPage: 0,
          size: 10,
          total: 0
        },
      }
    },
    created() {

    },
    mounted() {
      const _self = this
      _self.loadList()
      _self.initSelect()
    },
    computed: {},
    methods: {

      // 初始化查询条件（下拉菜单、等）
      initSelect() {
        const _self = this
        // 部门名称-下拉菜单
        _self.selectOption_dept.push({value: '', label: '请选择'})
        var requestData = {}
        const {
          getters: {
            userInfo: {companyId}
          }
        } = store
        _self.loginCompanyId = companyId;
        requestData.companyId = _self.loginCompanyId
        queryCompanyDept(requestData).then(response=>{
          if (response.data !== null) {
            response.data.forEach(item => {
              const arr = {
                value: item.deptName ,
                lable: item.deptName
              }
              _self.selectOption_dept.push(arr)
              _self.loadList(_self.needsTabs)// 初始化完成加载列表数据
            })
          }
        })
      },
      download(){
        var wb = XLSX.utils.table_to_book(document.querySelector("#out-table"));
        var wbout = XLSX.write(wb, {
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        });
        try {
          FileSaver.saveAs(
            new Blob([wbout], { type: "application/octet-stream" }),
            "sheetjs.xlsx"
          );
        } catch (e) {
          if (typeof console !== "undefined")
            console.log(e, wbout);
        }
        return wbout;

      },
     /* downloads(){
        /!* 从表生成工作簿对象 *!/
        var wb = XLSX.utils.table_to_book(document.querySelector("#table"));
        /!* 获取二进制字符串作为输出 *!/
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
      },*/
      // 查询
      search() {
        this.loadList()
      },
     renderTime(date) {
      var dateee = new Date(date).toJSON();
      return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
     },
      icons(h,{column}){
        const inReview = '转换率'
        return h(
          'div', [
            h('span', column.label),
            h('el-tooltip', {
              props: {
                placement: 'top'
              }
            }, [
              h('div', {
                slot: 'content',
                style: {
                  'width':'40px',
                  whiteSpace: 'normal',
                  'margin-bottom': '10px'
                }
              }, inReview),
              h('i', {
                class: 'el-icon-refresh',
              })
            ],)
          ]
        )
      },
      // 加载列表
      loadList: function () {
        const _self = this
        if (_self.needsTabs !== undefined && _self.needsTabs !== '' && _self.needsTabs === 'underlingplan') {
          //转换率统计表
          _self.underlingTableLoading = true
          _self.underlingDataList = []
          // 查询条件
          var requestData = {currentPage: _self.underlingPage.curPage, pageSize: _self.underlingPage.size,}
          const {
            getters: {
              userInfo: {companyId}
            }
          } = store
          _self.loginCompanyId = companyId;
          requestData.companyId = _self.loginCompanyId
          if (_self.underlingQuery.deptName != '') {
            requestData.deptName = _self.underlingQuery.deptName
          }
           getStatisticsList(requestData).then(function (response) {
            _self.underlingTableLoading = false
            _self.underlingDataList = response.data
            _self.underlingPage.total = response.total
          })

        } else {
          //招聘需求dashboard
          _self.tableLoading = true
          _self.dataList = []
          // 查询条件
          var requestData = {currentPage: _self.page.curPage, pageSize: _self.page.size,}
          const {
            getters: {
              userInfo: {companyId}
            }
          } = store
          _self.loginCompanyId = companyId;
          requestData.companyId = _self.loginCompanyId
          if (_self.query.deptName != '') {
            requestData.deptName = _self.query.deptName
          }
          getRecruitmentNeeds(requestData).then(function (response) {
            if (response !== undefined && response !== '') {
              _self.tableLoading = false
              _self.dataList = response.data
              _self.page.total = response.total
            }
          })
        }
      },
      // 改变当前页
      handleCurrentChange: function (currentPage) {
        const _self = this
        _self.page.curPage = currentPage
        _self.loadList()
      },

      // 改变页面size
      handleSizeChange: function (size) {
        const _self = this
        _self.page.size = size
        _self.loadList()
      },
      // 改变当前页
      underlingHandleCurrentChange: function (currentPage) {
        const _self = this
        _self.underlingPage.curPage = currentPage
        _self.loadList()
      },

      // 改变页面size
      underlingHandleSizeChange: function (size) {
        const _self = this
        _self.underlingPage.size = size
        _self.loadList()
      },
      planTabsClick(tab, event) {
        if (tab.name === 'underlingplan') {
          this.loadList()
        }
      },
    }

  }

</script>

