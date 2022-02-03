<template>
	<nav-bar></nav-bar>
	<main-view></main-view>
</template>

<script>
import NavBar from "./layout/NavBar.vue";
import MainView from "./layout/MainView.vue";

export default {
	components: {
		NavBar,
		MainView,
	},
};
</script>

<style>
html,
body {
	display: block;
	margin: 0;
	padding: 0;
	height: 100vh;
}

#app {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
		Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	color: #2c3e50;
	min-width: 640px;
}
</style>
