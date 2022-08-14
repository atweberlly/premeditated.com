<template>
  <div>
    <metainfo>
      <template v-slot:title="{ content }">{{ content }}</template>
    </metainfo>
    <router-view />
  </div>
</template>

<!--
<script>
import { useMeta } from 'vue-meta'

const websiteTitle = 'Premeditated'

export default {
  mounted() {
    useMeta({
      title: websiteTitle,
      description: `${websiteTitle} Landing Page using Vue.js`,
    })
  },
}
</script> -->
