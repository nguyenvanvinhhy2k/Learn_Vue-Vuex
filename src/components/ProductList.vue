<template>
  <h1>ProductList</h1>

  <ul v-for="product in products" :key="product.id">
    <li>
      {{ product.title }} - {{ product.price }}$ - {{ product.inventory }}
    </li>
    <button
      :disabled="!productIsInstock(product)"
      @click="addProductToCart(product)"
    >
      add To Cart
    </button>
  </ul>
</template>

<script>
// import shop from "@/api/shop";
// import { mapState, mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  // computed: {
  //   ...mapState({
  //     products: (state) => state.products,
  //   }),
  //   ...mapGetters({
  //     productIsInStock: "productIsInStock",
  //   }),
  // },

  computed: {
    products() {
      return this.$store.state.products;
    },
    productIsInstock() {
      return this.$store.getters.productIsInstock;
    },
  },

  methods: {
    // ...mapActions({
    //   fetchProducts: "fetchProducts",
    //   addProductToCart: "addProductToCart",
    // }),
    addProductToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
  },
  created() {
    this.loading = true;
    this.$store.dispatch("fetchProducts").then(() => (this.loading = false));
  },
};
</script>

<style scoped></style>
