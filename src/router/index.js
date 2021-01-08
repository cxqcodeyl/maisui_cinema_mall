import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import category from '../views/category'
import order from '../views/order'
import profile from '../views/profile'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'main',
    component: main
  },{
    path: '/category',
    name: 'category',
    component: category
  },{
    path: '/order',
    name: 'order',
    component: order
  },{
    path: '/profile',
    name: 'profile',
    component: profile
  },
   
]

const router = new VueRouter({
  routes
})

export default router
