<template>
    <div class="container text-white mt-3 text-center text-uppercase" v-if="loggedUser.length != 0">
        <HomeView v-if="loggedUser.length === 0" />
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
        </div>


        <!-- <pre class="text-lowercase">{{ nave }}</pre> -->
        <HomeView v-if="loggedUser.length === 0" />
    </div>
</template>




<script>
import { useStore, mapActions, mapState } from 'vuex';
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

        return { loggedUser };
    },
    mounted() {
        this.getPilot(this.pilotId);
    },
    data() {
        return {
            pilotId: this.$route.params.id,
        }
    },
    computed: {
        ...mapState(['dataPilot']),
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
</style>