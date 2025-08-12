<template>
  <nav class="floating-menu">
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li>
        <NuxtLink :to="$localePath('articles')">{{ $t("articles") }}</NuxtLink>
      </li>
    </ul>
  </nav>

  <section id="hero" class="section hero-section">
    <div class="hero-content">
      <h1>Your Hotel's Content, Reimagined</h1>
      <p class="subtitle">
        The first AI-native content and campaign platform built for modern
        hospitality.
      </p>
      <p
        class="subtitle"
        style="
          width: 549px;
          font-weight: 600;
          text-align: right;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <span class="changing-word">Simplify content</span> without the manual
        work.
      </p>
      <div class="btn-container">
        <a href="#" class="btn">Get Started Today</a>
        <a href="#" class="btn outline">Book a Call with Our Team</a>
      </div>
    </div>
    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>

  <section id="features" class="section light-section">
    <h1>FEATURES</h1>

    <section class="features">
      <div class="feature">
        <div class="image"></div>
        <div class="text">
          <h3>AI-Native Communication Guidelines</h3>
          <p>
            Generate custom brand and tone guidelines automatically. Refine them
            as needed and ensure consistency across all touchpoints.
          </p>
        </div>
      </div>

      <div class="feature reverse">
        <div class="image"></div>
        <div class="text">
          <h3>Content Audits & Smart Optimization</h3>
          <p>
            Continuously scan your content across platforms. Get actionable
            improvement suggestions or let Mar CMS automatically implement them.
          </p>
        </div>
      </div>

      <div class="feature">
        <div class="image"></div>
        <div class="text">
          <h3>Multilingual Content Generation</h3>
          <p>
            Create SEO-optimized, multilingual content tailored to each guest
            persona and channel, fully aligned with your brand voice.
          </p>
        </div>
      </div>

      <div class="feature reverse">
        <div class="image"></div>
        <div class="text">
          <h3>Campaign Management in One Place</h3>
          <p>
            Plan, publish, and optimize campaigns across all digital platforms,
            OTAs, your website, and social media from a single place.
          </p>
        </div>
      </div>

      <div class="feature">
        <div class="image"></div>
        <div class="text">
          <h3>Review Monitoring & Auto-Replies</h3>
          <p>
            Track guest reviews across platforms. Detect sentiment trends,
            improvement opportunities, and reply automatically to reviews using
            your brand’s tone.
          </p>
        </div>
      </div>

      <div class="feature reverse">
        <div class="image"></div>
        <div class="text">
          <h3>Centralized Analytics & KPIs</h3>
          <p>
            Access all content, campaign performance, and engagement insights in
            one place, driven by real-time data.
          </p>
        </div>
      </div>
    </section>
  </section>

  <section id="video" class="section dark-section">
    <h1>SEE IT IN ACTION</h1>
    <p class="subtitle">
      See how hotels use Mar CMS to save time, improve content, and increase
      bookings.
    </p>

    <div
      style="width: 70vw; height: 60vh; border-radius: 40px; overflow: hidden"
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/xNUx-rMGvvw?si=NhyvRCF5e6-S4VbC&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <section id="pricing" class="section light-section">
    <h1>PRICING PLANS</h1>

    <section class="pricing">
      <div class="pricing-row">
        <div class="plan">
          <h3>Basic</h3>
          <p class="price">29€<span>/month/user</span></p>
          <p class="description">For teams needing insight and control.</p>
          <ul>
            <li>25 AI Credits</li>
            <li>1 Communication profile</li>
            <li>Data analytics & KPIs</li>
            <li>Content checks: Discrepancies + Improvement suggestions</li>
          </ul>
          <p class="annual">
            Annual: <strong>278€/year/user</strong> <span>Save 20%</span>
          </p>
          <a href="#" class="btn contrast">Start with Basic</a>
        </div>

        <div class="plan">
          <h3>Reviewer</h3>
          <p class="price">99€<span>/month/user</span></p>
          <p class="description">
            For teams focused on review and improvement.
          </p>
          <ul>
            <li>50 AI Credits</li>
            <li>3 Communication profiles</li>
            <li>Everything in Basic, plus:</li>
            <li>Communication improvements</li>
            <li>Sentiment analysis</li>
            <li>Improvement insights</li>
          </ul>
          <p class="annual">
            Annual: <strong>950€/year/user</strong> <span>Save 20%</span>
          </p>
          <a href="#" class="btn contrast">Get Reviewer Access</a>
        </div>

        <div class="plan">
          <h3>Creator</h3>
          <p class="price">149€<span>/month/user</span></p>
          <p class="description">
            For high-performing teams ready to scale content and campaigns.
          </p>
          <ul>
            <li>100 AI Credits</li>
            <li>3 Communication profiles</li>
            <li>Everything in Reviewer, plus:</li>
            <li>Automatic implementation improvements</li>
            <li>Automatic replies to reviews</li>
            <li>Campaign manager for content creation and distribution</li>
          </ul>
          <p class="annual">
            Annual: <strong>1,430€/year/user</strong> <span>Save 20%</span>
          </p>
          <a href="#" class="btn contrast">Become a Creator</a>
        </div>
      </div>
    </section>
  </section>

  <section id="faq" class="section dark-section">
    <h1>FREQUENTLY ASKED QUESTIONS</h1>

    <section class="faq">
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What is Mar CMS?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            Mar CMS is an AI-native content and campaign platform designed
            specifically for hotels. It unifies content creation, optimization,
            and distribution across all digital channels.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What digital channels does Mar CMS support?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            Mar CMS works across your website, OTAs, social media platforms, and
            more—over 5 channels in total.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I manage multilingual content?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            Yes. You can generate and publish multilingual content tailored to
            your brand, your guest personas, and each channel, all
            SEO-optimized.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it hard to set up?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            No. Mar CMS is built to integrate easily with your current systems.
            Most teams are fully up and running within hours.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How do AI Credits work?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            AI Credits are used for generating content, replies, and
            recommendations. Each plan includes a monthly credit allowance based
            on usage needs.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Can I respond to guest reviews automatically?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            Yes. The Creator plan includes automatic replies to reviews, aligned
            with your brand voice.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Is it secure?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            Absolutely. We follow strict security protocols and GDPR compliance
            to ensure your data and guest information are safe.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          How many users can we onboard?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            You can onboard as many users as you need. Pricing is per user, and
            plans can scale with your team.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          Do I need technical knowledge to use it?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            No. Mar CMS is designed for hotel marketers and managers—no
            technical background required.
          </p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          What if I just want to try it out?
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>
            You can book a demo or start with the Basic plan to explore how Mar
            CMS fits your team’s workflow.
          </p>
        </div>
      </div>
    </section>
  </section>

  <section id="actions" class="section light-section" style="min-height: unset">
    <div class="btn-container">
      <a href="#" class="btn">Get Started Today</a>
      <a href="#" class="btn outline">Book a Call with Our Team</a>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll(".floating-menu a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const words = ["Unify your channels", "Boost direct bookings"];
  const changingWordElement = document.querySelector(".changing-word");
  let wordIndex = 0;

  setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    if (changingWordElement) {
      changingWordElement.textContent = words[wordIndex];
    }
  }, 3000);

  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));

      const answer = button.nextElementSibling;

      if (!expanded) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0";
      }
    });
  });
});
</script>

