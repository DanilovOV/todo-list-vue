<template>
  <ul>
    <transition-group name="list">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="todo"
        :todo="todo"
        :index="index"
      />
    </transition-group>
  </ul>
</template>

<script>
import TodoItem from '@/components/TodoItem';

export default {
  props: ['todos'],
  components: { TodoItem },
};
</script>

<style lang="scss">
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
