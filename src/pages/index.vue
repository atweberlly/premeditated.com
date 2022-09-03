<template>
  <global-header />

  <main>
    <section class="mt-8 pt-8">
      <div class="container relative">
        <div class="swiper main-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="text-center xl:relative xl:pt-56 xl:pb-32">
                <div class="text-xl font-bold uppercase text-mauve">
                  Be seen from lightyears away
                </div>
                <h1
                  class="mt-4 font-display text-2xl uppercase tracking-widest text-spring md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 2xl:leading-tight"
                >
                  Colorful
                  <br />
                  Wigs
                </h1>
                <div class="mt-8 text-lg uppercase text-mauve">
                  Curly, straight, wavy synthetic lace wigs
                </div>
                <div class="mt-4 flex xl:absolute xl:inset-x-0 xl:bottom-0 xl:justify-between">
                  <img
                    class="w-full md:mx-auto md:max-w-md xl:mx-0 xl:max-w-sm 2xl:max-w-md"
                    src="/img/wig-model.png"
                    alt=""
                  />
                  <img
                    class="hidden w-full xl:block xl:max-w-sm xl:-scale-x-100 2xl:max-w-md"
                    src="/img/wig-model.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="swiper-prev-button absolute left-4 top-1/2 z-10 -translate-y-1/2"
          type="button"
        >
          <svg
            class="h-6 w-6 text-prelude"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m15 19-7-7 7-7"></path>
          </svg>
        </button>

        <button
          class="swiper-next-button absolute right-4 top-1/2 z-10 -translate-y-1/2"
          type="button"
        >
          <svg
            class="h-6 w-6 text-prelude"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </section>

    <section class="relative py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="container relative">
        <h2
          class="text-center text-2xl uppercase tracking-tight md:text-3xl xl:text-4xl xl:leading-normal"
        >
          Our synthetic lace front wigs are the
          <span class="text-purple sm:block">perfect way to express yourself!</span>
        </h2>
        <p class="mt-4 text-center text-lg text-gray-300">
          Countless textures, lengths, and colors of synthetic lace front wigs.
        </p>
      </div>

      <div class="swiper collection-swiper mt-8">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="relative overflow-hidden rounded-2xl border border-white">
              <img src="/img/collection/wig-01.jpg" alt="" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg"
              >
                <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="relative overflow-hidden rounded-2xl border border-white">
              <img src="/img/collection/wig-01.jpg" alt="" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg"
              >
                <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="relative overflow-hidden rounded-2xl border border-white">
              <img src="/img/collection/wig-01.jpg" alt="" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg"
              >
                <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
              </div>
            </div>
          </div>

          <div class="swiper-slide">
            <div class="relative overflow-hidden rounded-2xl border border-white">
              <img src="/img/collection/wig-01.jpg" alt="" />
              <div
                class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg"
              >
                <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </section>

    <section class="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <img
        class="absolute inset-x-0 top-0 w-full select-none opacity-40 lg:mx-auto lg:max-w-screen-lg"
        src="/img/bg/starfield-01.jpg"
        alt=""
      />
      <div class="container relative">
        <h2
          class="text-center text-2xl uppercase text-shadow md:text-3xl md:tracking-wide lg:text-4xl xl:text-6xl"
        >
          Show your star goddess
        </h2>
        <p class="mt-2 text-center text-lg text-gray-300 md:text-xl lg:text-2xl">
          Get inspired by our wigs
        </p>
      </div>

      <div
        class="relative -mx-8 grid grid-cols-4 items-center gap-x-4 md:grid-cols-5 lg:-mx-24 xl:mx-auto xl:max-w-screen-xl"
        role="grid"
      >
        <div class="mt-16 grid grid-cols-1 gap-y-4 sm:mt-20 md:mt-24" role="row">
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-01.png"
            alt=""
          />
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-02.png"
            alt=""
          />
        </div>

        <div class="grid grid-cols-1 gap-y-4" role="row">
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-03.png"
            alt=""
          />
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-04.png"
            alt=""
          />
        </div>

        <div class="mt-8 grid grid-cols-1 gap-y-4 sm:mt-12 md:mt-16" role="row">
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-05.png"
            alt=""
          />
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-06.png"
            alt=""
          />
        </div>

        <div class="grid grid-cols-1 gap-y-4" role="row">
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-07.png"
            alt=""
          />
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-08.png"
            alt=""
          />
        </div>

        <div class="hidden md:grid md:grid-cols-1" role="row">
          <img
            class="wig cursor-pointer rounded-lg lg:rounded-xl"
            src="/img/wigs/wig-09.png"
            alt=""
          />
        </div>
      </div>
    </section>

    <div class="img-modal" id="img-modal">
      <button class="close-button absolute top-8 right-8" type="button">
        <span class="sr-only">Close image modal</span>
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="flex-1 p-8">
        <img
          class="w-full rounded-xl md:mx-auto md:max-w-md lg:max-w-lg"
          id="modal"
          src=""
          alt=""
        />
      </div>
    </div>

    <section class="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="container relative">
        <img
          class="absolute top-0 left-0 w-full select-none opacity-50 sm:max-w-sm md:max-w-md lg:max-w-lg"
          src="/img/bg/starfield-02.jpg"
          alt=""
        />
        <img
          class="absolute right-0 bottom-0 w-full select-none opacity-60 sm:max-w-sm md:max-w-md lg:max-w-lg"
          src="/img/bg/starfield-03.jpg"
          alt=""
        />
        <div class="relative">
          <h2
            class="text-center text-2xl uppercase text-shadow md:text-3xl md:tracking-wide lg:text-4xl xl:text-6xl"
          >
            Our Collection
          </h2>
          <div class="swiper our-collection mt-16 !py-16">
            <div class="swiper-wrapper">
              <div class="swiper-slide animate-gravity">
                <div class="rounded-2xl border border-mauve p-4">
                  <div class="aspect-h-1 aspect-w-1">
                    <img
                      class="rounded-lg object-cover object-top"
                      src="/img/collection/wig-01.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div class="mt-4 hidden">
                  <h3 class="text-center font-display text-4xl tracking-widest text-shadow">
                    Curly
                  </h3>
                  <div class="mt-1 text-center text-2xl text-shadow">Space Babe</div>
                  <div class="mt-4">
                    <a
                      class="block rounded bg-spring p-5 text-center font-semibold uppercase tracking-wide text-black"
                      href="#"
                      >View Collection</a
                    >
                  </div>
                </div>
              </div>

              <div class="swiper-slide animate-gravity">
                <div class="rounded-2xl border border-mauve p-4">
                  <div class="aspect-h-1 aspect-w-1">
                    <img
                      class="rounded-lg object-cover object-top"
                      src="/img/collection/wig-01.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div class="mt-4 hidden">
                  <h3 class="text-center font-display text-4xl tracking-widest text-shadow">
                    Curly
                  </h3>
                  <div class="mt-1 text-center text-2xl text-shadow">Space Babe</div>
                  <div class="mt-4">
                    <a
                      class="block rounded bg-spring p-5 text-center font-semibold uppercase tracking-wide text-black"
                      href="#"
                      >View Collection</a
                    >
                  </div>
                </div>
              </div>

              <div class="swiper-slide animate-gravity">
                <div class="rounded-2xl border border-mauve p-4">
                  <div class="aspect-h-1 aspect-w-1">
                    <img
                      class="rounded-lg object-cover object-top"
                      src="/img/collection/wig-01.jpg"
                      alt=""
                    />
                  </div>
                </div>

                <div class="mt-4 hidden">
                  <h3 class="text-center font-display text-4xl tracking-widest text-shadow">
                    Curly
                  </h3>
                  <div class="mt-1 text-center text-2xl text-shadow">Space Babe</div>
                  <div class="mt-4">
                    <a
                      class="block rounded bg-spring p-5 text-center font-semibold uppercase tracking-wide text-black"
                      href="#"
                      >View Collection</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            class="swiper-prev-button absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/75 p-2"
            type="button"
          >
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m15 19-7-7 7-7"></path>
            </svg>
          </button>
          <button
            class="swiper-next-button absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/75 p-2"
            type="button"
          >
            <svg
              class="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m9 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section class="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div class="px-8 md:mx-auto md:max-w-xl lg:max-w-2xl">
        <h2
          class="text-center text-2xl font-bold uppercase text-shadow md:text-3xl md:tracking-tight lg:text-4xl"
        >
          Subscribe to our newsletter
        </h2>
        <p class="mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <form
          class="mt-4 flex items-center rounded-lg border border-spring p-2 md:mt-6 lg:mt-8"
          action="#"
        >
          <div class="w-full">
            <label class="sr-only" for="email">Add your email address here</label>
            <input
              class="w-full bg-transparent px-4 py-3 focus:outline-none"
              id="email"
              type="email"
              placeholder="Add your email address here"
            />
          </div>
          <button
            class="rounded-md bg-gray-700 px-4 py-3 font-medium uppercase tracking-wide text-spring"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </section>

    <section class="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <img
        class="absolute top-0 left-0 w-full select-none sm:max-w-md md:max-w-lg lg:max-w-xl"
        src="/img/bg/starfield-04.jpg"
        alt=""
      />
      <img
        class="absolute right-0 bottom-0 w-full select-none sm:max-w-md md:max-w-lg lg:max-w-xl"
        src="/img/bg/starfield-05.jpg"
        alt=""
      />
      <div class="relative px-8 sm:mx-auto sm:max-w-md md:max-w-none lg:max-w-4xl xl:max-w-6xl">
        <h2
          class="text-center text-2xl uppercase text-shadow md:text-3xl md:tracking-wide lg:text-4xl xl:text-6xl"
        >
          Our Blog
        </h2>
        <div class="mt-16" role="grid">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3" role="row">
            <div role="gridcell">
              <figure class="md:pt-4">
                <img class="w-full" src="/img/wigs/wig-04.png" alt="Sara Moni Cosplay" />
                <figcaption class="mt-4">
                  <div class="text-sm uppercase tracking-wide text-gray-400">Article</div>
                  <h3 class="text-xl">Sara Moni Cosplay</h3>
                  <div class="mt-4">
                    <a
                      class="inline-flex h-12 w-12 items-center justify-center border border-spring"
                      href="#"
                    >
                      <span class="sr-only">Visit article</span>
                      <svg class="h-5 w-5 text-spring" fill="none" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          d="m9 3-.715.6965L12.075 7.5H2v1h10.075l-3.79 3.7865L9 13l5-5-5-5Z"
                        />
                      </svg>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div role="gridcell">
              <figure class="md:pt-16">
                <img class="w-full" src="/img/wigs/wig-02.png" alt="Sara Moni Cosplay" />
                <figcaption class="mt-4">
                  <div class="text-sm uppercase tracking-wide text-gray-400">Article</div>
                  <h3 class="text-xl">Sara Moni Cosplay</h3>
                  <div class="mt-4">
                    <a
                      class="inline-flex h-12 w-12 items-center justify-center border border-spring"
                      href="#"
                    >
                      <span class="sr-only">Visit article</span>
                      <svg class="h-5 w-5 text-spring" fill="none" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          d="m9 3-.715.6965L12.075 7.5H2v1h10.075l-3.79 3.7865L9 13l5-5-5-5Z"
                        />
                      </svg>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>

            <div role="gridcell">
              <figure class="md:pt-8">
                <img class="w-full" src="/img/wigs/wig-03.png" alt="Sara Moni Cosplay" />
                <figcaption class="mt-4">
                  <div class="text-sm uppercase tracking-wide text-gray-400">Article</div>
                  <h3 class="text-xl">Sara Moni Cosplay</h3>
                  <div class="mt-4">
                    <a
                      class="inline-flex h-12 w-12 items-center justify-center border border-spring"
                      href="#"
                    >
                      <span class="sr-only">Visit article</span>
                      <svg class="h-5 w-5 text-spring" fill="none" viewBox="0 0 16 16">
                        <path
                          fill="currentColor"
                          d="m9 3-.715.6965L12.075 7.5H2v1h10.075l-3.79 3.7865L9 13l5-5-5-5Z"
                        />
                      </svg>
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <global-footer />
</template>

<script>
import GlobalHeader from '../components/GlobalHeader.vue'
import GlobalFooter from '../components/GlobalFooter.vue'
import swiper from '../scripts/swiper'
import imageModal from '../scripts/img-modal'

export default {
  name: 'IndexPage',
  components: {
    GlobalHeader,
    GlobalFooter,
  },
  mounted() {
    swiper()
    imageModal()
  },
}
</script>
