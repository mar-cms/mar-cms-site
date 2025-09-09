export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/i18n", "@nuxt/ui", "nuxt-gtag"],
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
      title: 'Mar CMS',
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/switzer",
        },
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      ],
    },
  },
  runtimeConfig: {
    public: {
      google_calendar_url: process.env.GOOGLE_CALENDAR_URL
    }
  },
  gtag: {
    id: process.env.GOOGLE_TAG_MANAGER_TAG_ID,
    enabled: process.env.NODE_ENV === 'production'
  }
});