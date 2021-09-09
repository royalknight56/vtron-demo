<!--
 * @Author: zhangweiyuan-Royal
 * @LastEditTime: 2021-09-09 20:57:42
 * @Description: 
 * @FilePath: /publishTest/src/components/apps/webshell.vue
-->
<template>
    <div class="consoleline" ref="inputref">
        <div v-show="state == 'fail'" id="fail">
            Fail
            <input v-model="password" />
            <button @click="relogin()">Login</button>
        </div>
        <div v-show="state == 'success'" id="terminal"></div>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { nextTick, onMounted, onUnmounted } from "vue";

import { Terminal } from 'xterm'
import { FitAddon } from 'xterm-addon-fit'
import { AttachAddon } from 'xterm-addon-attach'
// let socketURI='ws://myim.online:8254'
let wsport = 8254;


let socket: WebSocket
let term: Terminal

let state = ref('fail')
let password = ref('123456')

function initTerm() {
    term = new Terminal({
        fontSize: 14,
        cursorBlink: true,
        cols:100
    });
    const attachAddon = new AttachAddon(socket);
    const fitAddon = new FitAddon();
    term.loadAddon(attachAddon);
    term.loadAddon(fitAddon);
    let element = document.getElementById('terminal')
    if (element) {
        term.open(element);
    }

    fitAddon.fit();
    term.focus();
}
function login(callback: Function, fail: Function) {
    // socket.send(JSON.stringify({ password: '123456' }))
    fetch(location.origin + "/api/login", {
        method: "POST",
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'password': password.value
        })
    }).then(response => response.json()).then(
        json => {
            console.log(json)
            if (json.result == 'True') {

                fetch(location.origin + "/api/wsport", {
                    method: "POST",
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'password': password.value
                    })
                }).then(response => response.json()).then(
                    json => {
                        console.log(json)
                        if (json.wsport) {
                            wsport = json.wsport
                            callback()
                        } else {
                            fail()
                        }

                    })


            } else {
                fail()
            }
        })


}

function initSocket() {
    let socketURI = 'ws://localhost:' + wsport
    socket = new WebSocket(socketURI);
    socketOnClose();
    socketOnOpen();
    socketOnError();
}
function socketOnOpen() {
    socket.onopen = () => {
        // 链接成功后
        initTerm()
    }
}
function socketOnClose() {
    socket.onclose = () => {
        // console.log('close socket')
    }
}
function socketOnError() {
    socket.onerror = () => {
        // console.log('socket 链接失败')
    }
}
function relogin() {
    login(success, fail)
}
function success() {
    state.value = 'success'
    initSocket()
}
function fail() {
    state.value = 'fail'
}
onMounted(() => {
    login(success, fail)
})
onUnmounted(() => {
    socket.close();
    term.dispose()
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