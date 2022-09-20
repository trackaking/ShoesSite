<template>
  <body>
  <div class="container">
    <div class="section">
      <div class="columns is-centered">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
          </div>
          <label for="brand" class="field-label is-normal">
            <p>
              <b>Brand</b>
            </p>
          </label>
          <div style="padding-right:20px">
            <input
              v-model="filterBrand"
              id="brand" class="input" type="text"
              placeholder="brand">
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
          </div>
          <label for="brand" class="field-label is-normal">
            <p>
              <b>Name</b>
            </p>
          </label>
          <div style="padding-right:20px">
            <input
              v-model="filterName"
              id="name" class="input" type="text"
              placeholder="name">
          </div>
        </div>
      </div>
      <div class="row columns is-multiline is-mobile">
        <ShowItemsView v-for="e in this.itemFiltrePagine"
                       v-bind:key="e.itemId" v-bind:item="e"/>
      </div>
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous"  v-on:click="previousPage()"
           v-on:keydown="previousPage">Previous</a>
        <a class="pagination-next" v-on:click="nextPage() "
           v-on:keydown="nextPage">Next page</a>
        <ul class="pagination-list">
          <li v-for="x in nbrPages" v-bind:key="x">
            <a class="pagination-link is-dark is-outlined"
               v-on:click="changePage(x)" v-on:keydown="changePage(x)">{{ x }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  </body>
</template>

<script>
import { svrURL } from '@/constant';
import ShowItemsView from '@/components/ShowItemsView.vue';

export default {
    name: 'UserHomePageView',
    components: { ShowItemsView },
    data() {
        return {
            items: '',
            filtreCategory: '',
            filterBrand: '',
            filterName: '',
            pageCourante: 1,
            taillesPage: 8,
        };
    },
    mounted() {
        this.getItems();
    },
    computed: {
        itemFilter() {
            let itemFiltre = this.items;
            if (this.filterBrand !== '') {
                itemFiltre = itemFiltre.filter(
                    (tv) => tv.Brand.toLowerCase()
                        .includes((this.filterBrand).toLowerCase()),
                );
            }
            if (this.filterName !== '') {
                itemFiltre = itemFiltre.filter(
                    (tv) => tv.name.toLowerCase()
                        .includes((this.filterName).toLowerCase()),
                );
            }
            return itemFiltre;
        },
        itemFiltrePagine() {
            const i = 8 * (this.pageCourante - 1);
            return this.itemFilter.slice(i, i + 8);
        },
        nbrPages() {
            return Math.ceil(this.itemFilter.length / this.taillesPage);
        },
    },
    methods: {
        async getItems() {
            const serveur = `${svrURL}/items`;
            const response = await fetch(serveur, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                // eslint-disable-next-line
        this.items = await response.json();
            } else {
                console.log(" une erreur s'est produite");
            }
        },
        previousPage() {
            this.pageCourante -= 1;
        },
        nextPage() {
            this.pageCourante += 1;
        },
        changePage(noPage) {
            this.pageCourante = noPage;
        },
    },
};
</script>

<style scoped>
body {
  background-color: lightgrey;
}
a{
  background-color: white;
  outline-color: black;
}
</style>
