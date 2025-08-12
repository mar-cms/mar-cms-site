export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      { code: "pt", iso: "pt-PT", name: "Português", file: "pt.json" },
    ],
    defaultLocale: "en",
  },
});
