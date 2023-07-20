<template>
  <div class="flex flex-col h-screen bg-white dark:bg-gray-900">
    <LayoutHeader />
    <main>
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup>
import { useTheme } from "@/composables/useTheme.ts";

useTheme();
</script>

<style scoped></style>
