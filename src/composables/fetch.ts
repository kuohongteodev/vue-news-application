import { ref } from "vue"

export function useFetch(url: string) {
  const data = ref(null)
  const error = ref(null)

  fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((result) => {
      data.value = result
    })
    .catch((err) => {
      error.value = err.message
    })
}
