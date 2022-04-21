<template>
  <div class="site">
    <header>
      <UpperHeader></UpperHeader>
      <MiddleHeader></MiddleHeader>
      <BottomHeader></BottomHeader>
    </header>
    <div class="container"></div>
  </div>
</template>

<script>
import UpperHeader from '~/components/base/UpperHeader.vue'
import MiddleHeader from '~/components/base/MiddleHeader.vue'
import BottomHeader from '~/components/base/BottomHeader.vue'
export default {
  name: 'IndexPage',
  components: { UpperHeader, MiddleHeader, BottomHeader },
}
</script>

<style lang="scss">
$color: red;

h1 {
  color: $color;
}

.site {
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;
}
</style>
