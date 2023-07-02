import type { ErrorMessage } from '@/model/error'
import { reactive, toRefs } from 'vue'

export function useFetch<T>(url: string) {
  const state = reactive<{ result: T; error: ErrorMessage; isLoading: boolean }>({
    result: {} as T,
    error: {} as ErrorMessage,
    isLoading: false
  })

  const fetchData = async () => {
    state.isLoading = true
    try {
      const res = await fetch(url)
      const json = await res.json()
      state.result = json
    } catch (error: unknown) {
      const err = error as ErrorMessage
      state.error = err
    } finally {
      state.isLoading = false
    }
  }

  fetchData();

  return { ...toRefs(state)}
}
