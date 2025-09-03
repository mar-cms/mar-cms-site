<template>
  <div v-if="!horizontal" class="relative inline-block text-center">
    <select
      v-model="selectedLang"
      @change="handleLangChange"
      class="text-2xl"
    >
      <option
        v-for="lang in availableLocales"
        :key="lang.code"
        :value="lang.code"

      >
        {{ lang.flag }}
      </option>
    </select>
  </div>
  <div v-if="horizontal" class="flex items-center justify-center gap-6 text-4xl">
    <div v-for="lang in availableLocales"
        :key="lang.code"
       @click="setLocale(lang.code)"
      >{{ lang.flag }}</div>
  </div>
</template>
<script setup lang="ts">

const { horizontal } = defineProps<{ horizontal: boolean }>();
const { locale, locales, setLocale } = useI18n();
const selectedLang = ref(locale.value);

watch(locale, (newLocale) => {
  selectedLang.value = newLocale;
});

const availableLocales = computed(() => {
  const localeFlags = {
    'en': '🇬🇧',
    'pt': '🇵🇹',
    'de': '🇩🇪',
    'fr': '🇫🇷',
    'es': '🇪🇸'
  };

  return locales.value.map(lang => ({
    ...lang,
    flag: localeFlags[lang.code] || '🌐' // Use a globe emoji as a fallback
  }));
});

const handleLangChange = (event: any) => {
  const newLocale = event.target.value;
  setLocale(newLocale);
};
</script>
<style lang="css" scoped>
select {
  outline: unset;
}
</style>

