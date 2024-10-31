<script setup lang="ts">

</script>

<template>
	<el-container direction="vertical">
		<Header />
		<el-container>
			<Aside />
			<el-main>
				<slot/>
			</el-main>
		</el-container>
		<Footer />
	</el-container>
	<Background />
</template>

<style scoped>

</style>