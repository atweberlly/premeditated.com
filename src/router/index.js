import { createRouter, createWebHistory } from 'vue-router'

// Pages
import IndexPage from '@views/IndexView.vue'
import Collections from '@views/CollectionsView.vue'
import ProductInfo from '@views/ProductInfoView.vue'

// Components
import RecentlyViewed from '@components/RecentlyViewed.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/collections',
    component: Collections,
  },
  {
    path: '/product-info',
    component: ProductInfo,
  },
  {
    path: '/components/recently-viewed',
    component: RecentlyViewed,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router