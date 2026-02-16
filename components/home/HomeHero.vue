<template>
  <div class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-3xl pt-12 pb-20 px-4 lg:px-8">
      <NuxtImg
        class="h-28 w-auto rounded-full mb-8"
        provider="cloudinary"
        src="v1693853971/nuxt-blog/ekyy29thyshtywke69go.png"
        alt="Headshot of Melinda Golden"
        placeholder
      />
      <h1
        class="text-2xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white"
      >
        Hello, I'm Melinda Golden
      </h1>
      <div class="flex flex-col gap-4">
        <p class="text-lg text-neutral-600 dark:text-neutral-300">
          I'm a Senior Front-End Developer based in Asheville, NC. I enjoy
          working with HTML, CSS, JavaScript, TypeScript, and Vue. I've helped
          small businesses and startups build web applications that are
          performant, accessible, and responsive.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
