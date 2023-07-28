<template>
  <div
    class="mb-10 border-b border-gray-200 dark:border-gray-800 pb-10 sm:mb-16 sm:pb-16 bg:white dark:bg-gray-900"
  >
    <!-- Title -->
    <h1
      class="text-3xl lg:text-5xl lg:leading-snug font-bold text-gray-900 dark:text-white"
    >
      <slot name="title" />
    </h1>

    <!-- Date -->
    <p
      class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
    >
      <slot name="date" />
    </p>

    <div class="mt-5">
      <slot name="tags" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
