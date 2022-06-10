<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo"
      :todo="todo"
      :index="index"
    />
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  props: ['todos'],
  components: { TodoItem },
};
</script>
