import Vue from 'vue'
import Init from './components/Init.vue'
import VueRouter from 'vue-router'
import VueAcl from '../../src/Acl'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: require('./components/Public.vue'),
  },
  {
    path: '/manager',
    component: require('./components/Manager.vue'),
    meta: {permission: 'admin', fail: '/error'}
  },
  {
    path: '/client',
    component: require('./components/Client.vue'),
    meta: {permission: 'any', fail: '/error'}
  },
  {
    path: '/error',
    component: require('./components/Error.vue')
  },
]

const router = new VueRouter({
  routes
})

Vue.use(VueAcl, {router: router, init: ['any','admin']})

new Vue({
  el: '#app',
  router,
  render: h => h(Init)
})
