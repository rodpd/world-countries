<template>
	<div class="flex">
		<svg class="inline w-5 h-5 mx-4 mb-1 stroke-dblue-300 dark:stroke-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" 
			type="text" placeholder="Search for a country..." 
			class="w-full outline-none text-dblue-300 dark:text-slate-200 bg-mgray-200 dark:bg-dblue-100">
	</div>
</template>



<script>
export default {
	props: {
		modelValue: String
	},
	emits: ['update:modelValue']
}
</script>



<style>
</style>