import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      checkboxesArray: [],
      checkboxesDescriptionArray: [],
      drPage: [],
      
      sections: [
        {sectionName: "Nudity",
        properties: [
          {id: "na", description: "Exposed Breasts"}, 
          {id: "nb", description: "Bare buttocks"},
          //{id: "", description: ""}
        ]},
        {sectionName: "Violence",
        properties: [
          {id: "va", description: "Assault/rape"}, 
          {id: "vb", description: "Injury to human beings"}],
        context: [
          {id: "vCart", description: "Violence appears in an artistic context"},
          {id: "vClit", description: "Violence appears in an artistic literature context"}
        ]},
                ],
      }
    },
  //getters: {
  //},
  actions: {
    onSelected(id, d) {
      if (this.checkboxesArray.includes(id)) {
        this.checkboxesArray = this.checkboxesArray.
          filter(e => e !== id)
        this.checkboxesDescriptionArray = this.
          checkboxesDescriptionArray.
          filter(e => e !== d)
      } else {
        this.checkboxesArray.push(id)
        this.checkboxesDescriptionArray.push(d)
      }
    }
  },
})
