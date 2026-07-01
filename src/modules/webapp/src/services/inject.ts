import { type InjectionKey, inject } from 'vue'

/** Handles possible undefined at runtime without force casting */
export function injectStrict<T>(key: InjectionKey<T>, fallback?: T): T {
  const resolved = inject(key, fallback)
  if (!resolved) {
    throw new Error(`Could not resolve ${key.toString()}`)
  }
  return resolved
}
