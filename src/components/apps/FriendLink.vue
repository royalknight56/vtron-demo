<template>
    <div>
        <div class="links">
            <div class="link" v-for="link in FriendLinks" :key="link.name">
                <span class="link-title">{{link.name}}</span>
                <a class="link-a" :href="link.url" target="_blank">{{link.url}}</a>
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
    // {
    //     name: 'Vtron-store',
    //     url: 'https://github.com/royalknight56/vtron-store'
    // },
    {
        name: 'Vtron-template',
        url: 'https://github.com/royalknight56/vtron-template'
    },
    {
        name: 'tol.vip',
        url: 'https://tol.vip/'
    }
]
</script>
<style scoped>
.links{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.link{
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
}
.link:hover{
    border: 1px solid #000;
}
.link-title{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.link-a{
    font-size: 16px;
    text-align: center;
    word-break: break-all;
}
</style>
