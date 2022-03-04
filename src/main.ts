/*
 * @Author: Royal
 * @LastEditTime: 2022-03-04 17:41:50
 * @Description: 在main中引入vue3-win10，并use
 */
import { createApp } from 'vue'
import App from './App.vue'
// Main中引入vue3-win10，并且引入样式文件
import win10 from 'vue3-win10';
import "vue3-win10/distlib/style.css";

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import 'xterm/css/xterm.css'
import backimg from "./assets/back.jpg"

// use引入的插件，第二个选项是配置项
createApp(App).use(win10, {
    if_logo_show: true,
    start_time: 1200,
    // start_menu_logo: menuicon,
    backimg: backimg,
}).use(ElementPlus).mount('#app')
