import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutLanding from '../views/LayoutLanding.vue'
import BaseLanding from '../views/BaseLanding.vue'
import BaseDashboard from '../views/BaseDashboard.vue'
import BaseCatalog from '../views/BaseCatalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LayoutLanding',
    component: LayoutLanding,
    children: [
      {
        path: '',
        name: 'BaseLanding',
        component: BaseLanding,
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'LayoutDashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "dashboard" */ '../views/LayoutDashboard.vue')
    },
    children: [
      {
        path: '',
        name: 'BaseDashboard',
        component: BaseDashboard,
      }
    ]
  },
  {
    path: '/catalog',
    name: 'LayoutCatalog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "dashboard" */ '../views/LayoutCatalog.vue')
    },
    children: [
      {
        path: '',
        name: 'BaseCatalog',
        component: BaseCatalog,
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
