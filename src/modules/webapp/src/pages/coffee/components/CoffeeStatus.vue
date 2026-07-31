<template>
  <div class="flex flex-col">
    <CoffePot :level="coffeeLevel" />
    <div>Coffee Status</div>

    <div class="info">
      <p><strong>Status:</strong> {{ status }}</p>
      <p><strong>Temperature:</strong> {{ temperature }}°C</p>

      <p><strong>Cups Today:</strong> {{ cupsToday }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CoffeeMachine } from '@/services/api/CoffeeAPI'
import CoffePot from './CoffePot.vue'

defineProps<CoffeeMachine>()
</script>

<style scoped>
.status-card {
  background: #f7f3ec;
  border: 2px solid #6f4e37;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  width: 320px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.info {
  margin-top: 20px;
  text-align: left;
}

h2 {
  color: #6f4e37;
}
</style>
