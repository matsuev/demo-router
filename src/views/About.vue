<template>
	<div>
		<h1>About</h1>
		<button @click="onButtonClick">Help Me</button>
	</div>
</template>

<script>
export default {
	methods: {
		onButtonClick() {
			this.$router.push({ path: "/help" });
		},
	},
};
</script>