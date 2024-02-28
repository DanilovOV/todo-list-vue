import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useTodosStore = defineStore('todos', () => {
	const loadTasks = () => {
		const storageData = localStorage.getItem('tasks')
		const preparedData = storageData ? JSON.parse(storageData) : []
		return preparedData
	}

	const loadDeletedTasks = () => {
		const storageData = localStorage.getItem('deletedTasks')
		const preparedData = storageData ? JSON.parse(storageData) : []
		return preparedData
	}

	const tasks = ref(loadTasks())
	const deletedTasks = ref(loadDeletedTasks())

	const saveTasks = () => {
		localStorage.setItem('tasks', JSON.stringify(tasks.value))
	}

	const saveDeletedTasks = () => {
		localStorage.setItem('deletedTasks', JSON.stringify(deletedTasks.value))
	}

	watch(tasks, saveTasks, { deep: true })
	watch(deletedTasks, saveDeletedTasks, { deep: true })

	const addTask = (task) => {
		tasks.value.push(task)
	}

	const updateTask = (id, newContent) => {
		const target = tasks.value.find((task) => task.id === id)

		if (target) {
			target.content = newContent
		}
	}

	const deleteTask = (id) => {
		const target = tasks.value.find((task) => task.id === id)

		if (target) {
			deletedTasks.value.push(target.content)
			tasks.value = tasks.value.filter((task) => task.id !== id)
		}
	}

	const toggleComplete = (id) => {
		const target = tasks.value.find((task) => task.id === id)
		if (target) target.completed = !target.completed
	}

	return {
		tasks,
		deletedTasks,
		addTask,
		updateTask,
		deleteTask,
		toggleComplete,
	}
})
