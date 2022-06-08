<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(22, 22, 22, 0.35);
  padding: 10px;
  margin: 10px 0 0;
  font-size: 17px;
}
input {
  margin-right: 5px;
}
button {
  font-size: 18px;
  padding: 3px 8px;
  border-radius: 30%;
  &:hover {
    background-color: rgba(34, 77, 170, 0.2);
  }
}
.done {
  text-decoration: line-through;
}
</style>
