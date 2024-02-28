<script setup></script>

<template>
	<div class="wrapper">
		<div class="container"><router-view /></div>
	</div>
</template>

<style scoped lang="scss">
.wrapper {
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}
.container {
	max-width: 500px;
	padding: 0 5px;
	margin: 0px auto;
	padding-bottom: 30px;
}
</style>
