<template>
  <div class="overflow-x-hidden">
    <PromoSlider></PromoSlider>
    <MainContent :books-to-show="books"></MainContent>
  </div>
</template>

<script>
import qs from 'qs';
import PromoSlider from '~/components/PromoSlider.vue';
import MainContent from '~/components/MainContent.vue';
export default {
  name: 'IndexPage',

  components: {
    PromoSlider,
    MainContent,
  },

  layout: 'DefaultLay',

  async asyncData(context) {
    console.log('context: ', context);

    /* const query = qs.stringify({
      fields: [
        'author',
        'title',
        'category',
        'yearOfPublish',
        'price',
        'discount',
        'image',
      ],
    }); */

    const query = qs.stringify(
      {
        fields: [
          'author',
          'title',
          'category',
          'subcategory',
          'yearOfPublish',
          'price',
          'discount',
        ],
        populate: {
          bookImage: {
            fields: ['name', 'url', 'formats'],
          },
        },
        pagination: {
          // page: context.getters.getAllBooksMeta.pagination.page,
          pageSize: 24,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    console.log('query: ', query);

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await context.$axios.$get(
        `http://localhost:1337/api/books?${query}`
      );
      console.log('res: ', res);
      // books = res;
      // console.log('books: ', books);

      context.store.commit('books/putAllBooksData', res.data);
      context.store.commit('books/putAllBooksMeta', res.meta);

      // return {
      //   books,
      // };
    } catch (error) {
      console.error(error);
    }

    /* return {
      books,
    }; */
  },
};
</script>

<style lang="scss"></style>
