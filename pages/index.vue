<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>Melinda Golden</Title>
      <Meta name="description" :content="META.DESCRIPTION" />
      <Link rel="canonical" href="https://melindagolden.com" />
    </Head>

    <!-- Hero -->
    <HomeHero />
  </div>
</template>

<script setup lang="ts">
import { META } from "@/constants/meta";
</script>

<style scoped></style>
