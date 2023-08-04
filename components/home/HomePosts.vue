<template>
  <div class="mx-auto max-w-4xl pt-8 pb-28 px-4 lg:px-8">
    <div
      class="flex flex-col lg:flex-row lg:justify-between mb-10 border-b border-neutral-200 dark:border-neutral-800 pb-6 sm:mb-16 bg:white dark:bg-neutral-900"
    >
      <h2
        class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 lg:mb-0"
      >
        Latest articles
      </h2>

      <NuxtLink
        :to="NAVIGATION.BLOG"
        class="flex text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
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

    <BlogPost
      v-for="(post, index) in posts"
      :key="post.title"
      :post="post"
      :class="{ 'mb-12': index !== posts.length - 1 }"
    />
  </div>
</template>

<script setup>
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
