<template>
  <div class="grid grid-cols-3 auto-rows-min">
    <nav class="links">
      <RouterLink :to="{ name: home }">Home</RouterLink>
      <RouterLink :to="{ name: about }">About</RouterLink>
    </nav>
    <RouterView class="col-span-full" />
  </div>
</template>

<script setup lang="ts">
import { RouteNames } from '@/router/routes'
import { RouterLink, RouterView } from 'vue-router'

const home = RouteNames.DASHBOARD_HOME
const about = RouteNames.DASHBOARD_ABOUT
</script>

<style scoped>
@reference "tailwindcss";

.links {
  @apply col-span-full h-fit flex flex-row gap-2 font-bold text-2xl;
}
</style>
