<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView class="app" id="app" />
</template>

<style scoped>
.app {
  @apply h-screen w-screen;
}
</style>
