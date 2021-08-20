<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-19 15:52:09
 * @Description: 
 * @FilePath: /publishTest/src/App.vue
-->
<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div class="outer">
    <Win10></Win10>
  </div>

</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { computerCTC, WindowIPC } from 'vue3-win10'

import logo from "./assets/logo.png";
// console.log(HelloWorldVue)
import { AddToDesktop, ClearDesktop } from "vue3-win10";
// import Adm_loadingVue from "./components/Adm_loading.vue";


import computer from "./assets/computer.ico"
import beat from "./assets/beat.ico"
import brow from "./assets/浏览器.png"
import term from "./assets/term.ico"
import vscode from "./assets/vscode.png"
// import img1 from "../assets/term.ico"
import GitHub from "./assets/GitHub.png"




import Test1 from "./components/apps/Test1.vue"
import Test2 from "./components/apps/Test2.vue"
import Test3 from "./components/apps/Test3.vue"

import app_console from "./components/apps/app_console.vue"
import app_vscode from "./components/apps/app_vscode.vue"
import Adm_loading from "./components/apps/Adm_loading.vue"
import GitStars from "./components/apps/GitStars.vue"

// console.log(AddToDesktop)
setTimeout(() => { }, 3000);
ClearDesktop();
AddToDesktop({
  name: '我的电脑',
  apptemp: 'Test1',
  icon: computer,
  width: 400,
  height: 400,
  tmp: Test1
});

AddToDesktop({
  name: '版本信息',
  apptemp: 'Test2',
  icon: beat,
  width: 100,
  height: 100,
  tmp: Test2
});
AddToDesktop({
  name: '浏览器',
  apptemp: 'Test3',
  icon: brow,
  width: 600,
  height: 500,
  tmp: Test3
});
AddToDesktop({
  name: '终端',
  apptemp: 'app_console',
  icon: term,
  width: 400,
  height: 400,
  tmp: app_console

});
AddToDesktop({
  name: 'vscode',
  apptemp: "app_vscode",
  icon: vscode,
  width: 600,
  height: 500,
  tmp: app_vscode
});
AddToDesktop({
  name: '后台管理',
  apptemp: "Adm_loading",
  icon: term,
  width: 300,
  height: 400,
  tmp: Adm_loading
});
AddToDesktop({
  name: '点个star',
  apptemp: "GitStars",
  icon: GitHub,
  width: 300,
  height: 400,
  tmp: GitStars
});



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}

</style>
<style scoped>
.outer {
  width: 80vw;
  height: 90vh;
}
</style>
