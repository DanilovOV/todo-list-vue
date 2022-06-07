<template>
  <li>
    <span>
      <input type="checkbox" />
      <strong>{{ todo.id }}</strong>
      {{ todo.title }}
    </span>
    <button>&times;</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  width: 300px;
  border: 1px solid black;
  padding: 10px;
  margin: 10px 0 0;
}
</style>
