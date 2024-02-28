<script setup>
import { ref } from 'vue'
import { useTodosStore } from '@/stores/todos'

const store = useTodosStore()
const content = ref('')

const submit = () => {
	const newTask = {
		id: Date.now(),
		content: content.value,
		completed: false,
	}

	store.addTask(newTask)
	content.value = ''
}
</script>

<template>
	<form @submit.prevent="submit" class="form">
		<input type="text" v-model.trim="content" class="form__input" />
		<button :disabled="!content" class="form__button">Создать</button>
	</form>
</template>

<style lang="scss" scoped>
.form {
	display: flex;
	justify-content: space-between;
	gap: 15px;
	flex-wrap: wrap;

	&__input {
		background-color: var(--c-white);
		padding: 10px;
		flex: 1 0 auto;
		margin-right: 30px;
		font-size: 18px;
		border-radius: 5px;
	}

	&__button {
		background-color: var(--c-white);
		padding: 10px 20px;
		font-size: 18px;
		border-radius: 20px;
		transition: 0.3s ease all;

		&:disabled {
			cursor: not-allowed;
		}

		&:hover:not(:disabled) {
			background-color: rgba(34, 77, 170, 0.2);
		}
	}
}
</style>
