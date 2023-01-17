import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WineView from '../views/WineView.vue'
import DiningView from '../views/DiningView.vue'
import AboutView from '../views/AboutView.vue'
import LocationView from '../views/LocationView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/wine',
    name: 'Wine',
    component: WineView
    // component: () => import(/* webpackChunkName: "Wine", webpackPrefatch:true */ '../views/WineView.vue')
  },
  {
    path: '/dining',
    name: 'Dining',
    component: DiningView
    // component: () => import(/* webpackChunkName: "Dining", webpackPrefatch:true */ '../views/DiningView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
    // component: () => import(/* webpackChunkName: "about", webpackPrefatch:true */ '../views/AboutView.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: LocationView
    // component: () => import(/* webpackChunkName: "location", webpackPrefatch:true */ '../views/LocationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
