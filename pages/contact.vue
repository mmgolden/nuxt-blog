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

    <div class="pt-10 pb-10 bg-neutral-50 dark:bg-neutral-900">
      <div class="mx-auto max-w-3xl px-4 lg:px-8">
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
              <BaseInput
                label="Full name"
                id="name"
                name="name"
                autocomplete="name"
                required
              />

              <!-- Email -->
              <BaseInput
                label="Email"
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                required
              />

              <!-- Message -->
              <BaseTextarea
                label="Message"
                name="message"
                id="message"
                required
              />

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

            <div class="mt-10 flex justify-end">
              <BaseButton type="submit">Send message</BaseButton>
            </div>
          </form>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

const { vueApp } = useNuxtApp();
const config = useRuntimeConfig();

const token = ref("");

const { use } = vueApp as any;

use(VueReCaptcha, {
  siteKey: config.public.recaptchaKey
});

onMounted(async () => {
  const { executeRecaptcha, recaptchaLoaded } = useReCaptcha() as any;

  await recaptchaLoaded();

  token.value = await executeRecaptcha("login");
});
</script>

<style scoped></style>
