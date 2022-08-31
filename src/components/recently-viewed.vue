<template>
  <section class="overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
    <div class="container">
      <h2
        class="text-center text-2xl uppercase tracking-tight md:text-4xl xl:text-5xl 2xl:text-6xl"
      >
        Recently Viewed
      </h2>
    </div>

    <div class="mt-8 md:mt-12 lg:mt-16" role="grid">
      <div
        class="flex snap-x snap-mandatory flex-nowrap space-x-8 overflow-x-scroll px-8 pb-4 xl:px-16 2xl:px-24"
        role="row"
      >
        <div
          v-for="(item, index) in recentlyView"
          :key="index"
          class="w-11/12 shrink-0 snap-center snap-always sm:w-8/12 md:w-5/12 xl:w-3/12"
          role="gridcell"
        >
          <img class="rounded" :src="item.image" :alt="item.alt" />
          <div class="mt-4">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-x-1.5">
                <svg
                  v-for="i in 5"
                  :key="i"
                  class="h-5 w-5 text-grandis"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  />
                </svg>
              </div>
              <div class="text-sm uppercase tracking-wider">{{ item.type }}</div>
            </div>

            <h3 class="mt-2 text-xl tracking-wide">{{ item.title }}</h3>
            <div class="text-sm line-clamp-1">
              {{ item.subtitle }} &verbar; {{ item.color }} Wig
            </div>

            <div class="mt-6">
              <button
                class="group flex w-full items-center justify-center gap-x-4 rounded border border-spring px-4 py-3 ring-spring/50 ring-offset-2 ring-offset-black transition-all hover:bg-spring focus:outline-0 focus:ring-2 lg:w-auto"
                type="button"
              >
                <svg class="h-5 w-5 group-hover:text-black" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.4088 23.2111 20.5847 5.8405c-.0382-.36364-.3448-.63977-.7104-.63977h-3.4285v-.78167C16.4458 1.98248 14.4633 0 12.0268 0 9.58999 0 7.60751 1.98248 7.60751 4.41906v.78167H4.17905c-.36567 0-.67218.27613-.71045.63977L1.6445 23.2111c-.02105.2013.04431.4021.17963.5526.1355.1504.32849.2363.53082.2363H21.6982c.2025 0 .3955-.0859.5308-.2363.1357-.1505.2009-.3513.1798-.5526ZM9.03609 4.41906c0-1.64886 1.34161-2.99047 2.99071-2.99047 1.6488 0 2.9904 1.34161 2.9904 2.99047v.78167H9.03609v-.78167ZM3.14816 22.5714 4.82229 6.62932h2.78522v1.57415c0 .39441.31988.7143.71429.7143s.71429-.31989.71429-.7143V6.62932h5.98111v1.57415c0 .39441.3199.7143.7143.7143.3944 0 .7143-.31989.7143-.7143V6.62932h2.7852l1.6742 15.94208H3.14816Z"
                  />
                </svg>
                <div class="select-none group-hover:text-black">&verbar;</div>
                <span class="group-hover:text-black">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
document.title = 'Recently Viewed Component'

const recentlyView = [
  {
    image: '/img/collection/wig-12.jpg',
    alt: 'Asteroid Maiden',
    type: 'Straight',
    title: 'Asteroid Maiden',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Silver',
  },
  {
    image: '/img/collection/wig-03.jpg',
    alt: 'Queen Neptune',
    type: 'Straight',
    title: 'Queen Neptune',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Black to Blue',
  },
  {
    image: '/img/collection/wig-09.jpg',
    alt: 'New Star',
    type: 'Straight',
    title: 'New Star',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Pink',
  },
  {
    image: '/img/collection/wig-10.jpg',
    alt: 'Cosmic Genie',
    type: 'Straight',
    title: 'Cosmic Genie',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Light Purple',
  },
]
</script>
