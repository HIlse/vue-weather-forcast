<template>
  <div id="app">
      <app-header></app-header>
      <weather-info></weather-info>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import WeatherInfo from './components/WeatherInfo.vue'

export default {
  name: 'App',
  components: {
    'app-header': Header,
    'weather-info': WeatherInfo
  }
}
</script>

<style>

.neu-up{
    box-shadow:  5px 5px 10px #9e9a92,
    -5px -5px 10px #ffffff;
}

.neu-down{
    box-shadow: inset 5px 5px 8px #9e9a92,
            inset -5px -5px 8px #ffffff;
}
</style>
