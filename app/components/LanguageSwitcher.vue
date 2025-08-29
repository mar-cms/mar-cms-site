<template>
  <div class="relative inline-block text-center">
    <select
      v-model="selectedLang"
      @change="handleLangChange"
      class="appearance-none bg-black font-bold bg-opacity-10 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
</template>
<script setup>

const { locale, locales, setLocale } = useI18n();
const selectedLang = ref(locale.value);

watch(locale, (newLocale) => {
  selectedLang.value = newLocale;
});

const availableLocales = computed(() => {
  const localeFlags = {
    'en': '🇺🇸',
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

const handleLangChange = (event) => {
  const newLocale = event.target.value;
  setLocale(newLocale);
};
</script>
<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
</style>
