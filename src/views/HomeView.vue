<template>
  <div class="home container text-light">
    <div class="row justify-content-center text-center text-warning">
      <div class="bg-grey m-2 p-4 col-9">
        <h2 class="text-uppercase m-2">A long time ago in a galaxy far, far away...</h2>
        <h4 class="text-uppercase m-3">          
          there was an application where you could see the starships of all the movies through the Star Wars API (SWAPI).
        </h4>
        <h4 class="text-uppercase m-3">Enjoy the content, young padawan, and...</h4>
        <h1 class="text-uppercase m-3 mb-4">May the Force be with you</h1>
        <router-link to="/starships" class="btn btn-outline-warning text-uppercase">Go to Starships</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>
