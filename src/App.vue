<template>
	<Navbar />
	<router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
}
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');

#app {
  font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
}
</style>
