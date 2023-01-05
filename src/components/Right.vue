<script setup>
  import { ref, nextTick } from 'vue'
  import { useMainStore } from '@/stores/mainStore'
  const store = useMainStore()

  const hosts = ref("")
  const path = ref("")
  let file = ref("")

  function copyPage() {
    store.drPage.push(document.getElementById("powder").textContent
      .match(/<dr>(.*)<\/dr>/gm))
  }

  function updatePage() {
    let page = document.getElementById("preview")
store.drPage[page.dataset.index -1] = page.textContent
  }

  function deletePage() {
    // store.drPage.splice(
    //   document.getElementById("powder").dataset.index, 1);
    store.drPage.pop()
  }

  function restorePage(index) {
    let page = document.getElementById("preview")
    page.textContent = store.drPage[index -1]
    page.dataset.index = index
  }

  async function previewFile() {
    let txt = ''
    if (store.drPage.length === 0) { store.drPage.
      push(document.getElementById("powder").textContent)}
    txt = prefile
    store.drPage.forEach((data) => txt += data)
    txt += postfile
    file.value = txt
    await nextTick()
    document.getElementById("preview").textContent = txt
  }

  function encodeFile() {
    return encodeURIComponent(file.value)
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
  const outro = '</ol></powder>'
  const prefile  = `<powder xmlns="http://www.w3.org/2007/05/powder#" xmlns:foaf="http://xmlns.com/foaf/0.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:icra="http://www.icra.org/rdfs/vocabulary2008#">
  <attribution>
<issuedby src="http://authority.example.org/company.rdf#me"/>
<issued>${new Date().toISOString()}</issued>
</attribution><ol>`
  const postfile = '</ol></powder>'
</script>

<template>
  <button v-for="(index, page) in store.drPage.length" @click="restorePage(index)"> {{ index }} </button>
  <br />
  <input v-model="hosts" placeholder ="hosts" />
  <input v-model="path" placeholder="/path" />
  <br />
  <details open><summary>Preview page</summary><div id="preview"></div></details>
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
    {{ displaytextStart }}
    <span v-for="property of store.checkboxesDescriptionArray">{{ property }}; </span>
    {{ displaytextEnd }}
    {{ descriptorsetEnd }}
    {{ outro }}
  </code>
    <br /><br /><br />
    <button @click="copyPage()" type="button">New page</button>
    <button @click="updatePage()">Update current page</button>
    <button @click="deletePage()"  >Delete last page</button>
  <br /><br />
    <button @click="previewFile()">Preview file</button>
    <a @click="previewFile()" :href="'data:text/plain;charset=utf-8,' + encodeFile()" target="_blank" type="application/powder+xml" download="powder.xml">Down</a>
</template>

<style scoped>
</style>