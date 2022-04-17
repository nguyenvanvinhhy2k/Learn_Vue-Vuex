<template>
  <div class="">
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>

  <hr />

  <SearchTodo />
  <hr />
  <FormSteps />
</template>

<script>
import SearchTodo from "./components/SearchTodo.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import FormSteps from "./components/FormSteps.vue";
import ProductList from "./components/ProductList.vue";

export default {
  name: "App",
  components: {
    SearchTodo,
    FormSteps,
    ProductList,
    ShoppingCart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
