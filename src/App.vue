<template>
  <div class="container-fluid text-center">
    <div class="align-items-center position-relative">
      <img alt="Star Wars logo" class="logo" src="@/assets/logo-starwars.png">
      <div class="position-absolute top-50 end-0 translate-middle-y">
        <button type="button" class="btn btn-outline-light text-uppercase border border-0" data-bs-toggle="modal"
          data-bs-target="#loginModal">
          Login
        </button>
        <button type="button" class="btn btn-outline-light text-uppercase border border-0" data-bs-toggle="modal"
          data-bs-target="#signupModal">
          SignUp
        </button>
      </div>
    </div>
    <nav>
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/starships" class="link" v-if="loggedUser.length != 0">Starships</router-link>
    </nav>
    <router-view />
    <Login />
    <SignUp />
  </div>
</template>

<script>
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: {
    Login,
    SignUp
  },
  setup() {
    // con esto tenemos acceso a nuestro Vuex
    const store = useStore();

    // mapeamos el state
    const arrayUser = computed(() => store.state.arrayUser);
    const loggedUser = computed(() => store.state.loggedUser);

    // guardamos todo el contenido de localstorage en un array del store
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue; // se salta claves como "setItem", "getItem" etc
      }
      store.state.arrayUser.push(JSON.parse(localStorage.getItem(key)));
    }
    console.log("Contenido localstorage en objeto: ", store.state.arrayUser)
    return { arrayUser, loggedUser }
  }
}
</script>

<style>
body {
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  box-sizing: border-box;
  background-color: #000;
  margin: 0;
  padding: 0;
}

.logo {
  width: 200px;
  margin-top: 20px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1f1f1f;
  border-top-width: 2px;
  border-left: none;
  border-right: none;
  margin-top: 20px;
  margin-bottom: 20px;
}

.link {
  border: 1px solid #1f1f1f;
  border-bottom-width: 3px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  text-decoration: none;
  text-transform: uppercase;
  color: #666666;
}

.link:hover,
.link.router-link-active,
.link.router-link-exact-active {
  border-bottom-color: #0048a0;
  border-bottom-width: 3px;
  color: #fff
}

.bg-grey {
  background-color: #151515cb;
}
</style>
