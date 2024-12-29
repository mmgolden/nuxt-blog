<template>
  <button
    type="button"
    class="rounded-full p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-white/5 ring-1 ring-inset ring-neutral-300 dark:ring-white/10 focus-visible:outline-cyan-500"
  >
    <span class="sr-only">{{ label }}</span>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped></style>
