<template>

<main class="bg-mgray-200 dark:bg-db dark:bg-dblue-200">
	<div class="px-[6vw]">
		<div class="grid grid-cols-4 gap-12 py-6 md:gap-0 bg-mgray-200 dark:bg-dblue-200">
			<div class="col-span-4 md:col-span-2 md:row-start-1 py-4 rounded-md shadow-md sm:w-[40vw] bg-mgray-200 dark:bg-dblue-100">
				<SearchInput v-model="search"/>
			</div>
			<div class="col-span-4 row-start-2 md:row-start-1 md:ml-auto">
				<RegionFilterDropdown @update:region="(newRegion) => this.region = newRegion" />
			</div>
		</div>
	
	
		<div v-if="countries" class="flex flex-wrap justify-center sm:justify-around py-4 bg-mgray-200 dark:bg-dblue-200">
			<CardCountry v-for="country in filteredCountries" :key="country.name.common" 
		:imgSrc="country.flags.png"
		:country="country.name.common"
		:countryOfficial="country.name.official"
		:population="country.population"
		:region="country.region"
		:capital="country.capital"
		/>
		</div>
		<div v-else class="flex justify-center mt-40">
			<svg aria-hidden="true" class="mr-2 text-gray-200 w-28 h-28 animate-spin dark:text-gray-300 fill-blue-600" 
				viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
				<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
			</svg>
		</div>
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
			countries: null,
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
