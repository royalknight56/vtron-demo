<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-30 15:10:48
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/MyComputer.vue
-->
<template>
    <div class="uper">
        <div class="group">
            <div class="button">文件</div>
            <div class="button">计算机</div>
            <div class="button">查看</div>

            <div class="button" @click="backFolder()">返回</div>
            <!-- <div class="button" @click="newFolder()">新建</div> -->
        </div>
        <div class="uper_nav">
            <div class="uper_nav_button" @click="backFolder()">
                <svg t="1632984723698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10100"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" p-id="10101"></path></svg>
            </div>
             <div class="uper_nav_button" @click="backFolder()">
                <svg t="1632984737821"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10249"><path d="M885.113 489.373L628.338 232.599c-12.496-12.497-32.758-12.497-45.254 0-12.497 12.497-12.497 32.758 0 45.255l203.3 203.3H158.025c-17.036 0-30.846 13.811-30.846 30.846 0 17.036 13.811 30.846 30.846 30.846h628.36L583.084 746.147c-12.497 12.496-12.497 32.758 0 45.255 6.248 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372l256.775-256.775a31.999 31.999 0 0 0 0-45.254z" fill="" p-id="10250"></path></svg>
            </div>
            <div class="uper_nav_button uper_nav_button_small" @click="backFolder()">
                <svg t="1639145779758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3080"><path d="M533.333333 516.266667l-174.933333-170.666667-64 59.733333 234.666667 234.666667L768 405.333333l-59.733333-59.733333-174.933334 170.666667z" fill="#444444" p-id="3081"></path></svg>
            </div>
            <div class="uper_nav_button" @click="backFolder()">
                <svg t="1639145815176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3860"><path d="M554.666667 268.8v601.6h-85.333334V268.8L337.066667 401.066667 277.333333 341.333333 512 106.666667 746.666667 341.333333l-59.733334 59.733334L554.666667 268.8z" fill="#444444" p-id="3861"></path></svg>
            </div>
            
            <div @click="start_input()" v-if="path_state=='pendding'" class="path">
                <span>{{router_url}}</span>
            </div>
            <div @focusout="end_input()" v-if="path_state=='inputing'" class="path_inputing">
                <input v-auto-focus="this" :value="router_url">
            </div>
        </div>
        
    </div>
    <div class="desk_outer">
        <div class="desk_item" v-for="item in currentList" @dblclick="openFolder(item)">
            <div class="item_img">
                <!-- <svg t="1629880946543" class="icon" viewBox="0 0 1126 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11619" width="50" height="50"><path d="M1076.875776 998.4H49.803776A49.152 49.152 0 0 1 0.139776 950.016V148.736a49.408 49.408 0 0 1 49.664-49.152h1027.072A49.408 49.408 0 0 1 1126.539776 148.736v801.28A49.408 49.408 0 0 1 1076.875776 998.4z" fill="#FFE9B8" p-id="11620"></path><path d="M563.339776 336.64H0.139776V51.2a47.616 47.616 0 0 1 45.056-51.2H435.339776a51.2 51.2 0 0 1 47.616 39.424z" fill="#FFC112" p-id="11621"></path><path d="M1081.483776 1024H45.195776A47.616 47.616 0 0 1 0.139776 972.8V250.368a47.616 47.616 0 0 1 45.056-49.92h1036.288A47.616 47.616 0 0 1 1126.539776 250.368v723.712A47.872 47.872 0 0 1 1081.483776 1024z" fill="#FFD741" p-id="11622"></path></svg> -->
                <img width="50" :src="folderimg" />
            </div>
            <div class="item_name">{{ item.name }}</div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive,ref,computed } from "vue";
import type { UnwrapNestedRefs } from "@vue/reactivity";
import folderimg from "../../assets/winFloder.ico"
interface Folder {
    name: string,
    children: Array<Folder>,
    parent?: Folder
}
let folder: Folder = {
    name: 'C:\\',
    children: [{
        name: 'User',
        children: [{
            name: 'Administrator',
            children: []
        },
        {
            name: '12',
            children: []
        }],
    },
    {
        name: 'jpa',
        children: []
    }],
}
let folderStack: UnwrapNestedRefs<Array<Folder>> = reactive([folder]);
let router_url = computed(() => {
    let path: string = '';
    for (let i = 0; i < folderStack.length; i++) {
        path += folderStack[i].name + '\\';
    }
    return path;
})
let currentList: UnwrapNestedRefs<Array<Folder>> = reactive([])
currentList.push(...folder.children)

