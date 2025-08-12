<template>
  <div>
    <h1>Article {{ articleId }}</h1>
    <p>Article details go here...</p>
    <NuxtLink to="/articles">Back to list</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = route.params.id
</script>
