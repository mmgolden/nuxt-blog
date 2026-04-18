<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>About | Melinda Golden</Title>
      <Meta name="description" :content="META.DESCRIPTION" />
      <Link rel="canonical" href="https://melindagolden.com/about/" />
    </Head>

    <LayoutPageTitle>
      <template #title> About </template>
    </LayoutPageTitle>

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <p class="text">
          With over a decade of front-end development experience, I specialize
          in the systems layer, including component architecture, code
          standards, and documentation that support team growth.
        </p>
        <p class="text">
          I've led front-end development at startups and mid-sized companies,
          built greenfield projects from the ground up, and developed component
          libraries that enhance consistency and reduce redundancy. Currently, I
          am working on a multi-brand design system, making key decisions on
          component architecture, tokens, and documentation.
        </p>
        <p class="text">
          I am now offering consulting services focused on the engineering
          aspects of design systems. If you need assistance in building or
          scaling your component library,
          <NuxtLink to="/contact/">let's talk</NuxtLink>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DATES } from "@/constants/dates";
import { META } from "@/constants/meta";
</script>

<style scoped>
.text {
  @apply leading-relaxed lg:leading-loose text-lg mb-6 lg:mb-8 text-neutral-600 dark:text-neutral-300;
}

.text:last-child {
  @apply mb-0;
}

.text a {
  @apply text-neutral-900 dark:text-white underline;
}
</style>
