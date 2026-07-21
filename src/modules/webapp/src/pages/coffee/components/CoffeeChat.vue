<template>
  <div class="flex flex-col">
    <div>
      <div
        v-for="message in messages"
        :key="message.sender + message.text"
        :class="message.sender === 'CoffeeBot' ? 'coffee-bot' : 'user'"
      >
        <strong>{{ message.sender }}:</strong>
        <p>{{ message.text }}</p>
      </div>
    </div>

    <div class="input-row">
      <input v-model="newMessage" placeholder="Ask the coffee machine..." />

      <button>Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const placeholder = 'Waiting for backend...'

const CoffeeBot = 'CoffeeBot'

const newMessage = ref('')

const messages = ref([
  {
    sender: 'User',
    text: 'Make me a latte.',
  },
  {
    sender: 'CoffeeBot',
    text: 'Starting your latte!',
  },
  {
    sender: 'User',
    text: 'Thanks!',
  },
])
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
