<template>
  <div class="sm:col-span-2">
    <label
      :for="id"
      class="ml-px block pl-4 text-base text-neutral-900 dark:text-white"
    >
      {{ label }}
    </label>
    <div class="mt-2">
      <input
        v-bind="$attrs"
        :type="type"
        :name="name"
        :id="id"
        class="block w-full rounded-full bg-neutral-50 dark:bg-white/5 px-4 pt-2 pb-1.5 text-base text-neutral-900 dark:text-white border-none ring-1 -ring-offset-1 ring-neutral-300 dark:ring-white/15 placeholder:text-neutral-400 focus:ring-2 focus:-ring-offset-2 focus:ring-cyan-500 dark:focus:ring-cyan-500"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: "text" | "email";
  name: string;
  id: string;
  label: string;
}

const { type = "text" } = defineProps<Props>();
</script>

<style scoped></style>
