<template>
  <footer class="bg-white dark:bg-neutral-950 mt-auto">
    <div
      class="mx-auto max-w-4xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex flex-col md:flex-row items-center">
        <!-- Toggle-->
        <ClientOnly>
          <LayoutToggle />
        </ClientOnly>

        <!-- Copyright -->
        <p
          class="text-center text-xs leading-5 mt-4 md:mt-0 md:ml-4 text-neutral-600 dark:text-neutral-300"
        >
          &copy; {{ currentYear }} Melinda Golden
        </p>
      </div>

      <!-- Social links -->
      <div class="flex justify-center space-x-6 mt-4 md:mt-0">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          target="_blank"
          class="text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300 rounded-md"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";

const currentYear = new Date().getFullYear();

const navigation = [
  {
    name: "GitHub",
    href: "https://github.com/mmgolden",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            "clip-rule": "evenodd"
          })
        ])
    })
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/melindamgolden/",
    icon: defineComponent({
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 448 512" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
            "clip-rule": "evenodd"
          })
        ])
    })
  }
];
</script>

<style lang="scss" scoped></style>
