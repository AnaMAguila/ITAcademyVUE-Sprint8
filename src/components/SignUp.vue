<template>
    <div>
        <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content bg-dark">
                    <div class="modal-header">
                        <div class="container text-center">
                            <div class="row align-items-center">
                                <div class="col-2">
                                    <img src="../assets/logo-starwars-yellow.png" width="100px" alt="Star Warw logo">
                                </div>
                                <div class="col-10 text-warning">
                                    SIGN UP
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            ref="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form class="needs-validation" @submit.prevent="addUser">
                            <div class="input-group has-validation mb-3">
                                <input type="email" class="form-control" placeholder="Email address" required
                                    v-model="email">
                                </div>
                                <div class="input-group has-validation mb-3">
                                    <input type="password" class="form-control" placeholder="Password" required
                                    v-model="password">
                                </div>
                                <p v-if="existingEmail" class="text-white text-start">This email is already registered</p>
                                <p v-if="divUserLogged" class="text-white text-start">Now you are registed and logged in</p>
                            <button type="submit" v-if="!divUserLogged" class="btn btn-outline-warning">SIGN UP</button>
                            <button type="button" v-if="divUserLogged" data-bs-dismiss="modal" ref="Close" class="btn btn-outline-warning">CLOSE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue';

export default {
    data() {
        return {
            email: "",
            password: "",
            existingEmail: false,
            divUserLogged: false
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
        addUser() {
            let user = {
                email: this.email,
                password: this.password
            }

            // buscamos si existe este email
            const foundEmail = this.arrayUser.find(element => element.email === this.email)

            if (!foundEmail) {
                // etiqueta que muestra que el email ya existe
                this.existingEmail = false;

                // guardamos los datos en localstorage y en arrayUser (store)
                let add = localStorage.length + 1;
                this.arrayUser.push(user);
                localStorage.setItem(add, JSON.stringify(user));
               
                console.log("Nuevo usuario (conectado): ", user)
                // ponemos el formulario en blanco y habilitamos botón para cerrar modal
                // this.email = "";
                // this.password = "";
                this.divUserLogged = true;

                // decimos a la variable de store que hay un usuario logueado
                this.loggedUser.push(user);

                // cierra el modal automáticamente
                // this.$refs.Close.click();
            }else{
                this.existingEmail = true;
            }
        }
    }
}
</script>