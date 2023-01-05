<script setup>
  import { reactive } from 'vue'
  import { useMainStore } from '@/stores/mainStore'
  
  const store = useMainStore()
  const current = reactive({ index: -1 })
  
  defineProps({})
</script>

<template>
  <ul v-for="(section, index) of store.sections" @click="current.index = index">
  <li><details><summary>{{ section.sectionName }}</summary>
  <ul v-for="property of section.properties">
    <li><label><input type="checkbox" @change="store.onSelected(property.id, property.description)"><span> {{property.description}} </span></label></li></ul>
    <ul v-if="current.index > -1">
    <li v-for="context of store.sections[current.index].context">
      <label ><input type="radio" :name="section.sectionName" @change="store.onSelected(context.id, context.description)"><span > {{context.description}} </span></label>
    </li></ul>
  </details></li>
  </ul>
</template>

<style scoped>
</style>
