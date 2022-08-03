<template>
		<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" placeholder="Search for a country..." class="p-4 pl-12 shadow-md sm:w-[40vw] bg-mgray-100 outline-none">
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