import { ref } from 'vue'

export function useFetch(path: string) {
  const data = ref(null)
  const error = ref(null)

  const url = `${import.meta.env.VITE_API_BASE}${path}&apiKey=${import.meta.env.VITE_API_KEY}`

  fetch(url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))

  return { data, error }
}
