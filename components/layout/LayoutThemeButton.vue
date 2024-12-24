<template>
  <BaseIconButton label="Toggle Theme" @click="toggleTheme">
    <MoonIcon v-if="isDarkTheme" class="size-6 text-white" aria-hidden="true" />
    <SunIcon v-else class="size-6 text-neutral-900" aria-hidden="true" />
  </BaseIconButton>
</template>

<script setup lang="ts">
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
import { useTheme } from "@/composables/useTheme";

const { isDarkTheme } = useTheme();

const toggleTheme = () => (isDarkTheme.value = !isDarkTheme.value);
</script>

<style scoped></style>
