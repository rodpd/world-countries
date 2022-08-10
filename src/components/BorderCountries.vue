<template>
<div class="mt-5 mb-20 md:inline md:mt-0 md:mb-0 md:ml-4">
	<router-link v-for="(border, index) in countries" :key="index" :to="`/country/${border[1].replaceAll(' ', '%20')}`">
	<button class="px-6 py-1 mb-4 mr-4 rounded-lg hover:duration-300 shadow-outer dark:shadow-lg dark:bg-dblue-100 dark:hover:text-blue-200 bg-mgray-100 hover:text-blue-600">
		{{border[0]}}
	</button>
	</router-link>
</div>
</template>



<script>
export default {
	name: 'BorderCountries',
	props: {
		borders: Array
	},
	data() {
		return {
			countries: null
		}
	},
	mounted() {
		this.fetchCountries();
	},
	methods: {
		fetchCountries() {
			let str = "";
			for ( let i in this.borders ) {
				str += this.borders[i] + ',';
			}
			fetch("https://restcountries.com/v3.1/alpha?codes=" + str, {
				method: "get",
                headers: {
                    "content-type": "application/json"
                }
			})
                .then(res => {
                return res.json();
            })
                .then(json => {
					this.countries = [];
					for ( let i in json ) {
						this.countries.push([json[i].name.common, json[i].name.official]);
				}
                
            });
		}
	},
	watch: {
		borders() {
			this.fetchCountries();
		}
	}
}
</script>



<style>	
</style>