/*
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-19 14:36:33
 * @Description: 
 * @FilePath: /publishTest/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css"

createApp(App).use(win10).mount('#app')
