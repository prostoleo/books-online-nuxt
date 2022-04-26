<template>
  <div class="site min-h-screen grid grid-rows-[auto,1fr,auto]">
    <header>
      <UpperHeader></UpperHeader>
      <MiddleHeader></MiddleHeader>
      <BottomHeader></BottomHeader>
    </header>
    <Nuxt />
    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import UpperHeader from '~/components/base/UpperHeader.vue'
import MiddleHeader from '~/components/base/MiddleHeader.vue'
import BottomHeader from '~/components/base/BottomHeader.vue'
import BaseFooter from '~/components/base/BaseFooter.vue'

export default {
  name: 'DefaultLay',

  components: {
    UpperHeader,
    MiddleHeader,
    BottomHeader,
    BaseFooter,
  },
}
</script>

<style lang="scss" scoped>
.site {
}
</style>
