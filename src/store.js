import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: [],
      deletedTasks: [],
    };
  },
  mutations: {
    addDeletedTask(state, id) {
      state.tasks.map((task) => {
        if (task.id === id) {
          state.deletedTasks.push(task.title);
        }
      });
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
    changeComplete(state, id) {
      state.tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
      });
    },
  },
});

export default store;
