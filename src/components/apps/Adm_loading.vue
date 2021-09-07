<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-26 17:29:20
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
import type { PageItem } from 'vue3-win10'
import { WindowIPC,DragWindow } from 'vue3-win10'
import { defineComponent, DefineComponent, PropType } from "vue"
import beatico from "../../assets/beat.ico"
defineComponent
let props = defineProps({
    ctx: {
        type: Object as PropType<PageItem>
    }
})
setTimeout(() => {
    if (props.ctx?.id) {
        WindowIPC.getInstance().destoryWindow(props.ctx?.id)
    }
    new DragWindow(0, 0, '窗口通信',beatico, 300, 400, { content: AdmVue},[ElementPlus])
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