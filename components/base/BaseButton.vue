<template>
  <button
    :type="type"
    class="rounded-full px-6 pt-3 pb-2.5 text-base flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
    :class="[
      isPrimary
        ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-50 focus-visible:outline-cyan-500'
        : '',
      isSecondary
        ? 'bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-700'
        : ''
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type?: "button" | "submit";
  primary?: boolean;
  secondary?: boolean;
}

const {
  type = "button",
  primary = true,
  secondary = false
} = defineProps<Props>();

const isPrimary = computed(() => {
  if (secondary) {
    return false;
  }

  return primary;
});

const isSecondary = computed(() => secondary);
</script>

<style scoped></style>
