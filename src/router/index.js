import { createRouter, createWebHashHistory } from 'vue-router'
import Option from '../views/Option.vue'
import PassData from '@/views/PassData.vue'

const routes = [
  {
    path: '/',
    name: 'option',
    component: Option
  },
  {
    path: '/composition',
    name: 'composition',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Composition.vue')
  },
  {
    path: '/passdata/:productName',
    name: 'passdata' ,
    component: PassData,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
