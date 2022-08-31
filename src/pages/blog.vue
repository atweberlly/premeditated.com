<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
    <div class="container">
      <h1 class="text-4xl uppercase tracking-tight text-shadow">Blog</h1>
      <div class="columns-1 gap-8 sm:columns-2">
        <article v-for="i in 4" :key="i" class="odd:mt-8 even:mt-8">
          <img class="w-full rounded-lg border border-gray-500" src="/img/wigs/wig-04.png" alt="" />
          <div class="mt-4">
            <div class="text-sm uppercase text-gray-400">Blog</div>
            <h2 class="mt-2 text-xl">Well known Cosplayer & Published model, Sara Moni</h2>
            <div class="mt-4">
              <a
                class="inline-flex h-12 w-12 items-center justify-center border border-spring"
                href="#"
              >
                <span class="sr-only">Visit blog</span>
                <svg class="h-5 w-5" fill="none" viewBox="0 0 16 16">
                  <path
                    fill="currentColor"
                    d="m9 3-.715.6965L12.075 7.5H2v1h10.075l-3.79 3.7865L9 13l5-5-5-5Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
document.title = 'Blog Posts'

export default {
  name: 'BlogPage',
}
</script>
