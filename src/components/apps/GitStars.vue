<!--
 * @Author: Royal
 * @LastEditTime: 2022-01-28 17:06:01
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GitStars.vue
-->
<template>
    <div>Loading</div>
    <div>没有反应？<a target="_blank" href="https://github.com/royalknight56/vue-windows10">点击前往</a></div>
</template>
<script lang="ts" setup>
import { DWM,Notify } from 'vue3-win10'
import { inject } from "vue"

let winId = <string>inject('windowId')
setTimeout(() => {
    window.open('https://github.com/royalknight56/vue-windows10')
    new Notify('谢谢',"感谢Star")
})
setTimeout(() => {
    if (winId) {
        DWM.getInstance().destoryWindow(winId)
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