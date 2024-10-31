<script setup lang="ts">

</script>

<template>
	<div id="bg">
		<img alt="background" src="/img/bg.png"/>
	</div>
</template>

<style scoped>
#bg {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-position: center 0;
	background-repeat: no-repeat;
	background-size: cover;
	-webkit-background-size: cover;
	-o-background-size: cover;
	zoom: 1;
	z-index: -100;
}

img {
	display: inline-block;
	position: relative;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	z-index: -99;
	object-fit: cover;
}
</style>