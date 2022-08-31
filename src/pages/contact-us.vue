<template>
  <main class="mx-auto max-w-6xl px-8 xl:px-0">
    <section class="py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
      <h1 class="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">Contact Us</h1>
      <div class="mt-8 flex flex-col gap-8 lg:mt-12 lg:flex-row xl:gap-16">
        <form class="grid grid-cols-1 gap-4 lg:w-6/12">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label class="form-label" for="name">Your name</label>
              <input class="form-input" id="name" type="text" placeholder="" />
            </div>

            <div>
              <label class="form-label" for="email">Your email</label>
              <input class="form-input" id="email" type="email" placeholder="" />
            </div>
          </div>

          <div>
            <label class="form-label" for="subject">Subject</label>
            <input class="form-input" id="subject" type="text" placeholder="" />
          </div>

          <div>
            <label class="form-label" for="message">Message</label>
            <textarea
              class="form-input h-32"
              id="message"
              type="text"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <div class="flex lg:justify-end">
            <button
              class="w-full rounded-lg bg-spring px-4 py-3 text-sm uppercase tracking-wide text-black lg:w-auto"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>

        <div class="space-y-6 lg:w-6/12">
          <div>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"
              />
            </svg>
            <div class="mt-2 text-xl font-bold">Address</div>
            <p class="mt-2">PO Box 16122 Collins Street West United States - Map</p>
          </div>

          <div>
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25z"
              />
            </svg>
            <div class="mt-2 text-xl font-bold">Contact Info</div>
            <p class="mt-2">Email: hello@premeditatedbeauty.com</p>
            <p>Phone : +60 000000</p>
          </div>
        </div>
      </div>

      <div class="aspect-h-9 aspect-w-16 mt-8 lg:mt-12 xl:mt-16">
        <!-- Placeholder only -->
        <div class="rounded-md bg-gray-700"></div>
      </div>
    </section>
  </main>
</template>

<script>
document.title = 'Contact Us'

export default {
  name: 'ContactUsPage',
}
</script>
