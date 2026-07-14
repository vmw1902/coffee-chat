<template>
  <div class="flex flex-col">
    <CoffePot :level="coffeeLevel" />
    <div>Coffee Status</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import CoffePot from './CoffePot.vue'

const coffeeLevel = ref(0.75)
</script>
<style scoped></style>
