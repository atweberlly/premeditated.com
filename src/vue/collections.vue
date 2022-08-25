<template>
  <div>
    <main>
      <section class="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
        <img class="hidden select-none opacity-90 md:absolute md:bottom-1/2 md:block md:translate-y-1/2 xl:right-0 xl:bottom-8 xl:max-w-4xl xl:translate-y-0 2xl:right-32" src="/img/bg/starfield-06.png" alt="" />
        <div class="px-8 xl:mx-auto xl:max-w-6xl xl:px-0">
          <div class="grid grid-cols-1 gap-4 rounded-2xl border border-white/25 supports-backdrop-blur:backdrop-blur-lg md:grid-cols-2 md:items-center md:justify-between md:gap-0">
            <h1 class="px-8 pt-8 text-center md:pt-0 md:text-left xl:pl-16 xl:pr-0">
              <span class="block font-display text-3xl tracking-widest lg:text-5xl xl:text-6xl"> Straight </span>
              <span class="mt-2 block text-2xl lg:text-4xl">Space Babe</span>
              <span class="mt-2 block font-display text-2xl tracking-widest text-spring lg:text-3xl"> Collection </span>
            </h1>

            <div class="relative">
              <div class="absolute top-0 left-8 md:top-8 md:left-0 xl:left-16">
                <svg class="h-16 w-16 text-purple lg:h-24 lg:w-24" fill="none" viewBox="0 0 32 32">
                  <path fill="currentColor" d="M0 13.7329c3.68335-.181 6.80599-1.5968 9.36792-4.24746C11.9298 6.83477 13.2108 3.67295 13.2108 0c0 3.67295 1.2855 6.83477 3.8566 9.48544 2.571 2.65066 5.6982 4.06646 9.3816 4.24746-2.4252.1085-4.6498.7915-6.6738 2.049-2.024 1.2575-3.6241 2.9221-4.8002 4.9938-1.1761 2.0717-1.7642 4.3198-1.7642 6.7443 0-3.691-1.281-6.8664-3.84288-9.5262C6.80599 15.3341 3.68335 13.9138 0 13.7329Zm17.9591 10.907c1.9627-.0944 3.6234-.8539 4.9822-2.2788 1.3588-1.4248 2.0382-3.1185 2.0382-5.0812 0 1.9627.6794 3.6564 2.0382 5.0812 1.3588 1.4249 3.0195 2.1844 4.9822 2.2788-1.9627.0944-3.6234.854-4.9822 2.2788-1.3588 1.4248-2.0382 3.1185-2.0382 5.0812 0-1.9627-.6794-3.6564-2.0382-5.0812-1.3588-1.4248-3.0195-2.1844-4.9822-2.2788Z" />
                </svg>
              </div>
              <img class="xl:mx-auto xl:max-w-sm" src="/img/collection/wig-04-transparent.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section class="px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:relative xl:py-32">
        <div class="hidden xl:absolute xl:top-48 xl:left-0 xl:inline-block xl:rotate-180">
          <a class="inline-block bg-purple px-2 py-4 text-2xl font-bold uppercase text-black writing-ltr" href="#"> Get 10% Off </a>
        </div>

        <h2 class="text-center text-xl uppercase md:text-2xl">
          <span class="inline-block sm:block">Straight Wigs</span>
          <span class="text-purple">Synthetic Lace Front Wigs, Heat Friendly</span>
        </h2>
        <p class="mt-2 text-center text-gray-300">Countless textures, lengths, and colors of synthetic lace front wigs.</p>

        <div class="mt-8 xl:mx-auto xl:max-w-5xl" role="grid">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12" role="row">
            <div role="gridcell" v-for="(collection, index) in collections" :key="index">
              <div>
                <img :src="collection.image" :alt="collection.alt" />
                <div class="mt-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-x-1.5">
                      <svg class="h-5 w-5 text-grandis" fill="currentColor" viewBox="0 0 24 24" v-for="i in 5" :key="i">
                        <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                      </svg>
                    </div>
                    <div class="text-sm uppercase tracking-wider">{{ collection.type }}</div>
                  </div>

                  <h3 class="mt-2 text-xl tracking-wide">{{ collection.title }}</h3>
                  <div class="text-sm">{{ collection.subtitle }} | {{ collection.color }} Wig</div>

                  <div class="mt-4 flex items-center gap-x-3">
                    <div class="flex items-center justify-center rounded-full bg-spring p-2">
                      <svg class="h-6 w-6 text-black" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.4088 23.2111 20.5847 5.8405c-.0382-.36364-.3448-.63977-.7104-.63977h-3.4285v-.78167C16.4458 1.98248 14.4633 0 12.0268 0 9.58999 0 7.60751 1.98248 7.60751 4.41906v.78167H4.17905c-.36567 0-.67218.27613-.71045.63977L1.6445 23.2111c-.02105.2013.04431.4021.17963.5526.1355.1504.32849.2363.53082.2363H21.6982c.2025 0 .3955-.0859.5308-.2363.1357-.1505.2009-.3513.1798-.5526ZM9.03609 4.41906c0-1.64886 1.34161-2.99047 2.99071-2.99047 1.6488 0 2.9904 1.34161 2.9904 2.99047v.78167H9.03609v-.78167ZM3.14816 22.5714 4.82229 6.62932h2.78522v1.57415c0 .39441.31988.7143.71429.7143s.71429-.31989.71429-.7143V6.62932h5.98111v1.57415c0 .39441.3199.7143.7143.7143.3944 0 .7143-.31989.7143-.7143V6.62932h2.7852l1.6742 15.94208H3.14816Z" />
                      </svg>
                    </div>
                    <div class="text-2xl">${{ collection.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8">
          <button class="mx-auto block border-2 border-spring px-4 py-2" type="button">View more</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
const collections = [
  {
    no: 1,
    image: '/img/collection/wig-05.jpg',
    alt: 'Grand Sunshine',
    type: 'Straight',
    title: 'Grand Sunshine',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Pastel Pink',
    price: 145,
  },
  {
    no: 2,
    image: '/img/collection/wig-06.jpg',
    alt: 'Majestic Starburst',
    type: 'Straight',
    title: 'Majestic Starburst',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Purple',
    price: 145,
  },
  {
    no: 3,
    image: '/img/collection/wig-07.jpg',
    alt: 'Queen of the Martians',
    type: 'Straight',
    title: 'Queen of the Martians',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Neon Green',
    price: 145,
  },
  {
    no: 4,
    image: '/img/collection/wig-12.jpg',
    alt: 'Asteroid Maiden',
    type: 'Straight',
    title: 'Asteroid Maiden',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Silver',
    price: 145,
  },
  {
    no: 5,
    image: '/img/collection/wig-11.jpg',
    alt: 'Queen Neptune',
    type: 'Straight',
    title: 'Queen Neptune',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Black to Blue',
    price: 145,
  },
  {
    no: 7,
    image: '/img/collection/wig-10.jpg',
    alt: 'Cosmic Genie',
    type: 'Straight',
    title: 'Cosmic Genie',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Light Purple',
    price: 145,
  },
  {
    no: 8,
    image: '/img/collection/wig-08.jpg',
    alt: 'Grand Sunshine',
    type: 'Straight',
    title: 'Grand Sunshine',
    subtitle: 'Synthetic Lace Front Wigs',
    color: 'Yellow',
    price: 145,
  },
]

export default {
  name: 'CollectionsPage',
  data() {
    return {
      collections,
    }
  },
}
</script>
