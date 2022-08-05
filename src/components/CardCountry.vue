<template>
	<div class="my-3 transition-transform duration-300 rounded-lg shadow-lg focus:rounded-full w-72 bg-mgray-100 hover:scale-110 hover:shadow-2xl dark:bg-dblue-100">
		<router-link :to="`/country/${countryOfficial.replaceAll(' ', '%20')}`">
			<img :src="`${imgSrc}`" alt="" class="rounded-t-lg w-72">
			<div class="p-4 mb-6">
				<h2 class="py-4 text-2xl font-extrabold dark:text-mgray-100 text-dblue-300">{{country}}</h2>
				<p class="dark:text-mgray-100 text-dblue-300"><span class="font-semibold">Population: </span>{{population.toLocaleString('pt')}}</p>
				<p class="dark:text-mgray-100 text-dblue-300"><span class="font-semibold">Region: </span>{{region}}</p>
				<p class="dark:text-mgray-100 text-dblue-300"><span class="font-semibold">Capital: </span>{{`${capital}`}}</p>
			</div>
		</router-link>
	</div>

</template>



<script>

export default {
    name: 'CardCountry',
    props: {
        imgSrc: {
            type: String,
            default: "https://flagcdn.com/w320/br.png"
        },
        country: {
            type: String,
            default: "Brazil"
        },
		countryOfficial: {
			type: String,
			default: "Brazil"
		},
        population: {
			type: Number,
            default: 123456
        },
        region: {
            type: String,
            default: "SA"
        },
        capital: {
            type: Array,
            default: () => ["Brasilia"]
        }
    }
}

</script>



<style>
</style>