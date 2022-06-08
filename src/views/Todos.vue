<template>
  <div>
    <div class="header">Задания</div>
    <router-link class="link" to="/home">Домашняя страница</router-link>
    <AddTodo @add-todo="addTodo" />

    <select v-model="filter">
      <option value="all">Все задания</option>
      <option value="completed">Выполненные</option>
      <option value="not-completed">Невыполненные</option>
    </select>

    <TodoList
      v-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
      @change-complete="changeComplete"
    />
    <p v-else>Нет заданий!</p>
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
      todos: [],
      filter: 'all',
    };
  },

  mounted() {
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
        return this.todos.filter((todo) => todo.completed);
      if (this.filter === 'not-completed')
        return this.todos.filter((todo) => !todo.completed);

      return this.todos;
    },
  },

  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    changeComplete(id) {
      this.todos.map((todo) => {
        if (todo.id === id) todo.completed = !todo.completed;
      });
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
}
</style>
