import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'; // This will include all Bootstrap JavaScript components


/* eslint-disable */

Vue.config.productionTip = false;

new Vue({
  router, // Use the router with your app
  render: (h) => h(App),
}).$mount("#app");
