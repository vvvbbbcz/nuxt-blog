<script setup lang="ts">

import SiteBrand from "~/components/SiteBrand.vue";
</script>

<template>
	<el-aside width="12rem" class="border-radius-1rem margin-1rem">
		<SiteBrand />
	</el-aside>
</template>

<style scoped>
.el-aside {
	text-align: center;
	background-color: var(--el-menu-bg-color);
}
</style>