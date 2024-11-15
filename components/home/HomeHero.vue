<template>
  <div class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-4xl pt-8 pb-20 px-4 lg:px-8">
      <nuxt-img
        class="h-28 w-auto rounded-full mb-8"
        provider="cloudinary"
        src="v1693853971/nuxt-blog/ekyy29thyshtywke69go.png"
        alt="Headshot of Melinda Golden"
        placeholder
      />
      <h1
        class="text-2xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white"
      >
        Hello, I'm Melinda Golden
      </h1>
      <div class="flex flex-col gap-4">
        <p class="text-lg text-neutral-600 dark:text-neutral-300">
          Hey there! I'm a Senior Front-End Developer based in Asheville, NC. I
          made the leap from being a wedding photographer to becoming a
          self-taught software developer.
        </p>
        <p class="text-lg text-neutral-600 dark:text-neutral-300">
          With over {{ timeFromNow(DATES.WORK_EXPERIENCE) }} of experience, I've
          worked with small companies and startups, creating performant,
          accessible, and responsive web applications.
        </p>
        <p class="text-lg text-neutral-600 dark:text-neutral-300">
          I'm currently employed full-time, but in my free time, I enjoy being
          an indie-maker and sharing my journey of creating projects.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
