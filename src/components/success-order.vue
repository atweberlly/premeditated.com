<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
    <div class="container">
      <svg
        class="mx-auto h-8 w-8 text-spring lg:h-12 lg:w-12 2xl:h-16 2xl:w-16"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M21.2939 8.66673c-.5845.1451-.9399.73324-.7938 1.31365.1826.72532.2791 1.56382.2791 2.41962 0 5.0759-4.1869 9.2335-9.2987 9.2335-5.11177 0-9.29868-4.1576-9.29868-9.2335 0-5.07594 4.18691-9.23348 9.29868-9.23348 1.7843 0 3.4516.46635 4.9283 1.38285.5109.31708 1.184.16285 1.5033-.34448.3193-.50732.164-1.17564-.3469-1.49272C15.7386 1.57855 13.6702 1 11.4805 1 5.16374 1 0 6.12752 0 12.4c0 6.2725 5.16374 11.4 11.4805 11.4 6.3168 0 11.4805-5.1275 11.4805-11.4 0-1.027-.1167-2.0414-.3442-2.94508-.1462-.58041-.7384-.93329-1.3229-.78819Zm.8438-6.31778L11.4805 12.9314 8.09606 9.57067c-.42602-.42304-1.11675-.42304-1.54277 0-.42603.42304-.42603 1.10893 0 1.53193l4.15581 4.1267c.4261.4231 1.1168.4231 1.5428 0L23.6805 3.88091c.426-.42304.426-1.10892 0-1.53196-.426-.42304-1.1168-.42304-1.5428 0Z"
          clip-rule="evenodd"
        />
      </svg>
      <h1
        class="mt-4 text-center text-3xl font-bold tracking-tight md:mt-6 md:text-4xl xl:text-5xl 2xl:mt-8 2xl:text-6xl"
      >
        Thank you for your order!
      </h1>
      <p class="mt-2 text-center text-gray-400 md:mt-4 xl:text-lg 2xl:mt-6">
        Your order is complete. Please check your email for details.
      </p>
      <div class="mt-6 flex justify-center 2xl:mt-8">
        <a class="rounded bg-spring px-4 py-3 text-sm font-medium text-black" href="#">
          Continue Shopping
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
document.title = 'Success Order'
</script>
