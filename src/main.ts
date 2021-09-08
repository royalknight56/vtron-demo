/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-08 15:11:09
 * @Description: 
 * @FilePath: /publishTest/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css"
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import 'xterm/css/xterm.css'
createApp(App).use(win10,{
    if_logo_show: true,
    start_time:1200
}).mount('#app')
