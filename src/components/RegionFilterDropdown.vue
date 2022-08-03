<template>
	<button @click="toggle" class="px-6 py-4 mr-[4vw] shadow-md outline-none bg-mgray-100 float-right rounded-lg">
		{{region}}
		<svg class="inline w-6 h-6 ml-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
		<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	</button>
	<ul v-show="active" class="absolute right-[4vw] mt-2">
		<li v-for="(region, index) in regions" :key="index" 
		@click="$emit('update:region', $event.target.innerText); toggle()"
		class="relative border-b first:rounded-t-lg last:rounded-b-lg z-20 w-[15vw] block hover:bg-slate-100 cursor-pointer p-4 pr-10 shadow-md outline-none bg-mgray-100">
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