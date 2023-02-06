<template>
  <div class="container text-white mt-3 text-center text-uppercase">

    <h1>{{ nave.name }}</h1>
    <img :src="'https://starwars-visualguide.com/assets/img/starships/' + obtenerIdNave + '.jpg'">

    <ul class="mt-4">
      <li><span class="text-white">MODEL: </span><span class="text-secondary">{{ nave.model }}</span></li>
      <li><span class="text-white">STARSHIP CLASS: </span><span class="text-secondary">{{ nave.starship_class }}</span></li>
      <li><span class="text-white">MANUFACTURER: </span><span class="text-secondary">{{ nave.manufacturer }}</span></li>
      <li><span class="text-white">COST: </span><span class="text-secondary">{{ nave.cost_in_credits }} CREDITS</span></li>
    </ul>

    <div class="row text-start mt-5">
      <div class="col">
        <ul>
          <li><span class="text-white">CREW: </span><span class="text-secondary">{{ nave.crew }}</span></li>
          <li><span class="text-white">PASSENGER CAPACITY: </span><span class="text-secondary">{{ nave.passengers }}</span></li>
          <li><span class="text-white">CARGO CAPACITY: </span><span class="text-secondary">{{ nave.cargo_capacity}} TONS</span></li>
          <li><span class="text-white">CONSUMABLES: </span><span class="text-secondary">{{ nave.consumables }}</span></li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li><span class="text-white">LENGTH: </span><span class="text-secondary">{{ nave.length }} METERS</span></li>
          <li><span class="text-white">MAXIMUM ATMOSPHERING SPEED: </span><span class="text-secondary">{{ nave.max_atmosphering_speed }} KM/H</span></li>
          <li><span class="text-white">HYPERDRIVE RATING: </span><span class="text-secondary">{{ nave.hyperdrive_rating}}</span></li>
          <li><span class="text-white">MAXIMUM SPEED IN REAL SPACE: </span><span class="text-secondary">{{ nave.MGLT }} MGLT</span></li>
        </ul>
      </div>
    </div>
    <!-- <pre class="text-lowercase">{{ nave }}</pre> -->
  </div>
</template>

<script>
import { useStore } from 'vuex'
import StarShips from '@/views/StarShips.vue';

export default {
  name: 'FileStarShip',
  components: {
    StarShips
  },
  data() {
    return {
      nave: JSON.parse(this.$route.params.id)
    }
  },
  computed: {
    // con esto obtengo la id de la nave
    obtenerIdNave() {
      let array = this.nave.url.split('/')
      const naveId = JSON.parse(array.slice(-2, -1));
      return naveId
    }
  }
}
</script>

<style>
li {
  list-style: none;
}
</style>