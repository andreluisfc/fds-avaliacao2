// Composables
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/pessoa',
    name: 'Pessoa',
    component: () => import(/* webpackChunkName: "cadastro" */ '@/views/PessoaView.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),//createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
