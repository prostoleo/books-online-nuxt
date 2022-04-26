<template>
  <div class="container overflow-hidden py-4">
    <div class="glide">
      <div class="glide__track relative" data-glide-el="track">
        <ul class="glide__slides flex">
          <li v-for="i in 3" :key="i" class="glide__slide block relative">
            <img
              class="w-full h-[calc(100%+8rem)] max-h-[400px] md:(h-auto)"
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
              alt=""
            />
            <div
              class="absolute top-50/100 left-[65%] transform -translate-x-1/2 -translate-y-1/2 text-white max-w-[17ch] md:(max-w-[25ch])"
            >
              <h2 class="font-bold text-lg w-[fit-content] md:(text-4xl)">
                Название: {{ i }}
              </h2>
              <p class="text-light-400 mt-2 text-xs md:(text-base mt-5)">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores quidem velit mollitia quaerat eligendi, laudantium
                omnis modi dolores aperiam dignissimos!
              </p>
            </div>
            <div class="slide-book">
              <img
                class="absolute left-1/5 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4"
                src="https://cdn.eksmo.ru/v2/430000000000005159/COVER/cover1__w820.jpg"
                alt=""
              />
            </div>
          </li>
        </ul>
        <div class="glide__arrows" data-glide-el="controls">
          <button
            class="inline-flex items-center justify-center absolute top-1/2 left-[3%] transform -translate-y-1/2 -translate-x-1/2"
            data-glide-dir="<"
            aria-label="К предыдущему слайду"
          >
            <!-- <ion-icon
          :src="story.arrow_img.filename"
          :alt="story.arrow_img.alt"
          class="glide__arrow-img"
        ></ion-icon> -->
            <ion-icon
              class="text-3xl text-white"
              name="chevron-back-outline"
            ></ion-icon>
          </button>
          <button
            class="inline-flex items-center justify-center absolute top-1/2 right-[3%] transform -translate-y-1/2 translate-x-1/2"
            data-glide-dir=">"
            aria-label="К следующему слайду"
          >
            <ion-icon
              class="text-3xl text-white"
              name="chevron-forward-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Glide, { Swipe, Controls } from '@glidejs/glide/dist/glide.modular.esm'

export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const gl = new Glide('.glide', {
      type: 'carousel',
      perView: 1,
      focusAt: 'center',
      startAt: 3,
      gap: 20,
    }).mount({ Controls, Swipe })
  },
}
</script>

<style lang="scss" scoped></style>
