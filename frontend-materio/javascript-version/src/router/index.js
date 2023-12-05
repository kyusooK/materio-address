import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '~pages'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Index.vue'),
    },
    {
        path: '/companies',
        name: 'company',
        component: () => import('../views/components/ui/CompanyGrid.vue'),
    },
    {
        path: '/managers',
        name: 'manager',
        component: () => import('../views/components/ui/ManagerGrid.vue'),
    },
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
