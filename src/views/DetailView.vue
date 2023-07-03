<script setup lang="ts">
//get selected page from store
import { computed } from 'vue'
import type { News } from '@/model/news'
import { useStore } from 'vuex';

const store = useStore()
const selectedPage = computed<News>(() => store.state.user.selectedNews)
</script>

<template>
  <div class="detail-view">
    <v-card>
      <v-img :src="selectedPage.urlToImage"></v-img>
      <v-card-title> {{ selectedPage.title }} </v-card-title>
      <v-card-subtitle> {{ selectedPage.description }} </v-card-subtitle>
      <v-card-text>{{ selectedPage.content }}</v-card-text>
      <v-card-actions>
        <a :href="selectedPage.url" target="_blank">Learn More</a>
      </v-card-actions>
    </v-card>
  </div>
</template>
