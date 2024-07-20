import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/producto',
    name: 'producto',
    component: () => import('../views/ProductoView.vue'),
    props: () => {
      return {
        nombre: "Desayunos",
        descripcion: "Contamos con desayunos nutritivos",
        precio: "2000$",
        cantidad:"Para dos personas"
      };
    },
  },

  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/ContactoView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
