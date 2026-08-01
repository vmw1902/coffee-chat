<template>
  <div class="h-screen w-screen">
    <nav class="links">
      <RouterLink :to="{ name: home }">Home</RouterLink>
      <RouterLink :to="{ name: coffeeChat }">Coffee Chat</RouterLink>
    </nav>
    <RouterView class="h-fit w-full" />
  </div>
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
  @apply flex flex-row gap-2 font-bold text-2xl p-4;
}
</style>
