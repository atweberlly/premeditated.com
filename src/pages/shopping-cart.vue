<template>
  <section class="py-8 sm:py-12 md:py-16 lg:py-24 xl:mx-auto xl:py-32">
    <div class="container">
      <h1 class="text-3xl font-bold tracking-tight">Shopping Cart</h1>

      <div class="mt-8 hidden">Item</div>

      <div class="mt-8 grid grid-cols-1 gap-8" role="grid">
        <div role="row">
          <div class="grid gap-4" role="gridcell">
            <div>
              <img class="rounded" src="/img/collection/wig-12.jpg" alt="Asteroid Maiden" />
              <div>
                <div>Straight</div>
                <h2>Asteroid Maiden</h2>
                <p>Synthetic Lace Front Wigs &verbar; Silver Lace Front Wig</p>
                <div>
                  <div>Color</div>
                  <div></div>
                </div>
                <div>
                  <div>Length</div>
                  <div>L</div>
                </div>
              </div>
            </div>

            <div>
              <div>$145</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
document.title = 'Shopping Cart'

export default {
  name: 'ShoppingCartPage',
}
</script>
