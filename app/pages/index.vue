<template>
  <section id="hero" class="section hero-section">
    <div class="hero-content">
      <h1>{{$t('main_title')}}</h1>
      <p class="subtitle">
        {{$t('main_subtitle')}}
      </p>
      <p
        class="subtitle"
        style="
          font-weight: 600;
          margin-left: auto;
          margin-right: auto;
        "
      >
        <span class="changing-word">{{$t(changingWord)}}</span> {{$t('main_subtitle2_part2')}}
      </p>
      <div class="btn-container">
        <button class="btn primary" @click="getStartedToday()">{{$t('get_started_today')}}</button>
        <button class="btn contrast" @click="bookCall()">{{$t('book_call')}}</button>      </div>
    </div>
    <div class="wave">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </section>

  <section id="features" class="section light-section">
    <h1>{{$t('features')}}</h1>
    <section class="section">
      <div class="feature">
        <img class="image" src="~/assets/images/communication_styles.png"></img>
        <div class="text">
          <h3>{{$t('features_title')}}</h3>
          <p>
            {{$t('features_subtitle')}}
          </p>
        </div>
      </div>

      <div class="feature reverse">
        <img class="image" src="~/assets/images/content_analysis.png"></img>
        <div class="text">
          <h3>{{$t('feature_content')}}</h3>
          <p>
            {{$t('feature_content_description')}}
          </p>
        </div>
      </div>

      <div class="feature">
        <img class="image" src="~/assets/images/platform_versions.png"></img>
        <div class="text">
          <h3>{{$t('feature_multilingual')}}</h3>
          <p>
            {{$t('feature_multilingual_description')}}
          </p>
        </div>
      </div>

      <div class="feature reverse">
        <img class="image" src="~/assets/images/campaign_manager.png"></img>
        <div class="text">
          <h3>{{$t('feature_campaign')}}</h3>
          <p>
            {{$t('feature_campaign_description')}}
          </p>
        </div>
      </div>

      <!-- <div class="feature">
        <div class="image"></div>
        <div class="text">
          <h3>{{$t('feature_review')}}</h3>
          <p>
            {{$t('feature_review_description')}}
          </p>
        </div>
      </div> -->

      <div class="feature">
        <img class="image" src="~/assets/images/dashboards.png"></img>
        <div class="text">
          <h3>{{$t('feature_analytics')}}</h3>
          <p>
            {{$t('feature_analytics_description')}}
          </p>
        </div>
      </div>
    </section>
  </section>

  <!-- <section id="video" class="section dark-section">
    <h1>{{$t('video_title')}}</h1>
    <p class="subtitle">
      {{$t('video_subtitle')}}
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
  </section> -->

  <section id="pricing" class="section dark-section ">
    <h1>{{$t('pricing_title')}}</h1>

    <section class="pricing">
      <div class="pricing-row">
        <div class="plan">
          <h3>{{$t('pricing_basic')}}</h3>
          <!--<p class="price">29€<span>/month/user</span></p>-->
          <p class="description">{{$t('pricing_basic_description')}}</p>
          <ul>
            <!--<li>25 AI Credits</li>-->
            <li>{{$t('pricing_basic_feature_1')}}</li>
            <li>{{$t('pricing_basic_feature_2')}}</li>
            <li>{{$t('pricing_basic_feature_3')}}</li>
          </ul>
          <!--
          <p class="annual">
            Annual: <strong>278€/year/user</strong> <span>Save 20%</span>
          </p>
          -->
          <button class="btn contrast" @click="bookCall()">{{$t('pricing_basic_start')}}</button>
        </div>

        <div class="plan">
          <h3>{{$t('pricing_reviewer')}}</h3>
          <!--<p class="price">99€<span>/month/user</span></p>-->
          <p class="description">
            {{$t('pricing_reviewer_description')}}
          </p>
          <ul>
            <!--<li>50 AI Credits</li>-->
            <li>{{$t('pricing_reviewer_feature_1')}}</li>
            <li>{{$t('pricing_reviewer_feature_2')}}</li>
            <li>{{$t('pricing_reviewer_feature_3')}}</li>
            <li>{{$t('pricing_reviewer_feature_4')}}</li>
            <li>{{$t('pricing_reviewer_feature_5')}}</li>
          </ul>
          <!--
          <p class="annual">
            Annual: <strong>950€/year/user</strong> <span>Save 20%</span>
          </p>
          -->
          <button class="btn contrast" @click="bookCall()">{{$t('pricing_reviewer_start')}}</button>
        </div>

        <div class="plan">
          <h3>{{$t('pricing_creator')}}</h3>
          <!--<p class="price">149€<span>/month/user</span></p>-->
          <p class="description">
            {{$t('pricing_reviewer_description')}}
          </p>
          <ul>
            <!--<li>100 AI Credits</li>-->
            <li>{{$t('pricing_creator_feature_1')}}</li>
            <li>{{$t('pricing_creator_feature_2')}}</li>
            <li>{{$t('pricing_creator_feature_3')}}</li>
            <li>{{$t('pricing_creator_feature_4')}}</li>
            <li>{{$t('pricing_creator_feature_5')}}</li>
          </ul>
          <!--
          <p class="annual">
            Annual: <strong>1,430€/year/user</strong> <span>Save 20%</span>
          </p>
          -->
          <button class="btn contrast" @click="bookCall()">{{$t('pricing_reviewer_start')}}</button>
        </div>
      </div>
    </section>
  </section>

  <section id="faq" class="section light-section">
    <h1>{{$t('questions_title')}}</h1>

    <section class="faq">
      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_1')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_1_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_2')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_2_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_3')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_3_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_4')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_4_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_5')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_5_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_6')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_6_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_7')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_7_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_8')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_8_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_9')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_9_answer')}}</p>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          {{$t('question_10')}}
          <span class="arrow" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" style="max-height: 0">
          <p>{{$t('question_10_answer')}}</p>
        </div>
      </div>
    </section>
  </section>

  <section id="actions" class="section dark-section" style="min-height: unset">
    <h1>{{$t('call_to_action_title')}}</h1>
    <p class="subtitle">{{$t('call_to_action_subtitle')}}</p>
    <div class="btn-container">
      <button class="btn primary" @click="getStartedToday()">{{$t('get_started_today')}}</button>
      <button class="btn contrast" @click="bookCall()">{{$t('book_call')}}</button>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";

