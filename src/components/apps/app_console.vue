<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-17 19:04:20
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/app_console.vue
-->
<template>
    <div class="consoleline" ref="inputref">
        <div id="terminal"></div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { nextTick, onMounted } from "vue";

import { Terminal } from 'xterm';

let beforeString = 'C:\\User\\Administrator>'



//  term.onData((val) => {
//      term.write(val);
//    }); 
var term = new Terminal({
        rendererType: "canvas", //渲染类型
        rows: 35, //行数
        convertEol: true, //启用时，光标将设置为下一行的开头
        scrollback: 10, //终端中的回滚量
        disableStdin: false, //是否应禁用输入
        cursorBlink: true, //光标闪烁
    });
function prompt(term: any) {
    term.write('\r\n');
    term.write(beforeString);
}
//Hugesoft [version 0.00.10000.100\n(c) 2021 Hugesoft .Inc All rights reserved\n\n

onMounted(() => {
    
    console.log('beta:0.1.1')
    term.clear()
    term.onKey(e => {
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;

        if (e.domEvent.keyCode === 13) {
            prompt(term);
        } else if (e.domEvent.keyCode === 8) {
            // Do not delete the prompt
            // term.write('\b \b');
            // @ts-ignore
            if (term._core.buffer.x > beforeString.length) { 
                term.write('\b \b');
            }
        } else if (e.domEvent.keyCode === 40 || e.domEvent.keyCode === 37 || e.domEvent.keyCode === 39) {

        } else if (e.domEvent.keyCode === 38) {

        }
        else if (printable) {
            term.write(e.key);
        }
        console.log(e.domEvent.keyCode)
    });

    let termdom = document.getElementById('terminal');
    if (termdom) {
        term.open(termdom);
        term.write('Hugesoft [version 0.00.10000.100\r\n(c) 2021 Hugesoft .Inc All rights reserved\r\n')
        term.write('\r\n');
        term.write(beforeString);
        // term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
    }
})
</script>
<style scoped>
.consoleline {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(44, 44, 44);
    height: 100%;
    width: 100%;
    color: rgb(231, 231, 231);
    font-family: monospace;
    font-size: 10px;
    overflow: auto;
}
textarea {
    height: min-content;
    font-size: 13.33333px;
    font-family: Arial, Helvetica, sans-serif;
}
span {
    /* font-family: monospace; */
}
.oneline {
    display: flex;
}
.leftarea {
    flex-grow: 0;
}
.rightarea {
    width: 250px;
}
.selfarea {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    /* letter-spacing: normal; */
    /* word-spacing: normal; */
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    /* display: inline-block; */
    text-align: start;
    /* appearance: auto; */
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    /* resize: auto; */
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    /* column-count: initial !important; */
    margin: 0em;
    font: 400 13.3333px Arial;

    padding: 2px;
}
.t2 {
    resize: none;
    height: min-content;
    overflow: hidden;
    outline: none;
    border: none;
    background-color: rgba(44, 44, 44, 0);
    width: 100%;
    color: white;
    text-decoration: none;
}
</style>