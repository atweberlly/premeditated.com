import { createRouter, createWebHistory } from 'vue-router'

// Views
import IndexPage from '@views/IndexView.vue'
import Collections from '@views/CollectionsView.vue'
import ProductInfo from '@views/ProductInfoView.vue'
import ShopAll from '@views/ShopAllView.vue'
import BlogPosts from '@views/BlogView.vue'
import _404Page from '@views/404PageView.vue'
import ContactUs from '@views/ContactUsView.vue'
import PrivacyPolicy from '@views/PrivacyPolicyView.vue'
import RefundPolicy from '@views/RefundPolicyView.vue'
import TermsOfService from '@views/TermsOfServiceView.vue'

// Components
import RelatedProducts from '@components/RelatedProducts.vue'
import RecentlyViewed from '@components/RecentlyViewed.vue'
import CheckoutFields from '@components/CheckoutFields.vue'
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
  {
    path: '/blog-posts',
    component: BlogPosts,
  },
  {
    path: '/contact-us',
    component: ContactUs,
  },
  {
    path: '/privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '/refund-policy',
    component: RefundPolicy,
  },
  {
    path: '/terms-of-service',
    component: TermsOfService,
  },
  {
    path: '/:pathMatch(.*)*',
    component: _404Page,
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
    path: '/components/checkout-fields',
    component: CheckoutFields,
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
