<template>
  <main class="flex min-h-screen items-center bg-404 bg-cover bg-center">
    <div class="container">
      <h1 class="text-center text-6xl font-bold tracking-tight xl:text-8xl xl:tracking-tighter">
        404
      </h1>
      <p class="mt-2 text-center text-lg text-gray-300 xl:mt-4 xl:text-2xl">
        Ooops... There's nothing in here.
      </p>
      <p class="mt-4 text-center text-gray-300 md:mx-auto md:max-w-sm">
        Sorry, but the page you are looking for doesn't exist. You may like some inspire below.
      </p>
      <div class="mt-8 flex justify-center">
        <a class="rounded bg-spring px-4 py-2 text-sm uppercase tracking-wide text-black" href="#">
          Back to Shop
        </a>
      </div>
    </div>
  </main>
</template>

<script>
document.title = '404 Error'
export default {
  name: '404Page',
}
</script>
