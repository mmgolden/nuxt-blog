<template>
  <NuxtLink
    to="/"
    class="flex items-center -m-1.5 p-1.5 rounded-md"
    @click="click"
  >
    <nuxt-img
      class="h-6 w-auto -mt-1"
      src="/svg/logo.svg"
      alt="Melinda Golden Logo"
    />
    <span class="ml-2 text-lg leading-6 text-neutral-600 dark:text-neutral-300">
      Melinda Golden
    </span>
  </NuxtLink>
</template>

<script setup>
const emit = defineEmits(["click"]);

const click = () => emit("click");
</script>

<style scoped></style>
