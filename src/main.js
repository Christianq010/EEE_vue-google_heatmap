import Vue from 'vue'
import App from './App.vue'
import VueGoogleHeatmap from 'vue-google-heatmap';

Vue.config.productionTip = false


Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyD2tKBjRkdAtSJthU2Wm135MmtptdoQxm8'
});

new Vue({
  render: h => h(App),
}).$mount('#app')