<style scoped>
.floating-menu {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px 10px 10px 24px;
}

.floating-menu ul {
  display: flex;
  list-style: none;
}

.floating-menu ul li {
  margin: 0 15px;
}

.floating-menu ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: color 0.3s;
  height: 34px;
  line-height: 34px;
  display: flex;
}

.floating-menu ul li a:hover {
  color: #bdbdbd;
}

.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  position: relative;
  overflow: hidden;
  width: 100%;
}

.hero-section {
  background-color: #0a0a0a;
  color: #ffffff;
  text-align: center;
}

.hero-content {
  z-index: 1;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

p.subtitle {
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.image-slider {
  display: flex;
  gap: 20px;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
}

.image-slider img {
  animation: slideImages 6s linear infinite;
}

@keyframes slideImages {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

.light-section {
  background-color: #ffffff;
  color: #0a0a0a;
  text-align: center;
}

.dark-section {
  background-color: #0a0a0a;
  color: #ffffff;
  text-align: center;
}

.changing-word {
  display: inline-block;
  position: relative;
  animation: fadeInOut 3s infinite;
  color: #7897ff;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
}

.features {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.feature {
  display: flex;
  margin-bottom: 6rem;
  gap: 4rem;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature .image {
  width: 400px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: #6b8dff;
}

.feature .text {
  max-width: 60%;
  text-align: left;
}

.feature h3 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature p {
  margin: 0;
  color: rgb(136, 136, 136);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5em;
}

@media (max-width: 1000px) {
  .feature {
    flex-direction: column !important;
    text-align: center;
  }

  .feature .text {
    max-width: 100%;
    text-align: center;
  }

  .feature .image {
    width: 100%;
  }
}

.faq {
  max-width: 700px;
  margin: 2rem auto;
}

.faq h2 {
  text-align: center;
  margin-bottom: 1.5rem;
}

.faq-item {
  background: #000308;
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.faq-question {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 1.5rem;
  color: #fff;
  border-radius: 12px;
  transition: background-color 0.1s ease;
}

.faq-question:hover,
.faq-question:focus {
  outline: none;
}

.arrow {
  transition: transform 0.1s ease;
  font-size: 1rem;
  margin-left: 0.5rem;
  user-select: none;
}

.faq-question[aria-expanded="true"] .arrow {
  transform: rotate(45deg);
}

.faq-answer {
  color: rgb(196, 196, 196);
  line-height: 1.4;
  overflow: hidden;
  transition: max-height 0.2s ease;
  max-height: 0;
  text-align: left;
}

.faq-answer p {
  margin: 0.5rem 0 1.3rem 0;
  line-height: 1.4em;
  padding: 0 1.5rem;
  opacity: 0;
  transition: opacity 0.1s ease 0.15s;
}

.faq-question[aria-expanded="true"] + .faq-answer p {
  opacity: 1;
}

.pricing {
  padding: 2rem 1rem;
  text-align: center;
  margin: 0 auto;
}

.pricing h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.pricing .pricing-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.pricing .plan {
  flex: 1 1 300px;
  color: #fff;
  background: #6b8dff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.pricing .plan.featured {
  border: 2px solid #6b8dff;
}

.pricing .plan h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.pricing .price {
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0.5rem 0;
}

.pricing .price span {
  font-size: 0.9rem;
  font-weight: normal;
  color: #dbe3ff;
}

.pricing .description {
  color: #dbe3ff;
  margin-bottom: 1.5rem;
}

.pricing ul {
  flex: 1;
  text-align: left;
  padding: 0;
  margin: 0 0 1rem 0;
  list-style: none;
}

.pricing ul li {
  padding-left: 1.2rem;
  position: relative;
  margin-bottom: 1rem;
}

.pricing ul li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #dbe3ff;
  font-size: 0.9rem;
}

.pricing .annual {
  font-size: 0.95rem;
  color: #dbe3ff;
  margin-bottom: 1.2rem;
}

.pricing .annual span {
  color: rgb(22, 110, 62);
  background: rgb(209, 250, 228);
  border-radius: 50px;
  padding: 3px 5px;
  margin-left: 2px;
  font-size: 0.9rem;
}

.btn-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn {
  display: inline-block;
  background: #6b8dff;
  color: white;
  padding: 0.8rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn.contrast {
  background: #fff;
  color: #6b8dff;
}

.btn.outline {
  border: 1px solid #6b8dff;
  background: transparent;
  color: #6b8dff;
}

.btn:hover {
  background: #0056b3;
  transform: translateY(-2px);
}

section .wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #6b8dff;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}
section .wave span {
  content: "";
  position: absolute;
  width: 325vh;
  height: 325vh;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
  background: #0a0a0a;
}
.content {
  position: relative;
  z-index: 1;
  font-size: 4em;
  letter-spacing: 2px;
  color: #fff;
}
section .wave span:nth-child(1) {
  border-radius: 45%;
  background: #0a0a0a;
  animation: animate 5s linear infinite;
}

section .wave span:nth-child(2) {
  border-radius: 40%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 10s linear infinite;
}
section .wave span:nth-child(3) {
  border-radius: 42.5%;
  background: rgba(20, 20, 20, 0.5);
  animation: animate 15s linear infinite;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
