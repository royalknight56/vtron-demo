/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-25 15:44:53
 * @Description: 
 * @FilePath: /publishTest/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css"

createApp(App).use(win10,{
    if_logo_show: false,
    start_time:0
}).mount('#app')
