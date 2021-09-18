<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 18:42:49
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
import { computerCTC, DragWindow, WindowIPC } from 'vue3-win10'

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






import Test1 from "./components/apps/Test1.vue"
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
  window: new DragWindow(0, 0, '我的电脑', computer, 400, 400, { content: Test1 })
});

AddToDesktop({
  name: '版本信息',
  icon: beat,
  window: new DragWindow(0, 0, '版本信息', beat, 200, 100, { content: Test2 })
});
AddToDesktop({
  name: '浏览器',
  icon: brower,
  window: new DragWindow(0, 0, '浏览器', brower, 600, 500, { content: Test3 })

});
AddToDesktop({
  name: '终端',
  icon: term,
  window: new DragWindow(0, 0, '终端', term, 400, 400, { content: app_console })

});
AddToDesktop({
  name: 'vscode',
  icon: vscode,
  window: new DragWindow(0, 0, 'vscode', vscode, 600, 500, { content: app_vscode })

});
AddToDesktop({
  name: '窗口通信',
  icon: signalicon,
  window: new DragWindow(0, 0, '窗口通信', signalicon, 170, 100, { content: Adm_loading })
});
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
  window: new DragWindow(0, 0, '点个star', GitHub, 170, 100, { content: GitStars })
});
AddToDesktop({
  name: '文档',
  icon: winicon,
  window: new DragWindow(0, 0, '文档', winicon, 170, 100, { content: GotoReadMe })
});


</script>

<style>
body{
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
