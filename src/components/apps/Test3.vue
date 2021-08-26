<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-08-25 16:33:20
 * @Description: 
 * @FilePath: /test/src/components/apps/Test3.vue
-->
<template>
    <div class="outer">
        <div class="uper">
            <input class="urlinput" v-model="urlinput" @keydown="urlkey"/>
            <button class="change uper_button" @click="changeUrl">
                <svg t="1629880380539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1459" width="20" height="20"><path d="M523.52 174.54C315.37 174.54 146 343.87 146 552s169.37 377.5 377.52 377.5S901 760.17 901 552 731.66 174.54 523.52 174.54z m0 698.1C346.73 872.63 202.9 728.81 202.9 552s143.83-320.59 320.62-320.59S844.13 375.23 844.13 552 700.3 872.63 523.52 872.63z" p-id="1460"></path><path d="M489.16 407.74l137.05 115.84H310.6v56.88h315.61L489.16 696.3l36.72 43.43 222.07-187.71-222.07-187.71-36.72 43.43z" p-id="1461"></path></svg>
            </button>
        </div>
        
        <iframe class="broifame" :src="urlsrc"></iframe>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
let urlinput = ref('')
let urlsrc = ref('')
function urlkey(e:KeyboardEvent) {
    if (e.code == 'Enter') {
        changeUrl()
    }
}
function changeUrl() {
    if(/^(http|https):\/\//.test(urlinput.value)){
        urlsrc.value=urlinput.value
    }else{
        urlsrc.value='https://'+urlinput.value
    }
    // urlsrc.value=urlinput.value
}
window.open=<any>function(e:any) { 
}
</script>
<style>
iframe {
    overflow: auto;
    width: 100%;
    height: 100%;
}
</style>
<style scoped>
.outer {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.tablist{
    box-sizing: border-box;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    height: 46px;
    padding: 8px 3px 4px 3px;
    background: #dee1e6;
    border-radius: 5px 5px 0 0;
    overflow: hidden;

    box-sizing: border-box;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    height: 46px;
    padding: 8px 3px 4px 3px;
    background: #dee1e6;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}
.uper{
    display: flex;

    box-sizing: border-box;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
    height: 46px;
    padding: 8px 3px 4px 3px;
    background: #f2f4f7;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
}
.urlinput {
    margin: 0px 10px;
    padding: 0px 10px;
    border-radius: 60px;
    border: 1px solid rgba(0, 0, 0, 0.295);
    background: #e7e9ecbd;
    outline: none;
    width: 100%;
}
.urlinput:focus{
    background: #ffffffd8;
}
.uper_button{
    width: 30px;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
}
.uper_button:hover{
    background-color: rgba(255, 255, 255, 0.555);

}
.broifame{
    /* height: 100%; */
    width: 100%;
}
</style>