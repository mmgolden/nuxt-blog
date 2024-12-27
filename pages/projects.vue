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

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
        <!-- Projects -->
        <ul role="list">
          <li
            v-for="project in projects"
            :key="project.name"
            class="group cursor-pointer flex flex-col bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-3xl py-6 px-4 md:px-6"
            @click="goToProject(project)"
          >
            <NuxtImg
              src="https://picsum.photos/600/400"
              class="rounded-xl w-full"
              :alt="project.name"
              placeholder
            />
            <div class="mt-5 flex items-center gap-4">
              <h3
                class="text-lg md:text-xl font-bold leading-normal text-neutral-900 group-hover:text-neutral-600 dark:text-white dark:group-hover:text-neutral-300"
              >
                <a :href="project.link" target="_blank" class="rounded-xl">
                  {{ project.name }}
                </a>
              </h3>
              <BaseTag :type="project.tag" size="small">
                {{ project.tag }}
              </BaseTag>
            </div>
            <p
              class="mt-3 text-base leading-normal text-neutral-500 dark:text-neutral-300"
            >
              {{ project.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "@/types";

const projects: Project[] = [
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

const goToProject = (project: Project) => {
  window.open(project.link, "_blank");
};
</script>

<style scoped></style>
