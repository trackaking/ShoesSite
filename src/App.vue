<template>
  <div class="is-mobile is-tablet is-desktop">
    <nav aria-label="main navigation" class="navbar has-background-light "
         role="navigation">
      <div  class="navbar-brand">
        <a id="burger" aria-expanded="false" v-bind:class="{ 'is-active' : showNav }"
           aria-label="menu" class="navbar-burger" data-target="navbarBasicExample"
           v-on:click="activateNavbar" v-on:keydown="activateNavbar" tabindex="0"
           role="button">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-start">
      </div>
      <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
        <div class="navbar-end is-active">
          <div id="nav-item" class="navbar-item">
            <div class=" buttons has-text-weight-bold">
              <router-link class="navbar-item has-text-weight-bold"
                           v-bind:to="{ name: 'CreatorView' }">
                Creator
              </router-link>
              <router-link class="navbar-item has-text-weight-bold"
                           v-bind:to="{ name: 'home' }">
                Home
              </router-link>
              <router-link
                class="navbar-item has-text-weight-bold"
                v-bind:to="{ name: 'AboutView' }"
              >About
              </router-link>
              <router-link
                v-if="this.$store.state.token == ''"
                class="button is-dark is-outlined navbar-item"
                v-bind:to="{ name: 'LoginView' }"
              >Login
              </router-link>
              <router-link
                v-if="this.$store.state.token !== ''"
                class="button is-dark is-outlined navbar-item"
                v-bind:to="{ name: 'ProfileView' }"
              >Profile
              </router-link>
              <button v-if="this.$store.state.token !== ''"
                      id="afficherDeconnexion"
                      class="button is-dark is-danger has-text-weight-bold navbar-item"
                      v-on:click="deconnexion"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            showNav: false,
        };
    },
    mounted() {
    // Au chargement de l'application, si token est dans sessionStorage, charger token
        const t = sessionStorage.getItem('token');
        if (t) {
            this.$store.dispatch('storeToken', t);
        }
    },
    watch: {
    // Lorsque token change de valeur, stocker dans sessionStorage
        token(newToken) {
            sessionStorage.setItem('token', newToken);
        },
    },
    methods: {
        deconnexion() {
            this.$router.push('/');
            this.$store.dispatch('storeToken', '');
        },
        activateNavbar() {
            this.showNav = !this.showNav;
        },
    },
};
</script>
<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

.switch{
  margin-left: 10px;
  margin-right: 30px;
  margin-top: 10px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  padding: 5px 10px;
  border-radius: 50%;
  background: red;
  color: white;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: black;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
