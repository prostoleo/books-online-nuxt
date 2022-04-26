<template>
  <div class="overflow-x-hidden">
    <PromoSlider></PromoSlider>
    <MainContent></MainContent>
  </div>
</template>

<script>
import PromoSlider from '~/components/PromoSlider.vue'
import MainContent from '~/components/MainContent.vue'
export default {
  name: 'IndexPage',

  components: {
    PromoSlider,
    MainContent,
  },

  layout: 'DefaultLay',
}
</script>

<style lang="scss"></style>
