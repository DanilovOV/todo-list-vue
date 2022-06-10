<template>
  <div>
    <div class="header">Задания</div>
    <router-link class="link" to="/deleted">Удаленные задания</router-link>
    <AddTodo />

    <select v-model="filter">
      <option value="all">Все задания</option>
      <option value="completed">Выполненные</option>
      <option value="not-completed">Невыполненные</option>
    </select>

    <TodoList v-if="filteredTodos.length" :todos="filteredTodos" />
    <p v-else class="noTasks">Нет заданий!</p>
  </div>
  <hr />
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';

export default {
  name: 'App',

  data() {
    return {
      filter: 'all',
    };
  },

  created() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
  },

  components: { TodoList, AddTodo },

  computed: {
    filteredTodos() {
      if (this.filter === 'completed')
        return this.$store.state.tasks.filter((todo) => todo.completed);
      if (this.filter === 'not-completed')
        return this.$store.state.tasks.filter((todo) => !todo.completed);
      return this.$store.state.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
}
select {
  font-size: 16px;
  padding: 8px 5px;
  border-radius: 5px;
  cursor: pointer;
}
.link {
  color: inherit;
  font-size: 20px;
  color: rgba(34, 77, 170, 0.7);
  &:hover {
    color: rgba(34, 77, 170, 1);
  }
}
.noTasks {
  margin: 20px 0;
  font-size: 22px;
}
</style>
