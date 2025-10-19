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
      Hey there! I'm Melinda Golden. I have over
      {{ timeFromNow(DATES.WORK_EXPERIENCE) }} of experience in front-end
      development. I currently work full-time as a Senior Front End Developer.
      I'm also the founder of
      <a
        href="https://rootelementlabs.com/"
        target="_blank"
        class="underline text-neutral-800 dark:text-neutral-200"
        >Root Element Labs</a
      >. I offer part-time consulting services in front-end architecture and
      design systems.
    </p>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
