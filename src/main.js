// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Vuex from "vuex"
import VeeValidate from "vee-validate"
import firebase from 'firebase'

import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'simple-line-icons/css/simple-line-icons.css'

Vue.use(BootstrapVue)
Vue.use(Vuex)

let app;

var config = {
  apiKey: "AIzaSyCmoG9bamR-2aKNGustYdMvEZ7Petnasfw",
  authDomain: "shareride-lift.firebaseapp.com",
  databaseURL: "https://shareride-lift.firebaseio.com",
  projectId: "shareride-lift",
  storageBucket: "shareride-lift.appspot.com",
  messagingSenderId: "791261292461"
};
firebase.initializeApp(config);

const dictionary = {
  en: {
    attributes: {
      emaillogin: 'email address',
      passwordlogin: 'password',
      emailregister: 'email',
      passwordconfirm: 'password',
      passwordregister: 'password'
    },
    messages: {
      email: () => 'Email adress is invalid'
    }
  }
};

VeeValidate.Validator.localize(dictionary);
Vue.use(VeeValidate)
Vue.config.productionTip = false

/* eslint-disable no-new */
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    let app = new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })
  }
})

