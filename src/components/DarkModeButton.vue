<template>
<div class="cursor-pointer group py-1 h-fit px-2 dark:bg-dblue-200 rounded-lg ml-auto" @click="toggleDarkMode">
	<svg class="dark:fill-mgray-100 inline mb-1 dark:bg-dblue-200 h-6 w-6 dark:group-hover:text-blue-200 dark:stroke-transparent dark:group-hover:fill-blue-200 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
	<path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
	</svg>
	<span class="ml-2 text-dblue-300 dark:text-mgray-100 dark:bg-dblue-200 dark:group-hover:text-blue-200 font-bold group-hover:text-blue-600">Dark Mode</span>
</div>
</template>



<script>
export default {
	name: 'DarkModeButton',
	methods: {
		toggleDarkMode() {
			if ( document.querySelector('html').getAttribute('class') ) {
				document.querySelector('html').removeAttribute('class');
				document.querySelector('html').removeAttribute('style');
				document.querySelector('#app').removeAttribute('style');
			}
			else {
				document.querySelector('html').setAttribute('class', 'dark');
				document.querySelector('html').style.backgroundColor = 'hsl(207, 26%, 17%)';
				document.querySelector('#app').style.backgroundColor = 'hsl(207, 26%, 17%)';
			}
		}
	}
}
</script>



<style>
</style>