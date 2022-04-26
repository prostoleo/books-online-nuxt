export const state = () => ({
  activeCategory: 'Все',
});

export const getters = {
  getActiveCategory(state) {
    return state.activeCategory;
  },
};

export const actions = {};

export const mutations = {
  changeActiveCategory(state, payload) {
    if (!payload) return;

    state.activeCategory = payload;
  },
};
