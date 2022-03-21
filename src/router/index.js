import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pedido from '../views/Pedido.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pedido',
    name: 'pedido',
    component: Pedido
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
