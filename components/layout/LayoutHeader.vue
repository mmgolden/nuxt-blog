<template>
  <header :class="[y > 100 ? borderClass : headerClass]">
    <nav
      class="mx-auto container flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <!-- Logo -->
      <LayoutLogo />

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900 dark:text-white"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <!-- Nav items -->
      <div class="hidden lg:flex lg:gap-x-12">
        <LayoutNavItems :navigation="navigation" />
      </div>
    </nav>

    <!-- Mobile menu -->
    <Dialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <LayoutLogo />

          <!-- Mobile menu button -->
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-900 dark:text-white"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <!-- Nav items -->
            <div class="space-y-2 py-6">
              <LayoutNavItems
                :navigation="navigation"
                class="-mx-3 block rounded-lg px-3 py-2"
              />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useWindowScroll } from "@vueuse/core";

const { x, y } = useWindowScroll();

const headerClass =
  "bg-white dark:bg-gray-900 sticky top-0 border-b-[1px] border-b-white dark:border-b-gray-900";
const borderClass =
  "bg-white dark:bg-gray-900 sticky top-0 border-b-[1px] border-b-gray-200 dark:border-b-gray-800";

const navigation = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "#" }
];

const mobileMenuOpen = ref(false);
</script>

<style scoped></style>
