<template>
    <ModalView  v-bind:modalComponent="modal"/>
  <p v-if="errMsg">{{errMsg}}</p>
  <div class="container is-centered">
    <div class="hero is-dark">
      <div class="hero-body">
        <h1 class="title has-text-centered is-size-2">Login</h1>
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="notification is-light">
              <figure class="image container is-64x64">
                <img
                  src="/images/homePage.png"
                  alt="image bulma">
              </figure>
              <div class="field">
                <label for="email" class="label">Email</label>
                <p class="control has-icons-left has-icons-right">
                  <input id="email" class="input" type="email" placeholder="email"
                         v-model="email" aria-required="true" >
                  <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <label for="password" class="label">Password:</label>
                <p class="control has-icons-left">
                  <input id="password" class="input" type="password" placeholder="Password"
                         v-model="password">
                  <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <button class="button is-info is-rounded is-outlined is-medium"
                      v-on:click="connexion" v-on:keydown="connexion">Login
              </button>
              <div class="has-text-centered">
                <router-link
                  v-if="this.$store.state.token === ''"
                  class="has-text-weight-bold"
                  v-bind:to="{ name: 'SignupView' }"
                >Sign Up
                </router-link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { svrURL } from '@/constant';
import ModalView from '@/components/ModalView.vue';
// import ErrorMessageView from '@/components/ErrorMessageView.vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'LoginView',
    components: { ModalView },
    data() {
        return {
            email: '',
            password: '',
            errMsg: '',
            modal: {
                errorMessage: '',
                showModal: false,
            },
        };
    },
    mounted() {
    },
    methods: {
        async connexion() {
            let valide = true;
            if (this.username === '') {
                this.modal.errorMessage += 'Please enter your username.\n';
                valide = false;
            }
            // eslint-disable-next-line no-restricted-globals
            if (this.password === '') {
                this.modal.errorMessage += 'Please enter a valid password .\n';
                valide = false;
            }
            if (valide) {
                await signInWithEmailAndPassword(getAuth(), this.email, this.password);
                try {
                    console.log('Successfully Logged in ');
                    const auth = getAuth();
                    const user = auth.currentUser;
                    const { token } = await user.getIdTokenResult();
                    this.$store.dispatch('storeToken', token);
                    this.$router.push('/');
                } catch (error) {
                    // eslint-disable-next-line default-case
                    switch (error.code) {
                    case 'auth/invalid-email':
                        this.modal.errorMessage += 'Invalid email';
                    }
                    console.log(error.message);
                    alert(error.message);
                    console.log(`Failed with error code: ${error.code}`);
                    this.modal.showModal = true;
                }
            }
        },
    },
};
</script>

<style>

</style>
