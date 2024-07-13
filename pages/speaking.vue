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

    <div class="py-20">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <!-- Podcasts -->
        <div>
          <h2
            class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 lg:mb-0"
          >
            Podcasts
          </h2>
          <p
            class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2 mb-4"
          >
            I have been a guest on the following podcasts. Please
            <NuxtLink
              :to="NAVIGATION.CONTACT"
              class="text-neutral-900 dark:text-white underline"
              >contact me</NuxtLink
            >
            if you’d like to invite me to yours.
          </p>

          <ul
            role="list"
            class="divide-y divide-neutral-100 dark:divide-neutral-800"
          >
            <li
              v-for="podcast in podcasts"
              :key="podcast.email"
              class="flex justify-between gap-x-6 py-5"
            >
              <div class="flex min-w-0 gap-x-4">
                <nuxt-img
                  class="h-12 w-12 flex-none rounded-full bg-neutral-50 dark:bg-neutral-800"
                  provider="cloudinary"
                  :src="podcast.imageUrl"
                  :alt="podcast.alt"
                  placeholder
                />
                <div class="min-w-0 flex-auto">
                  <p
                    class="text-base font-bold leading-6 text-neutral-900 dark:text-white"
                  >
                    {{ podcast.name }}
                  </p>
                  <p
                    class="mt-1 truncate text-sm leading-5 text-neutral-500 dark:text-neutral-300"
                  >
                    {{ podcast.episode }}
                  </p>
                </div>
              </div>
              <div class="shrink-0 flex flex-col items-end">
                <a
                  :href="podcast.link"
                  target="_blank"
                  class="rounded-md bg-white dark:bg-neutral-900 px-2.5 py-1.5 text-sm font-semibold text-neutral-900 dark:text-white ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700 dark:hover:bg-neutral-800"
                  >View podcast<span class="sr-only">, {{ podcast.name }}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NAVIGATION } from "@/constants/navigation";

const podcasts = [
  {
    name: "Cloudinary DevJams",
    episode:
      "Innovative Image and Video Delivery in Nuxt and TinaCMS with Cloudinary",
    imageUrl: "/v1705360153/nuxt-blog/q8vvln5rrh1wq2jkdhaz.png",
    alt: "Cloudinary logo",
    link: "https://www.youtube.com/live/Zme3mQ0aTCg?si=o6wLT1nOePIj3UIk"
  }
];
</script>

<style scoped></style>
