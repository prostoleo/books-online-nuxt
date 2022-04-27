// eslint-disable-next-line no-unused-vars
import qs from 'qs';

import {
  getFilterCategoryStr,
  getFilterSubcategoryStr,
} from '~/utils/queryString';

export const state = () => ({
  searchQuery: '',
  activeCategory: 'Все',
  activeSubcategory: '',
  sortType: {
    showWithSale: false,
    datePublishAsc: false,
    datePublishDesc: false,
    priceAsc: false,
    priceDesc: false,
  },

  allBooksData: null, // type object | null
  allBooksMeta: null, // type object | null
  searchedBooks: [],
  filteredBooks: [],
  sortedBooks: [],
});

export const getters = {
  getSearchQuery(state) {
    return state.searchQuery;
  },

  getActiveCategory(state) {
    return state.activeCategory;
  },
  getActiveSubcategory(state) {
    return state.activeSubcategory;
  },

  getAllBooksData(state) {
    return state.allBooksData;
  },
  getAllBooksMeta(state) {
    return state.allBooksMeta;
  },
  getActivePageNumber(state) {
    return state.allBooksMeta.pagination.page;
  },
};

export const actions = {
  async showBooksOnPageNumber(context, pageNumber) {
    console.log('context: ', context);
    if (!pageNumber) return;

    // return null;

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
          page: pageNumber,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );

    const url = `http://localhost:1337/api/books/?${categoryStr}${subcategoryStr}${query}`;

    try {
      const res = await this.$axios.$get(url);

      context.commit('putAllBooksData', res.data);
      context.commit('putAllBooksMeta', res.meta);
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line require-await
  async showBooksOnCategory(context, categoryToShow) {
    // console.log('context: ', context);
    // console.log('categoryToShow: ', categoryToShow);
    if (!categoryToShow) return;

    const categoryLowerCaseTrim = categoryToShow.toLowerCase().trim();
    console.log('categoryLowerCaseTrim: ', categoryLowerCaseTrim);

    // eslint-disable-next-line no-unused-vars
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
    // context.commit('changeActiveCategory', categoryToShow);
    context.commit('resetActiveSubcategory', null);
    context.commit('changeActiveCategory', categoryToShow);
    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);

    const url = `http://localhost:1337/api/books/?${categoryStr}${query}`;
    console.log('url: ', url);

    try {
      const res = await this.$axios.$get(url);
      console.log('res: ', res);

      context.commit('putAllBooksData', res.data);
      context.commit('putAllBooksMeta', res.meta);
    } catch (error) {
      console.error(error);
    }
  },

  // eslint-disable-next-line require-await
  async showBooksOnSubcategory(context, subcategoryToShow) {
    // console.log('context: ', context);
    // console.log('categoryToShow: ', categoryToShow);
    if (!subcategoryToShow) return;

    const subcategoryTrim = subcategoryToShow.trim();
    console.log('subcategoryTrim: ', subcategoryTrim);

    // eslint-disable-next-line no-unused-vars
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
    // context.commit('changeActiveCategory', categoryToShow);
    console.log('context: ', context);
    context.commit('resetActiveСategory', null);
    context.commit('changeActiveSubcategory', subcategoryToShow);
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );
    console.log('subcategoryStr: ', subcategoryStr);

    const url = `http://localhost:1337/api/books/?${subcategoryStr}${query}`;
    console.log('url: ', url);

    try {
      const res = await this.$axios.$get(url);
      console.log('res: ', res);

      context.commit('putAllBooksData', res.data);
      context.commit('putAllBooksMeta', res.meta);
    } catch (error) {
      console.error(error);
    }
  },
};

export const mutations = {
  changeActiveCategory(state, payload) {
    if (!payload) return;

    state.activeCategory = payload.trim();
    console.log('state.activeCategory: ', state.activeCategory);
  },
  resetActiveСategory(state) {
    console.log('resetActiveСategory');
    state.activeCategory = '';
  },
  changeActiveSubcategory(state, payload) {
    if (!payload) return;

    state.activeSubcategory = payload.trim();
    console.log('state.activeSubcategory: ', state.activeSubcategory);
  },
  resetActiveSubcategory(state) {
    console.log('resetActiveSubcategory');
    state.activeSubcategory = '';
  },

  putAllBooksData(state, payload) {
    if (!payload) return;
    state.allBooksData = payload;
  },
  putAllBooksMeta(state, payload) {
    if (!payload) return;
    state.allBooksMeta = payload;
  },
};
