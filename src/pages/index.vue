<script setup>
import { ref, computed } from 'vue'
import TodoList from '@/components/TodoList.vue'
import AddTodo from '@/components/AddTodo.vue'
import { useTodosStore } from '@/stores/todos'

const store = useTodosStore()
const filter = ref('all')

const filteredTodos = computed(() => {
	if (filter.value === 'completed')
		return store.tasks.filter((todo) => todo.completed)
	if (filter.value === 'not-completed')
		return store.tasks.filter((todo) => !todo.completed)
	return store.tasks
})
</script>

<template>
	<div class="app">
		<h1>Задания</h1>
		<router-link to="/deleted">Удаленные задания</router-link>
		<AddTodo class="app__add" />

		<select v-model="filter" class="app__filter">
			<option value="all">Все задания</option>
			<option value="completed">Выполненные</option>
			<option value="not-completed">Невыполненные</option>
		</select>

		<TodoList
			v-if="filteredTodos.length"
			:todos="filteredTodos"
			class="app__list"
		/>
		<p v-else class="app__empty">Нет заданий!</p>
	</div>
</template>

<style lang="scss" scoped>
.app {
	&__add {
		margin-top: 20px;
	}

	&__filter {
		margin-top: 20px;
		padding: 8px 5px;
		background-color: var(--c-white);
		color: var(--c-black);
		border-radius: 3px;
		cursor: pointer;
	}

	&__list {
		margin-top: 10px;
	}

	&__empty {
		margin: 20px 0;
		font-size: 18px;
	}
}
</style>
