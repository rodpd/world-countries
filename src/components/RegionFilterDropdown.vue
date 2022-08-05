<template>
	<button @click="toggle" class="px-6 py-4 rounded-lg shadow-md outline-none bg-mgray-100 dark:bg-dblue-100 dark:text-mgray-100 text-dblue-300">
		{{region}}
		<svg class="inline w-5 h-5 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	<ul v-show="active" class="absolute mt-2">
		<li v-for="(region, index) in regions" :key="index" 
		@click="$emit('update:region', $event.target.innerText); toggle()"
		class="relative z-10 block dark:bg-dblue-100 dark:text-mgray-100 dark:border-dblue-200 dark:hover:bg-dblue-200
		text-dblue-300 p-4 border-b shadow-md outline-none cursor-pointer first:rounded-t-lg last:rounded-b-lg hover:bg-slate-100 bg-mgray-100">
			{{region}}
		</li>
	</ul>

</template>



<script>

export default {
	name: 'RegionFilter',
	data () {
		return {
			active: false,
			region: 'Filter by Region',
			regions: ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
		}
	},
	methods: {
		toggle() {
			this.active = !this.active;
		},
		adjustListItemWidth() {
			document.querySelectorAll("li").forEach((li) => li.style.width = document.querySelector("button").offsetWidth + "px");
		}
	},
	emits: ['update:region'],
	mounted() {
		this.adjustListItemWidth();
	}
}
</script>



<style>
</style>