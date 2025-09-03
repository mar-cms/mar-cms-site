export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "english", file: "en.json" },
      { code: "de", iso: "de-DE", name: "german", file: "de.json" },
      { code: "pt", iso: "pt-PT", name: "portuguese", file: "pt.json" },
    ],
    defaultLocale: "en",
  },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/switzer",
        },
      ],
    },
  },
});
