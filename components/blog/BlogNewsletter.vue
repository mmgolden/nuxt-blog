<template>
  <div
    class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16 py-16"
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
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline sm:block"
        >
          Subscribe to get my latest posts
        </h2>
        <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 mt-2">
          I’m a software developer based in Asheville, NC. I have 7+ years of
          experience in front-end development and use HTML, CSS, JavaScript,
          TypeScript, and Vue. Find out when I publish new content by
          subscribing to my newsletter.
        </p>
      </div>
    </div>

    <!-- Form -->
    <div class="newsletter mt-8">
      <ConvertKitForm v-bind="formConfig" />
      <p class="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
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
