import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
  routes: (_routes) => [
    {
      name: 'home',
      path: '/',
      redirect: '/2024',
    },
    {
      name: "2024",
      path: '/2024',
      component: () => import('~/pages/2024/index.vue').then(r => r.default || r)
    },
    { 
      path: '/:pathMatch(.*)*', 
      name: '404', 
      redirect: '/2024' 
    },
  ],
}
