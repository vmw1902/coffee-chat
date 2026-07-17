<template>
  <div class="flex flex-row gap-6 p-6">
    <CoffeeChat class="w-1/2" />
    <CoffeeStatus class="w-1/2" />
  </div>
</template>
<script setup lang="ts">
import CoffeeChat from '../components/CoffeeChat.vue'
import CoffeeStatus from '../components/CoffeeStatus.vue'
</script>
<style scoped></style>
