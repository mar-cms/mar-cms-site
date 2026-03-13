<template>
  <div class="v2-landing">
    <!-- NAVIGATION -->
    <nav class="nav">
      <div class="nav-inner">
        <a href="#" class="nav-logo">
          <img src="/logo.png" alt="Mar CMS" class="nav-logo-img">
          <div class="nav-logo-text">MAR <span>CMS</span></div>
        </a>
        <div class="nav-links">
          <a href="#problem">{{ $t('v2_nav_problem') }}</a>
          <a href="#capabilities">{{ $t('v2_nav_capabilities') }}</a>
          <a href="#hospitality">{{ $t('v2_nav_hospitality') }}</a>
          <a href="#partnership">{{ $t('v2_nav_partnership') }}</a>
          <a href="#faq">FAQ</a>
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
          <a href="#problem" @click="mobileMenu = false">{{ $t('v2_nav_problem') }}</a>
          <a href="#capabilities" @click="mobileMenu = false">{{ $t('v2_nav_capabilities') }}</a>
          <a href="#hospitality" @click="mobileMenu = false">{{ $t('v2_nav_hospitality') }}</a>
          <a href="#partnership" @click="mobileMenu = false">{{ $t('v2_nav_partnership') }}</a>
          <a href="#faq" @click="mobileMenu = false">FAQ</a>
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
          <a :href="calendarUrl" target="_blank" class="mobile-cta" @click="mobileMenu = false; trackCta()">{{ $t('v2_nav_cta') }}</a>
        </div>
      </div>
    </Transition>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-center">
          <div class="hero-badge fade-up">
            <div class="hero-badge-dot"></div>
            {{ $t('v2_hero_badge') }}
          </div>
          <h1 class="fade-up fade-up-d1">
            <em>{{ $t('v2_hero_title_em') }}</em> {{ $t('v2_hero_title_after') }}
          </h1>
          <p class="hero-sub fade-up fade-up-d2">
            {{ $t('v2_hero_subtitle') }}
          </p>
          <div class="hero-ctas fade-up fade-up-d3">
            <a :href="calendarUrl" target="_blank" class="btn-primary" @click="trackCta">
              {{ $t('v2_hero_cta') }}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- THE PROBLEM -->
    <div class="section-divider"></div>
    <section class="problem-section" id="problem">
      <div class="container">
        <div class="two-col">
          <div class="mobile-section-header">
            <div class="section-label">{{ $t('v2_problem_label') }}</div>
            <h2 class="section-title">{{ $t('v2_problem_title') }}</h2>
          </div>
          <div class="two-col-text">
            <div class="section-label desktop-only">{{ $t('v2_problem_label') }}</div>
            <h2 class="section-title desktop-only">{{ $t('v2_problem_title') }}</h2>
            <p class="section-body">{{ $t('v2_problem_text') }}</p>
            <ul class="problem-list">
              <li>{{ $t('v2_problem_item_1') }}</li>
              <li>{{ $t('v2_problem_item_2') }}</li>
              <li>{{ $t('v2_problem_item_3') }}</li>
              <li>{{ $t('v2_problem_item_4') }}</li>
              <li>{{ $t('v2_problem_item_5') }}</li>
            </ul>
            <p class="problem-closing">{{ $t('v2_problem_closing') }}</p>
          </div>
          <div class="problem-mockup fade-up">
            <svg class="problem-svg" viewBox="0 0 360 360" fill="none">
              <!-- Source nodes (left side) — 4 channels -->
              <!-- Website -->
              <circle cx="40" cy="60" r="18" fill="#111827" stroke="rgba(96,165,250,0.3)" stroke-width="1"/>
              <g transform="translate(31,51)" stroke="#60a5fa" stroke-width="1.2" fill="none" stroke-linecap="round">
                <circle cx="9" cy="9" r="7"/><path d="M2 9h14M9 2a14 14 0 0 1 0 14M9 2a14 14 0 0 0 0 14"/>
              </g>
              <!-- Social -->
              <circle cx="40" cy="140" r="18" fill="#111827" stroke="rgba(167,139,250,0.3)" stroke-width="1"/>
              <g transform="translate(31,131)" stroke="#a78bfa" stroke-width="1.2" fill="none" stroke-linecap="round">
                <rect x="2" y="2" width="14" height="14" rx="4"/><circle cx="9" cy="9" r="3"/><circle cx="14" cy="4" r="1" fill="#a78bfa"/>
              </g>
              <!-- OTAs -->
              <circle cx="40" cy="220" r="18" fill="#111827" stroke="rgba(240,180,41,0.3)" stroke-width="1"/>
              <g transform="translate(31,211)" stroke="#f0b429" stroke-width="1.2" fill="none" stroke-linecap="round">
                <rect x="1" y="3" width="16" height="12" rx="2"/><path d="M1 7h16"/><circle cx="5" cy="5" r="0.8" fill="#f0b429"/><circle cx="8" cy="5" r="0.8" fill="#f0b429"/>
              </g>
              <!-- Google -->
              <circle cx="40" cy="300" r="18" fill="#111827" stroke="rgba(255,107,74,0.3)" stroke-width="1"/>
              <g transform="translate(32,292)" stroke="#ff6b4a" stroke-width="1.2" fill="none" stroke-linecap="round">
                <circle cx="7" cy="7" r="5"/><path d="M11 11l4 4"/>
              </g>

              <!-- Signal lines — each going in a different direction, fragmenting -->
              <!-- Website line — aims high then drops -->
              <path d="M58 60 C100 60, 130 40, 180 55 C230 70, 250 30, 320 45" stroke="#60a5fa" stroke-width="1.5" stroke-linecap="round" opacity="0.4" stroke-dasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.4;0.15;0.4" dur="5s" repeatCount="indefinite"/>
              </path>
              <!-- Social line — erratic, crossing others -->
              <path d="M58 140 C110 140, 140 190, 190 170 C240 150, 270 210, 330 195" stroke="#a78bfa" stroke-width="1.5" stroke-linecap="round" opacity="0.35" stroke-dasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.12;0.35" dur="6s" repeatCount="indefinite"/>
              </path>
              <!-- OTA line — flat then diverges down -->
              <path d="M58 220 C110 220, 150 240, 200 260 C250 280, 280 250, 340 290" stroke="#f0b429" stroke-width="1.5" stroke-linecap="round" opacity="0.35" stroke-dasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.1;0.35" dur="7s" repeatCount="indefinite"/>
              </path>
              <!-- Google line — sharp zigzag -->
              <path d="M58 300 C100 300, 120 270, 170 280 C220 290, 240 320, 310 310" stroke="#ff6b4a" stroke-width="1.5" stroke-linecap="round" opacity="0.35" stroke-dasharray="6 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2.8s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.1;0.35" dur="5.5s" repeatCount="indefinite"/>
              </path>

              <!-- Interference / noise at crossing points -->
              <circle cx="190" cy="170" r="3" fill="#ff6b4a" opacity="0">
                <animate attributeName="opacity" values="0;0.4;0" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="r" values="2;5;2" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="250" cy="250" r="3" fill="#f0b429" opacity="0">
                <animate attributeName="opacity" values="0;0.3;0" dur="5s" begin="1s" repeatCount="indefinite"/>
                <animate attributeName="r" values="2;5;2" dur="5s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="180" cy="55" r="3" fill="#60a5fa" opacity="0">
                <animate attributeName="opacity" values="0;0.35;0" dur="3.5s" begin="0.5s" repeatCount="indefinite"/>
                <animate attributeName="r" values="2;4;2" dur="3.5s" begin="0.5s" repeatCount="indefinite"/>
              </circle>

              <!-- Static / glitch lines — quick flicker -->
              <line x1="270" y1="100" x2="310" y2="95" stroke="rgba(255,255,255,0.1)" stroke-width="0.5">
                <animate attributeName="opacity" values="0;0.2;0" dur="1.5s" repeatCount="indefinite"/>
              </line>
              <line x1="290" y1="160" x2="330" y2="170" stroke="rgba(255,255,255,0.1)" stroke-width="0.5">
                <animate attributeName="opacity" values="0;0.15;0" dur="2s" begin="0.7s" repeatCount="indefinite"/>
              </line>
              <line x1="260" y1="310" x2="300" y2="320" stroke="rgba(255,255,255,0.08)" stroke-width="0.5">
                <animate attributeName="opacity" values="0;0.12;0" dur="1.8s" begin="1.2s" repeatCount="indefinite"/>
              </line>

              <!-- Fading right edge — signals dissipating -->
              <rect x="310" y="0" width="50" height="360" fill="url(#problemFade)"/>
              <defs>
                <linearGradient id="problemFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#060a14" stop-opacity="0"/>
                  <stop offset="100%" stop-color="#060a14" stop-opacity="1"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- THE SHIFT -->
    <div class="section-divider"></div>
    <section class="shift-section" id="shift">
      <div class="container">
        <div class="two-col">
          <div class="mobile-section-header">
            <div class="section-label">{{ $t('v2_shift_label') }}</div>
            <h2 class="section-title">{{ $t('v2_shift_title') }}</h2>
          </div>
          <div class="shift-visual fade-up">
            <svg class="shift-svg" viewBox="0 0 300 300" fill="none">
              <!-- Outer ring -->
              <circle cx="150" cy="150" r="120" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
              <!-- Inner dashed ring with rotation -->
              <circle cx="150" cy="150" r="90" stroke="#00c9a7" stroke-width="0.8" stroke-dasharray="8 6" opacity="0.25">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="40s" repeatCount="indefinite"/>
              </circle>
              <!-- Connecting lines that pulse -->
              <line x1="150" y1="150" x2="150" y2="30" stroke="url(#shiftGrad)" stroke-width="1" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" repeatCount="indefinite"/></line>
              <line x1="150" y1="150" x2="270" y2="150" stroke="url(#shiftGrad)" stroke-width="1" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" begin="0.75s" repeatCount="indefinite"/></line>
              <line x1="150" y1="150" x2="150" y2="270" stroke="url(#shiftGrad)" stroke-width="1" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" begin="1.5s" repeatCount="indefinite"/></line>
              <line x1="150" y1="150" x2="30" y2="150" stroke="url(#shiftGrad)" stroke-width="1" opacity="0.3"><animate attributeName="opacity" values="0.15;0.4;0.15" dur="3s" begin="2.25s" repeatCount="indefinite"/></line>
              <defs><linearGradient id="shiftGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00c9a7"/><stop offset="100%" stop-color="#60a5fa"/></linearGradient></defs>
              <!-- Node 1: Target/Brand (top) -->
              <g>
                <rect x="126" y="6" width="48" height="48" rx="12" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <circle cx="150" cy="26" r="6" stroke="#00c9a7" stroke-width="1.5" fill="none"><animate attributeName="r" values="5;6.5;5" dur="3s" repeatCount="indefinite"/></circle>
                <circle cx="150" cy="26" r="2" fill="#00c9a7" opacity="0.8"/>
                <path d="M142 36h16M145 40h10" stroke="#00c9a7" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
              </g>
              <!-- Node 2: Rocket/Campaign (right) -->
              <g>
                <rect x="246" y="126" width="48" height="48" rx="12" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <path d="M270 140v12l-5 5h10l-5-5z" stroke="#2563eb" stroke-width="1.5" fill="none" stroke-linejoin="round"/>
                <circle cx="270" cy="146" r="2" fill="#2563eb" opacity="0.6"><animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/></circle>
                <path d="M265 158l-2 4M275 158l2 4M270 158v5" stroke="#2563eb" stroke-width="1" stroke-linecap="round" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="1.5s" repeatCount="indefinite"/></path>
              </g>
              <!-- Node 3: Distribution (bottom) -->
              <g>
                <rect x="126" y="246" width="48" height="48" rx="12" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <circle cx="142" cy="266" r="4" stroke="#60a5fa" stroke-width="1.2" fill="none"/>
                <circle cx="158" cy="266" r="4" stroke="#60a5fa" stroke-width="1.2" fill="none"/>
                <circle cx="150" cy="278" r="4" stroke="#60a5fa" stroke-width="1.2" fill="none"/>
                <line x1="145" y1="263" x2="155" y2="263" stroke="#60a5fa" stroke-width="0.8" opacity="0.4"/>
                <line x1="143" y1="270" x2="148" y2="275" stroke="#60a5fa" stroke-width="0.8" opacity="0.4"/>
                <line x1="157" y1="270" x2="152" y2="275" stroke="#60a5fa" stroke-width="0.8" opacity="0.4"/>
                <g opacity="0.5"><animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite"/>
                  <circle cx="142" cy="266" r="6" stroke="#60a5fa" stroke-width="0.5" fill="none"/>
                </g>
              </g>
              <!-- Node 4: Performance/Chart (left) -->
              <g>
                <rect x="6" y="126" width="48" height="48" rx="12" fill="#111827" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <rect x="19" y="143" width="5" height="12" rx="1" fill="#f0b429" opacity="0.6"><animate attributeName="height" values="10;14;10" dur="2.5s" repeatCount="indefinite"/><animate attributeName="y" values="145;143;145" dur="2.5s" repeatCount="indefinite"/></rect>
                <rect x="27" y="138" width="5" height="17" rx="1" fill="#00c9a7" opacity="0.6"><animate attributeName="height" values="14;18;14" dur="2.5s" begin="0.5s" repeatCount="indefinite"/><animate attributeName="y" values="140;138;140" dur="2.5s" begin="0.5s" repeatCount="indefinite"/></rect>
                <rect x="35" y="140" width="5" height="15" rx="1" fill="#60a5fa" opacity="0.6"><animate attributeName="height" values="12;16;12" dur="2.5s" begin="1s" repeatCount="indefinite"/><animate attributeName="y" values="142;140;142" dur="2.5s" begin="1s" repeatCount="indefinite"/></rect>
                <line x1="17" y1="157" x2="42" y2="157" stroke="rgba(255,255,255,0.15)" stroke-width="0.8"/>
              </g>
              <!-- Center Logo with Sea Animation -->
              <!-- Logo on top -->
              <image href="/logo.png" x="130" y="128" width="40" height="40"/>
              <!-- Ripple rings emanating outward -->
              <circle cx="150" cy="150" r="26" fill="none" stroke="#00c9a7" stroke-width="0.6" opacity="0">
                <animate attributeName="r" values="26;42;58" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.12;0" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="150" r="26" fill="none" stroke="#00c9a7" stroke-width="0.6" opacity="0">
                <animate attributeName="r" values="26;42;58" dur="4s" begin="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.35;0.12;0" dur="4s" begin="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div class="two-col-text">
            <div class="section-label desktop-only">{{ $t('v2_shift_label') }}</div>
            <h2 class="section-title desktop-only">{{ $t('v2_shift_title') }}</h2>
            <p class="section-body">{{ $t('v2_shift_text') }}</p>
            <div class="shift-statements">
              <p class="shift-statement">{{ $t('v2_shift_statement_1') }}</p>
              <p class="shift-statement">{{ $t('v2_shift_statement_2') }}</p>
              <p class="shift-statement">{{ $t('v2_shift_statement_3') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT MAR ENABLES -->
    <div class="section-divider"></div>
    <section class="cap-section" id="capabilities">
      <div class="container">
        <div class="cap-header">
          <div class="section-label">{{ $t('v2_cap_label') }}</div>
          <h2 class="section-title">{{ $t('v2_cap_title') }}</h2>
        </div>
        <div class="cap-grid">
          <!-- 1: Brand Intelligence -->
          <div class="cap-card">
            <div class="cap-mockup">
              <svg class="cap-svg" viewBox="0 0 280 140" fill="none">
                <!-- Compass / brand dial -->
                <circle cx="48" cy="60" r="26" stroke="#00c9a7" stroke-width="1.2" fill="rgba(0,201,167,0.04)"/>
                <circle cx="48" cy="60" r="20" stroke="rgba(255,255,255,0.06)" stroke-width="0.8" fill="none"/>
                <!-- Tick marks -->
                <line x1="48" y1="36" x2="48" y2="40" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
                <line x1="48" y1="80" x2="48" y2="84" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
                <line x1="24" y1="60" x2="28" y2="60" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
                <line x1="68" y1="60" x2="72" y2="60" stroke="#00c9a7" stroke-width="1" opacity="0.5"/>
                <!-- Needle -->
                <line x1="48" y1="60" x2="48" y2="42" stroke="#00c9a7" stroke-width="2" stroke-linecap="round" opacity="0.9">
                  <animateTransform attributeName="transform" type="rotate" values="-20 48 60;25 48 60;-20 48 60" dur="6s" repeatCount="indefinite"/>
                </line>
                <circle cx="48" cy="60" r="3" fill="#00c9a7" opacity="0.7"/>
                <!-- Tone bars -->
                <rect x="100" y="28" width="160" height="8" rx="4" fill="rgba(255,255,255,0.05)"/><rect x="100" y="28" width="140" height="8" rx="4" fill="#00c9a7" opacity="0.5"><animate attributeName="width" values="120;145;120" dur="4s" repeatCount="indefinite"/></rect>
                <rect x="100" y="52" width="160" height="8" rx="4" fill="rgba(255,255,255,0.05)"/><rect x="100" y="52" width="115" height="8" rx="4" fill="#60a5fa" opacity="0.5"><animate attributeName="width" values="100;120;100" dur="4s" begin="0.5s" repeatCount="indefinite"/></rect>
                <rect x="100" y="76" width="160" height="8" rx="4" fill="rgba(255,255,255,0.05)"/><rect x="100" y="76" width="72" height="8" rx="4" fill="#f0b429" opacity="0.5"><animate attributeName="width" values="60;80;60" dur="4s" begin="1s" repeatCount="indefinite"/></rect>
                <rect x="100" y="100" width="160" height="8" rx="4" fill="rgba(255,255,255,0.05)"/><rect x="100" y="100" width="40" height="8" rx="4" fill="#ff6b4a" opacity="0.5"><animate attributeName="width" values="30;48;30" dur="4s" begin="1.5s" repeatCount="indefinite"/></rect>
              </svg>
            </div>
            <div class="cap-text"><h3>{{ $t('v2_cap_1_title') }}</h3><p>{{ $t('v2_cap_1_text') }}</p></div>
          </div>

          <!-- 2: Campaign Activation -->
          <div class="cap-card">
            <div class="cap-mockup">
              <svg class="cap-svg" viewBox="0 0 280 140" fill="none">
                <!-- Timeline grid lines -->
                <line x1="80" y1="10" x2="80" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="140" y1="10" x2="140" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="200" y1="10" x2="200" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <line x1="260" y1="10" x2="260" y2="130" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
                <!-- Campaign bars -->
                <rect x="20" y="18" width="150" height="16" rx="4" fill="#00c9a7" opacity="0.45"><animate attributeName="width" values="140;155;140" dur="5s" repeatCount="indefinite"/></rect>
                <rect x="60" y="46" width="100" height="16" rx="4" fill="#2563eb" opacity="0.45"><animate attributeName="width" values="90;105;90" dur="5s" begin="0.8s" repeatCount="indefinite"/></rect>
                <rect x="120" y="74" width="140" height="16" rx="4" fill="#60a5fa" opacity="0.45"><animate attributeName="width" values="130;145;130" dur="5s" begin="1.6s" repeatCount="indefinite"/></rect>
                <rect x="40" y="102" width="80" height="16" rx="4" fill="#f0b429" opacity="0.45"><animate attributeName="width" values="70;85;70" dur="5s" begin="2.4s" repeatCount="indefinite"/></rect>
                <!-- Progress indicator -->
                <line x1="170" y1="5" x2="170" y2="135" stroke="#00c9a7" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5">
                  <animate attributeName="x1" values="160;180;160" dur="6s" repeatCount="indefinite"/>
                  <animate attributeName="x2" values="160;180;160" dur="6s" repeatCount="indefinite"/>
                </line>
              </svg>
            </div>
            <div class="cap-text"><h3>{{ $t('v2_cap_2_title') }}</h3><p>{{ $t('v2_cap_2_text') }}</p></div>
          </div>

          <!-- 3: Cross Channel Alignment -->
          <div class="cap-card">
            <div class="cap-mockup">
              <svg class="cap-svg" viewBox="0 0 280 140" fill="none">
                <!-- Center hub -->
                <circle cx="140" cy="70" r="16" fill="rgba(0,201,167,0.08)" stroke="#00c9a7" stroke-width="1.2">
                  <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite"/>
                </circle>
                <image href="/logo.png" x="131" y="61" width="18" height="18"/>
                <!-- Orbiting dots -->
                <g><animateTransform attributeName="transform" type="rotate" from="0 140 70" to="360 140 70" dur="12s" repeatCount="indefinite"/>
                  <circle cx="140" cy="22" r="6" fill="#111827" stroke="#60a5fa" stroke-width="1.2"/><circle cx="140" cy="22" r="2.5" fill="#60a5fa" opacity="0.6"/>
                </g>
                <g><animateTransform attributeName="transform" type="rotate" from="90 140 70" to="450 140 70" dur="12s" repeatCount="indefinite"/>
                  <circle cx="140" cy="22" r="6" fill="#111827" stroke="#f0b429" stroke-width="1.2"/><circle cx="140" cy="22" r="2.5" fill="#f0b429" opacity="0.6"/>
                </g>
                <g><animateTransform attributeName="transform" type="rotate" from="180 140 70" to="540 140 70" dur="12s" repeatCount="indefinite"/>
                  <circle cx="140" cy="22" r="6" fill="#111827" stroke="#00c9a7" stroke-width="1.2"/><circle cx="140" cy="22" r="2.5" fill="#00c9a7" opacity="0.6"/>
                </g>
                <g><animateTransform attributeName="transform" type="rotate" from="270 140 70" to="630 140 70" dur="12s" repeatCount="indefinite"/>
                  <circle cx="140" cy="22" r="6" fill="#111827" stroke="#ff6b4a" stroke-width="1.2"/><circle cx="140" cy="22" r="2.5" fill="#ff6b4a" opacity="0.6"/>
                </g>
                <!-- Orbit ring -->
                <circle cx="140" cy="70" r="48" stroke="rgba(255,255,255,0.06)" stroke-width="1" fill="none" stroke-dasharray="4 4">
                  <animateTransform attributeName="transform" type="rotate" from="0 140 70" to="-360 140 70" dur="30s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <div class="cap-text"><h3>{{ $t('v2_cap_3_title') }}</h3><p>{{ $t('v2_cap_3_text') }}</p></div>
          </div>

          <!-- 4: Performance Visibility -->
          <div class="cap-card">
            <div class="cap-mockup">
              <svg class="cap-svg" viewBox="0 0 280 140" fill="none">
                <!-- Grid baseline -->
                <line x1="30" y1="120" x2="260" y2="120" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
                <line x1="30" y1="90" x2="260" y2="90" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <line x1="30" y1="60" x2="260" y2="60" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <line x1="30" y1="30" x2="260" y2="30" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
                <!-- Bars -->
                <rect x="42" y="65" width="22" height="55" rx="3" fill="#00c9a7" opacity="0.5"><animate attributeName="y" values="70;60;70" dur="4s" repeatCount="indefinite"/><animate attributeName="height" values="50;60;50" dur="4s" repeatCount="indefinite"/></rect>
                <rect x="76" y="45" width="22" height="75" rx="3" fill="#00c9a7" opacity="0.5"><animate attributeName="y" values="50;40;50" dur="4s" begin="0.4s" repeatCount="indefinite"/><animate attributeName="height" values="70;80;70" dur="4s" begin="0.4s" repeatCount="indefinite"/></rect>
                <rect x="110" y="75" width="22" height="45" rx="3" fill="#2563eb" opacity="0.5"><animate attributeName="y" values="80;70;80" dur="4s" begin="0.8s" repeatCount="indefinite"/><animate attributeName="height" values="40;50;40" dur="4s" begin="0.8s" repeatCount="indefinite"/></rect>
                <rect x="144" y="35" width="22" height="85" rx="3" fill="#00c9a7" opacity="0.5"><animate attributeName="y" values="40;30;40" dur="4s" begin="1.2s" repeatCount="indefinite"/><animate attributeName="height" values="80;90;80" dur="4s" begin="1.2s" repeatCount="indefinite"/></rect>
                <rect x="178" y="55" width="22" height="65" rx="3" fill="#2563eb" opacity="0.5"><animate attributeName="y" values="60;50;60" dur="4s" begin="1.6s" repeatCount="indefinite"/><animate attributeName="height" values="60;70;60" dur="4s" begin="1.6s" repeatCount="indefinite"/></rect>
                <rect x="212" y="25" width="22" height="95" rx="3" fill="#00c9a7" opacity="0.5"><animate attributeName="y" values="30;20;30" dur="4s" begin="2s" repeatCount="indefinite"/><animate attributeName="height" values="90;100;90" dur="4s" begin="2s" repeatCount="indefinite"/></rect>
                <!-- Trend line -->
                <polyline points="53,68 87,48 121,78 155,38 189,58 223,28" stroke="#00c9a7" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.7">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
                </polyline>
              </svg>
            </div>
            <div class="cap-text"><h3>{{ $t('v2_cap_4_title') }}</h3><p>{{ $t('v2_cap_4_text') }}</p></div>
          </div>

          <!-- 5: Multilingual Consistency -->
          <div class="cap-card">
            <div class="cap-mockup">
              <svg class="cap-svg" viewBox="0 0 280 140" fill="none">
                <!-- Language cards -->
                <g><rect x="10" y="15" width="78" height="110" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"><animate attributeName="y" values="15;12;15" dur="4s" repeatCount="indefinite"/></rect>
                  <text x="49" y="42" text-anchor="middle" font-family="Outfit,sans-serif" font-size="14" font-weight="700" fill="#00c9a7">EN</text>
                  <rect x="22" y="54" width="54" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/><rect x="22" y="65" width="42" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/><rect x="22" y="76" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
                  <circle cx="72" cy="105" r="5" fill="#00c9a7" opacity="0.2"/><path d="M69 105l3 3 5-6" stroke="#00c9a7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
                </g>
                <g><rect x="100" y="15" width="78" height="110" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"><animate attributeName="y" values="15;12;15" dur="4s" begin="0.5s" repeatCount="indefinite"/></rect>
                  <text x="139" y="42" text-anchor="middle" font-family="Outfit,sans-serif" font-size="14" font-weight="700" fill="#60a5fa">DE</text>
                  <rect x="112" y="54" width="54" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/><rect x="112" y="65" width="42" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/><rect x="112" y="76" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
                  <circle cx="162" cy="105" r="5" fill="#60a5fa" opacity="0.2"/><path d="M159 105l3 3 5-6" stroke="#60a5fa" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
                </g>
                <g><rect x="190" y="15" width="78" height="110" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" stroke-width="1"><animate attributeName="y" values="15;12;15" dur="4s" begin="1s" repeatCount="indefinite"/></rect>
                  <text x="229" y="42" text-anchor="middle" font-family="Outfit,sans-serif" font-size="14" font-weight="700" fill="#f0b429">PT</text>
                  <rect x="202" y="54" width="54" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/><rect x="202" y="65" width="42" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/><rect x="202" y="76" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.07)"/>
                  <circle cx="252" cy="105" r="5" fill="#f0b429" opacity="0.2"/><path d="M249 105l3 3 5-6" stroke="#f0b429" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
                </g>
                <!-- Sync arrows -->
                <path d="M92 70h6" stroke="#00c9a7" stroke-width="1.2" stroke-linecap="round" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/></path>
                <path d="M182 70h6" stroke="#00c9a7" stroke-width="1.2" stroke-linecap="round" opacity="0.4"><animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.5s" repeatCount="indefinite"/></path>
              </svg>
            </div>
            <div class="cap-text"><h3>{{ $t('v2_cap_5_title') }}</h3><p>{{ $t('v2_cap_5_text') }}</p></div>
          </div>
        </div>
        <p class="cap-footer">{{ $t('v2_cap_footer') }}</p>
      </div>
    </section>

    <!-- BUILT FOR HOSPITALITY -->
    <div class="section-divider"></div>
    <section class="hosp-section" id="hospitality">
      <div class="container">
        <div class="two-col">
          <div class="mobile-section-header">
            <div class="section-label">{{ $t('v2_hosp_label') }}</div>
            <h2 class="section-title">{{ $t('v2_hosp_title') }}</h2>
          </div>
          <div class="two-col-text">
            <div class="section-label desktop-only">{{ $t('v2_hosp_label') }}</div>
            <h2 class="section-title desktop-only">{{ $t('v2_hosp_title') }}</h2>
            <div class="hosp-challenges">
              <div class="hosp-chip"><svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="#f0b429" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke-width="2"/></svg>{{ $t('v2_hosp_challenge_1') }}</div>
              <div class="hosp-chip"><svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4h6v4"/><line x1="9" y1="10" x2="9" y2="10.01" stroke-width="2"/><line x1="15" y1="10" x2="15" y2="10.01" stroke-width="2"/><line x1="9" y1="14" x2="9" y2="14.01" stroke-width="2"/><line x1="15" y1="14" x2="15" y2="14.01" stroke-width="2"/></svg>{{ $t('v2_hosp_challenge_2') }}</div>
              <div class="hosp-chip"><svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="#ff6b4a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>{{ $t('v2_hosp_challenge_3') }}</div>
              <div class="hosp-chip"><svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="#00c9a7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>{{ $t('v2_hosp_challenge_4') }}</div>
              <div class="hosp-chip"><svg class="chip-icon" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>{{ $t('v2_hosp_challenge_5') }}</div>
            </div>
            <p class="section-body" style="margin-top:24px">{{ $t('v2_hosp_adapt') }}</p>
          </div>
          <div class="hosp-visual fade-up">
            <svg class="hosp-svg" viewBox="0 0 300 300" fill="none">
              <defs>
                <radialGradient id="hospGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stop-color="#00c9a7" stop-opacity="0.08"/>
                  <stop offset="100%" stop-color="#00c9a7" stop-opacity="0"/>
                </radialGradient>
              </defs>
              <!-- Background glow -->
              <circle cx="150" cy="150" r="130" fill="url(#hospGlow)"/>

              <!-- Orbiting rings — adaptive layers wrapping the hotel -->
              <circle cx="150" cy="150" r="120" stroke="#f0b429" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.2">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="60s" repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="150" r="95" stroke="#00c9a7" stroke-width="0.6" stroke-dasharray="6 6" opacity="0.2">
                <animateTransform attributeName="transform" type="rotate" from="360 150 150" to="0 150 150" dur="45s" repeatCount="indefinite"/>
              </circle>
              <circle cx="150" cy="150" r="70" stroke="#60a5fa" stroke-width="0.7" stroke-dasharray="3 5" opacity="0.25">
                <animateTransform attributeName="transform" type="rotate" from="0 150 150" to="360 150 150" dur="35s" repeatCount="indefinite"/>
              </circle>

              <!-- Challenge nodes on outer ring -->
              <!-- Seasonality (top) -->
              <g>
                <circle cx="150" cy="30" r="14" fill="#111827" stroke="rgba(240,180,41,0.3)" stroke-width="1"/>
                <g transform="translate(141,21)" stroke="#f0b429" stroke-width="1.2" fill="none" stroke-linecap="round">
                  <rect x="1" y="3" width="16" height="14" rx="2"/><line x1="13" y1="1" x2="13" y2="5"/><line x1="5" y1="1" x2="5" y2="5"/><line x1="1" y1="8" x2="17" y2="8"/>
                </g>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" repeatCount="indefinite"/>
              </g>
              <!-- Multiple Properties (right) -->
              <g>
                <circle cx="264" cy="120" r="14" fill="#111827" stroke="rgba(37,99,235,0.3)" stroke-width="1"/>
                <g transform="translate(255,111)" stroke="#2563eb" stroke-width="1.2" fill="none" stroke-linecap="round">
                  <path d="M2 18h14"/><path d="M4 18V8l5-3.5 5 3.5v10"/><path d="M7 18v-4h4v4"/>
                </g>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="1s" repeatCount="indefinite"/>
              </g>
              <!-- Reputation (bottom-right) -->
              <g>
                <circle cx="230" cy="248" r="14" fill="#111827" stroke="rgba(255,107,74,0.3)" stroke-width="1"/>
                <g transform="translate(222,240)">
                  <polygon points="8 1 10 6 16 6.5 12 10.5 13 16 8 13.5 3 16 4 10.5 0 6.5 6 6" stroke="#ff6b4a" stroke-width="1.2" fill="none" stroke-linejoin="round"/>
                </g>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="2s" repeatCount="indefinite"/>
              </g>
              <!-- Guest Diversity (bottom-left) -->
              <g>
                <circle cx="70" cy="248" r="14" fill="#111827" stroke="rgba(0,201,167,0.3)" stroke-width="1"/>
                <g transform="translate(60,239)" stroke="#00c9a7" stroke-width="1.2" fill="none" stroke-linecap="round">
                  <path d="M13 17v-1.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3V17"/><circle cx="8.5" cy="7" r="2.8"/><path d="M17 17v-1a2.5 2.5 0 0 0-2-2.4"/><path d="M12.5 4.6a2.8 2.8 0 0 1 0 5"/>
                </g>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="3s" repeatCount="indefinite"/>
              </g>
              <!-- High Competition (left) -->
              <g>
                <circle cx="36" cy="120" r="14" fill="#111827" stroke="rgba(96,165,250,0.3)" stroke-width="1"/>
                <g transform="translate(27,111)" stroke="#60a5fa" stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="16 4 9 12 6 9 1 15"/><polyline points="12 4 16 4 16 8"/>
                </g>
                <animate attributeName="opacity" values="0.6;1;0.6" dur="5s" begin="4s" repeatCount="indefinite"/>
              </g>

              <!-- Faint connecting lines from nodes to center -->
              <line x1="150" y1="44" x2="150" y2="110" stroke="rgba(240,180,41,0.12)" stroke-width="0.8" stroke-dasharray="3 4"><animate attributeName="opacity" values="0.06;0.15;0.06" dur="4s" repeatCount="indefinite"/></line>
              <line x1="250" y1="120" x2="190" y2="140" stroke="rgba(37,99,235,0.12)" stroke-width="0.8" stroke-dasharray="3 4"><animate attributeName="opacity" values="0.06;0.15;0.06" dur="4s" begin="0.8s" repeatCount="indefinite"/></line>
              <line x1="220" y1="238" x2="175" y2="175" stroke="rgba(255,107,74,0.12)" stroke-width="0.8" stroke-dasharray="3 4"><animate attributeName="opacity" values="0.06;0.15;0.06" dur="4s" begin="1.6s" repeatCount="indefinite"/></line>
              <line x1="80" y1="238" x2="130" y2="175" stroke="rgba(0,201,167,0.12)" stroke-width="0.8" stroke-dasharray="3 4"><animate attributeName="opacity" values="0.06;0.15;0.06" dur="4s" begin="2.4s" repeatCount="indefinite"/></line>
              <line x1="50" y1="120" x2="110" y2="140" stroke="rgba(96,165,250,0.12)" stroke-width="0.8" stroke-dasharray="3 4"><animate attributeName="opacity" values="0.06;0.15;0.06" dur="4s" begin="3.2s" repeatCount="indefinite"/></line>

              <!-- Center: Hotel building silhouette -->
              <g opacity="0.9">
                <!-- Main building -->
                <rect x="130" y="118" width="40" height="48" rx="3" fill="#111827" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
                <!-- Windows grid -->
                <rect x="136" y="125" width="5" height="5" rx="1" fill="#00c9a7" opacity="0.4"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" repeatCount="indefinite"/></rect>
                <rect x="147" y="125" width="5" height="5" rx="1" fill="#60a5fa" opacity="0.4"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="3s" begin="0.4s" repeatCount="indefinite"/></rect>
                <rect x="158" y="125" width="5" height="5" rx="1" fill="#f0b429" opacity="0.35"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3s" begin="0.8s" repeatCount="indefinite"/></rect>
                <rect x="136" y="135" width="5" height="5" rx="1" fill="#f0b429" opacity="0.3"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3s" begin="1.2s" repeatCount="indefinite"/></rect>
                <rect x="147" y="135" width="5" height="5" rx="1" fill="#00c9a7" opacity="0.45"><animate attributeName="opacity" values="0.3;0.55;0.3" dur="3s" begin="0.6s" repeatCount="indefinite"/></rect>
                <rect x="158" y="135" width="5" height="5" rx="1" fill="#60a5fa" opacity="0.35"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" begin="1s" repeatCount="indefinite"/></rect>
                <rect x="136" y="145" width="5" height="5" rx="1" fill="#60a5fa" opacity="0.3"><animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" begin="1.4s" repeatCount="indefinite"/></rect>
                <rect x="147" y="145" width="5" height="5" rx="1" fill="#ff6b4a" opacity="0.3"><animate attributeName="opacity" values="0.2;0.45;0.2" dur="3s" begin="0.2s" repeatCount="indefinite"/></rect>
                <rect x="158" y="145" width="5" height="5" rx="1" fill="#00c9a7" opacity="0.35"><animate attributeName="opacity" values="0.25;0.5;0.25" dur="3s" begin="1.6s" repeatCount="indefinite"/></rect>
                <!-- Door -->
                <rect x="145" y="156" width="10" height="10" rx="2" fill="rgba(0,201,167,0.15)" stroke="#00c9a7" stroke-width="0.8" opacity="0.6"/>
                <!-- Roof accent -->
                <path d="M128 118l22-14 22 14" stroke="#00c9a7" stroke-width="1" fill="none" opacity="0.35"/>
                <!-- Base line -->
                <line x1="120" y1="166" x2="180" y2="166" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              </g>

              <!-- Mar logo beneath the building -->
              <image href="/logo.png" x="140" y="172" width="20" height="20" opacity="0.8"/>

              <!-- Pulse ring around center -->
              <circle cx="150" cy="150" r="40" fill="none" stroke="#00c9a7" stroke-width="0.5" opacity="0">
                <animate attributeName="r" values="40;55;70" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.2;0.08;0" dur="5s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERSHIP -->
    <div class="section-divider"></div>
    <section class="partner-section" id="partnership">
      <div class="container">
        <div class="partner-header">
          <div class="section-label">{{ $t('v2_partner_label') }}</div>
          <h2 class="section-title">{{ $t('v2_partner_title') }}</h2>
          <p class="section-subtitle">{{ $t('v2_partner_subtitle') }}</p>
        </div>
        <div class="partner-grid">
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="14" stroke="#00c9a7" stroke-width="1" opacity="0.2"/>
                <path d="M20 8v12l8 4" stroke="#00c9a7" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8">
                  <animateTransform attributeName="transform" type="rotate" values="0 20 20;360 20 20" dur="12s" repeatCount="indefinite"/>
                </path>
                <circle cx="20" cy="20" r="2.5" fill="#00c9a7" opacity="0.7"/>
                <circle cx="20" cy="20" r="18" stroke="#00c9a7" stroke-width="0.5" stroke-dasharray="3 3" opacity="0.15">
                  <animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="20s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>{{ $t('v2_partner_benefit_1') }}</p>
          </div>
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <!-- Two puzzle pieces connecting -->
                <rect x="6" y="12" width="12" height="16" rx="2" stroke="#60a5fa" stroke-width="1.2" fill="rgba(96,165,250,0.06)">
                  <animate attributeName="x" values="6;10;6" dur="3s" repeatCount="indefinite"/>
                </rect>
                <rect x="22" y="12" width="12" height="16" rx="2" stroke="#60a5fa" stroke-width="1.2" fill="rgba(96,165,250,0.06)">
                  <animate attributeName="x" values="22;18;22" dur="3s" repeatCount="indefinite"/>
                </rect>
                <!-- Connection spark -->
                <circle cx="20" cy="20" r="2" fill="#60a5fa" opacity="0">
                  <animate attributeName="opacity" values="0;0.8;0" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="r" values="1;4;1" dur="3s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>{{ $t('v2_partner_benefit_2') }}</p>
          </div>
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <!-- Path with moving dot -->
                <path d="M6 30 C10 28, 14 12, 20 16 C26 20, 30 8, 34 10" stroke="#f0b429" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5"/>
                <!-- Dot traveling along path -->
                <circle r="3" fill="#f0b429" opacity="0.9">
                  <animate attributeName="cx" values="6;13;20;27;34" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="30;18;16;12;10" dur="3s" repeatCount="indefinite"/>
                </circle>
                <!-- Trail glow -->
                <circle r="6" fill="#f0b429" opacity="0">
                  <animate attributeName="cx" values="6;13;20;27;34" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="cy" values="30;18;16;12;10" dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0;0.15;0" dur="3s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>{{ $t('v2_partner_benefit_3') }}</p>
          </div>
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <!-- Lightbulb that pulses -->
                <path d="M15 24h10M16 27h8" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round" opacity="0.4"/>
                <path d="M14 18a6 6 0 1 1 8.5 5.5V24h-5v-.5A6 6 0 0 1 14 18z" stroke="#a78bfa" stroke-width="1.3" fill="none"/>
                <!-- Light rays -->
                <line x1="20" y1="6" x2="20" y2="9" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round">
                  <animate attributeName="y1" values="6;4;6" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                </line>
                <line x1="10" y1="10" x2="12" y2="12" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin="0.3s" repeatCount="indefinite"/>
                </line>
                <line x1="30" y1="10" x2="28" y2="12" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" begin="0.6s" repeatCount="indefinite"/>
                </line>
                <line x1="8" y1="18" x2="11" y2="18" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="0.9s" repeatCount="indefinite"/>
                </line>
                <line x1="32" y1="18" x2="29" y2="18" stroke="#a78bfa" stroke-width="1.2" stroke-linecap="round">
                  <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" begin="1.2s" repeatCount="indefinite"/>
                </line>
                <!-- Inner glow -->
                <circle cx="20" cy="17" r="3" fill="#a78bfa" opacity="0.15">
                  <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.1;0.25;0.1" dur="2s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>{{ $t('v2_partner_benefit_4') }}</p>
          </div>
          <div class="partner-card">
            <div class="partner-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <!-- Megaphone / voice -->
                <path d="M8 16l6-4v16l-6-4z" stroke="#ff6b4a" stroke-width="1.3" fill="rgba(255,107,74,0.08)" stroke-linejoin="round"/>
                <path d="M14 12v16" stroke="#ff6b4a" stroke-width="1.3"/>
                <!-- Sound waves radiating out -->
                <path d="M18 14a6 6 0 0 1 0 12" stroke="#ff6b4a" stroke-width="1.2" fill="none" stroke-linecap="round" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite"/>
                </path>
                <path d="M22 11a10 10 0 0 1 0 18" stroke="#ff6b4a" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" begin="0.3s" repeatCount="indefinite"/>
                </path>
                <path d="M26 8a14 14 0 0 1 0 24" stroke="#ff6b4a" stroke-width="0.8" fill="none" stroke-linecap="round" opacity="0.25">
                  <animate attributeName="opacity" values="0.25;0.05;0.25" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
                </path>
              </svg>
            </div>
            <p>{{ $t('v2_partner_benefit_5') }}</p>
          </div>
        </div>
        <div class="partner-cta">
          <a :href="calendarUrl" target="_blank" class="btn-primary btn-primary-lg" @click="trackCta">
            {{ $t('v2_partner_cta') }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <div class="section-divider"></div>
    <section class="faq-section" id="faq">
      <div class="container">
        <div class="faq-header">
          <div class="section-label">{{ $t('v2_faq_label') }}</div>
          <h2 class="section-title">{{ $t('v2_faq_title') }}</h2>
        </div>
        <div class="faq-list">
          <div v-for="i in 5" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ $t(`v2_faq_q${i}`) }}</span>
              <div class="faq-chevron">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </button>
            <div class="faq-answer"><p>{{ $t(`v2_faq_a${i}`) }}</p></div>
          </div>
        </div>
      </div>
    </section>

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
import { ref } from 'vue'

