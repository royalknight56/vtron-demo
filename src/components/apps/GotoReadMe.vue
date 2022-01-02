<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 18:49:10
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GotoReadMe.vue
-->
<template>
    <div>Loading</div>
</template>
<script lang="ts" setup>

import { DWM } from 'vue3-win10'
import { inject } from "vue"
let winId = <string>inject('windowId')

setTimeout(() => {
    window.open('http://v3w10.myim.online')
})
setTimeout(() => {
    if (winId) {
        DWM.getInstance().destoryWindow(winId)
    }
},1000)


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