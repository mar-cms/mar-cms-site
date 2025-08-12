<template>
  <div>
    <h1>Articles List</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <NuxtLink :to="`/articles/${article.id}`">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const articles = [
  { id: 1, title: 'Article 1' },
  { id: 2, title: 'Article 2' },
  { id: 3, title: 'Article 3' },
]
</script>
