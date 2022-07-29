<template>

    <div class="mx-auto my-3 rounded-lg shadow-lg w-72 bg-mgray-100">
        <img :src="`${imgSrc}`" alt="" class="rounded-t-lg w-72">
        <div class="p-4 mb-6">
            <h2 class="py-4 text-2xl font-black text-dblue-300">{{country}}</h2>
            <p><span class="font-semibold text-dblue-300">Population: </span>{{population}}</p>
            <p><span class="font-semibold text-dblue-300">Region: </span>{{region}}</p>
            <p><span class="font-semibold text-dblue-300">Capital: </span>{{`${capital}`}}</p>
        </div>
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