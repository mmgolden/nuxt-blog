<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>Blog | Melinda Golden</Title>
      <Meta
        name="description"
        content="Melinda Golden is a front-end developer based in Asheville, NC."
      />
      <Link rel="canonical" href="https://melindagolden.com/blog/" />
    </Head>

    <LayoutPageTitle>
      <template #title> Blog </template>
    </LayoutPageTitle>

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <BlogPost
          v-for="(post, index) in posts"
          :key="post.title"
          :post="post"
          :class="{ 'mb-12': posts && index !== posts.length - 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryContent("/")
    .where({ draft: { $eq: false } })
    .sort({ date: -1 })
    .find();
});
</script>

<style scoped></style>
