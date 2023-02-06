import { createStore } from 'vuex'

export default createStore({
  state: {
    naves: [],
    imagenes: []
  },
  getters: {
  },
  mutations: {
    // sólo modifica el state
    setNave(state, payload){
      state.naves = payload
      console.log(state.naves)  
    }
  },
  actions: {
    // para llamar al servidor o para crear mayor lógica
    async fetchData({commit}) {
      try{
        const resNau = await fetch('https://swapi.dev/api/starships/')
        const dataNau = await resNau.json()
        commit('setNave', dataNau.results)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
