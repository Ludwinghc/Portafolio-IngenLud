import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
// import PortfolioDetailsView from '@/views/PortfolioDetailsView.vue'
// import ServiceDetailsView from '@/views/ServiceDetailsView.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    }
    // {
    //   path: '/portfolio/:slug',
    //   name: 'portfolio-details',
    //   component: PortfolioDetailsView,
    // },
    // {
    //   path: '/services/:slug',
    //   name: 'service-details',
    //   component: ServiceDetailsView,
    // },
  ],
})

export default router