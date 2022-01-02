<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 17:43:38
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
import { DWM } from 'vue3-win10';
import beatico from "../../assets/beat.ico"

let radio1 = ref(1)
let radio2 = ref(1)
let radio3 = ref(1)
let input = ref('')
let bolvalue = ref(true)
let msg = ref('')
DWM.getInstance().on('testEvent', (arg: string) => {
    msg.value = arg
})
function submit() {
    // new DragWindow(0,0,'确定提交？',300,400,{content:askDialogVue,use:[ElementPlus]})
    new DragWindow({
        title: '确定提交？',
        icon: beatico,
        width: 200,
        height: 100,
        content: askDialogVue
    }).show()
    nextTick(()=>{
        DWM.getInstance().emit('emit_children',input.value)
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