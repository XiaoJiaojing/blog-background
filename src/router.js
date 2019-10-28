import VueRouter from 'vue-router'

import File from './components/File.vue'
import Add from './components/Add.vue'
import Edit from './components/Edit.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/all'},
        {path:'/all',component: File},
        {path:'/upload',component: Add},
        {path:'/api/article/edit/:id',component:Edit}
    ]
})

export default router