<template>
  <header :class="[y > 100 ? borderClass : headerClass]">
    <nav
      class="mx-auto max-w-4xl flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <!-- Logo -->
      <LayoutLogo />

      <!-- Mobile menu button -->
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-900 dark:text-white"
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
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="bg-white dark:bg-neutral-900 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <LayoutLogo @click="mobileMenuOpen = false" />

          <!-- Mobile menu button -->
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-neutral-900 dark:text-white"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-neutral-500/10">
            <!-- Nav items -->
            <div class="space-y-2 py-6">
              <LayoutNavItems
                :navigation="navigation"
                class="-mx-3 block rounded-lg px-3 py-2"
                @click="mobileMenuOpen = false"
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
import { NAVIGATION } from "@/constants/navigation";

const { y } = useWindowScroll();

const headerClass =
  "z-40 bg-white dark:bg-neutral-900 fixed top-0 left-0 right-0 border-b-[1px] border-b-white dark:border-b-neutral-900";
const borderClass =
  "z-40 bg-white dark:bg-neutral-900 fixed top-0 left-0 right-0 border-b-[1px] border-b-neutral-200 dark:border-b-neutral-800";

const navigation = [
  { name: "About", href: NAVIGATION.ABOUT },
  { name: "Blog", href: NAVIGATION.BLOG },
  { name: "Contact", href: NAVIGATION.CONTACT }
];

const mobileMenuOpen = ref(false);
</script>

<style scoped></style>
