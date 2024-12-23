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
      <ClientOnly>
        <div class="newsletter mt-8">
          <ConvertKitForm v-bind="formConfig" />
          <p class="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
            No spam. Unsubscribe whenever you want.
          </p>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
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
  display: none !important;
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
  @apply min-w-0 flex-auto rounded-full bg-neutral-50 dark:bg-white/5 text-base text-neutral-900 dark:text-white border-none ring-1 ring-neutral-300 dark:ring-white/15 placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-900 h-10 !important;
}

.formkit-form.clare .formkit-submit {
  @apply flex-none rounded-full text-base flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-700 dark:hover:bg-white/10 focus-visible:outline-neutral-700 w-full md:w-auto h-10 !important;
}

.formkit-form.clare .formkit-submit span {
  @apply py-2 px-4 !important;
}
</style>
