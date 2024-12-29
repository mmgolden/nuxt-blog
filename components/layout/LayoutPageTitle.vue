<template>
  <div class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-3xl pt-16 pb-5 md:pb-10 px-4 lg:px-8">
      <!-- Page title -->
      <h1
        class="pb-2 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
      >
        <slot name="title" />
      </h1>
      <div class="w-full border-t border-neutral-200 dark:border-white/10" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
