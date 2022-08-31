<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
    <div class="container">
      <h1
        class="text-3xl font-bold tracking-tight md:mt-6 md:text-4xl xl:text-5xl 2xl:mt-8 2xl:text-6xl"
      >
        Checkout
      </h1>

      <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 class="text-xl font-medium">Billing Details</h2>
          <form class="mt-4 grid grid-cols-1 gap-4" action="#">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label class="form-label" for="first-name">First name</label>
                <input
                  class="form-input"
                  id="first-name"
                  type="text"
                  placeholder="e.g., John Joaquin"
                />
              </div>

              <div>
                <label class="form-label" for="last-name">Last name</label>
                <input class="form-input" id="last-name" type="text" placeholder="e.g., Valdez" />
              </div>
            </div>

            <div>
              <label class="form-label" for="email-address">Email address</label>
              <input
                class="form-input"
                id="email-address"
                type="email"
                placeholder="e.g., johnjoaquinvaldez@email.com"
              />
            </div>

            <div>
              <label class="form-label" for="country">
                Country <span class="form-label-required">Required</span>
              </label>
              <input class="form-input" id="country" type="text" />
            </div>

            <div>
              <label class="form-label" for="street-address">
                Street Address <span class="form-label-required">Required</span>
              </label>
              <input class="form-input" id="street-address" type="text" />
            </div>

            <div>
              <label class="form-label" for="street-address">
                Postal Code/ZIP <span class="form-label-optional">Optional</span>
              </label>
              <input class="form-input" id="street-address" type="text" />
            </div>

            <div>
              <label class="form-label" for="town-and-city">Town &amp; City</label>
              <input class="form-input" id="town-and-city" type="text" />
            </div>

            <div>
              <label class="form-label" for="phone-number">Phone Number</label>
              <input
                class="form-input"
                id="phone-number"
                type="text"
                placeholder="e.g., +63 936 777 3049"
              />
            </div>

            <div>
              <label class="form-label" for="order-note">Order note</label>
              <textarea
                class="form-input h-32"
                id="order-note"
                type="text"
                placeholder="e.g., Extra tapioca pearls"
              ></textarea>
            </div>
          </form>
        </div>

        <div>
          <h2 class="text-xl font-medium">Promotional Code</h2>
          <div class="mt-4">
            <label class="form-label" for="coupon-code">Have a coupon?</label>
            <div class="mt-2 flex gap-4">
              <input class="form-input mt-0" id="coupon-code" type="text" />
              <button class="shrink-0 rounded-lg bg-spring px-4 py-3 text-black" type="button">
                Apply <span class="hidden sm:inline-block">Coupon</span>
              </button>
            </div>
          </div>

          <!-- <div class="mt-8 rounded-md border border-gray-700 p-4">
            <h3 class="text-lg">Your order(s)</h3>
            <div class="mt-6 space-y-4">
              <div class="flex flex-row">
                <img
                  class="w-4/12 rounded"
                  src="/img/collection/wig-12.jpg"
                  alt="Asteroid Maiden"
                />
                <div class="ml-4 w-4/12">
                  <div>
                    <h4>Asteroid Maiden</h4>
                    <p>Synthetic Lace Front Wigs &verbar; Silver Lace Curly Wig</p>
                  </div>
                  <div>$145</div>
                </div>
                <div>
                  <button type="button">
                    <span class="sr-only">Delete order</span>
                  </button>
                </div>
              </div>
            </div>
          </div> -->

          <div class="mt-8 flex items-center gap-x-2">
            <input class="h-5 w-5 rounded-none" id="direct-bank-transfer" type="checkbox" />
            <label class="text-sm font-medium" for="direct-bank-transfer">
              Direct Bank Transfer
            </label>
          </div>

          <div class="tooltip mt-4 rounded-lg bg-white p-4">
            <p class="text-sm text-black">
              Make your payment directly into our bank account. Please use your Order ID as the
              payment reference. Your order won't be shipped until the funds have cleared in our
              account.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
document.title = 'Checkout'
</script>
