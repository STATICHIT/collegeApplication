<template>
  <div class="common-aside">
    <div class="top">
      <div class="user">
        <div class="avatar">
          <img
            src="@/assets/image/jsdxLogo.png"
            :style="{ width: imgWidth, height: imgWidth }"
          />
        </div>
        <div class="name">
          <div class="user-name" v-if="!store.state.menu.isCollapse">
            吉首大学
          </div>
        </div>
        <div class="description" v-if="!store.state.menu.isCollapse">
          Jishou University
        </div>
      </div>
    </div>
    <div class="middle">
      <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        text-color="RGB(125,133,146)"
        :collapse="store.state.menu.isCollapse"
        :collapse-transition="false"
        @select="handleSelect"
      >
        <el-menu-item
          :index="item.path"
          v-for="item in menuDataForVue"
          :key="item.path"
        >
          <template #title>{{ item.menuName }}</template>
        </el-menu-item>
        <!-- 消息管理 -->
      </el-menu>
    </div>
    <div class="bottom">
      <div class="exit" @click="handleExit">
        <div>
          <img src="@/assets/image/exit.png" />
        </div>
        <div v-if="!store.state.menu.isCollapse">退出登录</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import apiFun from "@/api/user.js";
import store from "@/store";
import { useRouter } from "vue-router";
import {
  removeAccessToken,
  removeRefreshToken,
  removeRole,
} from "@/constants/token";
const router = useRouter();
const menuDataForVue = reactive(store.state.menu.menuData);
const imgWidth = ref(null);
// 设置图片展示的大小
const setImgWidth = () => {
  if (store.state.menu.isCollapse) {
    // 收缩
    imgWidth.value = "48px";
  } else {
    imgWidth.value = "70px";
  }
};
// 跳转界面
const handleSelect = (key, keyPath) => {
  router.push({ path: key });
};
// 退出
const handleExit = () => {
  apiFun.user.loginOut().then(() => {
    // 清除用户信息
    removeAccessToken();
    removeRefreshToken();
    removeRole();
    // 跳转界面
    const href = router.resolve({
      path: "/login",
    });
    window.open(href.href, "_self");
  });
};
onMounted(() => {
  setImgWidth();
});
</script>
<style scoped>
.common-aside {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
/* 个人信息 */
.user > div {
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
}
.menu {
  overflow: hidden;
  background-color: #fff;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.avatar > img {
  height: 4rem;
  width: 4rem;
}
.user-name {
  font-size: 1.2rem;
  font-weight: bolder;
  font-family: "Times New Roman", Times, serif;
}

.collapse {
  display: flex;
  align-items: center;
  justify-content: center;
}
.collapse img {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}
.description {
  font-family: "Times New Roman", Times, serif;
  font-size: 0.95rem;
}
/* 菜单样式设置 */
.el-menu {
  border: none !important;
  background-color: #fff;
}
.el-menu-item {
  justify-content: center;
  height: 3rem;
}
/* 设置菜单触发和点击的样式 */
.el-menu-item:hover,
.el-menu-item.is-active {
  border-right: 0.1rem solid RGB(65, 141, 254);
  color: RGB(63, 140, 255);
  background: RGB(235, 243, 255);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
::v-deep .el-badge__content.is-fixed {
  transform: translateY(-20%) translateX(100%);
}
.bottom {
  margin-bottom: 4rem;
}
/* 退出登录 */
.exit {
  display: flex;
  justify-content: center;
  color: RGB(125, 133, 146);
}
.exit > div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
}
.exit img {
  height: 1rem;
  width: 1rem;
}
</style>
