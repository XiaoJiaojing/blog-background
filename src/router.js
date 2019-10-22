import VueRouter from 'vue-router'

import File from './components/File.vue'
import Add from './components/Add.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/all'},
        {path:'/all',component: File},
        {path:'/upload',component: Add}
    ]
})

export default router