<script setup lang="ts">
import type { News } from '@/model/news';
defineProps<News>()
</script>

<template>
  <v-card>
    <v-img :src="urlToImage" height="200px"></v-img>
    <v-card-title> {{ title }} </v-card-title>
    <v-card-subtitle> {{ description }} </v-card-subtitle>
  </v-card>
</template>
