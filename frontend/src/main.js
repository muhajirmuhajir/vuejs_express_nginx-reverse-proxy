import Vue from 'vue'
import App from './App.vue'

window.Axios = require("axios");

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
