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

    <div class="pt-16 pb-24 sm:pt-20 sm:pb-32">
      <div class="mx-auto max-w-4xl px-6 lg:px-8 mb">
        <LayoutPageTitle>
          <template #title> Blog </template>
        </LayoutPageTitle>

        <BlogPost
          v-for="(post, index) in posts"
          :key="post.title"
          :post="post"
          :class="{ 'mb-12': index !== posts.length - 1 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("blog", () => {
  return queryContent("/")
    .where({ draft: { $eq: false } })
    .sort({ date: -1 })
    .find();
});
</script>

<style scoped></style>
