<template>
  <div class="flex flex-col h-screen">
    <LayoutHeader />
    <main class="pt-16">
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
