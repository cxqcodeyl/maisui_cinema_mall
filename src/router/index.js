import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import category from '../views/category'
import order from '../views/order'
import profile from '../views/profile'
import detail from '../components/detail.vue'
import index from '../views/index.vue'
import register from '../views/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/index/main'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children:[{
      path:'main',
      component: main
    },{
      path: 'category',
      name: 'category',
      component: category
    },{
      path: 'order',
      name: 'order',
      component: order
    },{
      path: 'profile',
      name: 'profile',
      component: profile
    }
  ]
  },{
    path: '/detail',
    name: 'detail',
    component: detail
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
   
]

const router = new VueRouter({
  routes
})

export default router
