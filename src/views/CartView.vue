<template>
<div> This is your cart-view </div>
  <div>{{this.$store.state.cart }}</div>
</template>

<script>
export default {
    name: 'CartView',
    cart: [],
    mounted() {
        this.getItems();
    },
    methods: {
        getItems() {
            this.cart = this.$store.state.cartItems;
        },
    },
};
</script>

<style scoped>

</style>
