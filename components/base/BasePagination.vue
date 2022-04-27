<template>
  <ul class="pagination flex items-center gap-2 flex-wrap">
    <li
      v-for="page in pagination.pageCount"
      :key="page"
      class="pagination-item"
    >
      <a
        href=""
        class="pagination-link block leading-none p-2 relative hover:(bg-accent text-white) focus:(bg-accent text-white)"
        :class="{ active: page == activePage }"
        @click.prevent="showPage(page)"
        >{{ page }}</a
      >
      <!-- before:(empty-content absolute left-0 right-0 bottom-0 w-full h-[2px] bg-accent) -->
    </li>
    <!-- /.pagination-item -->
  </ul>
  <!-- /.pagination -->
</template>

<script>
export default {
  computed: {
    pagination() {
      return this.$store.getters['books/getAllBooksMeta'].pagination;
    },

    activePage() {
      return this.$store.getters['books/getActivePageNumber'];
    },
  },

  methods: {
    showPage(page) {
      console.log(this.$route);

      if (page !== this.activePage) {
        this.$store.dispatch('books/showBooksOnPageNumber', page);
        this.$router.push({
          name: 'index',
          query: { ...this.$route.query, page },
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
