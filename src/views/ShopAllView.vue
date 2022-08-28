<template>
  <section
    class="relative border-y border-white/25 bg-shop-all bg-cover bg-center bg-no-repeat py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32"
  >
    <div class="absolute inset-0 h-full w-full bg-black/25" aria-label="Background overlay"></div>
    <div class="container relative">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h1
            class="text-center text-4xl uppercase text-shadow lg:text-left lg:text-5xl xl:text-6xl xl:leading-tight"
          >
            Get inspired<br />
            by our wigs
          </h1>
          <div class="mt-4 flex justify-center sm:mt-6 md:mt-8 lg:justify-start">
            <a
              class="block rounded bg-spring px-4 py-3 text-center font-medium uppercase tracking-wide text-black md:inline-block md:px-8"
              href="#"
            >
              Shop now
            </a>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center -space-x-8 lg:-space-x-16">
            <img class="w-24 shrink-0 sm:w-32 xl:w-48" src="/img/shop/shop-all-03.png" alt="" />
            <img
              class="w-32 shrink-0 sm:w-44 lg:w-48 xl:w-56 2xl:w-64"
              src="/img/shop/shop-all-02.png"
              alt=""
            />
            <img
              class="w-48 shrink-0 sm:w-48 lg:w-56 xl:w-64 2xl:w-80"
              src="/img/shop/shop-all-01.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
document.title = 'Shop All'
</script>
