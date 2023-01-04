import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      checkboxesArray: [],
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
    onSelected(id) {
      if (this.checkboxesArray.includes(id)) {
        this.checkboxesArray = this.checkboxesArray.
          filter(e => e !== id)
      } else {
        this.checkboxesArray.push(id)
      }
    }
  },
})
