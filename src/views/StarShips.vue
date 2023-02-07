<template>
  <div class="container text-light">
    <div class="row justify-content-center">
      <div v-for="nave of naves" :key="nave.name" class="bg-grey m-2 p-2 col-8">
      <router-link :to="{ name: 'filestarship', params: { id: JSON.stringify(nave) } }"
        class="dato-nave text-decoration-none">
        {{ nave.name.toUpperCase() }}
        <p></p>
        {{ nave.model }}
      </router-link>
    </div>
    <router-view />
    <!-- El botón se muestra mientras hayan más naves que enseñar -->
    <div class="container text-center mb-4 mt-3" v-show="$store.state.dataNau.next">
      <button @click="recarga" class="btn btn-outline-secondary">View More</button>
    </div>
    </div>
    
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { mapActions, useStore } from 'vuex';
import FileStarShip from '@/components/FileStarShip.vue';

export default {
  name: 'StarShips',
  components: {
    FileStarShip
  },
  setup() {
    // con esto tenemos acceso a nuestro Vuex
    const store = useStore()

    // ejecuta todo esto antes de mostrar nuestro template
    onMounted(() => {
      store.dispatch('fetchData')
    })

    // mapeamos el state para mostrar el array en el v-for
    const naves = computed(() => store.state.naves)
    return { naves }
  },
  methods: {
    ...mapActions(['recarga'])
  }
}
</script>

<style>
.bg-grey {
  background-color: #151515cb;
}

.dato-nave {
  display: block;
  margin: 10px;
  color: #666666
}

.dato-nave:hover {
  color: #fff;
}
</style>