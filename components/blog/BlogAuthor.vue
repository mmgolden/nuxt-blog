<template>
  <div
    class="border-t border-neutral-200 dark:border-white/10 mt-16 pt-16 md:flex"
  >
    <NuxtImg
      class="h-28 w-auto rounded-full mb-8 md:mb-0 md:mr-8"
      provider="cloudinary"
      src="v1693853971/nuxt-blog/ekyy29thyshtywke69go.png"
      loading="lazy"
      alt="Headshot of Melinda Golden"
      placeholder
    />

    <p class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2">
      Hi, I'm Melinda, an Independent Design Systems Engineer. I help product
      teams build scalable component libraries and design systems that reduce
      duplicate work, align design and engineering, and provide the structure to
      ship faster and more consistently.
    </p>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
