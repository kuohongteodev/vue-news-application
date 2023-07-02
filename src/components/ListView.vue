<script setup lang="ts">
import type { News } from '@/models/news'
defineProps<Array<News>>()
</script>

<template>
  <v-container>
    <v-row v-for="item in props" :key="item.id">
      {{ item.title }}
    </v-row>
  </v-container>
</template>
