<script setup lang="ts">
</script>

<template>
	<el-header class="margin-1rem">
		<el-menu mode="horizontal" class="border-radius-1rem">
			<el-menu-item index="1">
				<a href="/"><SiteBrand /></a>
			</el-menu-item>
			<el-menu-item index="2">
				<a href="/">博客</a>
			</el-menu-item>
			<el-menu-item index="3">
				<a href="https://vvvbbbcz.com">主页</a>
			</el-menu-item>
			<el-menu-item index="4">
				<a href="/about">关于</a>
			</el-menu-item>
		</el-menu>
	</el-header>
</template>

<style scoped>
a {
	text-decoration: none;
	color: #fff;
	display: inline-block;
	padding: 0 var(--el-menu-base-level-padding);
	height: 100%;
	width: 100%;
}

.el-header {
	padding: 0 !important;
}

.el-menu-item {
	padding: 0;
	border-bottom: 0 !important;
}

.el-menu-item:first-child {
	border-radius: 1rem 0 0 1rem;
}
</style>