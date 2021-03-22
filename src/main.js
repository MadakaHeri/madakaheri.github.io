import axios from 'axios'
import lodash from 'lodash'
window.axios = axios
window._ = lodash

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import RootMixin from './mixins/RootMixin';
import frame from './plugins/frame';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(frame)

new Vue({
  mixins: [
    RootMixin,
  ],
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
