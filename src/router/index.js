import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/MainPage.vue'
import CompPage from '../views/CompPage.vue'
import PerfCompPage from '../views/PerfCompPage.vue'
import RecPage from '../views/RecPage.vue'

import ReactPage from '../views/ReactPage.vue'
import IonicPage from '../views/IonicPage.vue'
import NativePage from '../views/NativePage.vue'

const routes = [
  {
    path: '/',
    name: 'Главная страница',
    component: MainPage
  },
  {
    path: '/comp',
    name: 'Сравнение фреймворков',
    component: CompPage
  },
  {
    path: '/pref',
    name: 'Сравнение производительности',
    component: PerfCompPage
  },
  {
    path: '/recs',
    name: 'Рекомендации по выбору мобильного JavaScript фреймворка',
    component: RecPage
  },
  {
    path: '/ionic',
    name: 'Анализ фреймворка Ionic',
    component: IonicPage
  },
  {
    path: '/react',
    name: 'Анализ фреймворка React Native',
    component: ReactPage
  },
  {
    path: '/native',
    name: 'Анализ фреймворка NativeScript',
    component: NativePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
