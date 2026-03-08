<template>
  <div class="v2-blog">
    <!-- NAV -->
    <nav class="nav">
      <div class="nav-inner">
        <NuxtLink :to="$localePath('/homepage-v2')" class="nav-logo">
          <img src="/logo.png" alt="Mar CMS" class="nav-logo-img">
          <div class="nav-logo-text">MAR <span>CMS</span></div>
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink :to="$localePath('/homepage-v2')">{{ $t('menu_home') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#problem'">{{ $t('v2_nav_problem') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#capabilities'">{{ $t('v2_nav_capabilities') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#hospitality'">{{ $t('v2_nav_hospitality') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#partnership'">{{ $t('v2_nav_partnership') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#faq'">FAQ</NuxtLink>
          <NuxtLink :to="$localePath('/blog-v2')">{{ $t('blog') }}</NuxtLink>
        </div>
        <div class="nav-lang" :class="{ open: langOpen }">
          <button class="lang-toggle" @click="langOpen = !langOpen">
            <img :src="`/${locale}.png`" :alt="locale" class="lang-flag">
            <svg class="lang-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4.5l3 3 3-3"/></svg>
          </button>
          <div class="lang-dropdown">
            <button
              v-for="lang in availableLocales"
              :key="lang.code"
              class="lang-option"
              :class="{ active: locale === lang.code }"
              @click="setLocale(lang.code); langOpen = false"
            >
              <img :src="`/${lang.code}.png`" :alt="lang.code" class="lang-flag">
              <span>{{ lang.code.toUpperCase() }}</span>
            </button>
          </div>
        </div>
        <div class="nav-right-group">
          <a :href="calendarUrl" target="_blank" class="nav-cta">{{ $t('v2_nav_cta') }}</a>
          <button class="nav-burger" @click="mobileMenu = !mobileMenu" :class="{ open: mobileMenu }">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>

    <!-- MOBILE MENU -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenu" class="mobile-overlay" @click="mobileMenu = false">
        <div class="mobile-drawer" @click.stop>
          <NuxtLink to="/homepage-v2" @click="mobileMenu = false">{{ $t('menu_home') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#problem'" @click="mobileMenu = false">{{ $t('v2_nav_problem') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#capabilities'" @click="mobileMenu = false">{{ $t('v2_nav_capabilities') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#hospitality'" @click="mobileMenu = false">{{ $t('v2_nav_hospitality') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#partnership'" @click="mobileMenu = false">{{ $t('v2_nav_partnership') }}</NuxtLink>
          <NuxtLink :to="$localePath('/homepage-v2') + '#faq'" @click="mobileMenu = false">FAQ</NuxtLink>
          <NuxtLink :to="$localePath('/blog-v2')" @click="mobileMenu = false">{{ $t('blog') }}</NuxtLink>
          <div class="mobile-lang">
            <button
              v-for="lang in availableLocales"
              :key="lang.code"
              class="mobile-lang-btn"
              :class="{ active: locale === lang.code }"
              @click="setLocale(lang.code)"
            >
              <img :src="`/${lang.code}.png`" :alt="lang.code" class="lang-flag">
              <span>{{ lang.code.toUpperCase() }}</span>
            </button>
          </div>
          <a :href="calendarUrl" target="_blank" class="mobile-cta" @click="mobileMenu = false">{{ $t('v2_nav_cta') }}</a>
        </div>
      </div>
    </Transition>

    <!-- ARTICLE -->
    <article v-if="article" class="article-page">
      <div class="container">
        <nav class="back-nav">
          <NuxtLink :to="$localePath('/blog-v2')" class="back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            {{ $t('back_to_blog') }}
          </NuxtLink>
        </nav>

        <figure v-if="article.img" class="hero-img-wrap">
          <img :src="article.img" :alt="articleTitle" class="hero-img">
        </figure>

        <header class="article-header">
          <h1>{{ articleTitle }}</h1>
          <div class="article-meta">
            <span>{{ $t('by') }} {{ article.author }}</span>
            <span class="meta-dot"></span>
            <time :datetime="article.date">{{ formattedDate }}</time>
          </div>
        </header>

        <section class="article-body">
          <div v-for="(block, index) in article.content" :key="index" class="content-block">
            <h2 v-if="block.type === 'title'">
              {{ typeof block.value === 'object' ? block.value[locale] : block.value }}
            </h2>
            <p v-else-if="block.type === 'text'">
              {{ typeof block.value === 'object' ? block.value[locale] : block.value }}
            </p>
            <img v-else-if="block.type === 'image'" :src="block.value" alt="" class="content-img">
            <ul v-else-if="block.type === 'list'">
              <li
                v-for="(item, i) in (typeof block.value === 'object' ? block.value[locale] : block.value)"
                :key="i"
                v-html="linkifyText(item)"
              />
            </ul>
          </div>
        </section>
      </div>
    </article>

    <!-- NOT FOUND -->
    <div v-else class="not-found">
      <div class="container">
        <p>{{ $t('article_not_found') }}</p>
        <NuxtLink :to="$localePath('/blog-v2')" class="back-link">{{ $t('back_to_blog') }}</NuxtLink>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <img src="/logo.png" alt="Mar CMS" class="footer-logo-img">
            <div class="nav-logo-text" style="font-size:16px">MAR <span>CMS</span></div>
          </div>
          <div class="footer-links">
            <a href="mailto:contact@mar-cms.com">contact@mar-cms.com</a>
            <a href="https://www.linkedin.com/company/mar-cms" target="_blank">LinkedIn</a>
          </div>
        </div>
        <div class="footer-copy">{{ $t('v2_footer_copy') }}</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import articles from '~/data/articles'

definePageMeta({ layout: 'landing' })

const { locale, locales, setLocale } = useI18n()
const availableLocales = computed(() => locales.value.map(l => ({ code: l.code })))

const runtimeConfig = useRuntimeConfig()
const calendarUrl = runtimeConfig.public.google_calendar_url || 'https://calendar.app.google/SRb41cEHAuApFQ8AA'

const langOpen = ref(false)
const mobileMenu = ref(false)

const route = useRoute()
const articleId = route.params.id

const article = computed(() =>
  articles.find((a) => a.id.toString() === articleId)
)

const articleTitle = computed(() => {
  if (!article.value) return ''
  return typeof article.value.title === 'object' ? article.value.title[locale.value] : article.value.title
})

useHead({
  title: computed(() => articleTitle.value ? `${articleTitle.value} | Mar CMS Blog` : 'Blog | Mar CMS'),
  meta: [
    { name: 'description', content: 'Insights on hospitality marketing, brand strategy, and digital transformation.' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap' }
  ]
})

const formattedDate = computed(() => {
  if (!article.value) return ''
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.value.date))
})

function linkifyText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>')
}
</script>

<style scoped>
.v2-blog {
  --v2-bg-deep: #060a14;
  --v2-bg-primary: #0a0f1e;
  --v2-bg-card: #111827;
  --v2-border-subtle: rgba(255,255,255,0.06);
  --v2-border-card: rgba(255,255,255,0.08);
  --v2-accent: #00c9a7;
  --v2-accent-glow: rgba(0,201,167,0.15);
  --v2-text-primary: #f1f5f9;
  --v2-text-secondary: #94a3b8;
  --v2-text-muted: #64748b;
  --v2-text-dim: #475569;
  --v2-font-display: 'Outfit', sans-serif;
  --v2-font-body: 'DM Sans', sans-serif;
  --v2-max-w: 1200px;
  font-family: var(--v2-font-body);
  background: var(--v2-bg-deep);
  color: var(--v2-text-primary);
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* NAV */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 32px; backdrop-filter: blur(20px); background: rgba(6,10,20,0.85); border-bottom: 1px solid var(--v2-border-subtle); }
.nav-inner { max-width: var(--v2-max-w); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 72px; }
.nav-logo { display: flex; align-items: center; gap: 10px; }
.nav-logo-img { height: 32px; width: auto; }
.nav-logo-text { font-family: var(--v2-font-display); font-weight: 800; font-size: 20px; letter-spacing: -0.5px; }
.nav-logo-text span { color: var(--v2-text-muted); font-weight: 500; }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--v2-text-secondary); transition: color 0.2s; }
.nav-links a:hover { color: var(--v2-text-primary); }

