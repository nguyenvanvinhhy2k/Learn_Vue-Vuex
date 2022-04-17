// import Vue from "vue";
import { createStore } from "vuex";
import shop from "@/api/shop";

// Vue.use(Vuex);

export default createStore({
  state: {
    products: [],
    cart: [],
    checkOutStatus: null,
  },
  getters: {
    availableProducts(state) {
      return state.products.filter((product) => product.inventory > 0);
    },
    cartProducts(state) {
      return state.cart.map((cartItem) => {
        const product = state.products.find(
          (product) => product.id === cartItem.id
        );
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity,
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
    productIsInstock() {
      return (product) => {
        return product.inventory > 0;
      };
    },
  },
  actions: {
    fetchProducts({ commit }) {
      return new Promise((resolve) => {
        shop.getProducts((products) => {
          commit("setProducts", products);
          resolve();
        });
      });
    },
    addProductToCart({ state, getters, commit }, product) {
      if (getters.productIsInstock(product)) {
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (!cartItem) {
          commit("pushProductToCart", product.id);
        } else {
          commit("incrementItemQuantity", cartItem);
        }
        commit("decrementProductInventory", product);
      }
    },
    checkOut({ state, commit }) {
      shop.buyProducts(
        state.cart,
        () => {
          commit("emptyCart");
          commit("setCheckoutStatus", "success");
          alert("Thanh cong");
        },
        () => {
          commit("setCheckoutStatus", "fail");
        }
      );
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    pushProductToCart(state, productId) {
      state.cart.push({
        id: productId,
        quantity: 1,
      });
    },
    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++;
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
    setCheckoutStatus(state, status) {
      state.checkOutStatus = status;
    },
    emptyCart(state) {
      state.cart = [];
    },
  },
});
