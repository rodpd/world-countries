<template>

<main class="mt-4 bg-mgray-200">
	
	<div class="p-6 ml-14">
		<SearchInput />
	</div>
	
	<div class="flex flex-wrap gap-8 px-16 py-4">
	<CardCountry v-for="country in data" :key="country.name.common" 
	:imgSrc="country.flags.png"
	:country="country.name.common" 
	:population="country.population"
	:region="country.region"
	:capital="country.capital"
	/>
	</div>
</main>

</template>



<script>

import CardCountry from './CardCountry.vue'
import { ref, onMounted } from "vue";
import SearchInput from './SearchInput.vue';

export default {
	name: 'HelloWorld',
	components: {
    CardCountry,
    SearchInput
},
	methods: {
		log(item) {
			console.log(item)
		}
	},
	setup () {
		const data = ref(null);
		const loading = ref(true);
		const error = ref(null);

		function fetchData() {
			return fetch('https://restcountries.com/v3.1/all', {
				method: 'get',
				headers: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				if (!res.ok) {
					const error = new Error(res.statusText);
					error.json = res.json();
					throw error;
				}
				return res.json();
			})
			.then(json => {
				console.log(json);
				data.value = json;

			})
		}

		onMounted(() => {
			fetchData();
		});

		return {
		data,
		loading,
		error
		};
	}
}
</script>



<style scoped>
</style>