definePageMeta({ layout: 'landing' })

useHead({
  title: 'Marketing Operating Layer for Hospitality | Mar-CMS',
  meta: [
    { name: 'description', content: 'Connect content, campaigns, and performance in one structured system built for hospitality teams.' },
    { name: 'keywords', content: 'hospitality marketing platform, hotel marketing automation, campaign management hospitality, cross-channel marketing hotels, brand alignment hospitality' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap' }
  ]
})

const { locale, locales, setLocale } = useI18n()
const availableLocales = computed(() => locales.value.map(l => ({ code: l.code })))

const runtimeConfig = useRuntimeConfig()
const calendarUrl = runtimeConfig.public.google_calendar_url || 'https://calendar.app.google/SRb41cEHAuApFQ8AA'
const { gtag } = useGtag()
function trackCta() { gtag('event', 'Book a Demo') }
const langOpen = ref(false)
const mobileMenu = ref(false)
const openFaq = ref(null)
function toggleFaq(index) { openFaq.value = openFaq.value === index ? null : index }
</script>

<style scoped>
/* ============================================= */
/* VARIABLES                                      */
/* ============================================= */
.v2-landing {
  --v2-bg-deep: #060a14;
  --v2-bg-primary: #0a0f1e;
  --v2-bg-card: #111827;
  --v2-bg-card-alt: #0d1424;
  --v2-bg-elevated: #1a2238;
  --v2-border-subtle: rgba(255,255,255,0.06);
  --v2-border-card: rgba(255,255,255,0.08);
  --v2-accent: #00c9a7;
  --v2-accent-glow: rgba(0,201,167,0.15);
  --v2-accent-dim: #00a88c;
  --v2-ocean: #2563eb;
  --v2-ocean-light: #60a5fa;
  --v2-coral: #ff6b4a;
  --v2-gold: #f0b429;
  --v2-text-primary: #f1f5f9;
  --v2-text-secondary: #94a3b8;
  --v2-text-muted: #64748b;
  --v2-text-dim: #475569;
  --v2-font-display: 'Outfit', sans-serif;
  --v2-font-body: 'DM Sans', sans-serif;
  --v2-section-gap: 140px;
  --v2-max-w: 1200px;
  font-family: var(--v2-font-body);
  background: var(--v2-bg-deep);
  color: var(--v2-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ============================================= */
/* GLOBAL                                         */
/* ============================================= */
.v2-landing .container { max-width: var(--v2-max-w); margin: 0 auto; padding: 0 32px; }
.v2-landing a { text-decoration: none; color: inherit; }
.v2-landing img { max-width: 100%; display: block; }
.section-label { font-family: var(--v2-font-display); font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: var(--v2-accent); margin-bottom: 16px; }
.section-title { font-family: var(--v2-font-display); font-size: clamp(32px, 4vw, 48px); font-weight: 700; line-height: 1.15; color: var(--v2-text-primary); margin-bottom: 20px; }
.section-subtitle { font-size: 18px; color: var(--v2-text-secondary); max-width: 580px; line-height: 1.7; }
.section-body { font-size: 17px; color: var(--v2-text-secondary); line-height: 1.8; }
.section-divider { width: 100%; height: 1px; background: linear-gradient(90deg, transparent, var(--v2-border-card), transparent); max-width: var(--v2-max-w); margin: 0 auto; }

/* ============================================= */
/* BUTTONS                                        */
/* ============================================= */
.btn-primary { display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px; background: var(--v2-accent); color: var(--v2-bg-deep); font-family: var(--v2-font-display); font-weight: 700; font-size: 15px; border-radius: 60px; border: none; cursor: pointer; transition: all 0.3s; box-shadow: 0 0 30px var(--v2-accent-glow); }
.btn-primary:hover { background: #00ddb8; box-shadow: 0 0 50px rgba(0,201,167,0.3); transform: translateY(-2px); }
.btn-primary svg { width: 16px; height: 16px; }
.btn-primary-lg { font-size: 17px; padding: 18px 44px; }
.btn-ghost { display: inline-flex; align-items: center; gap: 8px; padding: 16px 32px; background: transparent; color: var(--v2-text-secondary); font-family: var(--v2-font-display); font-weight: 600; font-size: 15px; border-radius: 60px; border: 1px solid var(--v2-border-card); cursor: pointer; transition: all 0.3s; }
.btn-ghost:hover { border-color: var(--v2-accent); color: var(--v2-accent); }
.btn-ghost svg { width: 16px; height: 16px; }

/* ============================================= */
/* NAVIGATION                                     */
/* ============================================= */
.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 0 32px; backdrop-filter: blur(20px); background: rgba(6,10,20,0.85); border-bottom: 1px solid var(--v2-border-subtle); }
.nav-inner { max-width: var(--v2-max-w); margin: 0 auto; display: flex; align-items: center; justify-content: space-between; height: 72px; }
.nav-logo { display: flex; align-items: center; gap: 10px; }
.nav-logo-img { height: 32px; width: auto; }
.footer-logo-img { height: 24px; width: auto; }
.nav-logo-text { font-family: var(--v2-font-display); font-weight: 800; font-size: 20px; letter-spacing: -0.5px; }
.nav-logo-text span { color: var(--v2-text-muted); font-weight: 500; }
.nav-links { display: flex; align-items: center; gap: 32px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--v2-text-secondary); transition: color 0.2s; }
.nav-links a:hover { color: var(--v2-text-primary); }
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
.nav-right-group { display: flex; align-items: center; gap: 12px; }
.nav-burger { display: none; background: none; border: none; cursor: pointer; padding: 4px; width: 32px; height: 32px; flex-direction: column; justify-content: center; align-items: center; gap: 5px; }
.nav-burger span { display: block; width: 20px; height: 2px; background: var(--v2-text-secondary); border-radius: 2px; transition: all 0.3s; }
.nav-burger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-burger.open span:nth-child(2) { opacity: 0; }
.nav-burger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

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

.nav-cta { padding: 10px 24px; background: var(--v2-accent); color: var(--v2-bg-deep); font-family: var(--v2-font-display); font-weight: 700; font-size: 13px; border-radius: 50px; transition: all 0.3s; }
.nav-cta:hover { background: #00ddb8; }

/* ============================================= */
/* HERO                                           */
/* ============================================= */
.hero { padding: 180px 0 120px; position: relative; overflow: hidden; }
.hero::before { content: ''; position: absolute; top: -200px; right: -100px; width: 800px; height: 800px; background: radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%); pointer-events: none; }
.hero::after { content: ''; position: absolute; bottom: -300px; left: -200px; width: 600px; height: 600px; background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%); pointer-events: none; }
.hero-center { text-align: center; max-width: 800px; margin: 0 auto; }
.hero-badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px 6px 8px; background: rgba(0,201,167,0.1); border: 1px solid rgba(0,201,167,0.2); border-radius: 50px; font-size: 12px; font-weight: 600; color: var(--v2-accent); margin-bottom: 28px; }
.hero-badge-dot { width: 8px; height: 8px; background: var(--v2-accent); border-radius: 50%; animation: v2-pulse-dot 2s infinite; }
@keyframes v2-pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
.hero h1 { font-family: var(--v2-font-display); font-size: clamp(40px, 5vw, 64px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 24px; }
.hero h1 em { font-style: normal; background: linear-gradient(135deg, var(--v2-accent), var(--v2-ocean-light)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.hero-sub { font-size: 19px; color: var(--v2-text-secondary); line-height: 1.7; margin: 0 auto 40px; max-width: 600px; }
.hero-ctas { display: flex; justify-content: center; gap: 16px; }

/* ============================================= */
/* TWO-COLUMN                                     */
/* ============================================= */
.two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }

/* ============================================= */
/* THE PROBLEM                                    */
/* ============================================= */
.problem-section { padding: var(--v2-section-gap) 0; }
.problem-list { list-style: none; padding: 0; margin: 24px 0; }
.problem-list li { position: relative; padding-left: 24px; font-size: 15px; color: var(--v2-text-secondary); line-height: 2; }
.problem-list li::before { content: ''; position: absolute; left: 0; top: 12px; width: 8px; height: 8px; border-radius: 50%; background: var(--v2-coral); }
.problem-closing { font-size: 15px; color: var(--v2-text-muted); font-style: italic; margin-top: 8px; }
.problem-mockup { display: flex; align-items: center; justify-content: center; }
.problem-svg { width: 100%; max-width: 420px; height: auto; }

/* ============================================= */
/* THE SHIFT                                      */
/* ============================================= */
.shift-section { padding: var(--v2-section-gap) 0; background: linear-gradient(180deg, var(--v2-bg-deep) 0%, var(--v2-bg-primary) 50%, var(--v2-bg-deep) 100%); }
.shift-visual { position: relative; height: 320px; display: flex; align-items: center; justify-content: center; }
.shift-svg { width: 300px; height: 300px; }
.shift-statements { margin-top: 24px; }
.shift-statement { font-size: 16px; color: var(--v2-text-secondary); line-height: 1.8; margin: 0; }

/* ============================================= */
/* CAPABILITIES                                   */
/* ============================================= */
.cap-section { padding: var(--v2-section-gap) 0; }
.cap-header { text-align: center; margin-bottom: 60px; }
.cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.cap-card { background: var(--v2-bg-card); border: 1px solid var(--v2-border-card); border-radius: 16px; overflow: hidden; transition: all 0.4s; position: relative; }
.cap-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--v2-accent), transparent); opacity: 0; transition: opacity 0.4s; }
.cap-card:hover::before { opacity: 1; }
.cap-card:hover { border-color: rgba(0,201,167,0.15); transform: translateY(-4px); }
.cap-mockup { padding: 20px; background: var(--v2-bg-card-alt); border-bottom: 1px solid var(--v2-border-subtle); min-height: 170px; display: flex; align-items: center; justify-content: center; }
.cap-svg { width: 100%; height: auto; max-height: 140px; }
.cap-text { padding: 24px; }
.cap-text h3 { font-family: var(--v2-font-display); font-size: 18px; font-weight: 700; margin-bottom: 8px; }
.cap-text p { font-size: 14px; color: var(--v2-text-secondary); line-height: 1.6; }
.cap-footer { text-align: center; margin-top: 40px; font-size: 17px; color: var(--v2-text-muted); font-style: italic; }

