<template>
  <button class="btn primary text-xl cursor-pointer" @click="bookCall()">{{$t('book_call')}}</button>
</template>
<script setup>
  const runtimeConfig = useRuntimeConfig();
  const {gtag} = useGtag();

  function bookCall() {
    window.open(runtimeConfig.public.google_calendar_url, '_blank');
    gtag('event', 'Book a Call');
  }
</script>