<script setup lang="ts"></script>

<template>
  <div class="full-screen-spinner">
    <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
  </div>
</template>

<style scoped>
.full-screen-spinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
