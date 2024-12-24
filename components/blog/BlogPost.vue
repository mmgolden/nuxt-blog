<template>
  <article
    class="flex flex-col items-start justify-between bg-white dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-xl py-5 px-6"
    v-bind="$attrs"
  >
    <div class="flex items-center gap-x-4 text-sm">
      <!-- Date -->
      <time
        :datetime="post.date"
        class="text-neutral-500 dark:text-neutral-300"
      >
        {{ formatDate(post.date) }}
      </time>

      <!-- Tags -->
      <div
        v-if="post.tags && post.tags.length > 0"
        class="flex flex-wrap gap-2"
      >
        <NuxtLink
          v-for="tag in post.tags"
          :key="tag"
          to="/"
          class="block rounded-full max-w-fit"
        >
          <BaseTag>{{ tag }}</BaseTag>
        </NuxtLink>
      </div>
    </div>

    <div class="group relative">
      <!-- Title -->
      <h3
        class="mt-3 text-xl font-bold leading-normal text-neutral-900 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300"
      >
        <NuxtLink :href="`${post._path}/`" class="rounded-xl">
          <span class="absolute inset-0" />
          {{ post.title }}
        </NuxtLink>
      </h3>

      <!-- Description -->
      <p
        v-if="post.description"
        class="mt-3 line-clamp-3 text-base leading-normal text-neutral-500 dark:text-neutral-300"
      >
        {{ post.description }}
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { ParsedContent } from "@nuxt/content";

defineProps<{
  post: ParsedContent;
}>();

const formatDate = (date: string) => {
  return dayjs(date).format("MMMM D, YYYY");
};
</script>

<style scoped></style>
