// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/style.css'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQcetjhHI6Az_8YYl8Lr2uWfWLb-HEDJQ",
  authDomain: "weather-forcast-vue.firebaseapp.com",
  projectId: "weather-forcast-vue",
  storageBucket: "weather-forcast-vue.appspot.com",
  messagingSenderId: "1062306257079",
  appId: "1:1062306257079:web:0eec971115de9c03fa5532",
  measurementId: "G-R2ZH0QS1KX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
