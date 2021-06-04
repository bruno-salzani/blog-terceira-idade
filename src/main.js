import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from 'firebase';
import VueSocialSharing from 'vue-social-sharing';
import VueSmoothScroll from 'vue2-smooth-scroll';

import '@/assets/scss/index.scss';
import 'vue-nav-tabs/themes/vue-tabs.css';

Vue.config.productionTip = false;
Vue.use(VueSocialSharing);
Vue.use(VueSmoothScroll);

var firebaseConfig = {
	apiKey: 'AIzaSyCFCrC0lM2wfDhtbklwPOvShWyGlRGgIhc',
	authDomain: 'blog-terceiraidade.firebaseapp.com',
	projectId: 'blog-terceiraidade',
	storageBucket: 'blog-terceiraidade.appspot.com',
	messagingSenderId: '200472226008',
	appId: '1:200472226008:web:c7193cfc136134feb44fad',
	measurementId: 'G-WYWEVDFYGS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
