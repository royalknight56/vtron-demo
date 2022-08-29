<!--
 * @Author: Royal
 * @LastEditTime: 2022-08-29 15:18:54
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GitStars.vue
-->
<template>
    <div>Loading</div>
    <div>没有反应？<a target="_blank" href="https://github.com/royalknight56/vue-windows10">点击前往</a></div>
</template>
<script lang="ts" setup>
import { inject } from "vue"
import {system} from "../../../src/system"
let winId = <string>inject('windowId')
setTimeout(() => {
    window.open('https://github.com/royalknight56/vue-windows10')
    system.Notify.notify('谢谢',"感谢Star")
})
setTimeout(() => {
    if (winId) {
        system.DWM.getWindow(winId).destroy()
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