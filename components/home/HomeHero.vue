<template>
  <div class="bg-stone-100 dark:bg-neutral-900">
    <div class="mx-auto max-w-3xl pt-12 pb-20 px-4 lg:px-8">
      <NuxtImg
        class="h-36 w-auto rounded-full mb-8"
        provider="cloudinary"
        src="v1693853971/nuxt-blog/ekyy29thyshtywke69go.png"
        alt="Headshot of Melinda Golden"
        placeholder
      />

      <div class="flex flex-col gap-4">
        <div
          class="border border-neutral-300 dark:border-white/10 rounded-full px-4 py-2 flex items-center gap-2 self-start"
        >
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <p class="text-base text-neutral-600 dark:text-neutral-300 h-5">
            Available for new projects
          </p>
        </div>
        <h1
          class="text-2xl md:text-5xl/snug font-bold text-neutral-900 dark:text-white"
        >
          Hello, I'm Melinda Golden
        </h1>
        <p class="text-lg/loose text-neutral-600 dark:text-neutral-300 mb-5">
          I'm a Senior Front-End Developer based in Asheville, NC. I enjoy
          working with HTML, CSS, TypeScript, and Vue. I help small businesses
          and startups build web applications that are performant, accessible,
          and responsive.
        </p>
        <BaseButton class="self-start" @click="goToContact"
          >Let's talk</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAVIGATION } from "@/constants/navigation";

const router = useRouter();

const goToContact = () => {
  router.push(NAVIGATION.CONTACT);
};
</script>

<style scoped></style>
