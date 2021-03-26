import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('./layout/page.vue'),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('./pages/Home.vue'),
        },
        {
          path: '/wallet',
          name: 'wallet',
          component: () => import('./pages/Wallet.vue'),
        },   
        {
          path: '/faq',
          name: 'faq',
          component: () => import('./pages/Faq.vue'),
        },      
        {
          path: '/affiliate',
          name: 'affiliate',
          component: () => import('./pages/Affiliate.vue'),
        },    
      ]
    },
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

/* router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
 */
export default router
