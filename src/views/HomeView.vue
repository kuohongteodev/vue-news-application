<script setup lang="ts">
import { useFetch } from '@/composables/fetch'
import type { NewsResponse } from '@/model/api'
import type { News } from '@/model/news'
import { computed, ref, unref } from 'vue'
import ListView from '@/components/ListView.vue'
import SpinnerComponent from '@/components/SpinnerComponent.vue'
import { useStore } from 'vuex'
import type { ErrorMessage } from '@/model/error'
import ErrorComponent from '@/components/ErrorComponent.vue'

const { result, isLoading } = useFetch<NewsResponse>(
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e'
)

const store = useStore()

const showVisitedHeadLines = ref(false)
const fetchError = ref<undefined | ErrorMessage>(undefined)

const formatPageData = computed((): News[] => {
  if (result.value.articles) {
    return result.value.articles.map((article) => {
      return {
        title: article.title,
        urlToImage: article.urlToImage,
        description: article.description,
        content: article.content,
        url: article.url
      }
    })
  }
  return []
})

const handleShowVisitedHeadlines = () => {
  showVisitedHeadLines.value = true
}

function handleError() {
  const { error } = useFetch<NewsResponse>('https://newsapi.org/v2/sources?apiKey')
  fetchError.value = error.value
}

const handleErrorClose = () => {
  fetchError.value = undefined
}
</script>

<template>
  <SpinnerComponent v-if="isLoading" />
  <ErrorComponent v-if="fetchError" @close="handleErrorClose"> </ErrorComponent>
  <v-dialog v-model="showVisitedHeadLines" width="auto">
    <v-card>
      <v-card-title> Visited Headlines </v-card-title>
      <v-card-text>
        <ul v-if="store.state.user.visitedHeadlines.length">
          <li v-for="item in store.state.user.visitedHeadlines" :key="item">
            {{ item }}
          </li>
        </ul>
        <p v-else>No visited headlines</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="showVisitedHeadLines = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-btn @click="handleShowVisitedHeadlines"> Show Visited Headlines </v-btn>
  <v-btn @click="handleError">Button To Show Error</v-btn>
  <ListView :news="formatPageData" v-if="formatPageData.length"> </ListView>
  <p v-if="!isLoading && !formatPageData.length">No headline found</p>
</template>
