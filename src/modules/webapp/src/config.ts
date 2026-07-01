interface IConfig {
  coffeeApiBaseURL: string
  chatbotAPIBaseURL: string
}

function buildConfig(env: ImportMetaEnv): IConfig {
  return {
    coffeeApiBaseURL: env.VITE_APP_COFFEE_API || 'http://localhost:3000',
    chatbotAPIBaseURL: env.VITE_APP_CHATBOT_AI || 'http://localhost:8000',
  }
}

export default buildConfig(import.meta.env)

export { type IConfig, buildConfig }
