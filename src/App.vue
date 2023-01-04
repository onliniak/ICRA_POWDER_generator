<script setup>
  import Left  from "./components/Left.vue"
  import Right from "./components/Right.vue"
</script>

<template>
  <div><Left /></div>
  <pre><Right /></pre>
</template>

<style>
  div#app{
    display: grid;
    grid-template: auto / 15em auto;
    overflow: auto;
  }

  pre{
    white-space: pre-line;
  }
</style>
