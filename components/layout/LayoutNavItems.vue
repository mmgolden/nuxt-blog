<template>
  <NuxtLink
    v-for="item in navigation"
    :key="item.name"
    :to="item.href"
    v-bind="$attrs"
    class="text-base leading-6 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white rounded-md"
    @click="click"
  >
    {{ item.name }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  navigation: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["click"]);

const click = () => emit("click");
</script>

<style lang="scss" scoped></style>
