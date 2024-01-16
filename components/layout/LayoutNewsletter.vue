<template>
  <div
    v-if="showNewsletter"
    class="mx-auto w-full max-w-4xl bg-white dark:bg-neutral-900 pb-16 mt-16 px-4 lg:px-8 inline-block"
  >
    <div class="h-[1px] bg-neutral-200 dark:bg-neutral-800 w-full mb-16" />
    <h2
      class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white inline sm:block"
    >
      Subscribe to get my latest posts
    </h2>
    <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2">
      Stay updated on my latest content by signing up for my newsletter.
    </p>

    <!-- Form -->
    <div class="newsletter mt-8">
      <ConvertKitForm v-bind="formConfig" />
      <p class="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
        No spam. Unsubscribe whenever you want.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ConvertKitForm from "convertkit-vue";

// Form
const config = useRuntimeConfig();

const formConfig = ref({
  formId: config.public.formId,
  template: "minimal",
  hideName: true
});

// Route
const route = useRoute();

const showNewsletter = computed(() => route.name !== "contact");
</script>

<style scoped></style>
