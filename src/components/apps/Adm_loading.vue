<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 17:44:42
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/Adm_loading.vue
-->
<template>
    <div>载入中...</div>
</template>
<script lang="ts" setup>

// import { DragWindow } from "../components/window/libs/DragWindow";
import AdmVue from "./Adm.vue";
import ElementPlus from 'element-plus';
import { DWM, DragWindow } from 'vue3-win10'
import { defineComponent, DefineComponent, inject, PropType } from "vue"
import beatico from "../../assets/beat.ico"
let winId = <string>inject('windowId')
setTimeout(() => {
    if (winId) {
        DWM.getInstance().destoryWindow(winId)
    }
    let next = new DragWindow({
        title: '窗口通信',
        icon: beatico,
        width: 300,
        height: 400,
        content: AdmVue
    })
    next.show()
}, 1000)


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