/* ============================================= */
/* BUILT FOR HOSPITALITY                          */
/* ============================================= */
.hosp-section { padding: var(--v2-section-gap) 0; }
.hosp-challenges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.hosp-chip { display: flex; align-items: center; gap: 8px; padding: 10px 18px; background: var(--v2-bg-card); border: 1px solid var(--v2-border-card); border-radius: 12px; font-size: 14px; font-weight: 600; color: var(--v2-text-primary); transition: all 0.3s; }
.hosp-chip:hover { border-color: rgba(0,201,167,0.2); transform: translateY(-2px); }
.chip-icon { width: 20px; height: 20px; flex-shrink: 0; }
.hosp-visual { position: relative; height: 320px; display: flex; align-items: center; justify-content: center; }
.hosp-svg { width: 300px; height: 300px; }
.hosp-float-1, .hosp-float-2, .hosp-float-3, .hosp-float-4, .hosp-float-5 { transition: transform 0.4s; }
.hosp-float-1:hover, .hosp-float-2:hover, .hosp-float-3:hover, .hosp-float-4:hover, .hosp-float-5:hover { transform: translateY(-4px); }

/* ============================================= */
/* PARTNERSHIP                                    */
/* ============================================= */
.partner-section { padding: var(--v2-section-gap) 0; background: linear-gradient(180deg, var(--v2-bg-deep) 0%, var(--v2-bg-primary) 100%); position: relative; }
.partner-section::before { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(0,201,167,0.05) 0%, transparent 70%); pointer-events: none; }
.partner-header { text-align: center; margin-bottom: 60px; }
.partner-header .section-subtitle { margin: 0 auto; text-align: center; }
.partner-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
.partner-card { background: var(--v2-bg-card); border: 1px solid var(--v2-border-card); border-radius: 16px; padding: 28px 20px; text-align: center; transition: all 0.4s; }
.partner-card:hover { transform: translateY(-4px); border-color: rgba(0,201,167,0.15); }
.partner-icon { width: 64px; height: 64px; margin: 0 auto 16px; }
.partner-icon svg { width: 100%; height: 100%; }
.partner-card p { font-size: 14px; color: var(--v2-text-secondary); line-height: 1.6; font-weight: 600; }
.partner-cta { text-align: center; margin-top: 48px; }

