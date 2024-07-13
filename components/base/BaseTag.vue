<template>
  <div
    class="relative z-10 rounded-full max-w-fit font-medium"
    :class="[
      size === 'small' ? 'px-2 py-0.5 text-xs' : '',
      size === 'medium' ? 'px-3 py-1 text-sm' : '',
      type === 'active' ? 'bg-emerald-600 text-white' : '',
      type === 'default'
        ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-700 hover:bg-neutral-300 dark:text-white dark:hover:bg-neutral-800'
        : ''
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  size: {
    type: String,
    required: false,
    default: "medium"
  },
  type: {
    type: String,
    required: false,
    default: "default"
  }
});
</script>

<style scoped></style>
