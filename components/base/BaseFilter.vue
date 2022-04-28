<template>
  <div class="btn-block flex flex-wrap gap-x-2 gap-y-1">
    <button
      class="btn-filter px-3 py-2 bg-gray-200 border-2 border-solid border-transparent flex items-center gap-x-1 hover:(opacity-80) focus:(opacity-80)"
      :class="{ '!border-accent': getShowWithSale }"
      @click="showBooksOnlyOnSale"
    >
      Со скидкой
    </button>
    <button
      class="btn-filter px-3 py-2 bg-gray-200 border-2 border-solid border-transparent flex items-center gap-x-1 hover:(opacity-80) focus:(opacity-80)"
      :class="classesForDatePublish"
      @click="sortBooksOnPublish"
    >
      По дате издания
      <span
        class="inline-flex items-center text-black transform transition-transform rotate-x-0 duration-150"
        :class="classesForDatePublishIcon"
      >
        <ion-icon class="" name="chevron-up-outline"></ion-icon>
      </span>
    </button>
    <button
      class="btn-filter px-3 py-2 bg-gray-200 border-2 border-solid border-transparent flex items-center gap-x-1 hover:(opacity-80) focus:(opacity-80)"
      :class="classesForPrice"
      @click="sortBooksOnPrice"
    >
      По цене
      <span
        class="inline-flex items-center text-black transform transition-transform rotate-x-0 duration-150"
        :class="classesForPriceIcon"
      >
        <ion-icon class="" name="chevron-up-outline"></ion-icon>
      </span>
    </button>
  </div>
  <!-- /.btn-block -->
</template>

<script>
export default {
  computed: {
    getShowWithSale() {
      return this.$store.getters['books/getShowWithSale'];
    },

    getDatePublishSort() {
      return this.$store.getters['books/getDatePublishSort'];
    },

    getPriceSort() {
      return this.$store.getters['books/getPriceSort'];
    },

    classesForDatePublish() {
      return {
        '!border-accent': this.getDatePublishSort.match(/asc|desc/gi),
      };
    },
    classesForDatePublishIcon() {
      return {
        // '!text-accent': this.getDatePublishSort.match(/asc|desc/gi),
        '!rotate-x-180': this.getDatePublishSort === 'desc',
      };
    },
    classesForPrice() {
      return {
        '!border-accent': this.getPriceSort.match(/asc|desc/gi),
      };
    },
    classesForPriceIcon() {
      return {
        // '!text-accent': this.getDatePublishSort.match(/asc|desc/gi),
        '!rotate-x-180': this.getPriceSort === 'desc',
      };
    },
  },

  methods: {
    async showBooksOnlyOnSale() {
      console.log('toggle Sale');
      this.$store.commit('books/toggleShowSale');

      await this.$store.dispatch('books/toggleShowSale');

      if (this.getShowWithSale) {
        this.$router.push({
          name: this.$route.name,
          query: { ...this.$route.query, sale: this.getShowWithSale },
        });

        return;
      }

      const copyQuery = JSON.parse(JSON.stringify(this.$route.query));

      delete copyQuery.sale;

      this.$router.push({
        name: this.$route.name,
        query: { ...copyQuery },
      });
    },

    // eslint-disable-next-line require-await
    async sortBooksOnPublish() {
      console.log('toggle sort Publish');

      this.$store.commit('books/changeSortPublish');

      await this.$store.dispatch('books/booksSortOnPublishOrPrice');

      if (this.getDatePublishSort) {
        this.$router.push({
          name: this.$route.name,
          query: {
            ...this.$route.query,
            yearOfPublish: this.getDatePublishSort,
          },
        });

        return;
      }

      const copyQuery = JSON.parse(JSON.stringify(this.$route.query));

      delete copyQuery.yearOfPublish;

      this.$router.push({
        name: this.$route.name,
        query: { ...copyQuery },
      });
    },

    // eslint-disable-next-line require-await
    async sortBooksOnPrice() {
      console.log('toggle sort Price');

      this.$store.commit('books/changeSortPrice');

      await this.$store.dispatch('books/booksSortOnPublishOrPrice');

      if (this.getPriceSort) {
        this.$router.push({
          name: this.$route.name,
          query: {
            ...this.$route.query,
            price: this.getPriceSort,
          },
        });

        return;
      }

      const copyQuery = JSON.parse(JSON.stringify(this.$route.query));

      delete copyQuery.price;

      this.$router.push({
        name: this.$route.name,
        query: { ...copyQuery },
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
