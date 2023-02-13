<template>
  <div class="container-fluid text-center position-relative">
    <div class="container-fluid position-absolute">
      <img alt="Star Wars logo" class="logo" src="@/assets/logo-starwars.png">
    </div>
    <div class="align-items-center position-relative menu">
      <nav class="navbar navbar-expand-md bg-body-tertiary border border-0">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <button type="button" class="btn btn-outline-light text-uppercase border border-0"
                  data-bs-toggle="modal" data-bs-target="#loginModal">
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-light text-uppercase border border-0"
                  data-bs-toggle="modal" data-bs-target="#signupModal">
                  SignUp
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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

.menu {
  height: 100px;
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
  color: #8c8c8c;
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

.navbar-toggler-icon {
  background-color: #fff;
  filter: invert(100%);
}

@media (max-width: 766px) {
  .navbar-collapse {
    text-align: start;
  }
}
</style>