/* LANG */
.nav-lang { position: relative; }
.lang-toggle { display: flex; align-items: center; gap: 4px; background: none; border: 1px solid var(--v2-border-card); border-radius: 50px; padding: 4px 8px 4px 4px; cursor: pointer; color: var(--v2-text-secondary); transition: all 0.2s; }
.lang-toggle:hover { border-color: rgba(255,255,255,0.15); color: var(--v2-text-primary); }
.lang-chevron { width: 10px; height: 10px; transition: transform 0.2s; }
.nav-lang.open .lang-chevron { transform: rotate(180deg); }
.lang-flag { width: 20px; height: 20px; border-radius: 50%; object-fit: cover; display: block; }
.lang-dropdown { position: absolute; top: calc(100% + 8px); right: 0; background: var(--v2-bg-card); border: 1px solid var(--v2-border-card); border-radius: 12px; padding: 4px; min-width: 100px; opacity: 0; visibility: hidden; transform: translateY(-4px); transition: all 0.2s; }
.nav-lang.open .lang-dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
.lang-option { display: flex; align-items: center; gap: 8px; width: 100%; background: none; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; color: var(--v2-text-secondary); font-size: 13px; font-weight: 500; transition: all 0.15s; }
.lang-option:hover { background: rgba(255,255,255,0.05); color: var(--v2-text-primary); }
.lang-option.active { color: var(--v2-accent); }

