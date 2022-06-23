<template>
  <li>
    <span :class="{ completed: todo.completed }">
      <input
        v-if="todo.completed"
        checked
        :id="index"
        type="checkbox"
        @change="$store.commit('changeComplete', todo.id)"
      />
      <input
        v-else
        :id="index"
        type="checkbox"
        @change="$store.commit('changeComplete', todo.id)"
      />
      
      <label :for="index"><strong>{{ index + 1 }}</strong> {{ todo.title }}</label>
    </span>
    <button @click="deleteTask">&times;</button>
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
  methods: {
    deleteTask() {
      this.$store.commit('addDeletedTask', this.todo.id);
      this.$store.commit('removeTask', this.todo.id);
    },
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
  word-break: break-word;
}
input {
  cursor: pointer;
}
button {
  font-size: 18px;
  padding: 3px 8px;
  border-radius: 30%;
  &:hover {
    background-color: rgba(34, 77, 170, 0.2);
  }
  margin-left: 5px;
}
.completed {
  text-decoration: line-through;
  color: rgba(65, 60, 60, 0.7);
}
label {
  padding-left: 5px;
  cursor: pointer;
}
</style>
