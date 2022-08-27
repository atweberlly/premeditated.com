import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@views/IndexView.vue'
import Collections from '@views/CollectionsView.vue'
import ProductInfo from '@views/ProductInfoView.vue'

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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
