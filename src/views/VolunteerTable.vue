<!--
 * @Author: STATICHIT 2394412110@qq.com
 * @Date: 2024-03-10 17:27:37
 * @LastEditors: STATICHIT 2394412110@qq.com
 * @LastEditTime: 2024-04-08 14:01:41
 * @FilePath: \collegeApplication\src\views\VolunteerTable.vue
 * @Description: 志愿填报批次列表
-->
<template>
  <div>
    <el-table
      :data="data.volunteers"
      style="width: 100%"
      v-loading.lock="data.loading"
    >
      <el-table-column fixed prop="type" label="志愿填报类型" width="150">
        <template #default="scope">
          <b v-if="scope.row.type == true">正式填报</b>
          <b v-if="scope.row.type == false">预填报</b>
        </template>
      </el-table-column>
      <el-table-column prop="startTime" label="填报起始时间" width="200" />
      <el-table-column prop="endTime" label="填报截止时间" width="200" />
      <el-table-column prop="state" label="状态" width="120">
        <template #default="scope">
          <span v-if="scope.row.state == 1">填报中</span>
          <span v-if="scope.row.state == 0">暂未开启</span>
          <span v-if="scope.row.state == 2">已关闭</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row)"
            :disabled="scope.row.state !== 1"
            >进入填报页面</el-button
          >
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick2(scope.row)"
            >查询填报历史</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <span class="tip">志愿填报分为预填报和正式填报</span>
  </div>
  <el-dialog
    v-model="data.dialogVisible"
    title="志愿填报记录"
    width="1000"
    align-center
  >
    <el-table :data="data.historys" style="width: 100%">
      <el-table-column prop="updateTime" label="填报时间" width="180" />
      <el-table-column prop="firstName" label="第一志愿" width="180" />
      <el-table-column prop="secondName" label="第二志愿" width="180" />
      <el-table-column prop="thirdName" label="第三志愿" width="180" />
      <el-table-column prop="signature" label="签名">
        <template #default="scope"
          ><div class="sign-box">
            <el-image class="sign" :src="scope.row.signature" fit="contain" />
          </div>
        </template>
      </el-table-column>
    </el-table>
    <span>最新填报方案为您的当前填报结果</span>
  </el-dialog>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import volunteerFun from "@/api/volunteer";
const router = useRouter();
const data = reactive({
  volunteers: [],
  historys: [],
  dialogVisible: false,
  loading: false,
});
onMounted(() => {
  getVolunteerTable();
});
//获取填报批次列表
function getVolunteerTable() {
  data.loading = true;
  volunteerFun.student.getWishTable().then((res) => {
    data.volunteers = res;
    data.loading = false;
  });
}
//进入填报页面
const handleClick = (row) => {
  if (row.state == 1) {
    router.replace({
      name: "volunteer-check",
      query: { id: row.id },
    });
  } else {
    ElMessage.error("当前填报入口暂未开放");
  }
};
//进入查询填报历史页面
const handleClick2 = (row) => {
  data.historys = row.autographList;
  data.dialogVisible = true;
};
</script>
<style src="@/assets/css/student/volunteerTable.scss" lang="scss" scoped/>