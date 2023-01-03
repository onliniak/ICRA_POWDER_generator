<script setup>
  import { useMainStore } from '@/stores/mainStore'

  const store = useMainStore()
</script>

<template>
  <div v-for="list of store.checkboxesArray">{{ list }}</div>
</template>

<style scoped>
</style>