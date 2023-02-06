<template>
  <div class="container text-light">
    <div v-for="nave of naves" :key="nave.name" class="bg-grey m-2 p-2">
      <router-link :to="{name: 'filestarship', params:{id: JSON.stringify(nave)}}" class="text-secondary bg-grey">{{ nave.name.toUpperCase() }}</router-link>
      <p class="text-secondary bg-grey">{{ nave.model }}</p>
    </div>
    <router-view />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import FileStarShip from '@/components/FileStarShip.vue';

export default {
  name: 'StarShips',
  components: {
    FileStarShip
  },
  data: function () {
    return {

    }
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
  }
}
</script>

<style>
.bg-grey {
  background-color: #151515;
}
</style>