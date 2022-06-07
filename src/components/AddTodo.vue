<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  width: 300px;
}
input {
  border: 1px solid black;
  padding: 2px;
}
button {
  padding: 5px;
  border-radius: 5px;
}
</style>