function openFolder(folder: Folder) {

    folderStack.push(folder)
    currentList.splice(0, currentList.length);
    currentList.push(...folder.children)
}
function backFolder() {
    if (folderStack.length > 1) {
        folderStack.pop();
        currentList.splice(0, currentList.length);
        currentList.push(...folderStack[folderStack.length - 1].children)
    }
}
function newFolder() {
    let newF = {
        name: '新建文件夹',
        children: [],
    }
    folderStack[folderStack.length - 1].children.push(newF)
    currentList.push(newF)
}
const vAutoFocus = {
    mounted(el?: HTMLElement) {
        el?.focus();
    }

}
let path_state =ref('pendding');
function start_input(){
    path_state.value = 'inputing';
}
function end_input(){
    path_state.value = 'pendding';
}
</script>
<style scoped>
.desk_outer {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;

}

.desk_item {
    position: relative;
    cursor: default;
    user-select: none;
    box-sizing: border-box;
    /* display: flex; */
    /* align-items: center; */
    width: 70px;
    height: 50px;
    background-color: rgba(119, 119, 119, 0);
    color: white;
    /* text-shadow: 0px 0px 3px #000000; */
    border: 1px solid rgba(0, 0, 0, 0);
}
.desk_item:hover {
    border: 1px solid rgba(255, 255, 255, 0.521);

    background-color: rgba(255, 255, 255, 0.281);
}
.item_img {
    width: 50px;
    height: 40px;
    overflow: hidden;
    padding: 10px;
    text-align: center;
}
.item_name {
    color: rgba(0, 0, 0, 0.664);
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
}

.uper {
    /* height: 40px; */
    background-color: rgba(255, 235, 205, 0);
    font-size: 12px;
    font-weight: 300;
    /* border-bottom: 1px solid black; */
    --button-item-height:30px;
}
.group {
    display: flex;
    border-bottom: 1px solid rgba(134, 134, 134, 0.267);
    /* padding: 4px 0px; */
}
.button {
    cursor: pointer;
    text-align: center;
    width: 50px;
    transition: all 0.1s;
    background: #ffffff;
    font-family: sans-serif;
    font-size: 12px;
    padding: 2px 4px;
    transition: 0.1s;
    white-space: nowrap;
}

.button:hover {
    /* background-color: #137bd2; */
    background-color: #1b6bad;
    color: white;;
}


.uper_nav{
    /* height:var(--button-item-height); */
    display: flex;
}
.uper_nav_button{
    width: calc(var(--button-item-height) - 10px);
    height: var(--button-item-height);
    line-height: var(--button-item-height);
    padding:4px;
    margin: 0 auto;
    flex-shrink: 0;
    text-align: center;
    filter: brightness(230%);
}
.uper_nav_button_small{
    width: calc(var(--button-item-height) - 16px);
}
.uper_nav_button svg{
    width: calc(var(--button-item-height) - 16px);
    height: calc(var(--button-item-height) - 16px);
}

.path {
    height: calc(var(--button-item-height));
    width: 100%;
    line-height: calc(var(--button-item-height) - 6px);
    padding: 1px 5px;
    margin: 2px 2px;
    border: 1px solid rgba(134, 134, 134, 0.267);
    transition: all 0.1s;
    /* text-align: center; */
    user-select: none;
}
.path span{
    height: var(--button-item-height);
    /* text-align: center; */
    line-height: var(--button-item-height);
}
.path_inputing{

    height: calc(var(--button-item-height));
    width: 100%;
    line-height: calc(var(--button-item-height) - 6px);
    padding: 1px 5px;
    margin: 2px 2px;
    border: 1px solid rgba(134, 134, 134, 0.267);
    transition: all 0.1s;
    user-select: text;

}
.path_inputing input{
    height: 100%;
    width: 100%;
    /* padding: 1px 5px; */
    /* text-align: center; */
    line-height: var(--button-item-height);
    background: none;
    border: none;
    outline: none;
}

.path:hover {
    border: 1px solid rgb(0, 102, 255);
}
</style>