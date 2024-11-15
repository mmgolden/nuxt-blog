<template>
  <div>
    <!-- Meta -->
    <Head>
      <Title>Contact | Melinda Golden</Title>
      <Meta
        name="description"
        content="Melinda Golden is a front-end developer based in Asheville, NC."
      />
      <Link rel="canonical" href="https://melindagolden.com/contact/" />
    </Head>

    <LayoutPageTitle>
      <template #title> Contact </template>
    </LayoutPageTitle>

    <div class="py-20 bg-white dark:bg-neutral-950">
      <div class="mx-auto max-w-4xl px-6 lg:px-8">
        <p
          class="mt-2 text-lg leading-8 text-neutral-600 dark:text-neutral-300"
        >
          I'm glad you want to get in touch! Email is the best way to reach me,
          so feel free to send me a message at
          <a
            href="mailto:info@melindagolden.com"
            target="_blank"
            class="underline text-neutral-900 dark:text-white"
            >info@melindagolden.com</a
          >. If you prefer, you can also use the contact form below to email me
          directly. I'm looking forward to hearing from you!
        </p>

        <ClientOnly>
          <form
            :action="config.public.formUrl"
            method="POST"
            target="_blank"
            class="mx-auto mt-16 sm:mt-20"
          >
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <!-- Name -->
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
                >
                  Full name
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="name"
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 dark:focus:ring-cyan-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
                >
                  Email
                </label>
                <div class="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 dark:focus:ring-cyan-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <!-- Message -->
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-neutral-900 dark:text-white"
                >
                  Message
                </label>
                <div class="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    class="block w-full rounded-md border-0 px-3.5 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white ring-1 ring-inset ring-neutral-300 dark:ring-neutral-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-cyan-700 dark:focus:ring-cyan-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <!-- Hidden -->
              <input
                type="hidden"
                name="_gotcha"
                :style="{ display: 'none !important' }"
              />

              <!-- ReCAPTCHA -->
              <input
                id="captchaResponse"
                type="hidden"
                :value="token"
                name="g-recaptcha-response"
              />
            </div>

            <div class="mt-10">
              <button
                type="submit"
                class="block w-full rounded-md bg-cyan-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700"
              >
                Send
              </button>
            </div>
          </form>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

const { vueApp } = useNuxtApp();
const config = useRuntimeConfig();

const token = ref("");

vueApp.use(VueReCaptcha, {
  siteKey: config.public.recaptchaKey
});

onMounted(async () => {
  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

  await recaptchaLoaded();

  token.value = await executeRecaptcha("login");
});
</script>

<style scoped></style>
