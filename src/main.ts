/*
 * @Author: Royal
 * @LastEditTime: 2022-08-01 14:48:12
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

import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

// use引入的插件，第二个选项是配置项
const app = createApp(App);
app.use(win10, {
    if_logo_show: true,
    start_time: 1200,
    // start_menu_logo: menuicon,
    backimg: backimg,
}).use(ElementPlus).mount('#app')

Sentry.init({
    app,
    dsn: "https://2d8aca35eff545bc92eb2bd1a4015b5e@o1342161.ingest.sentry.io/6615966",
    integrations: [
      new BrowserTracing({
        tracingOrigins: ["localhost", "myim.online", /^\//],
      }),
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
  