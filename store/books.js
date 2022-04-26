// eslint-disable-next-line no-unused-vars
import qs from 'qs';

export const state = () => ({
  activeCategory: 'Все',
  activeSubCategory: '',
  searchQuery: '',
  sortType: '',

  allBooksData: null, // type object | null
  allBooksMeta: null, // type object | null
  searchedBooks: [],
  filteredBooks: [],
  sortedBooks: [],
});

export const getters = {
  getActiveCategory(state) {
    return state.activeCategory;
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
  // eslint-disable-next-line require-await
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

    try {
      const res = await this.$axios.$get(
        `http://localhost:1337/api/books?${query}`
      );

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

    state.activeCategory = payload;
    console.log('state.activeCategory: ', state.activeCategory);
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
