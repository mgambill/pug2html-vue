import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AppNavbar from "./components/Navbar.vue";

Vue.component("AppNavbar", AppNavbar);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
