<template>
  <NuxtLink
    v-for="item in navigation"
    :key="item.name"
    :to="item.href"
    v-bind="$attrs"
    class="text-base leading-6 text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white rounded-xl py-1 px-2"
    @click="click"
  >
    {{ item.name }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  navigation: Array<{ name: string; href: string }>;
}>();

const emit = defineEmits(["click"]);

const click = () => emit("click");
</script>

<style lang="scss" scoped></style>
