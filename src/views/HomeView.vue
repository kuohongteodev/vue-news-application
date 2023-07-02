<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import type { NewsResponse } from '@/model/api'
import type { News } from '@/model/news'
import { computed, ref } from 'vue'
import ListView from '@/components/ListView.vue'
import { useStore } from 'vuex'

const { result, fetchData } = useFetch<NewsResponse>(
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e'
)

fetchData()

const store = useStore()

const showVisitedHeadLines = ref(false)

const handleShowVisitedHeadlines = () => {
  showVisitedHeadLines.value = true
}

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
  <v-dialog v-model="showVisitedHeadLines" width="auto">
    <v-card>
      <v-card-title> Visited Headlines </v-card-title>
      <v-card-text>
        <ul v-if="store.state.user.visitedHeadlines.length">
          <li v-for="item in store.state.user.visitedHeadlines" :key="item">
            {{ item }}
          </li>
        </ul>
        <p v-else> No visited headlines </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="showVisitedHeadLines = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn @click="handleShowVisitedHeadlines"> Show Visited Headlines </v-btn>
  <ListView :news="formatPageData"> </ListView>
</template>
