<template>
  <main class="my-10">
    <div class="container relative xl:(flex items-start)">
      <BaseAside :open-aside="openAside" />
      <section class="main-content w-full">
        <div class="filter-block flex items-center gap-x-4 gap-y-2">
          <button
            class="btn-toggle-menu text-black text-3xl inline-flex items-center justify-center xl:(hidden)"
            :class="{ 'text-accent': openAside }"
            @click="openAside = !openAside"
          >
            <ion-icon name="menu"></ion-icon>
          </button>
          <BaseFilter />
        </div>
        <!-- /.filter-block -->

        <div class="upper-block mt-6 flex items-center justify-between">
          <h2 id="filter-search-title" class="text-blackish text-2xl font-bold">
            {{ filterSearchTitle }}
            <span v-if="getSearchQuery" class="px-2 bg-yellow-400 italic">{{
              getSearchQuery
            }}</span>
          </h2>
          <!-- /#filter-search-title -->
          <BasePagination />
        </div>
        <!-- /.upper-block -->

        <!-- <pre>
          {{ booksToShow }}
        </pre> -->
        <div v-if="!booksToShow">loading...</div>
        <!--  -->
        <transition-group
          v-else
          name="list"
          tag="ul"
          class="card-list mt-6 grid grid-cols-2 justify-center ite gap-2 sm:(gap-3 grid-cols-[repeat(auto-fit,minmax(175px,1fr))] justify-start)"
        >
          <!-- src="https://cdn.eksmo.ru/v2/430000000000005159/COVER/cover1__w820.jpg" -->

          <li v-for="book in booksToShow" :key="book.id" class="block">
            <!-- <pre>{{ book.attributes.image.data.attributes.formats }}</pre> -->
            <NuxtLink
              class="card-item max-w-60 h-full bg-white shadow shadow-md p-3 relative transform scale-100 transition-transform hover:(scale-103) z-10"
              :to="`/books/${book.attributes.uuid}`"
            >
              <div
                v-if="book.attributes.discount"
                class="absolute right-0 top-0 inline-flex items-center justify-center p-1 w-10 h-10 text-white text-sm leading-none rounded-full bg-reddish align-middle"
              >
                {{ book.attributes.discount }} %
              </div>

              <div class="max-h-72 mx-auto max-w-full">
                <img
                  class="object-contain h-full mx-auto"
                  :src="`http://localhost:1337${book.attributes.bookImage.data.attributes.url}`"
                  loading="lazy"
                  alt=""
                  height="288"
                />
              </div>
              <div class="text-card mt-3 text-center">
                <h3
                  class="text-blackish font-bold mb-[1em] hyphens-auto text-lg md:(text-xl)"
                >
                  {{ book.attributes.title }}
                </h3>
                <div class="">
                  <h4 class="text-grey font-semibold text-lg md:(text-xl)">
                    {{ book.attributes.author }}
                  </h4>
                  <p class="text-grey text-sm md:(text-base)">
                    <span class="font-semibold">Год изд.: </span
                    >{{ book.attributes.yearOfPublish }}
                  </p>
                  <span class="block text-red-bright text-lg mt-2"
                    >{{ book.attributes.price }}₽</span
                  >
                  <button
                    class="mx-auto mt-3 flex items-center justify-center gap-x-1 text-white font-semibold bg-accent rounded-2xl px-[0.75em] py-[0.35em]"
                    @click.prevent=""
                  >
                    <ion-icon name="cart"></ion-icon>
                    Корзина
                  </button>
                </div>
              </div>
            </NuxtLink>
          </li>
        </transition-group>
        <BasePagination class="justify-end mt-4" />
      </section>
    </div>
  </main>
</template>

<script>
import BaseAside from './base/BaseAside.vue';
import BasePagination from './base/BasePagination.vue';
import BaseFilter from './base/BaseFilter.vue';
export default {
  components: { BaseAside, BasePagination, BaseFilter },
  // props: {
  //   booksToShow: {
  //     type: Object || null,
  //     required: true,
  //   },
  // },

  data() {
    return {
      loading: false,
      openAside: false,
      // booksToShow: null,
    };
  },

  computed: {
    /* routePath() {
      console.log('this.$route: ', this.$route);
      return this.$route;
    }, */
    getSearchQuery() {
      return this.$store.getters['books/getSearchQuery'];
    },

    booksToShow() {
      return this.$store.getters['books/getAllBooksData'];
    },

    numberOfBooksToShow() {
      return this.$store.getters['books/getAllBooksMeta'].pagination.total;
    },

    activeCategory() {
      return this.$store.getters['books/getActiveCategory'];
    },
    activeSubcategory() {
      return this.$store.getters['books/getActiveSubcategory'];
    },

    filterSearchTitle() {
      // console.log('this.$route: ', this.$route);
      // return this.activeSubcategory || this.activeCategory;
      console.log('this.$route.name: ', this.$route.name);

      if (this.$route.name === 'index') {
        return this.activeSubcategory || this.activeCategory;
      }

      if (this.$route.name === 'search') {
        if (this.numberOfBooksToShow === 0) {
          return `Не удалось найти ничего по запросу: `;
        }

        return `Результаты поиска по запросу: `;
      }

      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
.list-move {
  transition: transform 0.5s ease-out;
}

// .text-card {
//   display: grid;
//   grid-template-rows: 1fr auto;
//   max-height: 210px;
//   height: 100%;
// }

.card-item {
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
