<template>
	<div class="mt-14 ml-[5vw]">
		<BackButton />
	</div>
	<div class="px-[10vw] bg-mgray-200 dark:bg-dblue-200 md:grid md:grid-cols-2 md:px-0 md:mt-14">
		<div class="md:mx-auto">
			<img :src="`${imgLink}`" alt="" class="my-10 w-[80vw] md:w-[40vw] md:my-0 rounded-lg shadow-outer">
		</div>
		<div class="md:px-10">
			<h1 class="text-2xl font-extrabold md:mt-5 text-dblue-300 dark:text-mgray-100">{{name}}</h1>
			<div class="md:grid md:grid-cols-2">
				<div class="my-5">
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="mt-10 font-semibold">Native Name: </span>{{nativeName}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Population: </span>{{population.toLocaleString('pt')}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Sub Region: </span>{{subRegion}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Region: </span>{{region}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Capital: </span>{{`${capital}`}}</p>
				</div>
				<div class="my-5">
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold">Top Level Domain: </span>{{`${topLevelDomain}`}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Currencies: </span>{{currencies}}</p>
					<p class="mb-1 text-dblue-300 dark:text-mgray-100"><span class="font-semibold ">Languages: </span>{{languages}}</p>
				</div>
			</div>
			<p class="text-dblue-300 dark:text-mgray-100"><span class="font-semibold">Border Countries: </span>
						<BorderCountries :borders="borderCountries" v-if="borderCountries" />
						<span v-else>None</span>
			</p>
		</div>
	</div>
</template>



<script>
import BorderCountries from './BorderCountries.vue';
import BackButton from './BackButton.vue';
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
				this.nativeName = Object.values(json.name.nativeName)[0].official;
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
    BorderCountries,
    BackButton
},
	watch: {
		$route() {
			this.fetchData();
		}
	}
}
</script>



<style>
</style>