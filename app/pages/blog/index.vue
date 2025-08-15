<template>
  <section class="max-w-4xl mx-auto px-4 mt-20 mb-20">
    <h1 class="text-5xl mb-8">Blog</h1>

    <div class="flex flex-col gap-8">
      <!-- Featured -->
      <div class="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        <article
          v-for="article in featuredArticles"
          :key="article.id"
          class="overflow-hidden rounded-lg bg-white"
        >
          <NuxtLink
            :to="$localePath(`/blog/${article.id}`)"
            class="block group"
          >
            <img
              :src="article.img"
              :alt="article.title"
              class="w-full h-[250px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <h2
              class="mt-2 text-xl font-semibold transition-colors duration-200"
            >
              {{ article.title }}
            </h2>
            <time :datetime="article.date" class="text-gray-500 text-sm">
              Posted {{ formatDate(article.date) }}
            </time>
          </NuxtLink>
        </article>
      </div>

      <div class="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
        <article
          v-for="article in otherArticles"
          :key="article.id"
          class="overflow-hidden rounded-md bg-white"
        >
          <NuxtLink
            :to="$localePath(`/blog/${article.id}`)"
            class="block group"
          >
            <img
              :src="article.img"
              :alt="article.title"
              class="w-full h-[150px] object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
            />
            <h3 class="mt-1 text-lg font-medium transition-colors duration-200">
              {{ article.title }}
            </h3>
            <time :datetime="article.date" class="text-gray-500 text-sm">
              Posted {{ formatDate(article.date) }}
            </time>
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import articles from "~/data/articles";

const featuredArticles = computed(() => articles.slice(0, 2));
const otherArticles = computed(() => articles.slice(2));

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};
</script>
