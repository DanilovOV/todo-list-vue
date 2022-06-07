<template>
  <ul>
    <TodoItem v-for="todo in todos" v-bind:key="todo" v-bind:todo="todo" />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  props: ["todos"],
  components: { TodoItem },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
}
</style>