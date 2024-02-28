<script setup>
import { useTodosStore } from '@/stores/todos'

const store = useTodosStore()
</script>

<template>
	<div class="deleted">
		<h1>Удаленные задания</h1>
		<router-link to="/">К списку заданий</router-link>

		<ul v-if="store.deletedTasks.length" class="deleted__list">
			<li
				class="deleted__item"
				v-for="(task, index) in store.deletedTasks"
				:key="index"
			>
				{{ task }}
			</li>
		</ul>

		<div v-else class="deleted__empty">Нет удаленных заданий!</div>
	</div>
</template>

<style lang="scss" scoped>
.deleted {
	&__list {
		margin: 20px 0;
	}

	&__item {
		border-bottom: 1px solid rgba(22, 22, 22, 0.35);
		font-size: 18px;
		margin-top: 10px;
		padding: 3px 0;
		word-break: break-word;
	}

	&__empty {
		margin: 20px 0;
		font-size: 22px;
	}
}
</style>
