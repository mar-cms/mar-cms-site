<template>
  <div>
    <h1>{{ $t('article') }} {{ articleId }}</h1>
    <p>...</p>
    <NuxtLink :to="$localePath('articles')">{{ $t('back_to_list') }}</NuxtLink>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const articleId = route.params.id
</script>
