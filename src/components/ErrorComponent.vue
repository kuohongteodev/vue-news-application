<script setup lang="ts">
const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <v-dialog activator="parent" width="auto">
    <v-card>
      <v-card-title> Error </v-card-title>
      <v-card-text> Unexpected Error. Please try again </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="handleClose">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
