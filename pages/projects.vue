<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>Projects | Melinda Golden</Title>
      <Meta
        name="description"
        content="Melinda Golden is a front-end developer based in Asheville, NC."
      />
      <Link rel="canonical" href="https://melindagolden.com/projects/" />
    </Head>

    <LayoutPageTitle>
      <template #title> Projects </template>
    </LayoutPageTitle>

    <div class="py-20 bg-white dark:bg-neutral-950">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <!-- Projects -->
        <div>
          <h2
            class="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2 lg:mb-0"
          >
            Projects
          </h2>
          <p
            class="text-base md:text-lg text-neutral-600 dark:text-neutral-300 mt-2 mb-4"
          >
            These are the projects I have built and launched.
          </p>

          <ul
            role="list"
            class="divide-y divide-neutral-100 dark:divide-neutral-800"
          >
            <li
              v-for="project in projects"
              :key="project.name"
              class="flex flex-col md:flex-row md:justify-between gap-x-6 py-5"
            >
              <div class="flex flex-col md:flex-row min-w-0 gap-x-4">
                <nuxt-img
                  class="mb-4 md:mb-0 h-12 w-12 flex-none rounded-full bg-neutral-50 dark:bg-neutral-800"
                  provider="cloudinary"
                  :src="project.imageUrl"
                  :alt="project.alt"
                  placeholder
                />
                <div class="min-w-0 flex-auto">
                  <div class="flex gap-4 items-center">
                    <p
                      class="text-base font-bold leading-6 text-neutral-900 dark:text-white"
                    >
                      {{ project.name }}
                    </p>
                    <BaseTag :type="project.tag" size="small">{{
                      project.tag
                    }}</BaseTag>
                  </div>
                  <p
                    class="mt-1 text-sm leading-5 text-neutral-500 dark:text-neutral-300"
                  >
                    {{ project.description }}
                  </p>
                </div>
              </div>
              <div class="mt-4 md:mt-0 shrink-0 flex flex-col md:items-end">
                <a
                  :href="project.link"
                  target="_blank"
                  class="rounded-md bg-white dark:bg-neutral-900 px-2.5 py-1.5 text-sm font-semibold text-neutral-900 dark:text-white ring-1 ring-neutral-300 hover:bg-neutral-50 dark:ring-neutral-700 dark:hover:bg-neutral-800 text-center"
                  >View project<span class="sr-only">, {{ project.name }}</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "Remind Day",
    description:
      "Remind Day is a browser extension that helps you achieve your goals by setting objectives and receiving reminders to track progress with check-ins.",
    imageUrl: "/v1720893711/nuxt-blog/k7m1m33mttibipj7ccfi.png",
    alt: "Remind Day logo",
    link: "https://remindday.com/",
    tag: "active"
  }
];
</script>

<style scoped></style>
