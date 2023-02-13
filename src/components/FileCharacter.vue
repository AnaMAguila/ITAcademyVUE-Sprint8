<template>
    <div>
        <HomeView v-if="loggedUser.length === 0" />
        <div class="container text-white mt-3 text-center text-uppercase" v-if="loggedUser.length != 0">
            <h1>{{ dataPilot.name }}</h1>
            <div class="row align-items-center">
                <div class="col text-end">
                    <img :src="'https://starwars-visualguide.com/assets/img/characters/' + pilotId + '.jpg'"
                        class="img-piloto">
                </div>
                <div class="col text-start">
                    <ul class="mt-4">
                        <li><span class="text-white">BIRTH YEAR: </span><span class="text-secondary">{{
                            dataPilot.birth_year
                        }}</span></li>
                        <li><span class="text-white">EYE COLOR: </span><span class="text-secondary">{{
                            dataPilot.eye_color
                        }}</span>
                        </li>
                        <li><span class="text-white">GENDER: </span><span class="text-secondary">{{
                            dataPilot.gender
                        }}</span></li>
                        <li><span class="text-white">HAIR COLOR: </span><span class="text-secondary">{{
                            dataPilot.hair_color
                        }} CREDITS</span>
                        </li>
                        <li><span class="text-white">HEIGHT: </span><span class="text-secondary">{{
                            dataPilot.height
                        }}''</span></li>
                        <li><span class="text-white">SKIN COLOR: </span><span class="text-secondary">{{
                            dataPilot.skin_color
                        }}</span></li>
                        <li><span class="text-white">MASS: </span><span class="text-secondary">{{ dataPilot.mass }}
                                lb</span></li>
                    </ul>
                </div>
                <div class="row text-start mt-2">
                    <div class="col">
                        <ul>
                            <li class="text-end"><span class="text-white align-top">FILMS: </span>
                                <span v-for="film of obtenerIdFilm" :key="film">
                                    <img :src="'https://starwars-visualguide.com/assets/img/films/' + film + '.jpg'"
                                        class="miniatura">
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul>
                            <li><span class="text-white align-top">STARSHIPS: </span>
                                <span class="text-secondary text-lowercase" v-for="ship of obtenerIdShip" :key="ship">
                                    <img :src="'https://starwars-visualguide.com/assets/img/starships/' + ship + '.jpg'"
                                        class="miniatura">
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore, mapActions } from 'vuex';
import { computed } from 'vue';
import HomeView from '@/views/HomeView.vue';

export default {
    name: 'FileCharacter',
    components: {
        HomeView
    },
    setup() {
        // con esto tenemos acceso a nuestro Vuex
        const store = useStore();

        // mapeamos el state
        const loggedUser = computed(() => store.state.loggedUser);
        const dataPilot = computed(() => store.state.dataPilot);

        return { loggedUser, dataPilot };
    },
    created() {
        this.getPilot(this.pilotId);
    },
    data() {
        return {
            pilotId: this.$route.params.id,
        }
    },
    computed: {
        obtenerIdFilm() {
            let filmId = this.dataPilot.films.map(element => JSON.parse(element.split('/').slice(-2, -1)));
            return filmId;
        },
        obtenerIdShip() {
            let shipId = this.dataPilot.starships.map(element => JSON.parse(element.split('/').slice(-2, -1)));
            return shipId;
        }
    },
    methods: {
        ...mapActions(['getPilot'])
    }
}
</script>

<style>
li {
    list-style: none;
}

.img-piloto {
    width: 200px;
    border: 1px solid #000;
    border-bottom-width: 3px;
    border-bottom-color: #0048a0;
    margin-top: 20px;
}

.miniatura {
    width: 90px;
    padding: 5px;
}
</style>