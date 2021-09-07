<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-26 15:23:29
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/Adm.vue
-->
<template>
    <div class="mid">
        <!-- 下面按钮用于显示窗口间通信能力<br /> -->
        对话框选择后的结果：msg:{{ msg }}
        <br />
        <el-input v-model="input" placeholder="请输入内容"></el-input><br />
        <el-button @click="submit" type="primary">调起对话框</el-button>
    </div>
</template>
<script lang="ts" setup>
import { nextTick, ref } from "vue";
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
WindowIPC.getInstance().on('testEvent', (arg: string) => {
    msg.value = arg
})
function submit() {
    // new DragWindow(0,0,'确定提交？',300,400,{content:askDialogVue,use:[ElementPlus]})
    new DragWindow(0, 0, '确定提交？', beatico, 200, 100, { content: askDialogVue })
    nextTick(()=>{
        WindowIPC.getInstance().emit('emit_children',input.value)
    })

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
.mid{
    text-align: center;
}
</style>