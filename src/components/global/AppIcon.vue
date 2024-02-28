<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'

const defaultSize = 20
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	width: Number,
	height: Number,
	stroke: Boolean,
	size: Number,
	defaultSize: Boolean,
})

const iconWidth = computed(() => {
	return (
		props.size || props.width || (props.defaultSize ? defaultSize : undefined)
	)
})

const iconHeight = computed(() => {
	return (
		props.size || props.height || (props.defaultSize ? defaultSize : undefined)
	)
})

const icon = defineAsyncComponent(
	() => import(`../icons/Icon${props.name}.vue`)
)
</script>

<template>
	<component
		:is="icon"
		:class="['svg', stroke ? 'stroke' : 'fill']"
		:style="{ width: iconWidth, height: iconHeight }"
	/>
</template>

<style lang="scss">
.svg {
	&.fill {
		path {
			fill: currentColor;
		}
	}

	&.stroke {
		path {
			stroke: currentColor;
		}
	}
}
</style>
