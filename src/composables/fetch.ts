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
    const res = await fetch(url)
    const json = await res.json()
    if (!res.ok) {
      state.error = json
    } else {
      state.result = json
    }

    state.isLoading = false
  }

  fetchData()

  return { ...toRefs(state) }
}
