<template>
  <Switch
    v-model="isDarkTheme"
    :class="[
      isDarkTheme ? 'bg-neutral-700' : 'bg-neutral-200',
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out'
    ]"
  >
    <span class="sr-only">Switch theme</span>
    <span
      :class="[
        isDarkTheme ? 'translate-x-5' : 'translate-x-0',
        'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
      ]"
    >
      <!-- Light -->
      <span
        :class="[
          isDarkTheme
            ? 'opacity-0 duration-100 ease-out'
            : 'opacity-100 duration-200 ease-in',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
        ]"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-3 w-3 text-neutral-900"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      </span>

      <!-- Dark -->
      <span
        :class="[
          isDarkTheme
            ? 'opacity-100 duration-200 ease-in'
            : 'opacity-0 duration-100 ease-out',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity bg-neutral-900 rounded-full'
        ]"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-3 w-3 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      </span>
    </span>
  </Switch>
</template>

<script setup>
import { Switch } from "@headlessui/vue";
import { useTheme } from "@/composables/useTheme.ts";

const { isDarkTheme } = useTheme();
</script>

<style lang="scss" scoped></style>
