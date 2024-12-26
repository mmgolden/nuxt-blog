<template>
  <div v-if="post">
    <!-- Meta -->
    <Head>
      <Title>{{ post.title }}</Title>
      <Meta
        v-if="post.description"
        name="description"
        :content="post.description"
      />
      <Link rel="canonical" :href="`https://melindagolden.com${path}`" />
    </Head>

    <BlogTitle>
      <template #title> {{ post.title }} </template>
      <template #date> {{ formatDate(post.date) }}</template>
      <template v-if="post.tags && post.tags.length > 0" #tags>
        <NuxtLink
          v-for="tag in post.tags"
          :key="tag"
          to="/"
          class="block rounded-full max-w-fit"
        >
          <BaseTag>{{ tag }}</BaseTag>
        </NuxtLink>
      </template>
    </BlogTitle>

    <div class="bg-neutral-50 dark:bg-neutral-900">
      <article class="mx-auto max-w-3xl px-6 lg:px-8 pt-10 pb-10">
        <ContentDoc class="content" />
        <BlogAuthor />
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
const { path } = useRoute();

// Remove trailing slash before query
let postPath = path;
const lastChar = path.charAt(path.length - 1);
if (lastChar === "/") {
  postPath = path.slice(0, -1);
}

const { data: post } = await useAsyncData(`content-${postPath}`, () => {
  return queryContent().where({ _path: postPath }).findOne();
});

const formatDate = (date: string) => {
  return dayjs(date).format("MMMM D, YYYY");
};
</script>

<style>
.content a {
  @apply text-neutral-900 dark:text-white underline;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  @apply text-neutral-900 dark:text-white mb-4 pt-4 first:pt-0;
}

.content h1 a,
.content h2 a,
.content h3 a,
.content h4 a,
.content h5 a,
.content h6 a {
  @apply no-underline;
}

.content h1 {
  @apply text-3xl lg:text-4xl font-bold;
}

.content h2 {
  @apply text-2xl lg:text-3xl font-bold;
}

.content h3 {
  @apply text-xl lg:text-2xl font-bold;
}

.content h4 {
  @apply text-lg lg:text-xl font-bold;
}

.content h5 {
  @apply text-base lg:text-lg font-bold;
}

.content h6 {
  @apply text-base font-bold;
}

.content p {
  @apply leading-relaxed lg:leading-loose text-lg mb-6 lg:mb-8 text-neutral-600 dark:text-neutral-300;
}

.content blockquote {
  @apply pl-4 border-l-2 border-neutral-600 dark:border-neutral-300;
}

.content ol,
.content ul {
  @apply mb-8;
}

.content li {
  @apply text-neutral-600 dark:text-neutral-300 mb-2;
}

.content ol {
  @apply list-decimal pl-4;
}

.content ul {
  @apply list-disc pl-4;
}

.content pre {
  @apply mb-8 text-base bg-white dark:bg-neutral-800 p-4 whitespace-pre-wrap border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-white overflow-x-auto;
}

.content p code {
  @apply text-base bg-white dark:bg-neutral-800 px-2 py-1 border border-neutral-200 dark:border-neutral-700 rounded-md text-neutral-900 dark:text-white;
}

.content img {
  @apply border border-neutral-200 dark:border-neutral-700 rounded-md;
}
</style>
