<template>
  <main class="mt-10">
    <div class="container">
      <!-- <span>{{ $route.params.id }}</span> -->
      <!-- <pre>{{ book }}</pre> -->
      <!-- <pre>{{ book.attributes.mainDescription }}</pre> -->

      <BookPagination :book="book" />

      <BookContent :book="book" />

      <div class="down-part lg:(flex items-start)">
        <div class="info__wrapper">
          <BookAddInfo :book="book" />
          <BookReview :book="book" />
        </div>

        <BookMayLike :book="book" />
      </div>
    </div>
  </main>
</template>

<script>
import { getBookQueryStrOnUuid, getBooksMayLike } from '~/utils/queryString';
import { capitalizeFunc } from '~/utils/capitalize.js';
import BookPagination from '~/components/book/BookPagination.vue';
import BookContent from '~/components/book/BookContent.vue';
import BookReview from '~/components/book/BookReview.vue';
import BookMayLike from '~/components/book/BookMayLike.vue';
import BookAddInfo from '~/components/book/BookAddInfo.vue';

export default {
  components: {
    BookPagination,
    BookContent,
    BookReview,
    BookMayLike,
    BookAddInfo,
  },

  async asyncData(context) {
    // console.log('context: ', context);
    const queryStr = getBookQueryStrOnUuid(context.route.params.id);
    // console.log('queryStr: ', queryStr);
    const url = `http://localhost:1337/api/books/?${queryStr}`;
    // console.log('url: ', url);
    let book = null;
    let booksMayLikeData = null;
    let booksMayLikeMeta = null;

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await context.$axios.$get(url);
      console.log('res: ', res);
      // books = res;
      // console.log('books: ', books);
      // context.store.commit('books/putAllBooksData', res.data);
      // context.store.commit('books/putAllBooksMeta', res.meta);
      book = res.data[0];

      const queryMayLike = getBooksMayLike(book.attributes.category);
      const urlMayLike = `http://localhost:1337/api/books/?${queryMayLike}`;

      const resMayLike = await context.$axios.get(urlMayLike);

      booksMayLikeData = resMayLike.data;
      booksMayLikeMeta = resMayLike.meta;
    } catch (error) {
      console.error(error);
    }
    return {
      book,
      booksMayLikeData,
      booksMayLikeMeta,
    };
  },
  data() {
    return {
      capitalizeFunc,
    };
  },
  methods: {
    capitalizeCategory() {
      console.log('this.book: ', this.book);
      capitalizeFunc(this.book.attributes.category);
    },
  },
};
</script>

<style lang="scss" scoped>
.down-part {
  // display: flex;
  // flex-direction: column;
}
</style>
