<template>
  <div class="bg-neutral-50 dark:bg-neutral-900">
    <div class="mx-auto max-w-3xl pt-10 pb-10 px-4 lg:px-8">
      <div class="mb-12">
        <div
          class="flex flex-col sm:flex-row sm:justify-between sm:items-end pb-2"
        >
          <h2
            class="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 lg:mb-0"
          >
            Latest articles
          </h2>

          <NuxtLink
            :to="NAVIGATION.BLOG"
            class="flex text-base text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white px-2 py-1 -ml-2 sm:ml-0 rounded-xl"
          >
            <span class="mr-2">See all articles</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </NuxtLink>
        </div>

        <div class="w-full border-t border-neutral-200 dark:border-white/10" />
      </div>

      <BlogPost
        v-for="(post, index) in posts"
        :key="post.title"
        :post="post"
        :class="{ 'mb-12': posts && index !== posts.length - 1 }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NAVIGATION } from "@/constants/navigation";

const { data: posts } = await useAsyncData("blog", () => {
  return queryContent("/")
    .where({ draft: { $eq: false } })
    .sort({ date: -1 })
    .limit(3)
    .find();
});
</script>

<style scoped></style>
