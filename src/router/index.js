import { createRouter, createWebHashHistory } from 'vue-router'

import home from 'views/home/home.vue'
import category from 'views/category/category.vue'
import profile from 'views/profile/profile.vue'
import shoppcartcart from 'views/shoppcartcart/shoppcartcart.vue'

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
      path:'/category',
      component:category
  },
  {
      path:'/shoppcartcart',
      component:shoppcartcart
  },
  {
      path:'/profile',
      component:profile
  }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

export default router
