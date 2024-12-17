// funciones necesarias para el enrutador de la app
// CreateRouter  es para la instancias del enrutador
// CreateWebHistory es para crear un historial que no afecta a la URL
import { createRouter, createWebHistory } from 'vue-router'

// Importacion de las vistas
import HomeView from '../views/HomeView.vue'
import app from '../App.vue'
import resumeView from '../views/resumeView.vue'
import proyectsView from '../views/proyectsView.vue'

// Instancia del createRouter
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: resumeView
    },
    {
      path: '/proyects',
      name: 'proyects',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: proyectsView
    }
  ]
})

export default router
