<template>
	<div class="px-[10vw] bg-mgray-200 md:grid md:grid-cols-2 md:px-0 md:mt-20">
		<div class="md:mx-auto">
			<img :src="`${imgLink}`" alt="" class="my-10 w-[80vw] md:w-[40vw] md:my-0 rounded-lg shadow-outer">
		</div>
		<div class="md:px-10">
			<h1 class="text-2xl font-black md:mt-5">{{name}}</h1>
			<div class="md:grid md:grid-cols-2">
				<div class="my-5">
					<p class="mb-1"><span class="mt-10 font-semibold text-dblue-300">Native Name: </span>{{name}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Population: </span>{{population}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Sub Region: </span>{{subRegion}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Region: </span>{{region}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Capital: </span>{{`${capital}`}}</p>
				</div>
				<div class="my-5">
					<p class="mb-1"><span class="font-semibold text-dblue-300">Top Level Domain: </span>{{`${topLevelDomain}`}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Currencies: </span>{{currencies}}</p>
					<p class="mb-1"><span class="font-semibold text-dblue-300">Languages: </span>{{languages}}</p>
				</div>
			</div>
			<p><span class="font-semibold text-dblue-300">Border Countries: </span>
						<BorderCountries :borders="borderCountries" v-if="borderCountries" />
			</p>
		</div>
	</div>
</template>



<script>
import BorderCountries from './BorderCountries.vue';
export default {
    name: "CountryDetails",
    data() {
        return {
            imgLink: "",
            name: "",
            nativeName: "",
            population: 0,
            region: "",
            subRegion: "",
            capital: "",
            topLevelDomain: "",
            currencies: "",
            languages: "",
            borderCountries: null
        };
    },
    methods: {
        fetchData() {
            return fetch("https://restcountries.com/v3.1/name/" + this.$route.params.countryName, {
                method: "get",
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => {
                return res.json();
            })
                .then(json => {
                json = json[0];
                this.imgLink = json.flags.svg;
                this.name = json.name.common;
                this.population = json.population;
                this.region = json.region;
                this.subRegion = json.subregion;
                this.capital = json.capital;
                this.topLevelDomain = json.tld;
				this.currencies = '';
                for (let i in json.currencies) {
                    this.currencies += json.currencies[i].name + ", ";
                }
				this.currencies = this.currencies.substring(0, this.currencies.length-2);
				this.languages = '';
                for (let i in json.languages) {
                    this.languages += json.languages[i] + ', ';
                }
				this.languages = this.languages.substring(0, this.languages.length-2);
                this.borderCountries = json.borders;
            });
        }
    },
    mounted() {
        this.fetchData();
    },
    components: {
		BorderCountries
	},
	watch: {
		$route() {
			console.log(this.$route.params.countryName);
			this.fetchData();
		}
	}
}
</script>



<style>
	
</style>