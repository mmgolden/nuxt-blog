<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>Speaking | Melinda Golden</Title>
      <Meta
        name="description"
        content="Melinda Golden is a front-end developer based in Asheville, NC."
      />
      <Link rel="canonical" href="https://melindagolden.com/speaking/" />
    </Head>

    <LayoutPageTitle>
      <template #title> Speaking </template>
    </LayoutPageTitle>

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <!-- Podcasts -->
        <div>
          <h2
            class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 lg:mb-0"
          >
            Podcasts
          </h2>
          <p
            class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2 mb-8"
          >
            I have been a guest on the following podcasts. Please
            <NuxtLink
              :to="NAVIGATION.CONTACT"
              class="text-neutral-900 dark:text-white underline"
              >contact me</NuxtLink
            >
            if you'd like to invite me to yours.
          </p>

          <ul role="list" class="flex flex-col gap-y-6">
            <li
              v-for="podcast in podcasts"
              :key="podcast.name"
              class="cursor-pointer bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl sm:rounded-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-x-6 py-5 px-4"
              @click="goToPodcast(podcast)"
            >
              <div class="flex flex-col sm:flex-row min-w-0 gap-x-4">
                <div class="flex justify-between mb-4 sm:mb-0">
                  <NuxtImg
                    class="h-12 w-12 flex-none rounded-full bg-neutral-50 dark:bg-neutral-800"
                    provider="cloudinary"
                    :src="podcast.imageUrl"
                    :alt="podcast.alt"
                    placeholder
                  />

                  <a
                    :href="podcast.link"
                    target="_blank"
                    class="shrink-0 flex sm:hidden -mt-2 -mr-2 w-12 h-12 rounded-full justify-center items-center"
                  >
                    <span class="sr-only">View podcast</span>
                    <ArrowUpRightIcon
                      class="w-6 h-6 text-neutral-900 dark:text-white"
                    />
                  </a>
                </div>
                <div class="min-w-0 flex-auto">
                  <p
                    class="text-base font-bold leading-6 text-neutral-900 dark:text-white"
                  >
                    {{ podcast.name }}
                  </p>
                  <p
                    class="mt-1 text-sm leading-5 text-neutral-500 dark:text-neutral-300"
                  >
                    {{ podcast.episode }}
                  </p>
                </div>
              </div>
              <a
                :href="podcast.link"
                target="_blank"
                class="shrink-0 hidden sm:flex sm:mr-2 w-12 h-12 rounded-full justify-center items-center"
              >
                <span class="sr-only">View podcast</span>
                <ArrowUpRightIcon
                  class="w-6 h-6 text-neutral-900 dark:text-white"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon } from "@heroicons/vue/24/outline";
import { NAVIGATION } from "@/constants/navigation";
import type { Podcast } from "@/types";

const podcasts: Podcast[] = [
  {
    name: "Cloudinary DevJams",
    episode:
      "Innovative Image and Video Delivery in Nuxt and TinaCMS with Cloudinary",
    imageUrl: "/v1705360153/nuxt-blog/q8vvln5rrh1wq2jkdhaz.png",
    alt: "Cloudinary logo",
    link: "https://www.youtube.com/live/Zme3mQ0aTCg?si=o6wLT1nOePIj3UIk"
  }
];

const goToPodcast = (podcast: Podcast) => {
  window.open(podcast.link, "_blank");
};
</script>

<style scoped></style>
