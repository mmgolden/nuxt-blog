<template>
  <main class="h-full">
    <!-- Meta -->
    <Head>
      <Title>{{ post.title }}</Title>
      <Meta name="description" :content="post.description" />
      <Link rel="canonical" :href="`https://melindagolden.com${path}`" />
    </Head>

    <article
      class="mx-auto max-w-4xl px-6 lg:px-8 pt-16 pb-24 sm:pt-20 sm:pb-32"
    >
      <BlogTitle>
        <template #title> {{ post.title }} </template>
        <template #date> {{ formatDate(post.date) }}</template>
        <template #tags>
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

      <ContentDoc class="content" />
    </article>
  </main>
</template>

<script setup>
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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
};
</script>

<style scoped></style>
