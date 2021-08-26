<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-25 15:55:59
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/Adm.vue
-->
<template>
    <div>
        此页面用于显示窗口间通信能力：<br>
        下面的结果是对话框选择后的结果：<br>
        {{msg}}<br> 
        <button @click="submit">确定</button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { DragWindow } from 'vue3-win10';
import askDialogVue from "./askDialog.vue";
// import ElementPlus from 'element-plus';
import { WindowIPC } from 'vue3-win10';
import beatico from "../../assets/beat.ico"

let radio1 = ref(1)
let radio2 = ref(1)
let radio3 = ref(1)
let input = ref('')
let bolvalue = ref(true)
let msg = ref('')
WindowIPC.getInstance().on('testEvent',(arg:string)=>{
    msg.value=arg
})
function submit() {
    // new DragWindow(0,0,'确定提交？',300,400,{content:askDialogVue,use:[ElementPlus]})
    new DragWindow(0,0,'确定提交？',beatico,300,400,{content:askDialogVue})

}
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