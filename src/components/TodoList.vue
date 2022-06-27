<template>
  <ul>
    <transition-group name="list">
      <TodoItem
        class="list-item"
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

<style lang="scss" scoped>
ul {
  position: relative;
}

.list-item {
  transition: opacity 0.8s ease, transform 0.8s ease;
  border-bottom: 1px solid rgba(22, 22, 22, 0.35);
}

.list-move {
  border-bottom: none;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.list-leave-active {
  position: absolute;
  width: 100%;
}
</style>
