<script setup lang="ts">
import { onMounted, ref } from 'vue'

const searchValue = ref('')

onMounted(() => {
  console.log('Mounted')
})

//method for onclick
const onSearch = () => {
  console.log(searchValue.value)
  // @TODO: Add search functionality
}
</script>

<template>
  <v-layout class="app-header">
    <h1><a href="/">Tech News</a></h1>
    <form class="search-bar" @submit="onSearch">
      <v-text-field
        v-model="searchValue"
        placeholder="Search stories"
        variant="underlined"
      ></v-text-field>
      <v-btn type="submit" @click="onSearch">Search</v-btn>
    </form>
  </v-layout>
</template>

<style>
.app-header {
  gap: 1rem;
  align-items: center;
}

h1 {
  flex-shrink: 0;
}

.search-bar {
  gap: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
}

input {
  border: 0;
}
</style>
