import { createStore } from 'vuex'

export default createStore({
  state: { // poner variables y colecciones aquí
    // naves es un array dónde se van concatenando los resultados al hacer View More
    naves: [],
    dataNau: [],
    arrayUser: [],
    loggedUser: [],
    dataPilot: []
  },
  mutations: { // funciones síncronas para cambiar el estado e.j. put, edit, delete
    // sólo modifica el state
    setNave: (state, payload) => (state.naves = state.naves.concat(payload)),
    setDataPiloto: (state, payload) => (state.dataPilot = payload)
  },
  actions: { // funciones asíncronas que puede llamar una o más mutaciones
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
    },

    async getPilot({commit, state}, IdPilot) {
      try{
        const resPilot = await fetch(`https://swapi.dev/api/people/${IdPilot}`)
        state.dataPilot = await resPilot.json()
        commit('setDataPiloto', state.dataPilot)
      }catch(error){
        console.log(error)
      }  
    }
  }
})
