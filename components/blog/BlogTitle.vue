<template>
  <div
    class="mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-10 sm:mb-16 sm:pb-16 bg:white dark:bg-neutral-900"
  >
    <!-- Title -->
    <h1
      class="text-3xl lg:text-5xl lg:leading-snug font-bold text-neutral-900 dark:text-white"
    >
      <slot name="title" />
    </h1>

    <!-- Date -->
    <p
      class="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300"
    >
      <slot name="date" />
    </p>

    <div class="mt-5 flex flex-wrap gap-2" v-if="$slots.tags">
      <slot name="tags" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
