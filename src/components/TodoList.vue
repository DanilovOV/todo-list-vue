<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo"
      :todo="todo"
      :index="index"
      @remove-todo="removeTodo"
      @change-complete="changeComplete"
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  props: ['todos'],
  components: { TodoItem },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id);
    },
    changeComplete(id) {
      this.$emit('change-complete', id);
    },
  },
};
</script>
