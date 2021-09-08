<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-08 15:13:04
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GitStars copy.vue
-->
<template>
    <div>Loading</div>
</template>
<script lang="ts" setup>

import type { PageItem } from 'vue3-win10'
import { WindowIPC } from 'vue3-win10'
import type { PropType } from "vue"

let props = defineProps({
    ctx: {
        type: Object as PropType<PageItem>
    }
})
setTimeout(() => {
    window.open('http://v3w10.myim.online')
})
setTimeout(() => {
    if (props.ctx?.id) {
        WindowIPC.getInstance().destoryWindow(props.ctx?.id)
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