// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image"
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "en"
      },
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/png/favicon.png"
        }
      ],
    }
  },

  runtimeConfig: {
    public: {
      formId: process.env.NUXT_FORM_ID,
    }
  },
});
