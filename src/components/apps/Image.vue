<template>
  <div class="viewer">
    <div class="loading" v-if="!content">
      Loading
      <WinLoadingVue></WinLoadingVue>
    </div>
    <img class="viewer-img" v-else :src="content" />
  </div>
</template>
<script setup lang="ts">
import { BrowserWindow, WinLoadingVue } from "vtron";
import { inject, onMounted, ref } from "vue";

let window: BrowserWindow | undefined = inject("browserWindow");
const content = ref("");

onMounted(() => {
  const path = window?.config.content;

  if (path?.startsWith("http")) {
    const cred = path.split("@")[0].split("//")[1];
    const url = path.split("//")[0] + "//" + path.split("@")[1];
    let headers = new Headers({
      Authorization: `Basic ${btoa(cred)}`,
    });
    fetch(url, {
      headers: headers,
    }).then((res) => {
      res.blob().then((blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = function (e) {
          content.value = e.target?.result as string;
        };
      });
    });
    return;
  } else {
    content.value = path;
    return;
  }
});
</script>
<style scoped>
.viewer {
  width: 100%;
  height: 100%;
  background-color: #000;
}
.loading {
  width: 100%;
  height: 100%;
}
.viewer-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
