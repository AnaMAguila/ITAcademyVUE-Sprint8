<template>
    <div>
        <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <div class="container text-center">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <img src="../assets/logo-starwars-yellow.png" width="100px" alt="Star Warw logo">
                                </div>
                                <div class="col-10 text-warning">
                                    LOGIN
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            ref="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="needs-validation" @submit.prevent="searchUser">
                            <div class="input-group has-validation mb-3">
                                <input type="email" class="form-control" placeholder="Email address" required
                                    v-model="email">
                                </div>
                                <div class="input-group has-validation mb-3">
                                    <input type="password" class="form-control" placeholder="Password" required
                                    v-model="password">
                                </div>
                                <p v-if="notExistingEmail" class="text-white text-start">This email is not registered 
or the password is wrong</p>
                            <button type="submit" class="btn btn-outline-warning">LOGIN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue';

export default {
    data() {
        return {
            email: "",
            password: "",
            notExistingEmail: false,
        }
    },
    setup() {
        // con esto tenemos acceso a nuestro Vuex
        const store = useStore()

        // mapeamos el state
        const arrayUser = computed(() => store.state.arrayUser)
        const loggedUser = computed(() => store.state.loggedUser)
        return { arrayUser, loggedUser }
    },
    methods: {
        searchUser() {
            let user = {
                email: this.email,
                password: this.password
            }

            // buscamos si existe este email y coincide la contraseña
            const foundEmail = this.arrayUser.find(element => element.email === this.email && element.password === this.password)
            
            console.log("foundEmail: ", foundEmail);

            if (foundEmail) {
                // etiqueta que muestra que el email ya existe
                this.notExistingEmail = false;

               
                console.log("Usuario conectado: ", user);
                // ponemos el formulario en blanco y habilitamos botón para cerrar modal
                // this.email = "";
                // this.password = "";


                // decimos a la variable de store que hay un usuario logueado
                this.loggedUser.push(user);

                // cierra el modal automáticamente
                this.$refs.Close.click();
            }else{
                this.notExistingEmail = true;
            }
        }
    }
}
</script>