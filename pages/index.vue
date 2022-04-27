<template>
  <div class="overflow-x-hidden">
    <PromoSlider></PromoSlider>
    <MainContent></MainContent>
  </div>
</template>

<script>
import qs from 'qs';
import PromoSlider from '~/components/PromoSlider.vue';
import MainContent from '~/components/MainContent.vue';
import {
  getBooksOnSale,
  getFilterCategoryStr,
  getFilterSubcategoryStr,
} from '~/utils/queryString';
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
    const { category, subcategory, page, sale } = context.query;
    console.log({ category, subcategory });

    category && context.store.commit('books/changeActiveCategory', category);
    subcategory &&
      context.store.commit('books/changeActiveSubcategory', subcategory);
    sale && context.store.commit('books/toggleShowSale');

    const saleStr = getBooksOnSale(sale);
    const categoryStr = getFilterCategoryStr(category);
    const subcategoryStr = getFilterSubcategoryStr(subcategory);

    const queryStr = qs.stringify(
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
          page: page || 1,
          pageSize: 24,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
    // console.log('queryStr: ', queryStr);

    const url = `http://localhost:1337/api/books/?${categoryStr}${subcategoryStr}${saleStr}${queryStr}`;
    console.log('url: ', url);

    try {
      // eslint-disable-next-line no-unused-vars
      const res = await context.$axios.$get(url);
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
