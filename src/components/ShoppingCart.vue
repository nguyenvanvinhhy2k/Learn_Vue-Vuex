<template>
  <h1>Cart</h1>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}$ - {{ product.quantity }}
    </li>
  </ul>
  <p>Total: {{ total }}$</p>
  <button @click="checkOut">Check Out</button>
  <p v-if="checkOutStatus">{{ $store.state.checkOutStatus }}</p>
</template>

<script>
// import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // ...mapGetters({
    //   products: "cartProducts",
    //   total: "cartTotal",
    // }),
    // ...mapState({
    //   checkOutStatus: "checkOutStatus",
    // }),
    products() {
      return this.$store.getters.cartProducts;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
  methods: {
    checkOut(products) {
      this.$store.dispatch("checkOut", products);
    },
    checkOutStatus() {
      this.$store.dispatch("checkOutStatus");
    },
  },
};
</script>

<style scoped></style>
