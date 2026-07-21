<template>
  <nav class="links">
    <RouterLink :to="{ name: home }">Home</RouterLink>
    <RouterLink :to="{ name: coffeeChat }">Coffee Chat</RouterLink>
  </nav>
  <RouterView class="app" id="app" />
</template>

<script setup lang="ts">
import { RouteNames } from '@/router/routes'
import { RouterLink, RouterView } from 'vue-router'

const home = RouteNames.DASHBOARD_HOME
const coffeeChat = RouteNames.COFFEE_CHAT_VIEW
</script>
<style scoped>
@reference "tailwindcss";

.links {
  @apply col-span-full h-fit flex flex-row gap-2 font-bold text-2xl;
}

.app {
  @apply h-screen w-screen;
}
</style>
