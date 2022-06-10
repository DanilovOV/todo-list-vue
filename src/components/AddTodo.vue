<template>
  <form @submit.prevent="onSubmit">
    <input @keyup.enter="onSubmit" type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTask = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$store.commit('addTask', newTask);
        this.title = '';
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
}
input {
  padding: 4px 10px;
  flex: 1 0 auto;
  margin-right: 30px;
  font-size: 18px;
  border-radius: 5px;
}
button {
  padding: 10px;
  font-size: 18px;
  border-radius: 20px;
  &:hover {
    background-color: rgba(34, 77, 170, 0.2);
  }
}
</style>
