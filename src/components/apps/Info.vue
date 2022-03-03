<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2022-03-03 10:03:15
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/Test2.vue
-->
<template>
    <div class="t2">
        mywin 0.2.0<br>
        v3w10-npm 0.2.0-beta.1
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

</style>