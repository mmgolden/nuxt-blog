<template>
  <div class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-3xl pt-16 pb-10 px-4 lg:px-8">
      <!-- Title -->
      <h1
        class="text-3xl lg:text-4xl lg:leading-snug font-bold text-neutral-900 dark:text-white"
      >
        <slot name="title" />
      </h1>

      <!-- Date -->
      <p
        class="mt-5 line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-300"
      >
        <slot name="date" />
      </p>

      <div class="mt-5 mb-10 flex flex-wrap gap-2" v-if="$slots.tags">
        <slot name="tags" />
      </div>

      <div class="w-full border-t border-neutral-200 dark:border-white/10" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
