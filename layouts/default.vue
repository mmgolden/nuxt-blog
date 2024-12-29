<template>
  <div class="flex flex-col h-screen">
    <LayoutHeader />
    <main class="pt-16">
      <slot />
      <LayoutNewsletter />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

useTheme();
</script>

<style scoped></style>
