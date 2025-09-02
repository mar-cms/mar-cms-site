<template>
  <nav
    class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black rounded-full shadow-lg px-6 py-2 z-50"
  >
    <ul class="flex list-none gap-6 items-center">
      <li class="text-white flex items-center gap-1">
        <img class="logo" src="~/assets/images/logo.png"></img>
        <div class="font-bold">MAR</div>
        <div>CMS</div>
      </li>
      <li>
        <NuxtLink
          :to="$localePath('/#hero')"
          class="text-white font-bold h-8 flex items-center hover:text-gray-300 transition-colors"
          >{{$t('menu_home')}}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="$localePath('/#features')"
          class="text-white font-bold h-8 flex items-center hover:text-gray-300 transition-colors"
          >{{$t('menu_features')}}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="$localePath('/#pricing')"
          class="text-white font-bold h-8 flex items-center hover:text-gray-300 transition-colors"
          >{{$t('menu_pricing')}}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="$localePath('/#faq')"
          class="text-white font-bold h-8 flex items-center hover:text-gray-300 transition-colors"
          >FAQ</NuxtLink
        >
      </li>
      <!--<li>
         <NuxtLink
          :to="$localePath('blog')"
          class="text-white font-bold h-8 flex items-center hover:text-gray-300 transition-colors"
          >{{ $t("Blog") }}</NuxtLink
        > 
      </li>-->
      <li>
        <LanguageSwitcher />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", async (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        if (route.path !== "/") {
          await router.push(`/${href}`);
        } else {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
</script>
<style scoped>
.logo {
  width: 42px;
}
</style>
