<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 17:54:07
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/askDialog.vue
-->
<template>
确定？<br>
输入的内容:{{input}}<br>
<button  @click="close('确定')">确定</button>
  <button @click="close('取消')">取消</button><br>
</template>
<script lang="ts" setup>
import { inject, PropType, ref } from "vue";
import { DWM } from 'vue3-win10';

let winId = <string>inject('windowId')
let input=ref('')
DWM.getInstance().on('emit_children',(val:string)=>{
  input.value=val
})
function close(str:string) {
  DWM.getInstance().emit('testEvent',str)
  if(winId){
    DWM.getInstance().destoryWindow(winId)
  }
}

</script>