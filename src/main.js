import { createApp } from "vue";
import App from "./App.vue";
import store from "@/store/index";

export const eventBus = createApp(App);

createApp(App).use(store).mount("#app");
