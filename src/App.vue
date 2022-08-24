<!--
 * @Author: Royal
 * @LastEditTime: 2022-03-04 17:40:15
 * @Description: 
-->
<template>
  <div class="outer">
    <Win10 :system="system"></Win10>
    <!-- 一定需要引入Win10组件，组件已经在use时注册了 -->
  </div>
</template>

<script lang="ts" setup>
import computer from "./assets/computer.ico"
import beat from "./assets/beat.ico"
import brower from "./assets/brow.png"
import term from "./assets/term.ico"
import vscode from "./assets/vscode.png"
import GitHub from "./assets/GitHub.png"
import winicon from "./assets/win.png"


import MyComputer from "./components/apps/MyComputer.vue"
import Test2 from "./components/apps/Info.vue"
import Browser from "./components/apps/Browser.vue"
import AppConsole from "./components/apps/AppConsole.vue"
import AppVscode from "./components/apps/AppVscode.vue"
import GitStars from "./components/apps/GitStars.vue"
import GotoReadMe from './components/apps/GotoReadMe.vue';
import {system} from './system'
// 在App中组织桌面图标
// 先清空再添加，防止热更新加入多重图标
system.ClearDesktop();
system.AddToDesktop({
  name: '我的电脑',//这里是桌面显示的名称
  icon: computer,//这里是桌面显示的图标
  window: system.DragWindow(
    {
      title: '我的电脑',//这里是打开之后的窗口显示的名称
      icon: computer,//这里是打开之后的窗口左上角的图标
      width: 400,
      height: 400,
      content: MyComputer//这里引入编写好的vue文件，就是窗口的内容
    })
});

system.AddToDesktop({
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
system.AddToDesktop({
  name: '浏览器',
  icon: brower,
  window: system.DragWindow(
    {
      title: '浏览器',
      icon: brower,
      width: 800,
      height: 600,
      content: Browser,
    })

});
system.AddToDesktop({
  name: '终端',
  icon: term,
  window: system.DragWindow({
    title: '终端',
    icon: term,
    width: 400,
    height: 400,
    content: AppConsole,
    isScalable: false
  })

});
system.AddToDesktop({
  name: 'vscode',
  icon: vscode,
  window: system.DragWindow({
    title: 'vscode',
    icon: vscode,
    width: 600,
    height: 500,
    content: AppVscode
  })

});
system.AddToDesktop({
  name: '点个star',
  icon: GitHub,
  window: system.DragWindow({
    title: '点个star',
    icon: GitHub,
    width: 170,
    height: 100,
    content: GitStars
  })
});
system.AddToDesktop({
  name: '文档',
  icon: winicon,
  window: system.DragWindow({
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
