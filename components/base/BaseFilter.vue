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
    >
      По цене
      <ion-icon name="chevron-up-outline"></ion-icon>
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

      await this.$store.dispatch('books/booksSortOnPublish');

      /* if (this.getShowWithSale) {
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
      }); */
    },
  },
};
</script>

<style lang="scss" scoped></style>
