<template>
  <article
    v-if="article"
    class="max-w-4xl mx-auto px-4 py-8 mt-20 mb-20"
  >
    <nav class="mb-6">
      <NuxtLink
        :to="$localePath(`/blog`)"
        class="text-blue-600 hover:underline"
      >
        ← {{ $t("back_to_blog") }}
      </NuxtLink>
    </nav>

    <figure class="mb-6">
      <img
        :src="article.img"
        :alt="article.title"
        class="w-full h-auto rounded-lg object-cover"
      >
    </figure>

    <header class="mb-10">
      <h1 class="text-4xl font-bold mb-2">
        {{
          typeof article.title === "object"
            ? article.title[locale]
            : article.title
        }}
      </h1>

      <div class="flex flex-wrap items-center gap-2 text-gray-500 text-sm">
        <span>{{ $t("by") }} {{ article.author }}</span>
        <span>•</span>
        <time :datetime="article.date">{{ formattedDate }}</time>
      </div>
    </header>

    <section class="prose prose-lg max-w-none">
      <div
        v-for="(block, index) in article.content"
        :key="index"
        class="mb-6"
      >
        <h2
          v-if="block.type === 'title'"
          class="text-2xl font-bold text-gray-800 mb-3"
        >
          {{
            typeof block.value === "object" ? block.value[locale] : block.value
          }}
        </h2>

        <p
          v-else-if="block.type === 'text'"
          class="text-gray-700 leading-loose mb-3"
        >
          {{
            typeof block.value === "object" ? block.value[locale] : block.value
          }}
        </p>

        <img
          v-else-if="block.type === 'image'"
          :src="block.value"
          alt=""
          class="w-full h-auto rounded-lg shadow-md"
        >

        <ul
          v-else-if="block.type === 'list'"
          class="list-disc list-inside text-gray-700 leading-loose mb-3 space-y-2"
        >
          <li
            v-for="(item, itemIndex) in (typeof block.value === 'object' ? block.value[locale] : block.value)"
            :key="itemIndex"
            class="ml-4"
            v-html="linkifyText(item)"
          />
        </ul>
      </div>
    </section>
  </article>

  <p
    v-else
    class="text-center py-8 mt-20 mb-20"
  >
    {{ $t("article_not_found") }}.
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const { locale } = useI18n()

import articles from '~/data/articles'

const route = useRoute()
const articleId = route.params.id

const article = computed(() =>
  articles.find((a) => a.id.toString() === articleId),
)

const formattedDate = computed(() => {
  if (!article.value) {
    return ''
  }
  return new Intl.DateTimeFormat(locale.value, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(article.value.date))
})

function linkifyText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline break-all">$1</a>')
}
</script>
