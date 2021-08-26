<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-26 09:30:00
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/Test2.vue
-->
<template>
    <div class="t2">
        mywin 0.1
        <img width="20" :src="winimg">
    </div>
</template>
<script lang="ts" setup>
import winimg from "../../assets/win.png"
</script>
<style scoped>
.t2 {
    z-index: 99;
    /* background-color: blanchedalmond; */
}
.t2:hover {
    background-color: rgba(255, 235, 205, 0.747);
}
</style>