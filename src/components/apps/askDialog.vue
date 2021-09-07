<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-26 15:24:47
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
import { PropType, ref } from "vue";
import { WindowIPC } from 'vue3-win10';
import type { PageItem } from 'vue3-win10'


let props = defineProps({
  ctx:{
    type:Object as PropType<PageItem>
  }
})
let input=ref('')
WindowIPC.getInstance().on('emit_children',(val:string)=>{
  input.value=val
})
function close(str:string) {
  WindowIPC.getInstance().emit('testEvent',str)
  if(props.ctx?.id){
    WindowIPC.getInstance().destoryWindow(props.ctx?.id)
  }
}

</script>