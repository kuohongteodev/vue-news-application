<script setup lang="ts">
import type { News } from '@/model/news'
import type { PropType } from 'vue'
import ListItem from './ListItem.vue'

defineProps({
  news: {
    type: Array as PropType<News[]>,
    required: true
  }
})
</script>

<template>
  <v-row no-gutters>
    <v-col v-for="item in news" :key="item.title" cols="12" md="4" sm="6">
      <ListItem
        :title="item.title"
        :urlToImage="item.urlToImage"
        :description="item.description"
        class="pa-2 ma-2"
      ></ListItem>
    </v-col>
  </v-row>
</template>
