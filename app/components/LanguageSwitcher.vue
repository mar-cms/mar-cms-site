<template>
  <div v-if="!horizontal" class="relative inline-block text-center">
    <!-- <select
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
    </select> -->
    <USelect
      v-model="selectedLang"
      v-on:update:model-value="setLocale($event)"
      :items="availableLocales"
      value-key="code"
      :avatar="avatar"
      color="neutral"
      class="w-4 bg-black"
      :ui="{
        base: ['shadow-none!', 'inset-shadow-none', 'ring-none']
      }" />
  </div>
  <div v-if="horizontal" class="flex items-center justify-center gap-6 text-4xl mb-2">
    <UAvatar v-for="lang in availableLocales"
      :key="lang.code"
      :src="lang.url"
      @click="setLocale(lang.code)"
    ></UAvatar>
  </div>
</template>
<script setup lang="ts">


const { horizontal } = defineProps<{ horizontal?: boolean }>();
const { locale, locales, setLocale } = useI18n();
const selectedLang = ref(locale.value);

watch(locale, (newLocale) => {
  selectedLang.value = newLocale;
});

const avatar = computed(() => availableLocales.value.find(locale => locale.code === selectedLang?.value)?.avatar)

const availableLocales = computed(() => {
  const localeFlags = {
    'en': '🇬🇧',
    'pt': '🇵🇹',
    'de': '🇩🇪',
    // 'fr': '🇫🇷',
    // 'es': '🇪🇸'
  };

  return locales.value.map(lang => ({
    ...lang,
    flag: localeFlags[lang.code] || '🌐', // Use a globe emoji as a fallback,
    url: `${lang.code}.png`,
    avatar: {
      src: `${lang.code}.png`,
      alt: lang.code,
    }
  }));
});

</script>
<style lang="css" scoped>
select {
  outline: unset;
}

.language-select button {
  border: none;
  box-shadow: none;
}

.language-select button .object-cover {
  object-fit: none;
  border: 1px solid white;
}
</style>

