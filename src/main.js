import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSocialSharing from 'vue-social-sharing';

import '@/assets/scss/index.scss';
import 'vue-nav-tabs/themes/vue-tabs.css';

Vue.config.productionTip = false;
Vue.use(VueSocialSharing);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
