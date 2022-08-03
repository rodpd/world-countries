<template>

<main class="mt-4 bg-mgray-200">
	<div class="py-6 pl-6 ml-14">
		<SearchInput v-model="search"/>
		<RegionFilterDropdown @update:region="(newRegion) => this.region = newRegion" />
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
import RegionFilterDropdown from './RegionFilterDropdown.vue';

export default {
	name: 'HelloWorld',
	components: {
		CardCountry,
		SearchInput,
		RegionFilterDropdown
	},
	data() {
		return {
			countries: [],
			search: '',
			region: 'All'
		}
	},
	methods: {
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
			})
		}
	},
	computed: {
		filteredCountries() {
			if (this.region == "All") {
				return this.countries.filter((country) => country.name.common.toLowerCase().includes(this.search))
			}
			else {
				return this.countries.filter((country) => country.name.common.toLowerCase().includes(this.search) && country.region == this.region)
			}
		}
	},
	mounted() {
		this.fetchData();
	}
}
</script>



<style scoped>
</style>
