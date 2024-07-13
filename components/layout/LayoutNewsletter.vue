<template>
  <div
    v-if="showNewsletter"
    class="bg-neutral-50 dark:bg-neutral-900 flex flex-col"
  >
    <div class="mx-auto w-full max-w-4xl py-20 px-4 lg:px-8 inline-block">
      <h2
        class="text-xl md:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white inline sm:block"
      >
        Subscribe to get my latest articles
      </h2>
      <p
        class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2"
      >
        Stay updated on my latest content by signing up for my newsletter.
      </p>

      <!-- Form -->
      <div class="newsletter mt-8">
        <ConvertKitForm v-bind="formConfig" />
        <p
          class="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300"
        >
          No spam. Unsubscribe whenever you want.
        </p>
      </div>
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
  template: "clare",
  hideName: true
});

// Route
const route = useRoute();

const showNewsletter = computed(() => route.name !== "contact");
</script>

<style>
.formkit-powered-by-convertkit {
  display: none;
}

.formkit-form.clare {
  @apply flex flex-col md:flex-row gap-x-4;
}

.formkit-form.clare div:first-of-type {
  @apply w-full;
}

.formkit-form.clare .formkit-fields {
  @apply md:flex-nowrap !important;
}

.formkit-form.clare .formkit-input {
  @apply mb-4 md:mb-0 min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 dark:focus:ring-cyan-600 sm:text-sm sm:leading-6 !important;
}

.formkit-form.clare .formkit-submit {
  @apply flex-none rounded-md bg-cyan-700 text-center text-sm font-semibold text-white hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 w-full md:w-auto !important;
}

.formkit-form.clare .formkit-submit span {
  @apply py-2.5 px-4;
}
</style>
