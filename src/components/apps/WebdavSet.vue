<template>
  <div class="set">
    设置webdav路径
    <div class="set-item">
      <div class="label">Url：</div>
      <div class="content">
        <WinInput type="text" v-model="webdavUrl" />
      </div>
    </div>
    <div class="set-item">
      <div class="label">用户名：</div>
      <div class="content">
        <WinInput v-model="webdavUsername" />
      </div>
    </div>
    <div class="set-item">
      <div class="label">密码：</div>
      <div class="content">
        <WinInput v-model="webdavPassword" />
      </div>
    </div>

    <div class="set-item">
      <div class="label">挂载路径：</div>
      <div class="content">
        <WinInput v-model="webdavPath" />
      </div>
    </div>

    <div class="set-item">
      <div class="label"></div>
      <div class="content"></div>
    </div>

    <WinButtonVue @click="click">确定</WinButtonVue>
  </div>
</template>
<script setup lang="ts">
import { Dialog, WinButtonVue, WinInput } from "vtron";
import { inject, ref } from "vue";

const webdavUrl = ref(localStorage.getItem("webdav_url") || "");
const webdavPath = ref(localStorage.getItem("webdav_path") || "");
const webdavUsername = ref(localStorage.getItem("webdav_username") || "");
const webdavPassword = ref(localStorage.getItem("webdav_password") || "");

function click() {
  localStorage.setItem("webdav_url", webdavUrl.value || "");
  localStorage.setItem("webdav_path", webdavPath.value || "");
  localStorage.setItem("webdav_username", webdavUsername.value || "");
  localStorage.setItem("webdav_password", webdavPassword.value || "");
  Dialog.showMessageBox({
    type: "info",
    title: "提示",
    message: "设置成功,请重新启动",
  });
}
</script>
<style scoped>
.set {
  position: relative;
  left: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.set-item {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.label {
  width: 80px;
  text-align: right;
}
.content {
  flex: 1;
}
</style>
