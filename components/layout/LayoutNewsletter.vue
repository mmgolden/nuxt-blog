<template>
  <div
    v-if="showNewsletter"
    class="bg-neutral-50 dark:bg-neutral-900 flex flex-col"
  >
    <div class="mx-auto w-full max-w-3xl py-10 px-4 lg:px-8 inline-block">
      <div class="bg-neutral-900 dark:bg-white/5 rounded-3xl py-7 px-4 md:px-8">
        <h2 class="text-xl font-bold tracking-tight text-white inline sm:block">
          Subscribe to get my latest articles
        </h2>
        <p class="text-base leading-6 text-neutral-300 mt-1">
          Stay updated on my latest content by signing up for my newsletter.
        </p>

        <!-- Form -->
        <ClientOnly>
          <div class="newsletter mt-6">
            <ConvertKitForm v-bind="formConfig" />
            <p class="text-sm leading-6 text-neutral-300">
              No spam. Unsubscribe whenever you want.
            </p>
          </div>
        </ClientOnly>
      </div>
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
  @apply flex flex-col md:flex-row gap-x-4 md:max-w-lg !important;
}

.formkit-form.clare div:first-of-type {
  @apply w-full !important;
}

.formkit-form.clare .formkit-fields {
  @apply md:flex-nowrap !important;
}

.formkit-form.clare .formkit-input {
  @apply min-w-0 flex-auto rounded-full bg-white/5 text-base text-white border-none ring-1 ring-white/15 placeholder:text-neutral-400 focus:ring-2 focus:ring-cyan-500 h-10 !important;
}

.formkit-form.clare .formkit-submit {
  @apply flex-none rounded-full w-full md:w-auto h-10 md:ml-3 text-base flex items-center justify-center bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 !important;
}

.formkit-form.clare .formkit-submit span {
  @apply pt-2.5 pb-2 px-4 !important;
}
</style>
