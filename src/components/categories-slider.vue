<template>
  <div class="flex flex-row items-center gap-x-4 overflow-x-auto px-4 py-4 lg:hidden">
    <a class="shrink-0" v-for="i in 16" :key="i" href="#">
      <!-- <img
        class="h-16 w-16 rounded-full"
        src=""
        alt="Category"
      /> -->
      <div class="h-16 w-16 rounded-full bg-gray-500"></div>
      <div class="mt-2 text-xs uppercase tracking-wide">Category</div>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'Categories Slider'
  },
}
</script>
