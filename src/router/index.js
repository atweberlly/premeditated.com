import { createRouter, createWebHistory } from 'vue-router'

// Views
import IndexPage from '@views/IndexView.vue'
import Collections from '@views/CollectionsView.vue'
import ProductInfo from '@views/ProductInfoView.vue'
import ShopAll from '@views/ShopAllView.vue'

// Components
import RelatedProducts from '@components/RelatedProducts.vue'
import RecentlyViewed from '@components/RecentlyViewed.vue'
import SuccessOrder from '@components/SuccessOrder.vue'

const routes = [
  // Views
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
    path: '/shop-all',
    component: ShopAll,
  },

  // Components
  {
    path: '/components/related-products',
    component: RelatedProducts,
  },
  {
    path: '/components/recently-viewed',
    component: RecentlyViewed,
  },
  {
    path: '/components/success-order',
    component: SuccessOrder,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
