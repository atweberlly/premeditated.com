<template>
  <footer class="py-16 lg:py-20 xl:pt-32 xl:pb-56">
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
              <!-- {['About', 'Contact Us', 'Support'].map((item, i) => (
              <a class="text-gray-400 hover:text-gray-300" href="#" key="{i}"> {item} </a>
              ))} -->
            </nav>
          </div>

          <div role="gridcell">
            <h2 class="text-xl font-bold">Quick Links</h2>
            <nav class="mt-4 inline-flex flex-col gap-y-4">
              <!-- {['Share Location', 'Orders Tracking', 'Size Guide', 'FAQs'].map((item, i) => (
              <a class="text-gray-400 hover:text-gray-300" href="#" key="{i}"> {item} </a>
              ))} -->
            </nav>
          </div>

          <div role="gridcell">
            <h2 class="text-xl font-bold">Legal</h2>
            <nav class="mt-4 inline-flex flex-col gap-y-4">
              <!-- {['Terms and Conditions', 'Privacy Policy'].map((item, i) => (
              <a class="text-gray-400 hover:text-gray-300" href="#" key="{i}"> {item} </a>
              ))} -->
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
