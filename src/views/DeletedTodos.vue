<template>
  <div class="header">Удаленные задания</div>
  <router-link class="link" to="/">К списку заданий</router-link>
  <ul v-if="$store.state.deletedTasks.length" class="delTasks__list">
    <li
      class="delTasks__item"
      v-for="(task, index) in $store.state.deletedTasks"
      :key="index"
    >
      {{ task }}
    </li>
  </ul>
  <div v-else class="delTasks__noTasks">Нет удаленных заданий!</div>
</template>

<style lang="scss" scoped>
.delTasks {
  &__list {
    margin: 20px 0;
  }
  &__item {
    border-bottom: 1px solid black;
    font-size: 18px;
    margin-top: 10px;
    padding: 3px 0;
    word-break: break-word;
  }
  &__noTasks {
    margin: 20px 0;
    font-size: 22px;
  }
}
.header {
  font-size: 26px;
  text-align: center;
  margin: 20px 0;
}
.link {
  color: inherit;
  font-size: 20px;
  color: rgba(34, 77, 170, 0.7);
  &:hover {
    color: rgba(34, 77, 170, 1);
  }
}
</style>
