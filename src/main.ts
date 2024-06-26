import VueCompositionApi from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.use(VueCompositionApi); // 追加
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
