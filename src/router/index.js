import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FavorisView from '@/views/FavorisView.vue'
import NewView from '@/views/NewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favoris',
      name: 'favoris',
      component: FavorisView,
    },
    {
      path: '/new',
      name: 'new',
      component: NewView,
    }
  ],
})

export default router
