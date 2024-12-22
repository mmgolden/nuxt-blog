<template>
  <div
    class="border-t border-neutral-200 dark:border-neutral-800 mt-16 pt-16 md:flex"
  >
    <nuxt-img
      class="h-28 w-auto rounded-full mb-8 md:mb-0 md:mr-8"
      provider="cloudinary"
      src="v1693853971/nuxt-blog/ekyy29thyshtywke69go.png"
      loading="lazy"
      alt="Headshot of Melinda Golden"
      placeholder
    />

    <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2">
      Hey there! I'm Melinda Golden, a Senior Front-End Developer with over
      {{ timeFromNow(DATES.WORK_EXPERIENCE) }} of experience. I have worked with
      small companies and startups to build performant, accessible, and
      responsive web applications. I enjoy being an indie maker and sharing my
      journey of creating projects.
    </p>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
