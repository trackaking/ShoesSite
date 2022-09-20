<template>
  <div class="column is-3-desktop is-4-tablet is-6-mobile is-outlined is-multiline">
    <router-link v-bind:to="{ name: 'itemInfoView', params: {id:item.id} }">
      <div class="card has-text-black">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title is-multiline">
              {{ item.Brand }}
            </p>
            <button class="card-header-icon" aria-label="more options">
      <span class="icon">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
      </span>
            </button>
          </header>
        </div>
        <div class="card-image">
          <figure class="image is-4by4">
            <img v-bind:alt="item.title" v-bind:src="item.image">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-3 has-text-centered" style="color:black">
              {{ item.name }}
            </p>
            <div class="mb-0">
              <span class="has-text-weight-bold"> Price : </span>
              <span class="has-text-danger">{{ item.price }} CAD</span>
            </div>
          </div>
        </div>
          <footer class="card-footer has-text-centered has-background-dark">
          </footer>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'ShowItemsView',
    props: { item: Object },
};
</script>

<style scoped>
.card {
  height: 100%;
  display:flex;
  flex-direction: column;
}

</style>
