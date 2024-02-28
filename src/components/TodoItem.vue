<script setup>
import { ref, nextTick } from 'vue'
import { useTodosStore } from '@/stores/todos'
import AppIcon from './global/AppIcon.vue'
const store = useTodosStore()

const props = defineProps({
	id: {
		type: Number,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	completed: {
		type: Boolean,
		default: false,
	},
})

const emits = defineEmits(['update'])

const isTaskEditing = ref(false)
const newContent = ref('')
const updateInput = ref()

const editTask = async () => {
	newContent.value = props.content
	isTaskEditing.value = true
	await nextTick()
	updateInput.value.focus()
}

const updateTask = () => {
	if (!newContent.value) return

	if (newContent.value !== props.content) {
		store.updateTask(props.id, newContent.value)
	}

	isTaskEditing.value = false
}
</script>

<template>
	<li class="todo">
		<input
			:id="id"
			:checked="completed"
			:title="
				completed ? 'Пометить как невыполненное' : 'Пометить как выполненное'
			"
			type="checkbox"
			@change="store.toggleComplete(id)"
		/>

		<div v-if="isTaskEditing" class="todo__edit edit">
			<input
				ref="updateInput"
				type="text"
				v-model="newContent"
				class="edit__input"
				placeholder="Новое значение..."
				@keydown.enter="updateTask"
			/>
			<button class="edit__button" @click="updateTask">Обновить</button>
		</div>

		<label v-else :for="id" :class="['todo__content', { completed }]">
			{{ content }}
		</label>

		<div class="todo__controls">
			<button class="todo__button" title="Изменить" @click="editTask">
				<AppIcon name="Edit" :size="17" />
			</button>
			<button
				class="todo__button"
				title="Удалить"
				@click="store.deleteTask(id)"
			>
				<AppIcon name="Close" :size="15" stroke />
			</button>
		</div>
	</li>
</template>

<style lang="scss" scoped>
.todo {
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px;
	font-size: 17px;
	word-break: break-word;

	&__edit {
		flex: 1;
		display: flex;
		gap: 5px;
	}

	&__content {
		flex: 1;
		cursor: pointer;

		&.completed {
			text-decoration: line-through;
			opacity: 0.6;
		}
	}

	&__controls {
		display: flex;
		gap: 5px;
		align-items: center;
	}

	&__button {
		width: 27px;
		height: 27px;
		line-height: 0;
		background-color: var(--c-white);
		color: var(--c-black);
		font-size: 18px;
		padding: 5px;
		border-radius: 30%;
		transition: all 0.3s ease;

		&:hover {
			background-color: rgba(34, 77, 170, 0.3);
			color: var(--c-white);
		}
	}
}

.edit {
	display: flex;
	flex-wrap: wrap;
	font-size: 15px;

	&__input {
		height: fit-content;
		padding: 5px;
		border-radius: 5px;
	}

	&__button {
		&:hover {
			opacity: 0.7;
		}
	}
}
</style>
