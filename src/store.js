import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      deletedTasks: [],
    };
  },
  mutations: {
    addDeletedTask(state, title) {
      state.deletedTasks.push(title);
    },
  },
});

export default store;
