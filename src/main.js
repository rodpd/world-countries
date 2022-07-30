import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import * as VueRouter from 'vue-router';

import Home from './components/Home.vue';
import CountryDetails from './components/CountryDetails.vue';


const routes = [
	{ 
		path: '/', 
		component: Home 
	},
	{
		path: '/country/:countryName',
		component: CountryDetails
	}
];


const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes
});


createApp(App)
.use(router)
.mount('#app')
