import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => [
    {
      name: 'blog',
      path: '/blog',
      component: () => import('~/pages/index.vue')
    }
  ],
} satisfies RouterConfig