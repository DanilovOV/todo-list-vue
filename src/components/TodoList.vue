<script setup>
import TodoItem from './TodoItem.vue'

defineProps({
	todos: {
		require: true,
	},
})
</script>

<template>
	<ul class="list">
		<transition-group name="list">
			<TodoItem
				class="list__item"
				v-for="todo in todos"
				:key="todo.id"
				:id="todo.id"
				:content="todo.content"
				:completed="todo.completed"
			/>
		</transition-group>
	</ul>
</template>

<style lang="scss" scoped>
.list {
	position: relative;

	&__item {
		transition: opacity 0.8s ease, transform 0.8s ease;
		border-bottom: 1px solid rgba(22, 22, 22, 0.35);
	}
}

.list-move {
	border-bottom: none;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(50px);
}

.list-leave-active {
	position: absolute;
	width: 100%;
}
</style>
