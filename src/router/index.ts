import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/earth',
    name: 'Earth',
    component: () => import('../views/EarthView.vue'),
  },
  {
    path: '/iss',
    name: 'ISS',
    component: () => import('../views/ISSView.vue'),
  },
  {
    path: '/mars',
    name: 'Mars',
    component: () => import('../views/MarsView.vue'),
  },
  {
    path: '/nasa-library',
    name: 'NasaLibrary',
    component: () => import('../views/NasaLibraryView.vue'),
  },
  {
    path: '/solar-system',
    name: 'SolarSystemData',
    component: () => import('../views/SolarSystemDataView.vue'),
  },
  {
    path: '/space-weather',
    name: 'SpaceWeather',
    component: () => import('../views/SpaceWeatherView.vue'),
  },
  {
    path: '/picture-of-the-day',
    name: 'PictureOfTheDay',
    component: () => import('../views/APODView.vue'),
  },
  {
    path: '/space-weather',
    name: 'SpaceWeather',
    component: () => import('../views/SpaceWeatherView.vue'),
  },
  {
    path: '/all-news',
    name: 'AllNews',
    component: () => import('../views/AllNewsView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