/* NAV RIGHT */
.nav-right-group { display: flex; align-items: center; gap: 12px; }
.nav-cta { padding: 10px 24px; background: var(--v2-accent); color: var(--v2-bg-deep); font-family: var(--v2-font-display); font-weight: 700; font-size: 13px; border-radius: 50px; transition: all 0.3s; }
.nav-cta:hover { background: #00ddb8; }
.nav-burger { display: none; background: none; border: none; cursor: pointer; padding: 4px; width: 32px; height: 32px; flex-direction: column; justify-content: center; align-items: center; gap: 5px; }
.nav-burger span { display: block; width: 20px; height: 2px; background: var(--v2-text-secondary); border-radius: 2px; transition: all 0.3s; }
.nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* MOBILE */
.mobile-overlay { position: fixed; inset: 0; z-index: 99; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); }
.mobile-drawer { position: absolute; top: 72px; right: 0; left: 0; background: var(--v2-bg-card); border-bottom: 1px solid var(--v2-border-card); display: flex; flex-direction: column; padding: 16px 24px 24px; gap: 4px; }
.mobile-drawer a { padding: 12px 16px; font-size: 15px; font-weight: 500; color: var(--v2-text-secondary); border-radius: 10px; transition: all 0.15s; }
.mobile-drawer a:hover { background: rgba(255,255,255,0.04); color: var(--v2-text-primary); }
.mobile-lang { display: flex; gap: 8px; padding: 12px 16px; }
.mobile-lang-btn { display: flex; align-items: center; gap: 6px; background: none; border: 1px solid var(--v2-border-card); border-radius: 50px; padding: 6px 12px 6px 6px; cursor: pointer; color: var(--v2-text-muted); font-size: 12px; font-weight: 600; transition: all 0.2s; }
.mobile-lang-btn:hover { border-color: rgba(255,255,255,0.15); color: var(--v2-text-primary); }
.mobile-lang-btn.active { border-color: var(--v2-accent); color: var(--v2-accent); }
.mobile-cta { text-align: center; padding: 14px 24px; background: var(--v2-accent); color: var(--v2-bg-deep); font-family: var(--v2-font-display); font-weight: 700; font-size: 14px; border-radius: 50px; margin-top: 8px; }
.mobile-cta:hover { background: #00ddb8; color: var(--v2-bg-deep); }
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 0.25s; }
.mobile-menu-enter-active .mobile-drawer, .mobile-menu-leave-active .mobile-drawer { transition: transform 0.25s ease, opacity 0.25s; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; }
.mobile-menu-enter-from .mobile-drawer, .mobile-menu-leave-to .mobile-drawer { transform: translateY(-8px); opacity: 0; }

