<!--
 * @Author: Royal
 * @LastEditTime: 2022-09-26 17:06:14
 * @Description: 1
-->
<template>
  <div class="outer">
    <Win10 :system="system"></Win10>
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

import { system } from './system'
// 在App中组织桌面图标
// 先清空再添加，防止热更新加入多重图标
system.ClearDesktop();
system.ClearMagnet();
system.ClearStartupList()
function addListToDesktop(list: typeof desktopConfig) {
  list.forEach((item) => {
    system.AddToDesktop({
      name: item.title,
      icon: item.icon,
      window: system.DragWindow({
        title: item.title,
        icon: item.icon,
        width: item.width,
        height: item.height,
        content: item.content,
        isScalable: item.isScalable
      })
    })
  })
}
addListToDesktop(desktopConfig)
system.AddToStartupList({
  name: '版本信息',
  icon: beat,
  window: system.DragWindow(
    {
      title: '版本信息',
      icon: beat,
      width: 250,
      height: 130,
      content: Test2,
      isScalable: false
    })
});
let calcWind = system.DragWindow(
  {
    title: '计算器',
    icon: calcicon,
    width: 332,
    height: 515,
    isScalable: false,
    content: Calculator,
  })
system.AddToMagnet({
  name: '计算器',
  icon: calcicon,
  window: calcWind
});
system.AddToStartupList({
  name: '计算器',
  icon: calcicon,
  window: calcWind
})

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
