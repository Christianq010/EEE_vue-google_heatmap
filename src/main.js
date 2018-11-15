import Vue from "vue";
import App from "./App.vue";
import VueGoogleHeatmap from "vue-google-heatmap";
import VueFire from "vuefire";

Vue.config.productionTip = false;

Vue.use(VueFire);

Vue.use(VueGoogleHeatmap, {
  apiKey: "AIzaSyD2tKBjRkdAtSJthU2Wm135MmtptdoQxm8"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
