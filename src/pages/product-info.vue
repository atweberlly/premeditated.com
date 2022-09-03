<template>
  <GlobalHeader />

  <main>
    <section class="max-w-screen-lg px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div class="relative">
            <div
              class="absolute top-4 right-4 inline-block rounded-full bg-spring px-3 py-1 text-sm font-medium text-black"
            >
              Only 5 left
            </div>
            <img src="/img/collection/wig-06.jpg" alt="Queen of the Martians" />
          </div>
          <img
            class="hidden md:mt-8 md:block"
            src="/img/collection/wig-06.jpg"
            alt="Queen of the Martians"
          />
        </div>

        <div>
          <h1 class="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
            Queen of the Martians
          </h1>
          <div class="mt-2 flex items-center justify-between md:mt-4 lg:mt-6">
            <div class="flex items-center gap-x-2">
              <div class="text-2xl font-bold">$145</div>
              <div class="text-sm text-gray-400 line-through">$249</div>
            </div>
            <div class="flex items-center gap-x-2">
              <div class="h-3 w-3 rounded-full bg-green-500">
                <span class="sr-only">In strock</span>
              </div>
              <div class="text-sm">In stock</div>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between">
            <div class="flex items-center gap-x-1">
              <svg
                v-for="i in 5"
                :key="i"
                class="h-5 w-5 text-grandis"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.788 3.21c.448-1.077 1.97-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                />
              </svg>
            </div>
            <div class="flex items-center gap-x-2">
              <div class="text-sm">6 Reviews</div>
              <div class="select-none">&VerticalBar;</div>
              <button class="text-sm" type="button">Add review</button>
            </div>
          </div>

          <div class="mt-8">
            <label class="block text-sm text-gray-400" for="quantity">Quantity:</label>
            <input
              class="mt-2 block w-full rounded px-4 py-3 text-center text-black transition-all focus:outline-0 focus:ring-2 focus:ring-spring/50 focus:ring-offset-2 focus:ring-offset-black sm:w-32"
              id="quantity"
              type="number"
              value="1"
            />
          </div>

          <p class="mt-8 text-sm">
            Pay in 4 interest-free installments of $24.75 with shop pay.
            <a class="text-spring underline" href="#">Learn more</a>
          </p>

          <div class="mt-8 flex flex-col gap-y-3">
            <button
              class="flex items-center justify-center gap-x-4 rounded border border-spring px-4 py-3"
              type="button"
            >
              <svg class="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.4088 23.2111 20.5847 5.8405c-.0382-.36364-.3448-.63977-.7104-.63977h-3.4285v-.78167C16.4458 1.98248 14.4633 0 12.0268 0 9.58999 0 7.60751 1.98248 7.60751 4.41906v.78167H4.17905c-.36567 0-.67218.27613-.71045.63977L1.6445 23.2111c-.02105.2013.04431.4021.17963.5526.1355.1504.32849.2363.53082.2363H21.6982c.2025 0 .3955-.0859.5308-.2363.1357-.1505.2009-.3513.1798-.5526ZM9.03609 4.41906c0-1.64886 1.34161-2.99047 2.99071-2.99047 1.6488 0 2.9904 1.34161 2.9904 2.99047v.78167H9.03609v-.78167ZM3.14816 22.5714 4.82229 6.62932h2.78522v1.57415c0 .39441.31988.7143.71429.7143s.71429-.31989.71429-.7143V6.62932h5.98111v1.57415c0 .39441.3199.7143.7143.7143.3944 0 .7143-.31989.7143-.7143V6.62932h2.7852l1.6742 15.94208H3.14816Z"
                />
              </svg>
              <div class="select-none">&verbar;</div>
              <span>Add to cart</span>
            </button>
            <button
              class="flex items-center justify-center gap-x-4 rounded bg-spring px-4 py-3 text-black"
              type="button"
            >
              Buy with Amazon Pay
            </button>
            <button class="underline" type="button">More payment options</button>
          </div>

          <div class="mt-8 space-y-4">
            <p>
              Channel your inner Billie Eilish with our neon green Queen of the Martians' synthetic
              lace front wig. It's the perfect way to experiment with your hair colour without
              pulling the trigger on an at-home box dye. You can wear it as part of your latest
              cosplay or get dressed up at home for a TikTok or Instagram video. Jump on the classic
              'little green men' space trend with this lace-front synthetic wig.
            </p>
            <p>
              The 'Queen of the Martians' wig will help you create a realistic cosplay look of Tao
              Jun from Shaman King or Eureka from Eureka Seven. As our wig is made using synthetic
              hair, you can ever wear it as your new look.
            </p>
            <p>
              Our 'Queen of the Martians' wig comes pre-styled with a classic straight blow-dry
              look, with extra volume at the roots, meaning you can wear it right out of the box.
              Synthetic lace front wigs are heat resistant, allowing you to treat them like your
              natural hair by washing and styling.
            </p>
            <p>
              A synthetic lace front wig gives the illusion that you're wearing your natural hair.
              With a little TLC, you can get up to a year of wear out of your 'Queen of the
              Martians' wig.
            </p>
          </div>

          <ul class="mt-8 list-inside list-disc space-y-2">
            <li class="text-sm">Lace-front neon green synthetic wig</li>
            <li class="text-sm">Arrives pre-styled with straight hair</li>
            <li class="text-sm">Easy to maintain + perfect for cosplays</li>
          </ul>
        </div>
      </div>
    </section>
  </main>
  <GlobalFooter />
</template>

<script>
import GlobalHeader from '../components/GlobalHeader.vue'
import GlobalFooter from '../components/GlobalFooter.vue'

export default {
  name: 'ProductInfoPage',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
}
</script>
