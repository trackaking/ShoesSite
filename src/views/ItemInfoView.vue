<template>
  <body>
  <div v-if="info !== ''">
    <div class="container ">
      <div class="section">
        <div class="columns is-multiline is-mobile ">
          <div class="column">
            <div class="column">
              <img v-bind:src="info[0].image" v-bind:alt="info[0].name">
            </div>
          </div>
          <div class="column">
            <p class="column is-titled"> {{info[0].name}}</p>
            <h2 class="column"> CAD {{info[0].price}}$</h2>
            <h5 class="column has-text-justified"> {{info[0].details}}</h5>
            <div class="columns is-4 is-multiline">
              <ShoesCategoryView></ShoesCategoryView>
            </div>
            <div class="column has-text-centered">
              <button v-on:click="addToCart"
                      class="button is-centered is-outlined">
                ADD TO CART
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </body>
</template>

<script>
import { svrURL } from '@/constant';
import ShoesCategoryView from '@/components/ShoesCategoryView.vue';

export default {
    name: 'ItemInfoView',
    components: { ShoesCategoryView },
    data() {
        return {
            info: '',
            cart: [],
            size: [],
        };
    },
    mounted() {
        this.getInfo();
    },
    methods: {
        async getInfo() {
            const serveur = `${svrURL}/items/${this.$route.params.id}`;
            const response = await fetch(serveur, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                // eslint-disable-next-line
          this.info = await response.json();
                console.log(this.info);
            } else {
                console.log(" une erreur s'est produite");
            }
        },
        inset() {
            this.$store.dispatch('addItem', this.info[0]);
        },
        async addToCart() {
            const body = {
                itemId: this.info[0].id,
                itemImage: this.info[0].image,
                itemName: this.info[0].name,
                quantity: 1,
                // price: this.info[0].price,
            };
            // effectuer le fetch
            const serveur = `${svrURL}/cart`;
            const response = await fetch(serveur, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            if (response.ok) {
                alert('ok');
            } else {
                console.log('error');
            }
        },
    },
};
</script>

<style scoped>

body{
  background-color: lightgrey;
}

h1{
  font-size: 25px
}
p {
  font-size: 35px;
  margin-top: 15px;
}
.button.is-centered {
  font-size: 25px;
  color: black;
}

.button {
font-size: 20px;
  color: black;
}

</style>
