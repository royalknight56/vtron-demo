<!--
 * @Author: Royal
 * @LastEditTime: 2022-09-23 14:57:12
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GitStars.vue
-->
<template>
    <div>Loading</div>
    <div>没有反应？<a target="_blank" href="https://github.com/royalknight56/vue-windows10">点击前往</a></div>
</template>
<script lang="ts" setup>
import { BrowserWindow } from "vtron";
import { inject } from "vue"
// import {system} from "../../../src/system"
let browserWindow = inject<BrowserWindow>('browserWindow')
setTimeout(() => {
    window.open('https://github.com/royalknight56/vue-windows10')
    // system.Notify.notify('谢谢',"感谢Star")
})
setTimeout(() => {
    if (browserWindow) {
        browserWindow.destroy()
        // system.getWindow(winId)?.destroy()
    }
},5000)


</script>

<style scoped>
.t2 {
    z-index: 99;
    background-color: blanchedalmond;
}
.t2:hover {
    background-color: rgba(255, 235, 205, 0.747);
}
</style>