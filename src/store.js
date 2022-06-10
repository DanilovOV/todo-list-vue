import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: [
        {
          id: '1',
          title: 'Изучить эту страницу',
          completed: false,
        },
        {
          id: '2',
          title: 'Выполненное задание',
          completed: true,
        },
        {
          id: '3',
          title: 'Попробовать удалить это задание',
          completed: false,
        },
        {
          id: '4',
          title: 'Сделать это задание выполненным',
          completed: false,
        },
        {
          id: '5',
          title: 'Перейти на страницу с удаленными заданиями',
          completed: false,
        },
      ],
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
