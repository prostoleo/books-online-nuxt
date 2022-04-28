import {
  getBooksOnSale,
  getFilterCategoryStr,
  getFilterSubcategoryStr,
  getQueryStr,
  getSearctStr,
} from '~/utils/queryString';

export const state = () => ({
  searchQuery: '',
  activeCategory: 'Все',
  activeSubcategory: '',
  showWithSale: false,
  // datePublishAsc: false,
  // datePublishDesc: false,
  datePublishSort: '',
  // priceAsc: false,
  // priceDesc: false,
  priceSort: '',

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

  getShowWithSale(state) {
    return state.showWithSale;
  },

  getDatePublishSort(state) {
    return state.datePublishSort;
  },

  getPriceSort(state) {
    return state.priceSort;
  },

  getPublishOrPriceSort(_, getters) {
    console.log('getters.getDatePublishSort: ', getters.getDatePublishSort);
    console.log('getters.getPriceSort: ', getters.getPriceSort);
    return getters.getDatePublishSort || getters.getPriceSort;
  },
};

export const actions = {
  async showBooksOnPageNumber(context, pageNumber) {
    console.log('context: ', context);
    if (!pageNumber) return;

    // return null;

    // todo получаем queryString начальный
    const query = getQueryStr(
      pageNumber,
      (context.getters.getDatePublishSort || context.getters.getPriceSort) && [
        {
          field: 'yearOfPublish',
          sort: context.getters.getDatePublishSort,
        },
        {
          field: 'price',
          sort: context.getters.getDatePublishSort,
        },
      ]
    );

    // todo получаем queryString для скидки
    const saleStr = getBooksOnSale(context.getters.getShowWithSale);

    // todo получаем queryString для категории
    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);

    // todo получаем queryString для подкатегории
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );

    const url = `http://localhost:1337/api/books/?${categoryStr}${subcategoryStr}${saleStr}${query}`;

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

    // todo получаем queryString для скидки
    const saleStr = getBooksOnSale(context.getters.getShowWithSale);

    // todo получаем начальную queryStr для index и поиска страницы
    const queryStr = getQueryStr(
      1,
      (context.getters.getDatePublishSort || context.getters.getPriceSort) && [
        {
          field: 'yearOfPublish',
          sort: context.getters.getDatePublishSort,
        },
        {
          field: 'price',
          sort: context.getters.getDatePublishSort,
        },
      ]
    );

    console.log('queryStr: ', queryStr);

    // todo сбрасываем активную подкатегорию
    context.commit('resetActiveSubcategory', null);

    // todo меняем активную категорию
    context.commit('changeActiveCategory', categoryToShow);

    // todo получаем queryString для категории
    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);

    const url = `http://localhost:1337/api/books/?${saleStr}${categoryStr}${queryStr}`;
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
    const queryStr = getQueryStr(
      1,
      (context.getters.getDatePublishSort || context.getters.getPriceSort) && [
        {
          field: 'yearOfPublish',
          sort: context.getters.getDatePublishSort,
        },
        {
          field: 'price',
          sort: context.getters.getDatePublishSort,
        },
      ]
    );

    console.log('queryStr: ', queryStr);
    // console.log('query: ', query);
    // context.commit('changeActiveCategory', categoryToShow);
    // console.log('context: ', context);
    // todo сбрасываем активную категорию
    context.commit('resetActiveСategory', null);

    // todo меняем активную подкатегорию
    context.commit('changeActiveSubcategory', subcategoryToShow);

    // todo получаем queryString для подкатегории
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );
    console.log('subcategoryStr: ', subcategoryStr);

    // todo получаем queryString для скидки
    const saleStr = getBooksOnSale(context.getters.getShowWithSale);

    const url = `http://localhost:1337/api/books/?${subcategoryStr}${saleStr}${queryStr}`;
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

  async toggleShowSale(context) {
    const saleStr = getBooksOnSale(context.getters.getShowWithSale);

    // const query = getQueryStr(context.getters.getActivePageNumber);
    const query = getQueryStr(
      1,
      (context.getters.getDatePublishSort || context.getters.getPriceSort) && [
        {
          field: 'yearOfPublish',
          sort: context.getters.getDatePublishSort,
        },
        {
          field: 'price',
          sort: context.getters.getPriceSort,
        },
      ]
    );
    // context.commit('changeActiveCategory', categoryToShow);
    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );

    const url = `http://localhost:1337/api/books/?${saleStr}${categoryStr}${subcategoryStr}${query}`;
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

  async booksSortOnPublishOrPrice(context) {
    console.log('context: ', context);

    const saleStr = getBooksOnSale(context.getters.getShowWithSale);

    const query = getQueryStr(
      1,
      (context.getters.getDatePublishSort || context.getters.getPriceSort) && [
        {
          field: 'yearOfPublish',
          sort: context.getters.getDatePublishSort,
        },
        {
          field: 'price',
          sort: context.getters.getPriceSort,
        },
      ]
    );
    // context.commit('changeActiveCategory', categoryToShow);
    const categoryStr = getFilterCategoryStr(context.getters.getActiveCategory);
    const subcategoryStr = getFilterSubcategoryStr(
      context.getters.getActiveSubcategory
    );

    const url = `http://localhost:1337/api/books/?${saleStr}${categoryStr}${subcategoryStr}${query}`;
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

  async searchBooksOnQuery(context, query) {
    const querySearchStr = getSearctStr(query);

    const url = `http://localhost:1337/api/books/?${querySearchStr}`;
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

  toggleShowSale(state) {
    state.showWithSale = !state.showWithSale;
  },

  changeSortPublish(state) {
    switch (state.datePublishSort) {
      case 'asc':
        state.datePublishSort = 'desc';

        break;
      case 'desc':
        state.datePublishSort = '';

        break;

      default:
        state.datePublishSort = 'asc';
        break;
    }
  },

  setSortPublish(state, payload) {
    if (!payload) return;

    state.datePublishSort = payload;
  },

  changeSortPrice(state) {
    switch (state.priceSort) {
      case 'asc':
        state.priceSort = 'desc';

        break;
      case 'desc':
        state.priceSort = '';

        break;

      default:
        state.priceSort = 'asc';
        break;
    }

    console.log('state.priceSort: ', state.priceSort);
  },

  setPriceSort(state, payload) {
    if (!payload) return;

    state.priceSort = payload;
  },

  setSearchQuery(state, payload) {
    if (!payload) return;

    state.searchQuery = payload;
  },
};
