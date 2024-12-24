<template>
  <header
    class="z-40 bg-neutral-50 dark:bg-neutral-900 fixed top-0 left-0 right-0"
    :class="{ shadow: y > 70 }"
  >
    <nav
      class="mx-auto max-w-3xl flex items-center justify-between px-6 lg:px-8 transition-all"
      :class="[y > 70 ? 'py-3' : 'py-6']"
      aria-label="Global"
    >
      <!-- Logo -->
      <LayoutLogo />

      <div class="flex items-center gap-6 lg:hidden">
        <!-- Theme button -->
        <ClientOnly>
          <LayoutThemeButton />
        </ClientOnly>

        <!-- Mobile menu button -->
        <BaseIconButton label="Open main menu" @click="mobileMenuOpen = true">
          <Bars3Icon
            class="h-6 w-6 text-neutral-900 dark:text-white"
            aria-hidden="true"
          />
        </BaseIconButton>
      </div>

      <!-- Nav items -->
      <div class="hidden lg:flex lg:gap-x-12 lg:items-center">
        <LayoutNavItems :navigation="navigation" />

        <!-- Theme button -->
        <ClientOnly>
          <LayoutThemeButton />
        </ClientOnly>
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
        class="bg-neutral-50 dark:bg-neutral-900 fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10 dark:sm:ring-white/10"
      >
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <LayoutLogo @click="mobileMenuOpen = false" />

          <!-- Mobile menu button -->
          <BaseIconButton label="Close menu" @click="mobileMenuOpen = false">
            <XMarkIcon
              class="h-6 w-6 text-neutral-900 dark:text-white"
              aria-hidden="true"
            />
          </BaseIconButton>
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

<script setup lang="ts">
import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useWindowScroll } from "@vueuse/core";
import { NAVIGATION } from "@/constants/navigation";

const { y } = useWindowScroll();

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "About", href: NAVIGATION.ABOUT },
  { name: "Projects", href: NAVIGATION.PROJECTS },
  { name: "Speaking", href: NAVIGATION.SPEAKING },
  { name: "Blog", href: NAVIGATION.BLOG },
  { name: "Contact", href: NAVIGATION.CONTACT }
];
</script>

<style scoped></style>
