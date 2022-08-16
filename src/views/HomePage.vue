<template>
  <div class="min-h-screen min-w-xs bg-black text-white antialiased">
    <header>
      <div class="container">
        <div class="bg-black py-2">
          <p class="text-center text-sm font-medium uppercase tracking-wide">Free expedited shipping on all U.S. orders!</p>
        </div>

        <a class="" href="#">
          <img class="mx-auto h-24 w-auto" src="/img/premeditated-logotype.png" alt="Premeditated" />
        </a>

        <nav class="mt-2 flex items-center justify-center gap-x-4">
          <a class="text-sm uppercase tracking-wide" href="#">Home</a>
          <a class="text-sm uppercase tracking-wide" href="#">Wigs</a>
          <a class="text-sm uppercase tracking-wide" href="#">Shop now</a>
          <a class="text-sm uppercase tracking-wide" href="#">About Us</a>
          <a class="text-sm uppercase tracking-wide" href="#">Blog</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="py-8">
        <div class="container relative pb-8">
          <h2 class="text-center text-2xl uppercase tracking-tight">Our synthetic lace front wigs are the <span class="text-purple">perfect way to express yourself!</span></h2>
          <p class="mt-4 text-center text-lg text-gray-300">Countless textures, lengths, and colors of synthetic lace front wigs.</p>

          <div class="swiper mt-8">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="relative overflow-hidden rounded-2xl border border-white">
                  <img src="/img/collection/wig-01.jpg" alt="" />
                  <div class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg">
                    <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                    <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                    <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="relative overflow-hidden rounded-2xl border border-white">
                  <img src="/img/collection/wig-01.jpg" alt="" />
                  <div class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg">
                    <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                    <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                    <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="relative overflow-hidden rounded-2xl border border-white">
                  <img src="/img/collection/wig-01.jpg" alt="" />
                  <div class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg">
                    <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                    <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                    <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
                  </div>
                </div>
              </div>

              <div class="swiper-slide">
                <div class="relative overflow-hidden rounded-2xl border border-white">
                  <img src="/img/collection/wig-01.jpg" alt="" />
                  <div class="absolute inset-x-0 bottom-0 bg-black/50 p-6 supports-backdrop-blur:backdrop-blur-lg">
                    <h3 class="text-xl font-bold uppercase tracking-wider">Galactic Unicorn</h3>
                    <div class="text-sm uppercase tracking-wide">Synthetic Lace Front</div>
                    <div class="text-sm uppercase tracking-wide">Wigs &verbar; Pink Curly Wig</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </div>

          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="overflow-hidden py-8">
        <div class="container">
          <h2 class="text-center text-2xl font-bold uppercase text-shadow md:text-3xl md:tracking-tight lg:text-4xl">Show your star goddess</h2>
          <p class="mt-2 text-center text-lg text-gray-400">Get inspired by our wigs</p>
        </div>

        <div class="-mx-8 grid grid-cols-4 items-center gap-x-4 md:grid-cols-5 lg:-mx-24 xl:mx-auto xl:max-w-screen-xl" role="grid">
          <div class="mt-16 grid grid-cols-1 gap-y-4 sm:mt-20 md:mt-24" role="row">
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-01.png" alt="" />
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-02.png" alt="" />
          </div>

          <div class="grid grid-cols-1 gap-y-4" role="row">
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-03.png" alt="" />
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-04.png" alt="" />
          </div>

          <div class="mt-8 grid grid-cols-1 gap-y-4 sm:mt-12 md:mt-16" role="row">
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-05.png" alt="" />
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-06.png" alt="" />
          </div>

          <div class="grid grid-cols-1 gap-y-4" role="row">
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-07.png" alt="" />
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-08.png" alt="" />
          </div>

          <div class="hidden md:grid md:grid-cols-1" role="row">
            <img class="rounded-lg lg:rounded-xl" src="/img/wigs/wig-09.png" alt="" />
          </div>
        </div>
      </section>

      <section class="py-8">
        <div class="px-8 md:mx-auto md:max-w-xl lg:max-w-2xl">
          <h2 class="text-center text-2xl font-bold uppercase text-shadow md:text-3xl md:tracking-tight lg:text-4xl">Subscribe to our newsletter</h2>
          <p class="mt-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form class="mt-4 flex items-center rounded-lg border border-spring p-2 md:mt-6 lg:mt-8" action="#">
            <div class="w-full">
              <label class="sr-only" for="email">Add your email address here</label>
              <input class="w-full bg-transparent px-4 py-3 focus:outline-none" id="email" type="email" placeholder="Add your email address here" />
            </div>
            <button class="rounded-md bg-gray-700 px-4 py-3 font-medium uppercase tracking-wide text-spring" type="submit">Send</button>
          </form>
        </div>
      </section>

      <!-- <section class="mt-8">
        <div class="container">
          <div role="grid">
            <div class="-mx-8 grid grid-cols-3 xl:mx-0" role="row">
              <div role="gridcell">
                <img class="w-full" src="/img/wigs/wig-04.png" alt="" />
              </div>

              <div role="gridcell">
                <img class="w-full" src="/img/wigs/wig-07.png" alt="" />
              </div>

              <div role="gridcell">
                <img class="w-full" src="/img/wigs/wig-08.png" alt="" />
              </div>
            </div>
          </div>

          <div class="-mx-8 bg-experience bg-cover bg-center bg-no-repeat xl:mx-0">
            <div class="px-8 py-16 md:py-24 lg:py-32 xl:py-56">
              <h2 class="text-2xl uppercase tracking-widest text-shadow md:text-3xl lg:text-4xl xl:text-5xl">
                Join the
                <br />
                experience
              </h2>
              <div class="mt-4">
                <a class="inline-block bg-spring px-3 py-2 text-sm font-medium uppercase tracking-wide text-black" href="#">Follow us on Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section> -->
    </main>

    <footer class="py-16">
      <div class="container">
        <div role="grid">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-6" role="row">
            <div class="md:col-span-3" role="gridcell">
              <img class="h-24 w-auto" src="/img/premeditated-logotype.png" alt="Premeditated" />
              <p class="text-lg text-gray-400">Complete your style with awesome Wigs from us.</p>
              <div class="mt-4 inline-flex items-center gap-x-2">
                <a class="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span class="fab fa-facebook text-lg text-black">
                    <span class="sr-only">Visit Facebook</span>
                  </span>
                </a>

                <a class="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span class="fab fa-instagram text-lg text-black">
                    <span class="sr-only">Visit Instagram</span>
                  </span>
                </a>

                <a class="flex h-8 w-8 items-center justify-center rounded-lg bg-spring" href="#" target="_blank">
                  <span class="fab fa-twitter text-lg text-black">
                    <span class="sr-only">Visit Twitter</span>
                  </span>
                </a>
              </div>
            </div>

            <div role="gridcell">
              <h2 class="text-xl font-bold">Company</h2>
              <nav class="mt-4 inline-flex flex-col gap-y-4">
                <a class="text-gray-400 hover:text-gray-300" href="#">About</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">Contact Us</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">Support</a>
              </nav>
            </div>

            <div role="gridcell">
              <h2 class="text-xl font-bold">Quick Links</h2>
              <nav class="mt-4 inline-flex flex-col gap-y-4">
                <a class="text-gray-400 hover:text-gray-300" href="#">Share Location</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">Orders Tracking</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">Size Guide</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">FAQs</a>
              </nav>
            </div>

            <div role="gridcell">
              <h2 class="text-xl font-bold">Legal</h2>
              <nav class="mt-4 inline-flex flex-col gap-y-4">
                <a class="text-gray-400 hover:text-gray-300" href="#">Terms &amp; Conditions</a>
                <a class="text-gray-400 hover:text-gray-300" href="#">Privacy Policy</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from 'swiper'

function slider() {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    },
    spaceBetween: 32,

    /* navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }, */
    pagination: {
      el: '.swiper-pagination',
    },
  })

  swiper.init()
}

export default {
  mounted() {
    slider()
  },
}
</script>
