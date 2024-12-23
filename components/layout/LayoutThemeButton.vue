<template>
  <button
    type="button"
    class="rounded-full p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-white/10 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-700"
    @click="toggleTheme"
  >
    <MoonIcon v-if="isDarkTheme" class="size-5 text-white" aria-hidden="true" />
    <SunIcon v-else class="size-5 text-neutral-900" aria-hidden="true" />
  </button>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useTheme } from "@/composables/useTheme";

const { isDarkTheme } = useTheme();

const toggleTheme = () => (isDarkTheme.value = !isDarkTheme.value);
</script>

<style scoped></style>
