<script setup lang="ts">
import type { News } from '@/model/news'
import router from '@/router'
import { computed } from 'vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const dialog = ref(false)

const props = defineProps({
  news: {
    type: Object as () => News,
    required: true
  }
})

const currentNewsHeadLine = ref(props.news.title)


const handleClick = (item: News) => {
  store.commit('updateSelectedNews', item)
  router.push({ name: 'detail' })
}

const handleEditHeadline = (item: News) => {
  dialog.value = true
  currentNewsHeadLine.value = item.title
}

</script>

<template>
  <v-dialog v-model="dialog" width="full">
    <v-card>
      <v-card-title> Edit Headline </v-card-title>
      <v-text-field v-model="currentNewsHeadLine"></v-text-field>
      <v-card-actions>
        <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-card>
    <v-img :src="news.urlToImage" height="200px"></v-img>
    <v-card-title> {{ currentNewsHeadLine }} </v-card-title>
    <v-card-subtitle> {{ news.description }} </v-card-subtitle>
    <v-card-actions>
      <v-btn @click="handleClick(news)">Learn More</v-btn>
      <v-btn @click="handleEditHeadline(news)">Edit Headline</v-btn>
    </v-card-actions>
  </v-card>
</template>
