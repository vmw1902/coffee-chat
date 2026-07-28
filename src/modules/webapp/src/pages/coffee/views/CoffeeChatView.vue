<template>
  <div class="flex flex-row gap-6 p-6">
    <CoffeeChat class="w-1/2" :messages="messages" @send-message="handleUserMessage" />
    <CoffeeStatus class="w-1/2 max-w-sm" v-bind="coffeeMachine" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ChatbotAPI } from '@/services/api/ChatbotAPI'
import { CoffeeAPI, type CoffeeMachine } from '@/services/api/CoffeeAPI'
import CoffeeChat from '../components/CoffeeChat.vue'
import CoffeeStatus from '../components/CoffeeStatus.vue'

interface ChatMessage {
  sender: 'User' | 'CoffeeBot'
  text: string
}

const coffeeMachine = ref<CoffeeMachine>({
  status: 'off',
  temperature: 0,
  currentDrink: 'Latte',
  cupsToday: 0,
  coffeeLevel: 0.8,
})
const messages = ref<ChatMessage[]>([])

onMounted(getCoffeeStatus)

async function handleUserMessage(message: string) {
  const chatbotResponse = await ChatbotAPI.sendMessage(message)
  const coffeeResponse = await CoffeeAPI.updateCoffeeStatus({
    ...chatbotResponse.data,
    message,
  })

  coffeeMachine.value = coffeeResponse.data.coffeeMachine
  updateMessages(coffeeResponse.data.history)

  if (chatbotResponse.data.asking_amount) {
    await getCoffeeStatus()
  }
}

async function getCoffeeStatus() {
  const response = await CoffeeAPI.getCoffeeStatus()
  coffeeMachine.value = response.data
}

function updateMessages(history: string[]) {
  messages.value = history.map((historyEntry) => {
    const separatorIndex = historyEntry.indexOf(': ')
    const sender = historyEntry.slice(0, separatorIndex) as ChatMessage['sender']
    const text = historyEntry.slice(separatorIndex + 2)

    return { sender, text }
  })
}
</script>
