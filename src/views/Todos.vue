<template>
  <div>
    <div>Задания</div>
    <router-link to="/">Домашняя страница</router-link>
    <AddTodo @add-todo="addTodo" />
    <TodoList v-if="todos.length" v-bind:todos="todos" @remove-todo="removeTodo" />
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
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>
