import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/dashboard/views/HomeView.vue'
import DashboardPage from '@/pages/dashboard/DashboardPage.vue'
import { RouteNames, RoutePaths } from './routes.ts'
import CoffeePage from '@/pages/coffee/CoffeePage.vue'
import CoffeeChatView from '@/pages/coffee/views/CoffeeChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePaths.ROOT,
      name: RouteNames.ROOT,
      redirect() {
        return { path: `${RoutePaths.DASHBOARD}` }
      },
    },
    {
      path: RoutePaths.DASHBOARD,
      name: RouteNames.DASHBOARD,
      component: DashboardPage,
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
    {
      path: RoutePaths.COFFEE,
      name: RouteNames.COFFEE,
      component: CoffeePage,
      children: [
        {
          path: RoutePaths.CHAT_VIEW,
          name: RouteNames.COFFEE_CHAT_VIEW,
          component: CoffeeChatView,
        },
      ],
    },
  ],
})

export default router
