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


import desktopConfig from "./DesktopSet"

import { System, BrowserWindow } from 'vtron'
import { vtronPlus } from "vtron-plus";
import MarkDown from "./components/apps/MarkDown.vue";
import "vtron-plus/distlib/style.css"
import backimg from "./assets/back.jpg"
import CommentVue from "./components/apps/Comment.vue";
import beaticon from "./assets/beat.ico"
// 在App中组织桌面图标
// 先清空再添加，防止热更新加入多重图标
let system = new System({
  desktop: [
    ...addListToDesktop(desktopConfig)
  ],
  magnet:[
    {
        name: '意见反馈',
        icon: beaticon,
        window:{
          title: '意见反馈',
          width: 400,
          height: 300,
          center: true,
          content: CommentVue,
          resizable: false
        }
    },
  ],
  background: backimg,
})

system.whenReady().then((readySystem)=>{
  readySystem.use(vtronPlus);
  readySystem.fs.writeFile('/C/Users/Desktop/使用教程.md',{
    content:`# hello, 欢迎使用Vtron WebOS!

这可能是目前最具扩展性的webos

## 他可以记录你的文档

自带文件系统，只要你的电脑还在，这份文件就保存着

## 试试精彩的终端

和linux一致的体验

输入经典的命令，ls，cd，help，sh，甚至node

## 小彩蛋

试着把图片拖拽到“此电脑”应用中，图片就能保存在这里

## 万能的文件类型

右键打开文件的属性，就能修改文件的类型

把文件类型改成 markdown 之后，再打开试试！

## 想要更多的功能？

如果你熟悉Vue3开发，请和我们一起建设

如果你不太熟悉开发，但是有想要的功能，就在Github评论区中留言吧

[https://github.com/royalknight56/vtron](https://github.com/royalknight56/vtron)`,

  });
  setTimeout(()=>{
    if(readySystem.isFirstRun){
      readySystem.openFile('/C/Users/Desktop/使用教程.md')
    }
  },1200)
  localStorage.getItem('user') || localStorage.setItem('user',new Date().getTime().toString());
  readySystem.registerFileOpener('.md',(path,content)=>{
    new BrowserWindow({
      title: path,
      icon: "file",
      width: 800,
      height: 600,
      resizable: true,
      center: true,
      content: MarkDown,
      config:{
        path: path,
        content: content
      }
    }).show()
  })
})
function addListToDesktop(list: typeof desktopConfig) {
  let res:any[] = [];
  list.forEach((item) => {
    res.push({
      name: item.title,
      icon: item.icon,
      window: {
        title: item.title,
        icon: item.icon,
        width: item.width,
        height: item.height,
        resizable: item.resizable,
        center: item.center,
        content: item.content
      }
    })
  })
  return res;
}

setTimeout(()=>{
  fetch('http://myim.online:3100/api/visit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user:localStorage.getItem('user'),
            type: 'view',
            content:new Date().toLocaleString() + ' ' + "Vtron" + ' ' + document.referrer
        })
    })
},1000)
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
