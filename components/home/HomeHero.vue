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
          Hey there! I have over {{ timeFromNow(DATES.WORK_EXPERIENCE) }} of
          experience in front-end development. Currently, I work full-time as a
          Senior Front End Developer. I'm also the founder of
          <a
            href="https://rootelementlabs.com/"
            target="_blank"
            class="underline text-neutral-800 dark:text-neutral-200"
            >Root Element Labs</a
          >. I offer part-time consulting services in front-end architecture and
          design systems.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
</script>

<style scoped></style>
