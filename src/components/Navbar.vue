<template>
	<header class="top-0 mb-10 py-10 px-[6vw] flex shadow-lg bg-mgray-100 text-dblue-300 dark:bg-dblue-200 dark:text-mgray-100">
		<router-link to="/" class="h-fit">
			<h1 class="text-xl text-dblue-300 pt-1 dark:bg-dblue-200 font-extrabold dark:text-mgray-100">Where in the world?</h1>
		</router-link>
		<DarkModeButton />
	</header>
</template>



<script>
import DarkModeButton from './DarkModeButton.vue';
export default {
    components: { DarkModeButton }
}
</script>



<style>
</style>