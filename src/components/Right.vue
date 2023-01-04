<script setup>
  import { ref } from 'vue'
  import { useMainStore } from '@/stores/mainStore'
  const store = useMainStore()

  const hosts = ref("")
  const path = ref("")
  const drPage = ref([])

  function copyPage() {
    this.drPage.push(document.getElementById("powder").textContent.match(/<descriptorset>(.*)<\/descriptorset>/gm))
  }
  
  const intro = '<powder xmlns="http://www.w3.org/2007/05/powder#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:icra="http://www.icra.org/rdfs/vocabulary2008#">'
  const attribution = `<attribution>
<issuedby src="http://authority.example.org/company.rdf#me"/>
<issued>${new Date().toISOString()}</issued>
</attribution>`
  const preiriset = '<ol><dr>'
  const irisetStart = '<iriset><includehosts>'
  const irisetMiddle = '</includehosts><includepathstartswith>'
  const irisetEnd = '</includepathstartswith></iriset>'
  const displaytextStart = '<displaytext>'
  const displaytextEnd = '</displaytext>'
  const descriptorsetStart = '<descriptorset>'
  const descriptorsetMiddleStart = "<icra:"
  const descriptorsetMiddleEnd = ">1</icra:"
  const descriptorsetEnd = "</descriptorset></dr>"
  //const nextPage = ''
  const outro = '</ol></powder>'
</script>

<template>
<!--   Tutaj b€dæ pryzwracane descriptorsetz
       Pierwsya strona b€dyie mergni€ta y wsyzstkich stron
       Układ niemieckiej maszynistki jest niewygodny-->
  <button v-for="page in drPage.length" ></button>
  <br />
  <input v-model="hosts" placeholder ="hosts" />
  <input v-model="path" placeholder="/path" />
      <br /><br /><br />
  <code class="language-xml" id="powder">
    {{ intro }}
    {{ attribution }}
    {{ preiriset }}
    {{ irisetStart }}
    {{ hosts }}
    {{ irisetMiddle }}
    {{ path }}
    {{ irisetEnd }}
    {{ descriptorsetStart }}
    <span v-for="property of store.checkboxesArray"> 
      {{ descriptorsetMiddleStart }}{{ property }}{{ descriptorsetMiddleEnd }}{{ property }}>
    </span>
    {{ descriptorsetEnd }}
    {{ displaytextStart }}
<!--     <span v-for="property of store.checkboxesArray">{{ property }}</span> -->
    {{ displaytextEnd }}
    {{ outro }}
  </code>
    <br /><br /><br />
    <button @click="copyPage()" type="button">new Page</button>
</template>

<style scoped>
</style>