<template>
  <section class="min-w-[320px] py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
    <div class="mx-auto max-w-screen-lg px-8 xl:px-0">
      <h1 class="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">Shopping Cart</h1>

      <div class="mt-8 flex items-center justify-between">
        <div class="text-xs uppercase tracking-wide text-gray-400">Product</div>
        <div class="text-xs uppercase tracking-wide text-gray-400">Total</div>
      </div>

      <hr class="mt-2 border-gray-700" />

      <div class="mt-8 grid grid-cols-1 gap-8 xl:mt-16">
        <div v-for="a in 2" :key="a" class="flex flex-row gap-4 sm:gap-6">
          <div
            class="w-4/12 sm:aspect-h-1 sm:aspect-w-16 sm:w-6/12 lg:aspect-h-4 lg:aspect-w-16 lg:w-3/12"
          >
            <img
              class="rounded sm:object-cover sm:object-top"
              src="/img/collection/wig-12.jpg"
              alt="Asteroid Maiden"
            />
          </div>

          <div
            class="flex w-8/12 flex-col items-start sm:w-6/12 lg:w-9/12 lg:flex-row lg:justify-between"
          >
            <div class="lg:w-6/12">
              <div class="text-sm font-medium uppercase tracking-wide text-gray-400">Straight</div>
              <h2 class="mt-2 text-xl font-bold lg:text-2xl lg:tracking-tight">Asteroid Maiden</h2>
              <p class="mt-2">Synthetic Lace Front Wigs</p>
              <p>Silver Lace Front Wig</p>
              <div class="mt-4 space-y-2">
                <div class="flex items-center gap-x-4">
                  <label class="text-sm font-medium text-gray-400" for="color"> Color </label>
                  <div class="h-4 w-4 rounded-full bg-white" id="color"></div>
                </div>
                <div class="flex items-center gap-x-4">
                  <label class="text-sm font-medium text-gray-400" for="length">Length</label>
                  <div class="text-sm uppercase tracking-wide" id="length">Large</div>
                </div>
              </div>
            </div>

            <div
              class="mt-4 flex w-full items-end justify-between lg:mt-0 lg:w-6/12 lg:items-start"
            >
              <div>
                <label class="block text-sm font-medium text-gray-400" for="quantity">
                  Quantity
                </label>
                <div class="relative mt-2 flex w-16">
                  <select
                    class="relative z-10 block w-full cursor-pointer appearance-none rounded border border-gray-500 bg-transparent py-2 pl-4 pr-6 outline-0"
                    name="quantity"
                    id="quantity"
                  >
                    <option v-for="i in 5" :key="i" :value="i">{{ i }}</option>
                  </select>
                  <svg
                    class="absolute top-1/2 right-2 h-4 w-4 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>

              <div class="text-2xl font-bold tracking-tight">$145</div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="mt-8 lg:flex lg:flex-col lg:items-end">
        <div class="sm:w-4/12">
          <div class="flex items-center gap-x-4">
            <input class="form-input" type="text" placeholder="Enter your coupon code" />
            <button class="rounded-lg bg-spring px-4 py-3 text-black" type="submit">Apply</button>
          </div>
          <div class="mt-4">
            <a
              class="block rounded-lg bg-spring px-4 py-3 text-center text-sm uppercase tracking-wide text-black"
              href="#"
            >
              Proceed to Check out
            </a>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script setup>
document.title = 'Shopping Cart'
</script>