const switchLocalePath = useSwitchLocalePath()
const changingWord = ref('main_subtitle2_part1_simplify');

onMounted(() => {
  const words = ["main_subtitle2_part1_unify", "main_subtitle2_part1_boost", "main_subtitle2_part1_simplify"];
  const changingWordElement = document.querySelector(".changing-word");
  let wordIndex = 0;

  setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    if (changingWordElement) {
      changingWord.value = words[wordIndex];
    }
  }, 4000);

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

function bookCall() {
  window.open('https://calendar.app.google/4w6v9eSQLqn88kF98', '_blank');
}

function getStartedToday() {
  console.log('hello')
}

</script>

<style scoped>
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
  width: 100%;
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
  animation: fadeInOut 4s infinite;
  color: #7897ff;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  5% {
    opacity: 0;
    transform: translateY(5px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  75% {
    opacity: 0;
    transform: translateY(-5px);
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
  justify-content: center;
  align-items: center;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature .image {
  max-width: 600px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
  background-color: var(--primary-color);
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

  .feature .text h3 {
    font-size: 30px;
  }

  .feature .image {
    width: 100%;
  }

  h1 {
    font-size: 2rem;
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
  background: var(--primary-color);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.pricing .plan.featured {
  border: 2px solid var(--primary-color);
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
  flex-wrap: wrap;
}

@media (max-width: 800px) {
  .btn {
    width: 100%;
  }
}

.btn {
  display: inline-block;
  padding: 0.8rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
}

.btn.primary {
  background: var(--primary-color);
  color: white;
}

.btn.outline {
  border-width: 0;
  background: transparent;
  color: var(--primary-color);
}

.btn.outline:hover {
  border: 0px;
}

.btn.contrast {
  background: #fff;
  color: var(--primary-color);
}

.btn:hover {
  background-color: white;
  color: black;
  transform: translateY(-2px);
  border: 1px solid black;
}


section .wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
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
