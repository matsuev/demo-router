<template>
	<div class="navigation-bar">
		<ul class="navigation-bar__list">
			<li
				class="navigation-bar__item"
				v-for="(item, index) in $router.getRoutes()"
				:key="index"
			>
				<router-link :to="item.path">{{ item.meta.label }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {};
</script>

<style>
.navigation-bar {
	text-align: center;
	background-color: #336699;
}

.navigation-bar__list {
	display: inline-block;
	list-style: none;
	margin: 0;
	padding: 0;
}

.navigation-bar__list::after {
	display: block;
	content: "";
	float: none;
	clear: both;
}

.navigation-bar__item {
	float: left;
}

.navigation-bar__item > a {
	display: block;
	text-decoration: none;
	color: white;
	padding: 16px 32px;
	box-sizing: border-box;
	border-bottom: 2px solid transparent;
}

.navigation-bar__item > a:hover {
	background-color: rgba(255, 255, 255, 0.05);
	border-bottom-color: rgba(255, 255, 255, 0.75);
}

.navigation-bar__item > a.router-link-active {
	color: #a0d5f8;
}
</style>