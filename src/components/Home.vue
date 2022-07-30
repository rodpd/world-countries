<template>

<main class="mt-4 bg-mgray-200">
	
	<div class="p-6 ml-14">
		<SearchInput v-model="search"/>
	</div>
	
	<div class="flex flex-wrap gap-8 px-16 py-4">
	<CardCountry v-for="country in filteredCountries" :key="country.name.common" 
	:imgSrc="country.flags.png"
	:country="country.name.common"
	:countryOfficial="country.name.official"
	:population="country.population"
	:region="country.region"
	:capital="country.capital"
	/>
	</div>
</main>

</template>



<script>

import CardCountry from './CardCountry.vue'
import SearchInput from './SearchInput.vue';

export default {
	name: 'HelloWorld',
	components: {
		CardCountry,
		SearchInput
	},
	data() {
		return {
			countries: [],
			search: ''
		}
	},
	methods: {
		log(item) {
			console.log(item)
		},
		fetchData() {
			return fetch('https://restcountries.com/v3.1/all', {
				method: 'get',
				headers: {
					'content-type': 'application/json'
				}
			})
			.then(res => {
				return res.json();
			})
			.then(json => {
				this.countries = json;
				console.log(this.countries);
			})
		}
	},
	computed: {
		filteredCountries() {
			return this.countries.filter((country) => country.name.common.toLowerCase().includes(this.search));
		}
	},
	mounted() {
		this.fetchData();
	},
	watch: {
		search(newSearch) {
			console.log(newSearch);
		}
	}
}
</script>



<style scoped>
</style>
