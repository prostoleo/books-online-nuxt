<template>
  <main class="my-10">
    <div class="container relative xl:(flex items-start)">
      <BaseAside :open-aside="openAside" />
      <section class="main-content">
        <div class="filter-block flex items-center gap-x-4 gap-y-2">
          <button
            class="btn-toggle-menu text-black text-3xl inline-flex items-center justify-center"
            :class="{ 'text-accent': openAside }"
            @click="openAside = !openAside"
          >
            <ion-icon name="menu"></ion-icon>
          </button>
          <div class="btn-block flex flex-wrap gap-x-2 gap-y-1">
            <button
              class="btn-filter px-3 py-2 bg-gray-200 flex items-center gap-x-1"
            >
              Со скидкой
            </button>
            <button
              class="btn-filter px-3 py-2 bg-gray-200 flex items-center gap-x-1"
            >
              По дате издания
              <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
            <button
              class="btn-filter px-3 py-2 bg-gray-200 flex items-center gap-x-1"
            >
              По цене
              <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
          </div>
          <!-- /.btn-block -->
        </div>
        <!-- /.filter-block -->

        <div class="upper-block mt-6 flex items-center justify-between">
          <h2 id="filter-search-title" class="text-blackish text-2xl font-bold">
            Все
          </h2>
          <!-- /#filter-search-title -->
          <ul class="pagination flex items-center gap-2 flex-wrap">
            <li v-for="i in 7" :key="i" class="pagination-item">
              <a
                href="#"
                class="pagination-link block leading-none p-2 relative hover:(bg-accent text-white)"
                >{{ i }}</a
              >
              <!-- before:(empty-content absolute left-0 right-0 bottom-0 w-full h-[2px] bg-accent) -->
            </li>
            <!-- /.pagination-item -->
          </ul>
          <!-- /.pagination -->
        </div>
        <!-- /.upper-block -->

        <div v-if="loading">loading...</div>
        <transition-group
          v-else
          name="list"
          tag="ul"
          class="card-list mt-6 grid grid-cols-[repeat(auto-fit,minmax(175px,250px))] justify-center gap-4 sm:(gap-3 grid-cols-[repeat(auto-fit,minmax(175px,1fr))] justify-start)"
        >
          <li
            v-for="i in 7"
            :key="i"
            class="card-item bg-white shadow shadow-md p-3 relative transform scale-100 transition-transform hover:(scale-104) z-10"
          >
            <div
              class="absolute right-0 top-0 inline-flex items-center justify-center p-1 w-10 h-10 text-white text-sm leading-none rounded-full bg-reddish align-middle"
            >
              15 %
            </div>
            <img
              class="max-h-72 mx-auto"
              src="https://cdn.eksmo.ru/v2/430000000000005159/COVER/cover1__w820.jpg"
              alt=""
            />
            <div class="mt-3 text-center">
              <h3 class="text-blackish font-bold text-xl mb-[1em]">
                "Название"
              </h3>
              <h4 class="text-grey text-xl font-semibold">"Автор"</h4>
              <p class="text-grey">
                <span class="font-semibold">Год изд.: </span>2010
              </p>
              <span class="block text-red-bright text-lg mt-2">999₽</span>
              <button
                class="mx-auto mt-3 flex items-center justify-center gap-x-1 text-white font-semibold bg-accent rounded-2xl px-[0.75em] py-[0.35em]"
              >
                <ion-icon name="cart"></ion-icon>
                Корзина
              </button>
            </div>
          </li>
        </transition-group>
        <ul
          class="pagination-bottom mt-4 flex items-center justify-end gap-2 flex-wrap"
        >
          <li v-for="i in 7" :key="i" class="pagination-item">
            <a
              href="#"
              class="pagination-link block leading-none p-2 relative hover:(bg-accent text-white)"
              >{{ i }}</a
            >
          </li>
          <!-- /.pagination-item -->
        </ul>
        <!-- /.pagination -->
      </section>
    </div>
  </main>
</template>

<script>
import BaseAside from './base/BaseAside.vue'
export default {
  components: { BaseAside },
  data() {
    return {
      loading: false,
      openAside: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.list-move {
  transition: transform 0.5s ease-out;
}

a.pagination-link {
  &::before {
    content: '';
    @apply absolute left-0 right-0 bottom-0 w-full h-[2px] bg-accent opacity-0;
  }

  &.active::before {
    @apply opacity-100;
  }
}
</style>
