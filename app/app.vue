<template>
  <Analytics mode="production"></Analytics>
  <UApp>
    <Menu />
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt';

</script>
