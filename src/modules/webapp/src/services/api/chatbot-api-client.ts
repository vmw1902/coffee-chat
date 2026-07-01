import config from '@/config'
import axios from 'axios'

const chatbotApiClient = axios.create({
  baseURL: config.chatbotAPIBaseURL, // Replace with your API base URL
  timeout: 10000, // 10-second timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

export default chatbotApiClient
