<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import type { NewsResponse } from '@/model/api'
import type { News } from '@/model/news'
import { computed } from 'vue'
import ListView from '@/components/ListView.vue'
import { ar } from 'vuetify/locale'

const { result, fetchData } = useFetch<NewsResponse>(
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e'
)

fetchData()

const formatPageData = computed((): News[] => {
  return result.value.articles.map((article) => {
    return {
      title: article.title,
      urlToImage: article.urlToImage,
      description: article.description,
      content: article.content,
      url: article.url
    }
  })
})
</script>

<template>
  <ListView :news="formatPageData"> </ListView>
</template>