/* ============================================= */
/* FAQ                                            */
/* ============================================= */
.faq-section { padding: var(--v2-section-gap) 0; }
.faq-header { text-align: center; margin-bottom: 48px; }
.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item { border-bottom: 1px solid var(--v2-border-card); }
.faq-question { display: flex; justify-content: space-between; align-items: center; padding: 24px 0; width: 100%; background: none; border: none; cursor: pointer; font-family: var(--v2-font-display); font-size: 17px; font-weight: 600; color: var(--v2-text-primary); text-align: left; }
.faq-chevron { width: 20px; height: 20px; flex-shrink: 0; color: var(--v2-text-muted); transition: transform 0.3s, color 0.3s; }
.faq-item.open .faq-chevron { transform: rotate(180deg); color: var(--v2-accent); }
.faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, padding 0.4s ease; }
.faq-item.open .faq-answer { max-height: 300px; padding-bottom: 24px; }
.faq-answer p { font-size: 15px; color: var(--v2-text-secondary); line-height: 1.7; }

/* ============================================= */
/* BLOG LINK                                      */
/* ============================================= */

/* ============================================= */
/* FOOTER                                         */
/* ============================================= */
.footer { padding: 60px 0 40px; border-top: 1px solid var(--v2-border-subtle); }
.footer-inner { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 32px; }
.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-links { display: flex; gap: 32px; }
.footer-links a { font-size: 13px; color: var(--v2-text-muted); transition: color 0.2s; }
.footer-links a:hover { color: var(--v2-text-primary); }
.footer-copy { width: 100%; text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--v2-border-subtle); font-size: 12px; color: var(--v2-text-dim); }

