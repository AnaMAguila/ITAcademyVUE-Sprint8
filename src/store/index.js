import { createStore } from 'vuex'

export default createStore({
  state: {
    naves: [],
    dataNau: []
  },
  getters: {
  },
  mutations: {
    // sólo modifica el state
    setNave(state, payload){
      state.naves = state.naves.concat(payload)
    }
  },
  actions: {
    // para llamar al servidor o para crear mayor lógica
    async fetchData({commit, state}) {
      try{
        // resNau es la respuesta del contenido de la API, nos devuelve un objeto
        const resNau = await fetch('https://swapi.dev/api/starships')
        state.dataNau = await resNau.json()
        commit('setNave', state.dataNau.results)
      }catch(error){
        console.log(error)
      }
    },

    async recarga({commit, state}) {
      try{
        // dataNau.next nos facilita la url de la siguiente página
        // llama a la siguiente url si el dataNau.next no es null
        if(state.dataNau.next){ 
          const resNau = await fetch(state.dataNau.next)
          state.dataNau = await resNau.json()
          commit('setNave', state.dataNau.results)
        }        
      }catch(error){
        console.log(error)  
      }  
    }
  }
})
