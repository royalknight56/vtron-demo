<template>
    <div>
        <div class="title">友情链接</div>
        <div class="links">
            <div class="link" v-for="link in FriendLinks" :key="link.name">
                {{link.name}}
                <a :href="link.url" target="_blank">{{link.url}}</a>
            </div>
        </div>
    </div>

</template>
<script setup lang="ts">
const FriendLinks = [
    {
        name: 'Vtron',
        url: 'https://github.com/royalknight56/vtron'
    },
    {
        name: 'Vtron-demo',
        url: 'https://github.com/royalknight56/vtron-demo'
    },
    {
        name: 'Vtron-md',
        url: 'https://github.com/royalknight56/vtron-md'
    },
    {
        name: 'Vtron-store',
        url: 'https://github.com/royalknight56/vtron-store'
    },
    {
        name: 'Vtron-template',
        url: 'https://github.com/royalknight56/vtron-template'
    }
]
</script>