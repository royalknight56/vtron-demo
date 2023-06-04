<template>
    <mavon-editor class="editor" v-model="value" @save="save" />
</template>
<script setup lang="ts">
import { BrowserWindow, Notify, basename, useSystem } from 'vtron';
import { inject, onMounted, ref } from 'vue'

const value = ref('# hello, markdown!');
let sys = useSystem();
let win = inject<BrowserWindow>('browserWindow');
onMounted(() => {
    if (win?.config.path) {
        sys?.fs.readFile(win.config.path).then((res) => {
            if (res) {
                value.value = res;
            }
        })
    }
    
    setTimeout(()=>{
        fetch('http://myim.online:3100/api/visit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: (window as any).user,
                type: 'view',
                content:new Date().toLocaleString() + ' ' + 'MarkDown'
            })
        })
    },1000)
})
function save(markdown: string, html: string) {
    let path = win?.config?.path;

    if (!path) {
        path = '/C/Users/Desktop/Untitled.md';
    }
    sys?.fs.writeFile(path, {
        content: markdown,
    }).then((res) => {
        new Notify({
            title: '保存成功',
            content: '文件已保存到桌面',
        });
    })
}
</script>
<style scoped>
.editor {
    height: 100%;
    width: 100%;
}
</style>