/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-07 17:32:15
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
    if_logo_show: false,
    start_time:0
}).mount('#app')
