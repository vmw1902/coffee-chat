import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/dashboard/views/HomeView.vue'
import DashboardPage from '@/pages/dashboard/DashboardPage.vue'
import { RouteNames, RoutePaths } from './routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePaths.DASHBOARD,
      name: RouteNames.DASHBOARD,
      component: DashboardPage,
      redirect() {
        return { path: `${RoutePaths.DASHBOARD}/${RoutePaths.HOME}` }
      },
      children: [
        {
          path: RoutePaths.HOME,
          name: RouteNames.DASHBOARD_HOME,
          component: HomeView,
        },
        {
          path: RoutePaths.ABOUT,
          name: RouteNames.DASHBOARD_ABOUT,
          component: () => import('../pages/dashboard/views/AboutView.vue'),
        },
      ],
    },
  ],
})

export default router
