<!--
 * @Author: Royal
 * @LastEditTime: 2022-09-26 17:06:14
 * @Description: 1
-->
<template>
  <div class="outer">
    <Screen></Screen>
    <!-- 一定需要引入Win10组件，组件已经在use时注册了 -->
  </div>
</template>

<script lang="ts" setup>
// import computer from "./assets/computer.ico";
import beat from "./assets/beat.ico";
// import brower from "./assets/brow.png";
import chromeicon from "./assets/chromeicon.png";

import term from "./assets/term.ico";
import vscode from "./assets/vscode.png";
import GitHub from "./assets/GitHub.png";
import winicon from "./assets/win.png";
import winv3icon from "./assets/winv3.png";
import mmPlayericon from "./assets/mmPlayer.png";
import calcicon from "./assets/calcicon.png";
import todoappicon from "./assets/todoapp.png";
import moonappicon from './assets/moonappicon.webp'



// import MyComputer from "./components/apps/MyComputer.vue"
import Test2 from "./components/apps/Info.vue"
import Browser from "./components/apps/Browser.vue"
import AppConsole from "./components/apps/AppConsole.vue"
import GitStars from "./components/apps/GitStars.vue"
import GotoReadMe from './components/apps/GotoReadMe.vue';
import Calculator from './components/apps/Calculator.vue';
import APIVue from './components/apps/API.vue';

import desktopConfig from "./DesktopSet"

import { System, BrowserWindow } from 'vtron'
import { vtronPlus } from "vtron-plus";
import "vtron-plus/distlib/style.css"
// 在App中组织桌面图标
// 先清空再添加，防止热更新加入多重图标
let system = new System({
  desktop: [
    ...addListToDesktop(desktopConfig)
  ]
})
system.use(vtronPlus)
function addListToDesktop(list: typeof desktopConfig) {
  let res:any[] = [];
  list.forEach((item) => {
    res.push({
      name: item.title,
      icon: item.icon,
      window: new BrowserWindow({
        title: item.title,
        icon: item.icon,
        width: item.width,
        height: item.height,
        resizable: item.resizable,
        content: item.content
      })
    })
  })
  return res;
}


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
