import Vue  from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'

import app from './App.vue'
import router from './router.js'

new Vue({
    el: '#app',
    render: (c)=> c(app),
    router

})