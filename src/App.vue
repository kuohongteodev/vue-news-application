<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <v-app>
    <v-content>
      <v-container>
        <AppHeader />
        <RouterView />
        <AppFooter />
      </v-container>
    </v-content>
  </v-app>
</template>
