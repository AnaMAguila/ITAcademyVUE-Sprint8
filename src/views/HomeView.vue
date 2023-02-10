<template>
  <div class="home container text-light">
    <div class="row justify-content-center text-center text-warning">
      <div class="bg-grey m-2 p-3 col-9">
        <p class="size4">A long time ago in a galaxy far, far away...</p>
        <p class="size3">          
          there was a place where you could see the<br> starships of all the movies through the Star Wars API
        </p>
        <p class="size2">Enjoy the content, young padawan, and...</p>
        <p class="size1 mb-4">May the Force be with you</p>
        <router-link to="/starships" class="btn btn-outline-warning text-uppercase" v-if="loggedUser.length != 0">Go to Starships</router-link>
        <button type="button" class="btn btn-outline-warning text-uppercase" data-bs-toggle="modal"
          data-bs-target="#loginModal" v-if="loggedUser.length === 0">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'HomeView',
  setup() {
        // con esto tenemos acceso a nuestro Vuex
        const store = useStore()

        // mapeamos el state
        const loggedUser = computed(() => store.state.loggedUser);
        return { loggedUser }
  }
}
</script>

<style>
.size1{
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
}
.size2{
  font-size: 30px;
  font-weight: 500;
  text-transform: uppercase;
}
.size3{
  font-size: 25px;
  font-weight: 300;
  text-transform: uppercase;
}
.size4{
  font-size: 20px;
  font-weight: 100;
  text-transform: uppercase;
}
</style>
