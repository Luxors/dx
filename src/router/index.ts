import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: () => import('../views/ButtonsView.vue'),
    },
    {
      path: '/dropdownbox',
      name: 'DropDownBox',
      component: () => import('../views/DropDownBoxView.vue'),
    },
    {
      path: '/textbox',
      name: 'TextBoxView',
      component: () => import('../views/TextBoxView.vue'),
    },
    {
      path: '/toolbar',
      name: 'Toolbar',
      component: () => import('../views/ToolbarView.vue'),
    },
  ],
})

export default router
