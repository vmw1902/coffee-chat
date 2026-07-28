<template>
  <div class="flex flex-col">
    <div class="history" aria-live="polite">
      <h2>Chat History</h2>
      <div
        v-for="message in messages"
        :key="message.sender + message.text"
        :class="message.sender === 'CoffeeBot' ? 'coffee-bot' : 'user'"
      >
        <strong>{{ message.sender }}:</strong>
        <p>{{ message.text }}</p>
      </div>
    </div>

    <form class="input-row" @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Ask the coffee machine..." />

      <button type="submit">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ChatMessage {
  sender: 'User' | 'CoffeeBot'
  text: string
}

defineProps<{
  messages: ChatMessage[]
}>()

const emit = defineEmits<{
  sendMessage: [message: string]
}>()

const newMessage = ref('')

function sendMessage() {
  const message = newMessage.value.trim()

  if (!message) {
    return
  }

  emit('sendMessage', message)
  newMessage.value = ''
}
</script>

<style scoped>
.chat-card {
  background: #fffef8;
  border: 2px solid #6f4e37;
  border-radius: 12px;
  padding: 20px;
  width: 100%;
}

.history {
  height: 350px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 20px 0;
  background: white;
  color: black;
}

h2 {
  margin: 0 0 12px;
}

.user {
  text-align: right;
  color: #0b7a2f;
  margin-bottom: 12px;
}

.coffee-bot {
  text-align: left;
  color: #6f4e37;
  margin-bottom: 12px;
}

.input-row {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 10px;
  color: black;
}

button {
  padding: 10px 18px;
  background: #6f4e37;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
