import Vue from 'vue'
import App from './App.vue'

/* importovanie carbonu z ibm */
import 'carbon-components/css/carbon-components.css';
import CarbonComponentsVue from '@carbon/vue';
Vue.use(CarbonComponentsVue);

/* importovanie bootstrapu */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap-icons/font/bootstrap-icons'




/* importovanie font awesome icony */
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, fab);
Vue.component('font-awesome-icon', FontAwesomeIcon);






Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

