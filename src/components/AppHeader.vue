<script setup lang="ts"></script>

<template>
  <v-layout class="app-header">
    <h1>
      <router-link to="/">News App</router-link>
    </h1>
    <!-- <v-autocomplete
      prepend-inner-icon="mdi-magnify"
      label="Search stories"
      :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
      color="primary"
      class="search-bar"
    >
    </v-autocomplete> -->
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

/* Wrong color from Vuetify hence we need to overwrite */
.v-field--variant-filled .v-field__overlay {
  background-color: inherit !important;
}
</style>
