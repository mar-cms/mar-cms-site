import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'legacy',
      path: '/legacy',
      component: () => import('~/pages/legacy.vue')
    }
  ],
} satisfies RouterConfig