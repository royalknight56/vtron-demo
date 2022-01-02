/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-12-06 15:13:18
 * @Description: 
 * @FilePath: /publishTest/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import 'xterm/css/xterm.css'
// import menuicon from "./assets/vscode.png"
import backimg from "./assets/back.jpg"

createApp(App).use(win10, {
    if_logo_show: true,
    start_time: 1200,
    // start_menu_logo: menuicon,
    backimg: backimg,
}).use(ElementPlus).mount('#app')
