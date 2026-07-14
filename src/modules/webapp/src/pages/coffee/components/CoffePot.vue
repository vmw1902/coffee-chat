<template>
  <svg viewBox="0 0 512 512" class="coffee-pot">
    <defs>
      <clipPath :id="clipId">
        <path :d="carafePath" />
      </clipPath>
    </defs>

    <!-- Coffee -->
    <rect
      x="0"
      :y="coffeeY"
      width="512"
      :height="coffeeHeight"
      :fill="coffeeColor"
      :clip-path="`url(#${clipId})`"
      class="coffee"
    />

    <!-- Glass Outline -->
    <Carafe :style="{ color: glassColor }" :stroke="glassStroke" :stroke-width="4" />
    <!-- Machine -->
    <Handle :style="{ color: handleColor }" />
  </svg>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import Carafe from '../assets/carafe.svg'
import Handle from '../assets/handle.svg'
import carafeSvg from '../assets/carafe.svg?raw'
import { extractPathAttributes } from '../assets/svg'

const props = withDefaults(
  defineProps<{
    level?: number
  }>(),
  {
    level: 0,
  },
)

const coffeeColor = '#5b3718'
const glassColor = 'rgba(255,255,255,0.15)'
const glassStroke = '#cccccc'
const handleColor = '#000000'

const carafePath = extractPathAttributes(carafeSvg).d
const clipId = useId()

const level = computed(() => Math.min(1, Math.max(0, props.level)))

// Adjust these once after testing against your SVG.
const CARAFE_BOTTOM = 470
const CARAFE_HEIGHT = 265

const coffeeHeight = computed(() => level.value * CARAFE_HEIGHT)
const coffeeY = computed(() => CARAFE_BOTTOM - coffeeHeight.value)
</script>

<style scoped>
.coffee-pot {
  display: block;
  width: 100%;
  height: 100%;
}

.coffee {
  transition:
    y 300ms ease,
    height 300ms ease;
}
</style>