/* ============================================= */
/* ANIMATIONS                                     */
/* ============================================= */
@keyframes v2-fade-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.fade-up { animation: v2-fade-up 0.7s ease-out forwards; }
.fade-up-d1 { animation-delay: 0.1s; opacity: 0; }
.fade-up-d2 { animation-delay: 0.2s; opacity: 0; }
.fade-up-d3 { animation-delay: 0.3s; opacity: 0; }

/* ============================================= */
/* MOBILE SECTION HEADERS                         */
/* ============================================= */
.mobile-section-header { display: none; }

/* ============================================= */
/* RESPONSIVE                                     */
/* ============================================= */
@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; gap: 40px; }
  .nav-links { display: none; }
  .nav-lang { display: none; }
  .nav-cta { display: none; }
  .nav-burger { display: flex; }
  .hero { padding: 120px 0 60px; }
  .v2-landing { --v2-section-gap: 80px; }
  .cap-grid { grid-template-columns: 1fr 1fr; }
  .partner-grid { grid-template-columns: repeat(3, 1fr); }
  .mobile-section-header { display: block; order: -2; }
  .desktop-only { display: none; }
  .problem-mockup { order: -1; }
  .shift-visual { order: -1; height: 260px; }
  .hosp-visual { order: -1; height: 260px; }
  .problem-svg { max-width: 340px; }
  .shift-svg { width: 250px; height: 250px; }
  .hosp-svg { width: 250px; height: 250px; }
}
@media (max-width: 600px) {
  .cap-grid { grid-template-columns: 1fr; }
  .partner-grid { grid-template-columns: 1fr; }
  .hero-ctas { flex-direction: column; align-items: center; }
  .problem-svg { max-width: 280px; }
  .shift-visual { height: 220px; }
  .shift-svg { width: 220px; height: 220px; }
  .hosp-visual { height: 220px; }
  .hosp-svg { width: 220px; height: 220px; }
}
</style>
