import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Landing from '@/components/pages/Landing'
import Login from '@/components/pages/Login'
import Register from '@/components/pages/Register'
import Dashboard from '@/components/pages/Dashboard'
import Ride from '@/components/pages/Ride'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '*',
      redirect: "/"
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/ride',
      name: 'Ride',
      component: Ride,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('dashboard')
  else next()
})

export default router;