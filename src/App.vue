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
  <a style="display: none" href="https://beian.miit.gov.cn/"
    >豫ICP备19041315号</a
  >
</template>

<script lang="ts" setup>
import desktopConfig from "./DesktopSet";

import { System, BrowserWindow, Notify } from "vtron";
import { vtronPlus } from "vtron-plus";
import MarkDown from "./components/apps/MarkDown.vue";
import "vtron-plus/distlib/style.css";
import backimg from "./assets/back.jpg";
import CommentVue from "./components/apps/Comment.vue";
import beaticon from "./assets/beat.ico";
import PPT from "./components/apps/PPT.vue";
import markdownicon from "./assets/markdown.png";
import ppticon from "./assets/ppt.png";
import onetocicon from "./assets/onetoc.png";
import OpenSource from "./components/apps/OpenSource.vue";

import { mountWebdav } from "./hook/mountWebdav";
import { mountOpener } from "./hook/mountOpener";
// 在App中组织桌面图标
// 先清空再添加，防止热更新加入多重图标
let system = new System({
  desktop: [
    {
      name: "意见反馈",
      icon: beaticon,
      window: {
        title: "意见反馈",
        width: 400,
        height: 400,
        center: true,
        content: CommentVue,
        resizable: false,
      },
    },
    ...addListToDesktop(desktopConfig),
  ],
  magnet: [
    {
      name: "意见反馈",
      icon: beaticon,
      window: {
        title: "意见反馈",
        width: 400,
        height: 400,
        center: true,
        content: CommentVue,
        resizable: false,
      },
    },
  ],
  menulist: [
    {
      name: "开源项目",
      icon: beaticon,
      window: {
        title: "开源项目",
        width: 400,
        height: 200,
        center: true,
        content: OpenSource,
        resizable: false,
      },
    },
  ],
  background: backimg,
  lang: "zh-CN",
});

system.whenReady().then((readySystem) => {
  // if (readySystem.version !== "0.4.4") {
  //   system.recover();
  // }

  readySystem.use(vtronPlus);
  readySystem.fs.writeFile(
    "/C/Users/Desktop/使用教程.md",
    `# hello, 欢迎使用Vtron WebOS!

这可能是目前最具扩展性的webos

## 欢迎加入qq群 712921211

## 已经更新至 ${readySystem.version}

#### 更新之后建议开始菜单->恢复。请自己保留重要数据


## NoteMd

NoteMd是和vtron契合的笔记软件

可以快捷的管理文档

## 他可以记录你的文档

自带文件系统，只要你的电脑还在，这份文件就保存着

支持拖拽上传mp4，mp3，xls，txt，docx文件

（不包括一些破坏性的操作）


## 终端

和linux一致的体验

输入经典的命令，ls，cd，help，sh，甚至node

## 万能的文件类型

右键打开文件的属性，就能修改文件的名称

也可以使用ppt，markdown 应用创建新的文件

## 遇到文件问题？

尝试点击电源->恢复

进行恢复出厂设置，必要时清空浏览器缓存

## 想要更多的功能？

如果你熟悉Vue3开发，请和我们一起建设

如果你不太熟悉开发，但是有想要的功能，就在Github评论区中留言吧

[https://github.com/royalknight56/vtron](https://github.com/royalknight56/vtron)`
  );

  readySystem.fs.writeFile(
    "/C/Users/Desktop/Webdav使用教程.md",
    `# Webdav使用教程
## 设置

点击左下角开始菜单->设置->Webdav设置

需要填写webdav的链接，用户名，密码

推荐使用alist客户端

挂载路径推荐写一级路径，如：/D

挂载路径必须与webdav的文件夹相同

填写好信息后，点击确定，重启
    
## 使用

挂载成功后，可以在文件管理器（我的电脑）中看到挂载的文件夹
    `
  );
  setTimeout(() => {
    if (readySystem.isFirstRun) {
      readySystem.openFile("/C/Users/Desktop/使用教程.md");
    }
  }, 1200);

  mountWebdav(system);
  localStorage.getItem("user") ||
    localStorage.setItem("user", new Date().getTime().toString());

  mountOpener(system);
  readySystem.registerFileOpener(".md", {
    icon: onetocicon,
    func: (path, content) => {
      new BrowserWindow({
        title: path,
        icon: markdownicon,
        width: 800,
        height: 600,
        resizable: true,
        center: true,
        content: MarkDown,
        config: {
          path: path,
          content: content,
        },
      }).show();
    },
  });
  // readySystem.registerFileOpener(".ppt", (path, content) => {
  //   new BrowserWindow({
  //     title: path,
  //     icon: ppticon,
  //     width: 800,
  //     height: 600,
  //     resizable: true,
  //     center: true,
  //     content: PPT,
  //     config: {
  //       path: path,
  //       content: content,
  //     },
  //   }).show();
  // });
  setTimeout(() => {
    if (process.env.NODE_ENV === "development") return;
    fetch("https://myim.online:3100/api/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: localStorage.getItem("user"),
        type: "view",
        content: `${document.referrer}`,
      }),
    });

    fetch("https://myim.online:3100/api/notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          res.data.forEach((item: any) => {
            new Notify({
              title: item.title,
              content: item.content,
              timeout: 10000,
            });
          });
        }
      });
  }, 100);
});
function addListToDesktop(list: typeof desktopConfig) {
  let res: any[] = [];
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
        backgroundColor: item.backgroundColor,
        content: item.content,
      },
    });
  });
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
