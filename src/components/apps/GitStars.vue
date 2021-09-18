<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-18 18:48:41
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/GitStars.vue
-->
<template>
    <div>Loading</div>
</template>
<script lang="ts" setup>

import type { PageItem } from 'vue3-win10'
import { WindowIPC } from 'vue3-win10'
import type { PropType } from "vue"

let props = defineProps({
    id: {
        type: String
    }
})
setTimeout(() => {
    window.open('https://github.com/royalknight56/vue-windows10')
})
setTimeout(() => {
    if (props.id) {
        WindowIPC.getInstance().destoryWindow(props.id)
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