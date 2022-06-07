<template>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      v-bind:key="todo"
      v-bind:todo="todo"
      v-bind:index="index"
      v-on:remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: { TodoItem },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>