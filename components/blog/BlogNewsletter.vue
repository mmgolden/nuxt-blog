<template>
  <div
    class="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 mt-16 py-16"
  >
    <!-- Top -->
    <div class="md:flex">
      <nuxt-img
        class="h-32 w-auto rounded-full mb-8 md:mb-0 md:mr-8"
        src="/png/avatar.png"
        alt="Headshot of Melinda Golden"
      />

      <div>
        <h2
          class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white inline sm:block"
        >
          Subscribe to get my latest posts
        </h2>
        <p
          class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2"
        >
          Hi there! I'm Melinda Golden, a software developer based in Asheville,
          NC. I have over seven years of experience in front-end development.
          Stay updated on my latest content by signing up for my newsletter.
        </p>
      </div>
    </div>

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
import { ref } from "vue";
import ConvertKitForm from "convertkit-vue";

const config = useRuntimeConfig();

const formConfig = ref({
  formId: config.public.formId,
  template: "minimal",
  hideName: true
});
</script>

<style scoped></style>
