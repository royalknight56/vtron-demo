<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-19 10:06:34
 * @Description: 
 * @FilePath: /test/src/components/apps/askDialog.vue
-->
<template>
确定？
<button  @click="close('确定')">确定</button>
  <button @click="close('取消')">取消</button>
</template>
<script lang="ts" setup>
import type { PropType } from "vue";
import { WindowIPC } from 'vue3-win10';
import type { PageItem } from 'vue3-win10'


let props = defineProps({
  ctx:{
    type:Object as PropType<PageItem>
  }
})

function close(str:string) {
  WindowIPC.getInstance().emit('testEvent',str)
  if(props.ctx?.id){
    WindowIPC.getInstance().destoryWindow(props.ctx?.id)
  }
}

</script>