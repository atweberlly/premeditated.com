<template>
  <main class="border-b border-gray-700">
    <section
      class="mx-auto min-w-xs max-w-screen-xl px-8 py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32 2xl:px-0"
    >
      <h1 class="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl">Account</h1>
      <a class="mt-4 inline-flex items-center gap-x-2" href="#">
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <span>Log out</span>
      </a>

      <div class="mt-8 flex flex-col gap-8 lg:flex-row">
        <div class="xl:w-8/12">
          <h2 class="text-xl font-bold lg:text-2xl">Order History</h2>
          <div class="overflow-x-auto">
            <table class="mt-4 w-full border border-gray-700">
              <thead class="border-b border-inherit">
                <tr class="text-xs text-gray-400 last:text-right">
                  <th class="whitespace-nowrap p-4 text-left font-normal uppercase tracking-wide">
                    Order
                  </th>
                  <th class="whitespace-nowrap p-4 text-left font-normal uppercase tracking-wide">
                    Date
                  </th>
                  <th class="whitespace-nowrap p-4 text-left font-normal uppercase tracking-wide">
                    Payment Status
                  </th>
                  <th class="whitespace-nowrap p-4 text-left font-normal uppercase tracking-wide">
                    Fulfillment Status
                  </th>
                  <th class="whitespace-nowrap p-4 font-normal uppercase tracking-wide">Total</th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-700">
                <tr>
                  <td class="whitespace-nowrap p-4">#1001</td>
                  <td class="whitespace-nowrap p-4">June 23, 2021</td>
                  <td class="whitespace-nowrap p-4">Paid</td>
                  <td class="whitespace-nowrap p-4">Unfulfilled</td>
                  <td class="whitespace-nowrap p-4 text-right">$215.00 CAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="xl:w-4/12">
          <h2 class="text-xl font-bold lg:text-2xl">Account Details</h2>
          <div class="mt-4">
            <div>John Smith</div>
            <div class="text-gray-400">151 O'Connor Street Ottawa ON K2P 2L8 Canada</div>
            <div class="mt-2">
              <a class="inline-block text-sm text-gray-400 underline" href="#">
                View addresses (1)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AccountView',
  mounted() {
    document.title = 'Account'
  },
}
</script>