/* CONTAINER */
.container { max-width: var(--v2-max-w); margin: 0 auto; padding: 0 32px; }

/* BACK NAV */
.back-nav { padding-top: 100px; margin-bottom: 32px; }
.back-link { display: inline-flex; align-items: center; gap: 8px; color: var(--v2-accent); font-size: 14px; font-weight: 500; transition: opacity 0.2s; }
.back-link:hover { opacity: 0.7; }
.back-link svg { width: 16px; height: 16px; }

/* HERO IMAGE */
.hero-img-wrap { margin-bottom: 40px; border-radius: 16px; overflow: hidden; }
.hero-img { width: 100%; max-height: 480px; object-fit: cover; display: block; }

/* ARTICLE HEADER */
.article-header { max-width: 720px; margin-bottom: 48px; }
.article-header h1 { font-family: var(--v2-font-display); font-size: clamp(28px, 4vw, 42px); font-weight: 800; letter-spacing: -0.5px; line-height: 1.15; margin-bottom: 16px; }
.article-meta { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--v2-text-muted); }
.meta-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--v2-text-dim); }

/* ARTICLE BODY */
.article-body { max-width: 720px; padding-bottom: 80px; }
.content-block { margin-bottom: 28px; }
.content-block h2 { font-family: var(--v2-font-display); font-size: 22px; font-weight: 700; margin-bottom: 12px; color: var(--v2-text-primary); }
.content-block p { font-size: 16px; color: var(--v2-text-secondary); line-height: 1.8; }
.content-img { width: 100%; border-radius: 12px; border: 1px solid var(--v2-border-card); margin: 8px 0; }
.content-block ul { list-style: none; padding: 0; }
.content-block li { position: relative; padding-left: 20px; font-size: 16px; color: var(--v2-text-secondary); line-height: 1.8; margin-bottom: 8px; }
.content-block li::before { content: ''; position: absolute; left: 0; top: 11px; width: 6px; height: 6px; border-radius: 50%; background: var(--v2-accent); }
.content-block :deep(.content-link) { color: var(--v2-accent); transition: opacity 0.2s; }
.content-block :deep(.content-link:hover) { opacity: 0.7; }

/* NOT FOUND */
.not-found { padding: 160px 0 80px; text-align: center; }
.not-found p { font-size: 18px; color: var(--v2-text-secondary); margin-bottom: 24px; }

/* FOOTER */
.footer { padding: 60px 0 40px; border-top: 1px solid var(--v2-border-subtle); }
.footer-inner { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 32px; }
.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-logo-img { height: 28px; width: auto; }
.footer-links { display: flex; gap: 32px; }
.footer-links a { font-size: 13px; color: var(--v2-text-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--v2-text-primary); }
.footer-copy { width: 100%; text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--v2-border-subtle); font-size: 12px; color: var(--v2-text-dim); }

/* RESPONSIVE */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-lang { display: none; }
  .nav-cta { display: none; }
  .nav-burger { display: flex; }
}
@media (max-width: 600px) {
  .container { padding: 0 20px; }
  .hero-img { max-height: 280px; }
  .article-header h1 { font-size: 26px; }
}
</style>
