<template>
  <header>
    <div class="container">
      <div class="bg-black py-4">
        <p class="text-center text-xs font-medium uppercase tracking-wide">
          Free expedited shipping on all U.S. orders!
        </p>
      </div>

      <div class="hidden lg:block">
        <span class="sr-only">Home</span>
        <img class="mx-auto h-24 w-auto" src="/img/premeditated-logotype.png" alt="Premeditated" />
      </div>

      <div class="mt-2 flex items-center justify-between lg:hidden">
        <button id="menu-button" type="button">
          <span class="sr-only">Open menu</span>
          <svg class="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M11.769 18H2.76904v-2H11.769v2Zm9-5H2.76904v-2H20.769v2Zm0-5h-9V6h9v2Z"
            />
          </svg>
        </button>
        <button type="button">
          <span class="sr-only">View bag</span>
          <svg class="h-6 w-6 text-purple" fill="none" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M0 2.25c0-.19891.0790176-.38968.21967-.53033C.360322 1.57902.551088 1.5.75 1.5H3c.1673.00005.32978.05603.4616.15904.13182.10301.22541.24714.2659.40946L4.335 4.5H21.75c.1101.0001.2189.02445.3185.07133.0997.04687.1878.11511.2581.19988.0703.08476.1211.18397.1487.29057s.0315.21798.0112.32622l-2.25 12c-.0322.1719-.1234.3271-.2579.4388-.1344.1118-.3037.173-.4786.1732H6c-.17485-.0002-.34415-.0614-.47863-.1732-.13449-.1117-.2257-.2669-.25787-.4388L3.015 5.4105 2.415 3H.75c-.198912 0-.389678-.07902-.53033-.21967C.0790176 2.63968 0 2.44891 0 2.25ZM7.5 18c-.79565 0-1.55871.3161-2.12132.8787C4.81607 19.4413 4.5 20.2044 4.5 21c0 .7956.31607 1.5587.87868 2.1213C5.94129 23.6839 6.70435 24 7.5 24s1.55871-.3161 2.12132-.8787C10.1839 22.5587 10.5 21.7956 10.5 21c0-.7956-.3161-1.5587-.87868-2.1213C9.05871 18.3161 8.29565 18 7.5 18ZM18 18c-.7956 0-1.5587.3161-2.1213.8787C15.3161 19.4413 15 20.2044 15 21c0 .7956.3161 1.5587.8787 2.1213C16.4413 23.6839 17.2044 24 18 24c.7957 0 1.5587-.3161 2.1213-.8787C20.6839 22.5587 21 21.7956 21 21c0-.7956-.3161-1.5587-.8787-2.1213C19.5587 18.3161 18.7957 18 18 18ZM7.5 19.5c.39783 0 .77936.158 1.06066.4393C8.84197 20.2206 9 20.6022 9 21c0 .3978-.15803.7794-.43934 1.0607-.2813.2813-.66283.4393-1.06066.4393-.39782 0-.77935-.158-1.06066-.4393C6.15804 21.7794 6 21.3978 6 21c0-.3978.15804-.7794.43934-1.0607C6.72065 19.658 7.10218 19.5 7.5 19.5Zm10.5 0c.3978 0 .7794.158 1.0607.4393S19.5 20.6022 19.5 21c0 .3978-.158.7794-.4393 1.0607S18.3978 22.5 18 22.5c-.3978 0-.7794-.158-1.0607-.4393S16.5 21.3978 16.5 21c0-.3978.158-.7794.4393-1.0607S17.6022 19.5 18 19.5Z"
            />
          </svg>
        </button>
      </div>

      <div class="hidden lg:mt-2 lg:flex lg:items-center lg:justify-between">
        <nav class="flex items-center gap-x-4">
          <a class="text-sm uppercase tracking-wide" href="#">Home</a>
          <a class="text-sm uppercase tracking-wide" href="#">Wigs</a>
          <a class="text-sm uppercase tracking-wide" href="#">About</a>
          <a class="text-sm uppercase tracking-wide" href="#">Blog</a>
        </nav>

        <div class="flex items-center gap-x-6">
          <a href="#">
            <span class="sr-only">View profile</span>
            <svg class="h-6 w-6 text-spring" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5ZM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17Z"
              />
            </svg>
          </a>
          <a href="#">
            <span class="sr-only">View bag</span>
            <svg class="h-6 w-6 text-spring" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M0 2.25c0-.19891.0790176-.38968.21967-.53033C.360322 1.57902.551088 1.5.75 1.5H3c.1673.00005.32978.05603.4616.15904.13182.10301.22541.24714.2659.40946L4.335 4.5H21.75c.1101.0001.2189.02445.3185.07133.0997.04687.1878.11511.2581.19988.0703.08476.1211.18397.1487.29057s.0315.21798.0112.32622l-2.25 12c-.0322.1719-.1234.3271-.2579.4388-.1344.1118-.3037.173-.4786.1732H6c-.17485-.0002-.34415-.0614-.47863-.1732-.13449-.1117-.2257-.2669-.25787-.4388L3.015 5.4105 2.415 3H.75c-.198912 0-.389678-.07902-.53033-.21967C.0790176 2.63968 0 2.44891 0 2.25ZM7.5 18c-.79565 0-1.55871.3161-2.12132.8787C4.81607 19.4413 4.5 20.2044 4.5 21c0 .7956.31607 1.5587.87868 2.1213C5.94129 23.6839 6.70435 24 7.5 24s1.55871-.3161 2.12132-.8787C10.1839 22.5587 10.5 21.7956 10.5 21c0-.7956-.3161-1.5587-.87868-2.1213C9.05871 18.3161 8.29565 18 7.5 18ZM18 18c-.7956 0-1.5587.3161-2.1213.8787C15.3161 19.4413 15 20.2044 15 21c0 .7956.3161 1.5587.8787 2.1213C16.4413 23.6839 17.2044 24 18 24c.7957 0 1.5587-.3161 2.1213-.8787C20.6839 22.5587 21 21.7956 21 21c0-.7956-.3161-1.5587-.8787-2.1213C19.5587 18.3161 18.7957 18 18 18ZM7.5 19.5c.39783 0 .77936.158 1.06066.4393C8.84197 20.2206 9 20.6022 9 21c0 .3978-.15803.7794-.43934 1.0607-.2813.2813-.66283.4393-1.06066.4393-.39782 0-.77935-.158-1.06066-.4393C6.15804 21.7794 6 21.3978 6 21c0-.3978.15804-.7794.43934-1.0607C6.72065 19.658 7.10218 19.5 7.5 19.5Zm10.5 0c.3978 0 .7794.158 1.0607.4393S19.5 20.6022 19.5 21c0 .3978-.158.7794-.4393 1.0607S18.3978 22.5 18 22.5c-.3978 0-.7794-.158-1.0607-.4393S16.5 21.3978 16.5 21c0-.3978.158-.7794.4393-1.0607S17.6022 19.5 18 19.5Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="mobile-menu" id="main-menu">
    <div class="flex items-center justify-between px-5 pt-8">
      <button id="close-button" type="button">
        <span class="sr-only">Close menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 11H7.14l3.63-4.35997c.1697-.20422.2514-.4675.227-.73192-.0244-.26443-.1528-.50834-.357-.67808s-.4675-.2514-.73192-.22702c-.26443.02438-.50834.1528-.67808.35702l-5 5.99997c-.03364.0478-.06372.0979-.09.15 0 .05 0 .08-.07.13-.04533.1147-.06906.2367-.07.36.00094.1233.02467.2454.07.36 0 .05 0 .08.07.13.02628.0522.05636.1023.09.15l5 6c.09402.1129.21176.2037.34485.2659.13308.0622.27824.0944.42515.0941.2337.0005.4601-.0809.64-.23.1013-.0839.185-.187.2463-.3034.0614-.1163.0992-.2436.1112-.3746.0121-.131-.0018-.263-.0408-.3886-.0391-.1257-.1025-.2423-.1867-.3434L7.14 13H19c.2652 0 .5196-.1053.7071-.2929.1875-.1875.2929-.4419.2929-.7071 0-.2652-.1054-.5195-.2929-.7071C19.5196 11.1054 19.2652 11 19 11Z"
          />
        </svg>
      </button>
      <div class="text-sm uppercase">Menu</div>
    </div>

    <nav class="mt-8 space-y-4 px-5">
      <a class="block uppercase" href="#">Home</a>
      <a href="#" data-menu="wig">
        <span>Wigs</span>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
      <a href="#" data-menu="idk">
        <span>idk</span>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
      <a href="#" data-menu="third example">
        <span>third example</span>
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </a>
      <a class="block uppercase" href="#">About Us</a>
      <a class="block uppercase" href="#">Blog</a>
      <a class="block uppercase" href="#">Contact Us</a>
    </nav>

    <nav data-view="wig">
      <button class="mb-2 flex items-center gap-x-2 py-2" type="button">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span class="uppercase">Wigs</span>
      </button>

      <a class="text-sm uppercase" href="#">Shop by department</a>
      <a class="text-sm uppercase" href="#">Shop by color</a>
      <a class="text-sm uppercase" href="#">Shop by hairstyle</a>
    </nav>

    <nav data-view="idk">
      <button class="mb-2 flex items-center gap-x-2 py-2" type="button">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span class="uppercase">idk</span>
      </button>

      <a class="text-sm uppercase" href="#">Shop by idk</a>
      <a class="text-sm uppercase" href="#">Shop by idk</a>
      <a class="text-sm uppercase" href="#">Shop by idk</a>
    </nav>

    <nav data-view="third example">
      <button class="mb-2 flex items-center gap-x-2 py-2" type="button">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          class="h-5 w-5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        <span class="uppercase">third example</span>
      </button>

      <a class="text-sm uppercase" href="#">Shop by third example</a>
      <a class="text-sm uppercase" href="#">Shop by third example</a>
      <a class="text-sm uppercase" href="#">Shop by third example</a>
    </nav>
  </div>
</template>

<script>
import mobileMenu from '../scripts/mobile-menu'

export default {
  mounted() {
    mobileMenu()
  },
}
</script>
