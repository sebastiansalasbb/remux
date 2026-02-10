import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/empresas',
      name: 'empresas',
      component: () => import('@/views/EmpresasView.vue'),
    },
    {
      path: '/empresas/:id',
      name: 'empresasEdit',
      component: () => import('@/views/EmpresasViewEdit.vue'),
      props: true,
    },
  ],
})

export default router
