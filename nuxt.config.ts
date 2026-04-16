export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pages: true,
  modules: ["@nuxtjs/i18n", "@nuxt/ui", "nuxt-gtag", "@nuxt/image"],
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
        { rel: 'preconnect', href: 'https://fonts.cdnfonts.com' },
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.cdnfonts.com/css/switzer',
          onload: "this.onload=null;this.rel='stylesheet'"
        },
        { rel: 'icon', type: 'image/x-icon', href: '/logo-32.png' },
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
  },
  image: {
    provider: 'vercel',
    screens: {
      'xs': 320,
      'sm': 640,
      'icon': 40,
      'flag-icon': 80, 
    }
  }
});