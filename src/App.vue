<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-01-28 10:37:38
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
import { SystemStatus, DragWindow, DWM } from 'vue3-win10'

import logo from "./assets/logo.png";
// console.log(HelloWorldVue)
import { AddToDesktop, ClearDesktop } from "vue3-win10";
// import Adm_loadingVue from "./components/Adm_loading.vue";


import computer from "./assets/computer.ico"
import beat from "./assets/beat.ico"
// import brow from "./assets/浏览器.png"
import brower from "./assets/brow.png"

import term from "./assets/term.ico"
import vscode from "./assets/vscode.png"
// import img1 from "../assets/term.ico"
import GitHub from "./assets/GitHub.png"
import backicon from "./assets/back.png"
import signalicon from "./assets/signal.png"
import winicon from "./assets/win.png"


import MyComputer from "./components/apps/MyComputer.vue"
import Test2 from "./components/apps/Test2.vue"
import Test3 from "./components/apps/Test3.vue"

import app_console from "./components/apps/app_console.vue"
import app_vscode from "./components/apps/app_vscode.vue"
import Adm_loading from "./components/apps/Adm_loading.vue"
import GitStars from "./components/apps/GitStars.vue"
import GotoAdminVue from './components/apps/GotoAdmin.vue';
import GotoReadMe from './components/apps/GotoReadMe.vue';


ClearDesktop();
AddToDesktop({
  name: '我的电脑',
  icon: computer,
  window: new DragWindow(
    {
      title: '我的电脑',
      icon: computer,
      width: 400,
      height: 400,
      content: MyComputer
    })
});

AddToDesktop({
  name: '版本信息',
  icon: beat,
  window: new DragWindow(
    {
      title: '版本信息',
      icon: beat,
      width: 250,
      height: 130,
      content: Test2,
      isScalable: false
    })
});
AddToDesktop({
  name: '浏览器',
  icon: brower,
  window: new DragWindow(
    {
      title: '浏览器',
      icon: brower,
      width: 800,
      height: 600,
      content: Test3,
    })

});
AddToDesktop({
  name: '终端',
  icon: term,
  window: new DragWindow({
    title: '终端',
    icon: term,
    width: 400,
    height: 400,
    content: app_console,
    isScalable: false
  })

});
AddToDesktop({
  name: 'vscode',
  icon: vscode,
  window: new DragWindow({
    title: 'vscode',
    icon: vscode,
    width: 600,
    height: 500,
    content: app_vscode
  })

});
// AddToDesktop({
//   name: '窗口通信',
//   icon: signalicon,
//   window: new DragWindow({
//     title: '窗口通信',
//     icon: signalicon,
//     width: 170,
//     height: 100,
//     content: Adm_loading
//   })
// });
// AddToDesktop({
//   name: '前往后台管理样例',
//   icon: backicon,
//   width: 170,
//   height: 100,
//   tmp: GotoAdminVue
// });
AddToDesktop({
  name: '点个star',
  icon: GitHub,
  window: new DragWindow({
    title: '点个star',
    icon: GitHub,
    width: 170,
    height: 100,
    content: GitStars
  })
});
AddToDesktop({
  name: '文档',
  icon: winicon,
  window: new DragWindow({
    title: '文档',
    icon: winicon,
    width: 170,
    height: 100,
    content: GotoReadMe
  })
});


</script>

<style>
body {
  margin: 0;
  padding: 0;
}
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
  width: 100vw;
  height: 100vh;
}
</style>
