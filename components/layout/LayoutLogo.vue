<template>
  <NuxtLink
    to="/"
    class="flex items-center -m-1.5 p-1.5 rounded-md"
    @click="click"
  >
    <nuxt-img
      class="h-6 w-auto"
      src="~/assets/svg/logo.svg"
      alt="Melinda Golden Logo"
    />
    <span class="ml-2 text-base font-bold text-gray-900 dark:text-white">
      Melinda Golden
    </span>
  </NuxtLink>
</template>

<script setup>
const emit = defineEmits(["click"]);

const click = () => emit("click");
</script>

<style lang="scss" scoped></style>
