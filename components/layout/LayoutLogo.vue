<template>
  <NuxtLink
    to="/"
    class="flex items-center -m-1.5 p-1.5 rounded-full"
    @click="click"
  >
    <NuxtImg class="h-9 w-auto" src="/svg/logo.svg" alt="Melinda Golden Logo" />
    <span class="sr-only"> Melinda Golden </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);

const click = () => emit("click");
</script>

<style scoped></style>
