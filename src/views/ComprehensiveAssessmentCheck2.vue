<!--
 * @Author: STATICHIT 2394412110@qq.com
 * @Date: 2023-3-20 21:58:13
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2024-04-02 00:02:21
 * @FilePath: \collegeApplication\src\views\ComprehensiveAssessmentCheck2.vue
 * @Description:学生综合测评表公示页面
-->
<template>
  <div class="show-container">
    <div class="title"><div class="text">综合测评表公示</div></div>
    <hr />
    <div class="checkMonth">
      <el-select
        v-model="data.curMonth"
        :disabled="data.loadOk"
        placeholder="请选择要查询的综测月份"
        class="select"
        @change="reSearch"
      >
        <el-option
          v-for="item in data.monthes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <h1>班级综合测评表</h1>
    </div>

    <br />
    <div>
      <div class="mt-4">
        <el-input
          v-model="data.search"
          placeholder="请输入查询关键字"
          class="input-with-select input-style"
        >
          <template #append>
            <el-button @click="reSearch" :disabled="data.loadOk"
              ><el-icon><Search /></el-icon
            ></el-button>
          </template>
        </el-input>
      </div>
    </div>
    <br />
    <el-table
      v-loading.lock="data.loading"
      :data="data.assessments"
      style="width: 100%"
      @cell-mouse-enter="handleCellEnter"
      @cell-mouse-leave="handleCellLeave"
    >
      <el-table-column prop="userNumber" label="学号" min-width="120" />
      <el-table-column prop="username" fixed label="姓名" min-width="150" />
      <el-table-column label="德育">
        <el-table-column prop="add1" label="加分明细" min-width="120" />
        <el-table-column prop="sub1" label="减分明细" min-width="120" />
        <el-table-column prop="point1" label="得分" min-width="60" />
      </el-table-column>
      <el-table-column label="智育">
        <el-table-column prop="add2" label="加分明细" min-width="120" />
        <el-table-column prop="sub2" label="减分明细" min-width="120" />
        <el-table-column prop="point2" label="得分" min-width="60" />
      </el-table-column>
      <el-table-column label="体育">
        <el-table-column prop="add3" label="加分明细" min-width="120" />
        <el-table-column prop="sub3" label="减分明细" min-width="120" />
        <el-table-column prop="point3" label="得分" min-width="60" />
      </el-table-column>
      <el-table-column label="美育">
        <el-table-column prop="add4" label="加分明细" min-width="120" />
        <el-table-column prop="sub4" label="减分明细" min-width="120" />
        <el-table-column prop="point4" label="得分" min-width="60" />
      </el-table-column>
      <el-table-column label="劳动">
        <el-table-column prop="add5" label="加分明细" min-width="120" />
        <el-table-column prop="sub5" label="减分明细" min-width="120" />
        <el-table-column prop="point5" label="得分" min-width="60" />
      </el-table-column>
      <el-table-column label="当月综合测评得分" fixed="right">
        <el-table-column prop="add_total" label="月加分" min-width="50" />
        <el-table-column prop="sub_total" label="月减分" min-width="50" />
        <el-table-column prop="pre_total" label="上月得分" min-width="50" />
        <el-table-column
          prop="point_total"
          label="当月总分"
          sortable
          min-width="50"
        />
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-box">
      <el-pagination
        layout="total,sizes,prev,pager,next"
        :page-size="data.page.pageSize"
        :page-sizes="[15, 20, 40, 100]"
        :pager-count="10"
        :total="data.page.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        class="pagination"
      />
    </div>
  </div>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import { getMonthName } from "@/assets/js/utils/month";
import { KEYWORD } from "@/constants/regular-expression";
import studentFun from "@/api/student";
const data = reactive({
  search: "",
  assessments: [],
  page: {
    total: 200, // 总条数
    currentPage: 1, // 当前页
    pageSize: 15, //一页的数据量
  },
  curMonth: 0,
  monthes: [],
  loading: false,
  loadOk: true,
});
onMounted(() => {
  init();
});
function init() {
  getAssessmentMonth(); //获取可选月份方法
  getAssessmentDetails(); //获取综测信息
}
//获取可选月份方法
function getAssessmentMonth() {
  studentFun.assess.studentGetMonthes().then((res) => {
    res.forEach((item) => {
      data.monthes.push({
        value: item,
        label: getMonthName(item),
      });
    });
  });
}
//获取综测信息
function getAssessmentDetails() {
  if (KEYWORD.test(data.search)) {
    data.loading = true;
    data.loadOk = true;
    studentFun.assess
      .getAssessmentClass({
        keyword: data.search,
        month: data.curMonth,
        rank: 0,
        current: data.page.currentPage,
        size: data.page.pageSize,
      })
      .then((res) => {
        data.assessments = [];
        data.page.currentPage = res.current;
        data.page.pageSize = res.size;
        data.page.total = res.total;
        res.records.forEach((item) => {
          data.assessments.push(item.content);
        });
        if (data.curMonth == 0) {
          data.curMonth = res.records[0].month;
        }
        data.loading = false;
        data.loadOk = false;
      });
  } else {
    data.assessments = [];
    data.page.total = 0;
  }
}
//重新查询
function reSearch() {
  data.page.currentPage = 1;
  getAssessmentDetails();
}
//改变分页页数
const handleCurrentChange = (val) => {
  data.page.currentPage = val;
  getAssessmentDetails();
};
//改变单页数
const handleSizeChange = (val) => {
  data.page.pageSize = val;
  getAssessmentDetails();
};
</script>
<style src="@/assets/css/show-container.css" scoped></style>
<style src="@/assets/css/assessment/comprehensiveAssessmentCheck2.scss" lang="scss" scoped />