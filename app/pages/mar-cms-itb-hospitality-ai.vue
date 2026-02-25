<template>
  <div class="itb-landing">
    <!-- NAVIGATION -->
    <nav class="nav">
      <div class="nav-inner">
        <a href="#" class="nav-logo">
          <img src="/logo.png" alt="Mar CMS" class="nav-logo-img">
          <div class="nav-logo-text">MAR <span>CMS</span></div>
        </a>
        <div class="nav-links">
          <a href="#features">{{ $t('itb_nav_features') }}</a>
          <a href="#product">{{ $t('itb_nav_platform') }}</a>
          <a href="#usecases">{{ $t('itb_nav_usecases') }}</a>
          <a href="#why">{{ $t('itb_nav_why') }}</a>
        </div>
        <a href="https://calendar.app.google/SRb41cEHAuApFQ8AA" target="_blank" class="nav-cta">{{ $t('itb_nav_cta') }}</a>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="hero-badge fade-up">
              <div class="hero-badge-dot"></div>
              {{ $t('itb_hero_badge') }}
            </div>
            <h1 class="fade-up fade-up-d1">
              {{ $t('itb_hero_title_before') }}<em>{{ $t('itb_hero_title_em') }}</em>{{ $t('itb_hero_title_after') }}
            </h1>
            <p class="hero-sub fade-up fade-up-d2">
              {{ $t('itb_hero_subtitle') }}
            </p>
            <div class="hero-ctas fade-up fade-up-d3">
              <a href="https://calendar.app.google/SRb41cEHAuApFQ8AA" target="_blank" class="btn-primary">
                {{ $t('itb_hero_cta_primary') }}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#product" class="btn-ghost">{{ $t('itb_hero_cta_secondary') }}</a>
            </div>
            <p class="hero-note fade-up fade-up-d3">{{ $t('itb_hero_note') }}</p>
          </div>

          <!-- Hero Mockup: Dashboard -->
          <div class="hero-mockup fade-up fade-up-d2">
            <div class="mock-topbar">
              <div class="mock-dot r"></div>
              <div class="mock-dot y"></div>
              <div class="mock-dot g"></div>
              <div class="mock-url">app.mar-cms.com/dashboard</div>
            </div>
            <div class="mock-body">
              <div class="mock-sidebar">
                <div class="mock-side-logo"></div>
                <div class="mock-side-dot active"></div>
                <div class="mock-side-dot"></div>
                <div class="mock-side-dot"></div>
                <div class="mock-side-dot"></div>
                <div class="mock-side-dot"></div>
              </div>
              <div class="mock-main">
                <div class="mock-header">
                  <div>
                    <div class="mock-title">{{ $t('itb_mock_dashboard') }}</div>
                    <div class="mock-subtitle">{{ $t('itb_mock_dashboard_subtitle') }}</div>
                  </div>
                  <div class="mock-btn">{{ $t('itb_mock_new_campaign') }}</div>
                </div>
                <div class="mock-kpi-row">
                  <div class="mock-kpi">
                    <div class="mock-kpi-label">{{ $t('itb_mock_campaigns') }}</div>
                    <div class="mock-kpi-val teal">12</div>
                  </div>
                  <div class="mock-kpi">
                    <div class="mock-kpi-label">{{ $t('itb_mock_impressions') }}</div>
                    <div class="mock-kpi-val blue">284K</div>
                  </div>
                  <div class="mock-kpi">
                    <div class="mock-kpi-label">{{ $t('itb_mock_engagement') }}</div>
                    <div class="mock-kpi-val coral">4.7%</div>
                  </div>
                  <div class="mock-kpi">
                    <div class="mock-kpi-label">{{ $t('itb_mock_conversions') }}</div>
                    <div class="mock-kpi-val gold">1,240</div>
                  </div>
                </div>
                <div class="mock-charts">
                  <div class="mock-chart-box">
                    <div class="mock-chart-title">{{ $t('itb_mock_campaign_performance') }}</div>
                    <div class="mock-bar-group">
                      <div class="mock-bar-col"><div class="mock-bar" style="height:55%;background:var(--itb-accent)"></div><div class="mock-bar-label">Jan</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:72%;background:var(--itb-accent)"></div><div class="mock-bar-label">Feb</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:48%;background:var(--itb-ocean)"></div><div class="mock-bar-label">Mar</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:85%;background:var(--itb-accent)"></div><div class="mock-bar-label">Apr</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:64%;background:var(--itb-ocean)"></div><div class="mock-bar-label">May</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:92%;background:var(--itb-accent)"></div><div class="mock-bar-label">Jun</div></div>
                      <div class="mock-bar-col"><div class="mock-bar" style="height:78%;background:var(--itb-ocean)"></div><div class="mock-bar-label">Jul</div></div>
                    </div>
                  </div>
                  <div class="mock-chart-box">
                    <div class="mock-chart-title">{{ $t('itb_mock_channel_split') }}</div>
                    <div class="mock-donut-wrap">
                      <div class="mock-donut">
                        <div class="mock-donut-hole">42%</div>
                      </div>
                      <div class="mock-donut-legend">
                        <div class="mock-donut-item"><div class="mock-donut-swatch" style="background:var(--itb-accent)"></div>{{ $t('itb_mock_website') }}</div>
                        <div class="mock-donut-item"><div class="mock-donut-swatch" style="background:var(--itb-ocean)"></div>{{ $t('itb_mock_otas') }}</div>
                        <div class="mock-donut-item"><div class="mock-donut-swatch" style="background:var(--itb-ocean-light)"></div>{{ $t('itb_mock_social') }}</div>
                        <div class="mock-donut-item"><div class="mock-donut-swatch" style="background:var(--itb-text-dim)"></div>{{ $t('itb_mock_email') }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ITB CONTEXT -->
    <div class="section-divider"></div>
    <section class="itb-section" id="itb">
      <div class="container">
        <div class="itb-grid">
          <div class="itb-visual">
            <div class="itb-circle">
              <div class="itb-node">&#x1F4A1;</div>
              <div class="itb-node">&#x1F4CA;</div>
              <div class="itb-node">&#x1F680;</div>
              <div class="itb-node">&#x1F3AF;</div>
              <div class="itb-center">M</div>
            </div>
          </div>
          <div class="itb-text">
            <div class="section-label">{{ $t('itb_context_label') }}</div>
            <h2 class="section-title">{{ $t('itb_context_title') }}</h2>
            <p>{{ $t('itb_context_text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CORE VALUE BLOCKS -->
    <section class="core-section" id="features">
      <div class="container">
        <div class="section-label">{{ $t('itb_core_label') }}</div>
        <h2 class="section-title">{{ $t('itb_core_title') }}</h2>
        <div class="core-grid">
          <div class="core-card">
            <div class="core-icon i1">&#x26A1;</div>
            <h3>{{ $t('itb_core_1_title') }}</h3>
            <p>{{ $t('itb_core_1_text') }}</p>
          </div>
          <div class="core-card">
            <div class="core-icon i2">&#x1F4C1;</div>
            <h3>{{ $t('itb_core_2_title') }}</h3>
            <p>{{ $t('itb_core_2_text') }}</p>
          </div>
          <div class="core-card">
            <div class="core-icon i3">&#x1F4C8;</div>
            <h3>{{ $t('itb_core_3_title') }}</h3>
            <p>{{ $t('itb_core_3_text') }}</p>
          </div>
          <div class="core-card">
            <div class="core-icon i4">&#x23F1;&#xFE0F;</div>
            <h3>{{ $t('itb_core_4_title') }}</h3>
            <p>{{ $t('itb_core_4_text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCT SECTION -->
    <section class="product-section" id="product">
      <div class="container">
        <div class="product-header">
          <div class="section-label">{{ $t('itb_product_label') }}</div>
          <h2 class="section-title">{{ $t('itb_product_title') }}</h2>
          <p class="section-subtitle">{{ $t('itb_product_subtitle') }}</p>
        </div>

        <div class="product-features">
          <!-- Feature 1: Campaign Manager -->
          <div class="product-feature">
            <div class="pf-text">
              <h3>{{ $t('itb_pf1_title') }}</h3>
              <p>{{ $t('itb_pf1_text') }}</p>
              <div class="pf-tags">
                <span class="pf-tag">{{ $t('itb_pf1_tag_1') }}</span>
                <span class="pf-tag">{{ $t('itb_pf1_tag_2') }}</span>
                <span class="pf-tag">{{ $t('itb_pf1_tag_3') }}</span>
              </div>
            </div>
            <div class="pf-mockup">
              <div class="pf-mock-top">
                <div class="pf-mock-dot" style="background:#ff5f57"></div>
                <div class="pf-mock-dot" style="background:#febc2e"></div>
                <div class="pf-mock-dot" style="background:#28c840"></div>
              </div>
              <div class="pf-mock-body">
                <div class="cm-header">
                  <div class="cm-title">{{ $t('itb_mock_cm_title') }}</div>
                  <div class="cm-tabs">
                    <div class="cm-tab active">{{ $t('itb_mock_cm_timeline') }}</div>
                    <div class="cm-tab">{{ $t('itb_mock_cm_list') }}</div>
                    <div class="cm-tab">{{ $t('itb_mock_cm_calendar') }}</div>
                  </div>
                </div>
                <div class="cm-timeline">
                  <div class="cm-timeline-header">
                    <span></span>
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                  <div class="cm-row">
                    <div class="cm-row-label">{{ $t('itb_mock_cm_summer') }}</div>
                    <div class="cm-row-track">
                      <div class="cm-bar" style="left:0%;width:60%;background:var(--itb-accent)">{{ $t('itb_mock_cm_summer_channels') }}</div>
                    </div>
                  </div>
                  <div class="cm-row">
                    <div class="cm-row-label">{{ $t('itb_mock_cm_spa') }}</div>
                    <div class="cm-row-track">
                      <div class="cm-bar" style="left:15%;width:40%;background:var(--itb-ocean)">{{ $t('itb_mock_cm_spa_channels') }}</div>
                    </div>
                  </div>
                  <div class="cm-row">
                    <div class="cm-row-label">{{ $t('itb_mock_cm_city') }}</div>
                    <div class="cm-row-track">
                      <div class="cm-bar" style="left:45%;width:50%;background:var(--itb-ocean-light)">{{ $t('itb_mock_cm_city_channels') }}</div>
                    </div>
                  </div>
                  <div class="cm-row">
                    <div class="cm-row-label">{{ $t('itb_mock_cm_fnb') }}</div>
                    <div class="cm-row-track">
                      <div class="cm-bar" style="left:5%;width:30%;background:var(--itb-gold)">{{ $t('itb_mock_cm_fnb_channels') }}</div>
                    </div>
                  </div>
                  <div class="cm-row">
                    <div class="cm-row-label">{{ $t('itb_mock_cm_loyalty') }}</div>
                    <div class="cm-row-track">
                      <div class="cm-bar" style="left:55%;width:35%;background:var(--itb-coral)">{{ $t('itb_mock_cm_loyalty_channels') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 2: Content Audits -->
          <div class="product-feature reverse">
            <div class="pf-text">
              <h3>{{ $t('itb_pf2_title') }}</h3>
              <p>{{ $t('itb_pf2_text') }}</p>
              <div class="pf-tags">
                <span class="pf-tag">{{ $t('itb_pf2_tag_1') }}</span>
                <span class="pf-tag">{{ $t('itb_pf2_tag_2') }}</span>
                <span class="pf-tag">{{ $t('itb_pf2_tag_3') }}</span>
              </div>
            </div>
            <div class="pf-mockup">
              <div class="pf-mock-top">
                <div class="pf-mock-dot" style="background:#ff5f57"></div>
                <div class="pf-mock-dot" style="background:#febc2e"></div>
                <div class="pf-mock-dot" style="background:#28c840"></div>
              </div>
              <div class="pf-mock-body">
                <div class="cm-header" style="margin-bottom:14px">
                  <div class="cm-title">{{ $t('itb_mock_ca_title') }}</div>
                  <div class="mock-btn">{{ $t('itb_mock_ca_run') }}</div>
                </div>
                <div class="ca-grid">
                  <div class="ca-card">
                    <div class="ca-card-header">
                      <div class="ca-card-title">{{ $t('itb_mock_ca_website') }}</div>
                      <div class="ca-score good">92/100</div>
                    </div>
                    <div class="ca-progress"><div class="ca-progress-fill" style="width:92%;background:var(--itb-accent)"></div></div>
                    <div class="ca-progress-label">{{ $t('itb_mock_ca_seo_aligned') }}</div>
                  </div>
                  <div class="ca-card">
                    <div class="ca-card-header">
                      <div class="ca-card-title">{{ $t('itb_mock_ca_booking') }}</div>
                      <div class="ca-score warn">71/100</div>
                    </div>
                    <div class="ca-progress"><div class="ca-progress-fill" style="width:71%;background:var(--itb-gold)"></div></div>
                    <div class="ca-progress-label">{{ $t('itb_mock_ca_improvements') }}</div>
                  </div>
                  <div class="ca-card">
                    <div class="ca-card-header">
                      <div class="ca-card-title">{{ $t('itb_mock_ca_expedia') }}</div>
                      <div class="ca-score bad">54/100</div>
                    </div>
                    <div class="ca-progress"><div class="ca-progress-fill" style="width:54%;background:var(--itb-coral)"></div></div>
                    <div class="ca-progress-label">{{ $t('itb_mock_ca_missing') }}</div>
                  </div>
                  <div class="ca-card">
                    <div class="ca-card-header">
                      <div class="ca-card-title">{{ $t('itb_mock_ca_google') }}</div>
                      <div class="ca-score good">88/100</div>
                    </div>
                    <div class="ca-progress"><div class="ca-progress-fill" style="width:88%;background:var(--itb-accent)"></div></div>
                    <div class="ca-progress-label">{{ $t('itb_mock_ca_optimized') }}</div>
                  </div>
                  <div class="ca-suggestions">
                    <div class="ca-suggestion">
                      <div class="ca-sug-icon ai">&#x2726;</div>
                      <div class="ca-sug-text">{{ $t('itb_mock_ca_suggestion_1') }}</div>
                    </div>
                    <div class="ca-suggestion">
                      <div class="ca-sug-icon ai">&#x2726;</div>
                      <div class="ca-sug-text">{{ $t('itb_mock_ca_suggestion_2') }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Feature 3: Communication Guidelines -->
          <div class="product-feature">
            <div class="pf-text">
              <h3>{{ $t('itb_pf3_title') }}</h3>
              <p>{{ $t('itb_pf3_text') }}</p>
              <div class="pf-tags">
                <span class="pf-tag">{{ $t('itb_pf3_tag_1') }}</span>
                <span class="pf-tag">{{ $t('itb_pf3_tag_2') }}</span>
                <span class="pf-tag">{{ $t('itb_pf3_tag_3') }}</span>
              </div>
            </div>
            <div class="pf-mockup">
              <div class="pf-mock-top">
                <div class="pf-mock-dot" style="background:#ff5f57"></div>
                <div class="pf-mock-dot" style="background:#febc2e"></div>
                <div class="pf-mock-dot" style="background:#28c840"></div>
              </div>
              <div class="pf-mock-body">
                <div class="cm-header" style="margin-bottom:14px">
                  <div class="cm-title">{{ $t('itb_mock_cp_title') }}</div>
                  <div class="mock-btn">{{ $t('itb_mock_cp_new') }}</div>
                </div>
                <div class="cs-profiles">
                  <div class="cs-profile">
                    <div class="cs-avatar a1">&#x1F3E8;</div>
                    <div>
                      <div class="cs-name">{{ $t('itb_mock_cp_hotel_1') }}</div>
                      <div class="cs-desc">{{ $t('itb_mock_cp_hotel_1_desc') }}</div>
                    </div>
                    <div class="cs-badge active">{{ $t('itb_mock_cp_active') }}</div>
                  </div>
                  <div class="cs-profile">
                    <div class="cs-avatar a2">&#x1F30A;</div>
                    <div>
                      <div class="cs-name">{{ $t('itb_mock_cp_hotel_2') }}</div>
                      <div class="cs-desc">{{ $t('itb_mock_cp_hotel_2_desc') }}</div>
                    </div>
                    <div class="cs-badge active">{{ $t('itb_mock_cp_active') }}</div>
                  </div>
                  <div class="cs-profile">
                    <div class="cs-avatar a3">&#x1F3D9;&#xFE0F;</div>
                    <div>
                      <div class="cs-name">{{ $t('itb_mock_cp_hotel_3') }}</div>
                      <div class="cs-desc">{{ $t('itb_mock_cp_hotel_3_desc') }}</div>
                    </div>
                    <div class="cs-badge draft">{{ $t('itb_mock_cp_draft') }}</div>
                  </div>
                </div>
                <div class="cs-tone-bars">
                  <div style="font-size:10px;font-weight:600;color:var(--itb-text-muted);margin-bottom:4px">{{ $t('itb_mock_cp_tone_title') }}</div>
                  <div class="cs-tone-row">
                    <div class="cs-tone-label">{{ $t('itb_mock_cp_formality') }}</div>
                    <div class="cs-tone-track"><div class="cs-tone-fill" style="width:88%;background:var(--itb-accent)"></div></div>
                    <div class="cs-tone-val">88%</div>
                  </div>
                  <div class="cs-tone-row">
                    <div class="cs-tone-label">{{ $t('itb_mock_cp_warmth') }}</div>
                    <div class="cs-tone-track"><div class="cs-tone-fill" style="width:72%;background:var(--itb-ocean-light)"></div></div>
                    <div class="cs-tone-val">72%</div>
                  </div>
                  <div class="cs-tone-row">
                    <div class="cs-tone-label">{{ $t('itb_mock_cp_urgency') }}</div>
                    <div class="cs-tone-track"><div class="cs-tone-fill" style="width:25%;background:var(--itb-gold)"></div></div>
                    <div class="cs-tone-val">25%</div>
                  </div>
                  <div class="cs-tone-row">
                    <div class="cs-tone-label">{{ $t('itb_mock_cp_playfulness') }}</div>
                    <div class="cs-tone-track"><div class="cs-tone-fill" style="width:15%;background:var(--itb-coral)"></div></div>
                    <div class="cs-tone-val">15%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- USE CASES -->
    <section class="usecase-section" id="usecases">
      <div class="container">
        <div class="section-label">{{ $t('itb_usecase_label') }}</div>
        <h2 class="section-title">{{ $t('itb_usecase_title') }}</h2>
        <div class="usecase-grid">
          <div class="usecase-card">
            <div class="usecase-icon">&#x1F3E2;</div>
            <h3>{{ $t('itb_usecase_1_title') }}</h3>
            <p>{{ $t('itb_usecase_1_text') }}</p>
          </div>
          <div class="usecase-card">
            <div class="usecase-icon">&#x1F3A8;</div>
            <h3>{{ $t('itb_usecase_2_title') }}</h3>
            <p>{{ $t('itb_usecase_2_text') }}</p>
          </div>
          <div class="usecase-card">
            <div class="usecase-icon">&#x1F680;</div>
            <h3>{{ $t('itb_usecase_3_title') }}</h3>
            <p>{{ $t('itb_usecase_3_text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY MAR-CMS -->
    <section class="why-section" id="why">
      <div class="container">
        <div style="text-align:center">
          <div class="section-label">{{ $t('itb_why_label') }}</div>
          <h2 class="section-title" style="max-width:500px;margin:0 auto 0">{{ $t('itb_why_title') }}</h2>
        </div>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-num">01</div>
            <h3>{{ $t('itb_why_1_title') }}</h3>
            <p>{{ $t('itb_why_1_text') }}</p>
          </div>
          <div class="why-card">
            <div class="why-num">02</div>
            <h3>{{ $t('itb_why_2_title') }}</h3>
            <p>{{ $t('itb_why_2_text') }}</p>
          </div>
          <div class="why-card">
            <div class="why-num">03</div>
            <h3>{{ $t('itb_why_3_title') }}</h3>
            <p>{{ $t('itb_why_3_text') }}</p>
          </div>
          <div class="why-card">
            <div class="why-num">04</div>
            <h3>{{ $t('itb_why_4_title') }}</h3>
            <p>{{ $t('itb_why_4_text') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="final-cta" id="book">
      <div class="container">
        <div class="section-label">{{ $t('itb_cta_label') }}</div>
        <h2 class="section-title">{{ $t('itb_cta_title') }}</h2>
        <p class="section-subtitle">{{ $t('itb_cta_subtitle') }}</p>
        <a href="https://calendar.app.google/SRb41cEHAuApFQ8AA" target="_blank" class="btn-primary btn-primary-lg">
          {{ $t('itb_cta_button') }}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <div class="final-urgency">
          <span>&#x1F525;</span> {{ $t('itb_cta_urgency') }}
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
        <div class="footer-copy">
          {{ $t('itb_footer_copy') }}
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'landing'
})

useHead({
  title: 'AI-Native CMS for Hospitality Marketing Teams | Mar-CMS',
  meta: [
    { name: 'description', content: 'Visiting ITB Berlin? Discover an AI-native CMS built for hotel marketing teams. Automate campaigns, manage content, and drive performance. Book a demo.' },
    { name: 'keywords', content: 'AI CMS hospitality, hospitality marketing automation, hotel marketing platform, campaign automation hospitality, performance marketing hotels, ITB Berlin travel technology' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap' }
  ]
})
</script>

<style scoped>
/* ============================================= */
/* VARIABLES (scoped via .itb-landing)            */
/* ============================================= */
.itb-landing {
  --itb-bg-deep: #060a14;
  --itb-bg-primary: #0a0f1e;
  --itb-bg-card: #111827;
  --itb-bg-card-alt: #0d1424;
  --itb-bg-elevated: #1a2238;
  --itb-border-subtle: rgba(255,255,255,0.06);
  --itb-border-card: rgba(255,255,255,0.08);

  --itb-accent: #00c9a7;
  --itb-accent-glow: rgba(0,201,167,0.15);
  --itb-accent-dim: #00a88c;
  --itb-ocean: #2563eb;
  --itb-ocean-light: #60a5fa;
  --itb-coral: #ff6b4a;
  --itb-gold: #f0b429;

  --itb-text-primary: #f1f5f9;
  --itb-text-secondary: #94a3b8;
  --itb-text-muted: #64748b;
  --itb-text-dim: #475569;

  --itb-font-display: 'Outfit', sans-serif;
  --itb-font-body: 'DM Sans', sans-serif;

  --itb-section-gap: 140px;
  --itb-max-w: 1200px;

  font-family: var(--itb-font-body);
  background: var(--itb-bg-deep);
  color: var(--itb-text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ============================================= */
/* GLOBAL ELEMENTS                                */
/* ============================================= */
.itb-landing .container { max-width: var(--itb-max-w); margin: 0 auto; padding: 0 32px; }
.itb-landing a { text-decoration: none; color: inherit; }
.itb-landing img { max-width: 100%; display: block; }

.section-label {
  font-family: var(--itb-font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--itb-accent);
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--itb-font-display);
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.15;
  color: var(--itb-text-primary);
  margin-bottom: 20px;
}

.section-subtitle {
  font-size: 18px;
  color: var(--itb-text-secondary);
  max-width: 580px;
  line-height: 1.7;
}

/* ============================================= */
/* CTA BUTTONS                                    */
/* ============================================= */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 36px;
  background: var(--itb-accent);
  color: var(--itb-bg-deep);
  font-family: var(--itb-font-display);
  font-weight: 700;
  font-size: 15px;
  border-radius: 60px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 0 30px var(--itb-accent-glow);
}
.btn-primary:hover {
  background: #00ddb8;
  box-shadow: 0 0 50px rgba(0,201,167,0.3);
  transform: translateY(-2px);
}
.btn-primary svg { width: 16px; height: 16px; }
.btn-primary-lg { font-size: 17px; padding: 18px 44px; }

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 16px 32px;
  background: transparent;
  color: var(--itb-text-secondary);
  font-family: var(--itb-font-display);
  font-weight: 600;
  font-size: 15px;
  border-radius: 60px;
  border: 1px solid var(--itb-border-card);
  cursor: pointer;
  transition: all 0.3s;
}
.btn-ghost:hover { border-color: var(--itb-accent); color: var(--itb-accent); }

/* ============================================= */
/* NAVIGATION                                     */
/* ============================================= */
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 32px;
  backdrop-filter: blur(20px);
  background: rgba(6,10,20,0.85);
  border-bottom: 1px solid var(--itb-border-subtle);
  transition: all 0.3s;
}
.nav-inner {
  max-width: var(--itb-max-w);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav-logo-img {
  height: 32px;
  width: auto;
}
.footer-logo-img {
  height: 24px;
  width: auto;
}
.nav-logo-text {
  font-family: var(--itb-font-display);
  font-weight: 800;
  font-size: 20px;
  letter-spacing: -0.5px;
}
.nav-logo-text span { color: var(--itb-text-muted); font-weight: 500; }
.nav-links { display: flex; align-items: center; gap: 36px; }
.nav-links a { font-size: 14px; font-weight: 500; color: var(--itb-text-secondary); transition: color 0.2s; }
.nav-links a:hover { color: var(--itb-text-primary); }
.nav-cta {
  padding: 10px 24px;
  background: var(--itb-accent);
  color: var(--itb-bg-deep);
  font-family: var(--itb-font-display);
  font-weight: 700;
  font-size: 13px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}
.nav-cta:hover { background: #00ddb8; }

/* ============================================= */
/* HERO                                           */
/* ============================================= */
.hero {
  padding: 160px 0 100px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%);
  pointer-events: none;
}
.hero::after {
  content: '';
  position: absolute;
  bottom: -300px;
  left: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
  pointer-events: none;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px 6px 8px;
  background: rgba(0,201,167,0.1);
  border: 1px solid rgba(0,201,167,0.2);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: var(--itb-accent);
  margin-bottom: 28px;
}
.hero-badge-dot {
  width: 8px;
  height: 8px;
  background: var(--itb-accent);
  border-radius: 50%;
  animation: itb-pulse-dot 2s infinite;
}
@keyframes itb-pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
.hero h1 {
  font-family: var(--itb-font-display);
  font-size: clamp(38px, 4.5vw, 56px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -1.5px;
  margin-bottom: 24px;
}
.hero h1 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--itb-accent), var(--itb-ocean-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: 18px;
  color: var(--itb-text-secondary);
  line-height: 1.7;
  margin-bottom: 36px;
  max-width: 480px;
}
.hero-ctas { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
.hero-note {
  margin-top: 20px;
  font-size: 13px;
  color: var(--itb-text-muted);
}

/* Hero Mockup - Dashboard */
.hero-mockup {
  position: relative;
  background: var(--itb-bg-card);
  border-radius: 16px;
  border: 1px solid var(--itb-border-card);
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(0,201,167,0.05);
}
.mock-topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid var(--itb-border-subtle);
}
.mock-dot { width: 10px; height: 10px; border-radius: 50%; }
.mock-dot.r { background: #ff5f57; }
.mock-dot.y { background: #febc2e; }
.mock-dot.g { background: #28c840; }
.mock-url {
  flex: 1;
  margin-left: 12px;
  height: 26px;
  background: rgba(255,255,255,0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  font-size: 11px;
  color: var(--itb-text-muted);
}

.mock-body {
  display: grid;
  grid-template-columns: 50px 1fr;
  min-height: 380px;
}

/* Sidebar */
.mock-sidebar {
  background: rgba(0,0,0,0.2);
  border-right: 1px solid var(--itb-border-subtle);
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}
.mock-side-logo {
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, var(--itb-accent), var(--itb-ocean));
  border-radius: 8px;
  margin-bottom: 12px;
}
.mock-side-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--itb-text-dim);
  margin: 4px 0;
}
.mock-side-dot.active { background: var(--itb-accent); box-shadow: 0 0 8px var(--itb-accent-glow); }

/* Main content area */
.mock-main {
  padding: 20px;
}
.mock-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.mock-title {
  font-family: var(--itb-font-display);
  font-size: 15px;
  font-weight: 700;
  color: var(--itb-text-primary);
}
.mock-subtitle {
  font-size: 11px;
  color: var(--itb-text-muted);
  margin-top: 2px;
}
.mock-btn {
  padding: 5px 12px;
  background: var(--itb-accent);
  color: var(--itb-bg-deep);
  font-size: 10px;
  font-weight: 700;
  border-radius: 6px;
}

/* KPI Row */
.mock-kpi-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.mock-kpi {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--itb-border-subtle);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}
.mock-kpi-label {
  font-size: 9px;
  color: var(--itb-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}
.mock-kpi-val {
  font-family: var(--itb-font-display);
  font-size: 18px;
  font-weight: 700;
}
.mock-kpi-val.teal { color: var(--itb-accent); }
.mock-kpi-val.blue { color: var(--itb-ocean-light); }
.mock-kpi-val.coral { color: var(--itb-coral); }
.mock-kpi-val.gold { color: var(--itb-gold); }

/* Chart area */
.mock-charts {
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 12px;
}
.mock-chart-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--itb-border-subtle);
  border-radius: 10px;
  padding: 14px;
}
.mock-chart-title {
  font-size: 10px;
  color: var(--itb-text-muted);
  margin-bottom: 14px;
  font-weight: 600;
}
/* Bar chart */
.mock-bar-group {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  height: 100px;
  padding-top: 10px;
}
.mock-bar-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.mock-bar {
  width: 100%;
  border-radius: 4px 4px 0 0;
  transition: height 0.6s;
}
.mock-bar-label { font-size: 8px; color: var(--itb-text-dim); }

/* Donut */
.mock-donut-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 12px;
}
.mock-donut {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: conic-gradient(var(--itb-accent) 0% 42%, var(--itb-ocean) 42% 68%, var(--itb-ocean-light) 68% 85%, var(--itb-text-dim) 85% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.mock-donut-hole {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--itb-bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--itb-font-display);
  font-size: 12px;
  font-weight: 700;
  color: var(--itb-accent);
}
.mock-donut-legend {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
}
.mock-donut-item {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 8px;
  color: var(--itb-text-muted);
}
.mock-donut-swatch {
  width: 6px;
  height: 6px;
  border-radius: 2px;
}

/* ============================================= */
/* ITB CONTEXT                                    */
/* ============================================= */
.itb-section {
  padding: var(--itb-section-gap) 0 80px;
  position: relative;
}
.itb-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.itb-visual {
  position: relative;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.itb-circle {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid var(--itb-border-card);
  display: flex;
  align-items: center;
  justify-content: center;
}
.itb-circle::before {
  content: '';
  position: absolute;
  inset: 20px;
  border-radius: 50%;
  border: 1px dashed rgba(0,201,167,0.2);
}
.itb-node {
  position: absolute;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: var(--itb-bg-card);
  border: 1px solid var(--itb-border-card);
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.itb-node:nth-child(1) { top: 0; left: 50%; transform: translateX(-50%); }
.itb-node:nth-child(2) { top: 50%; right: 0; transform: translateY(-50%); }
.itb-node:nth-child(3) { bottom: 0; left: 50%; transform: translateX(-50%); }
.itb-node:nth-child(4) { top: 50%; left: 0; transform: translateY(-50%); }
.itb-center {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--itb-accent), var(--itb-ocean));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 0 40px var(--itb-accent-glow);
  z-index: 1;
}
.itb-text p {
  font-size: 18px;
  color: var(--itb-text-secondary);
  line-height: 1.8;
  margin-top: 16px;
}

/* ============================================= */
/* CORE VALUE BLOCKS                              */
/* ============================================= */
.core-section { padding: 80px 0 var(--itb-section-gap); }
.core-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.core-card {
  background: var(--itb-bg-card);
  border: 1px solid var(--itb-border-card);
  border-radius: 16px;
  padding: 36px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}
.core-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--itb-accent), transparent);
  opacity: 0;
  transition: opacity 0.4s;
}
.core-card:hover::before { opacity: 1; }
.core-card:hover { border-color: rgba(0,201,167,0.15); transform: translateY(-4px); }
.core-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 22px;
}
.core-icon.i1 { background: rgba(0,201,167,0.1); }
.core-icon.i2 { background: rgba(37,99,235,0.1); }
.core-icon.i3 { background: rgba(255,107,74,0.1); }
.core-icon.i4 { background: rgba(240,180,41,0.1); }
.core-card h3 {
  font-family: var(--itb-font-display);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}
.core-card p {
  font-size: 15px;
  color: var(--itb-text-secondary);
  line-height: 1.7;
}

/* ============================================= */
/* PRODUCT SECTION (with mockups)                 */
/* ============================================= */
.product-section {
  padding: var(--itb-section-gap) 0;
  background: linear-gradient(180deg, var(--itb-bg-deep) 0%, var(--itb-bg-primary) 50%, var(--itb-bg-deep) 100%);
}
.product-header {
  text-align: center;
  margin-bottom: 60px;
}
.product-header .section-subtitle { margin: 0 auto; }

.product-features { display: flex; flex-direction: column; gap: 80px; }

.product-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.product-feature.reverse { direction: rtl; }
.product-feature.reverse > * { direction: ltr; }

.pf-text h3 {
  font-family: var(--itb-font-display);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}
.pf-text p {
  font-size: 16px;
  color: var(--itb-text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
}
.pf-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.pf-tag {
  padding: 6px 14px;
  background: rgba(0,201,167,0.08);
  border: 1px solid rgba(0,201,167,0.15);
  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: var(--itb-accent);
}

/* Feature Mockup Frames */
.pf-mockup {
  background: var(--itb-bg-card);
  border: 1px solid var(--itb-border-card);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4);
}
.pf-mock-top {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(0,0,0,0.25);
  border-bottom: 1px solid var(--itb-border-subtle);
}
.pf-mock-dot { width: 8px; height: 8px; border-radius: 50%; }
.pf-mock-body { padding: 18px; }

/* - Campaign Manager Mockup - */
.cm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.cm-title { font-family: var(--itb-font-display); font-size: 13px; font-weight: 700; }
.cm-tabs { display: flex; gap: 0; }
.cm-tab {
  padding: 5px 12px;
  font-size: 10px;
  font-weight: 600;
  color: var(--itb-text-muted);
  border: 1px solid var(--itb-border-subtle);
  background: transparent;
}
.cm-tab:first-child { border-radius: 6px 0 0 6px; }
.cm-tab:last-child { border-radius: 0 6px 6px 0; }
.cm-tab.active { background: var(--itb-accent); color: var(--itb-bg-deep); border-color: var(--itb-accent); }

.cm-timeline { position: relative; }
.cm-timeline-header {
  display: grid;
  grid-template-columns: 100px repeat(7, 1fr);
  gap: 0;
  margin-bottom: 8px;
}
.cm-timeline-header span {
  font-size: 9px;
  color: var(--itb-text-dim);
  text-align: center;
  padding: 4px 0;
}
.cm-timeline-header span:first-child { text-align: left; }
.cm-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  padding: 6px 0;
  border-bottom: 1px solid var(--itb-border-subtle);
}
.cm-row-label { font-size: 10px; color: var(--itb-text-secondary); }
.cm-row-track { position: relative; height: 20px; }
.cm-bar {
  position: absolute;
  height: 16px;
  border-radius: 4px;
  top: 2px;
  display: flex;
  align-items: center;
  padding-left: 6px;
  font-size: 8px;
  font-weight: 600;
  color: rgba(255,255,255,0.9);
}

/* - Content Analysis Mockup - */
.ca-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.ca-card {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--itb-border-subtle);
  border-radius: 10px;
  padding: 14px;
}
.ca-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.ca-card-title { font-size: 10px; font-weight: 600; color: var(--itb-text-secondary); }
.ca-score {
  font-family: var(--itb-font-display);
  font-size: 11px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
}
.ca-score.good { background: rgba(0,201,167,0.15); color: var(--itb-accent); }
.ca-score.warn { background: rgba(240,180,41,0.15); color: var(--itb-gold); }
.ca-score.bad { background: rgba(255,107,74,0.15); color: var(--itb-coral); }
.ca-progress {
  height: 6px;
  background: rgba(255,255,255,0.05);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 6px;
}
.ca-progress-fill { height: 100%; border-radius: 3px; }
.ca-progress-label { font-size: 9px; color: var(--itb-text-dim); }

.ca-suggestions { margin-top: 12px; grid-column: 1 / -1; }
.ca-suggestion {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--itb-border-subtle);
}
.ca-sug-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  flex-shrink: 0;
  margin-top: 1px;
}
.ca-sug-icon.ai { background: rgba(0,201,167,0.15); color: var(--itb-accent); }
.ca-sug-text { font-size: 10px; color: var(--itb-text-secondary); line-height: 1.5; }

/* - Communication Styles Mockup - */
.cs-profiles { display: flex; flex-direction: column; gap: 10px; }
.cs-profile {
  display: grid;
  grid-template-columns: 36px 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 12px;
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--itb-border-subtle);
  border-radius: 10px;
}
.cs-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
.cs-avatar.a1 { background: linear-gradient(135deg, #667eea, #764ba2); }
.cs-avatar.a2 { background: linear-gradient(135deg, var(--itb-accent), #00b4d8); }
.cs-avatar.a3 { background: linear-gradient(135deg, var(--itb-coral), #fca311); }
.cs-name { font-size: 12px; font-weight: 600; }
.cs-desc { font-size: 9px; color: var(--itb-text-muted); margin-top: 2px; }
.cs-badge {
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 9px;
  font-weight: 600;
}
.cs-badge.active { background: rgba(0,201,167,0.12); color: var(--itb-accent); }
.cs-badge.draft { background: rgba(255,255,255,0.05); color: var(--itb-text-muted); }

.cs-tone-bars { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }
.cs-tone-row { display: flex; align-items: center; gap: 10px; }
.cs-tone-label { font-size: 9px; color: var(--itb-text-muted); width: 60px; text-align: right; }
.cs-tone-track { flex: 1; height: 6px; background: rgba(255,255,255,0.05); border-radius: 3px; overflow: hidden; }
.cs-tone-fill { height: 100%; border-radius: 3px; }
.cs-tone-val { font-size: 9px; font-weight: 600; color: var(--itb-text-secondary); width: 28px; }

/* ============================================= */
/* USE CASES                                      */
/* ============================================= */
.usecase-section { padding: var(--itb-section-gap) 0; }
.usecase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.usecase-card {
  background: var(--itb-bg-card);
  border: 1px solid var(--itb-border-card);
  border-radius: 16px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.4s;
}
.usecase-card:hover { transform: translateY(-6px); border-color: rgba(0,201,167,0.15); }
.usecase-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(0,201,167,0.06);
  border: 1px solid rgba(0,201,167,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto 24px;
}
.usecase-card h3 {
  font-family: var(--itb-font-display);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
}
.usecase-card p {
  font-size: 15px;
  color: var(--itb-text-secondary);
  line-height: 1.7;
}

/* ============================================= */
/* WHY MAR-CMS (Differentiation)                  */
/* ============================================= */
.why-section {
  padding: var(--itb-section-gap) 0;
  background: linear-gradient(180deg, var(--itb-bg-deep) 0%, var(--itb-bg-primary) 100%);
}
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 48px;
}
.why-card {
  background: var(--itb-bg-card);
  border: 1px solid var(--itb-border-card);
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.4s;
  position: relative;
}
.why-card:hover { transform: translateY(-4px); border-color: rgba(0,201,167,0.15); }
.why-num {
  font-family: var(--itb-font-display);
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--itb-accent), var(--itb-ocean-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
}
.why-card h3 {
  font-family: var(--itb-font-display);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
}
.why-card p {
  font-size: 13px;
  color: var(--itb-text-secondary);
  line-height: 1.6;
}

/* ============================================= */
/* FINAL CTA                                      */
/* ============================================= */
.final-cta {
  padding: var(--itb-section-gap) 0;
  text-align: center;
  position: relative;
}
.final-cta::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,201,167,0.06) 0%, transparent 70%);
  pointer-events: none;
}
.final-cta .section-title { max-width: 600px; margin: 0 auto 16px; }
.final-cta .section-subtitle { max-width: 540px; margin: 0 auto 36px; text-align: center; }
.final-urgency {
  margin-top: 16px;
  font-size: 13px;
  color: var(--itb-coral);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

/* ============================================= */
/* FOOTER                                         */
/* ============================================= */
.footer {
  padding: 60px 0 40px;
  border-top: 1px solid var(--itb-border-subtle);
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 32px;
}
.footer-brand { display: flex; align-items: center; gap: 10px; }
.footer-links { display: flex; gap: 32px; }
.footer-links a {
  font-size: 13px;
  color: var(--itb-text-muted);
  transition: color 0.2s;
}
.footer-links a:hover { color: var(--itb-text-primary); }
.footer-copy {
  width: 100%;
  text-align: center;
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--itb-border-subtle);
  font-size: 12px;
  color: var(--itb-text-dim);
}

/* ============================================= */
/* DIVIDER                                        */
/* ============================================= */
.section-divider {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--itb-border-card), transparent);
  max-width: var(--itb-max-w);
  margin: 0 auto;
}

/* ============================================= */
/* ANIMATIONS                                     */
/* ============================================= */
@keyframes itb-fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: itb-fade-up 0.7s ease-out forwards; }
.fade-up-d1 { animation-delay: 0.1s; opacity: 0; }
.fade-up-d2 { animation-delay: 0.2s; opacity: 0; }
.fade-up-d3 { animation-delay: 0.3s; opacity: 0; }

/* ============================================= */
/* RESPONSIVE                                     */
/* ============================================= */
@media (max-width: 900px) {
  .hero-grid, .itb-grid, .product-feature, .product-feature.reverse { grid-template-columns: 1fr; direction: ltr; }
  .product-feature.reverse > * { direction: ltr; }
  .core-grid { grid-template-columns: 1fr; }
  .usecase-grid { grid-template-columns: 1fr; }
  .why-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
  .hero { padding: 120px 0 60px; }
  .hero-mockup { margin-top: 40px; }
  .itb-landing { --itb-section-gap: 80px; }
}
@media (max-width: 600px) {
  .why-grid { grid-template-columns: 1fr; }
  .mock-kpi-row { grid-template-columns: repeat(2, 1fr); }
  .mock-charts { grid-template-columns: 1fr; }
  .ca-grid { grid-template-columns: 1fr; }
  .hero-ctas { flex-direction: column; align-items: stretch; text-align: center; }
}
</style>
