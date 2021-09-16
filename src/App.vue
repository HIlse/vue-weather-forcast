<template>
  <div id="app">
      <app-header></app-header>
      <weather-info></weather-info>
      <forecast-info></forecast-info>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import WeatherInfo from './components/WeatherInfo.vue'
import ForecastInfo from './components/ForecastInfo.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    'app-header': Header,
    'weather-info': WeatherInfo,
    'forecast-info': ForecastInfo,
    'app-footer': Footer
  }
}
</script>

<style>

.neu-up{
    box-shadow:  5px 5px 10px #d1d1d1,
    -5px -5px 10px #ffffff;
}

.neu-down{
    box-shadow: inset 5px 5px 8px #d1d1d1,
            inset -5px -5px 8px #ffffff;
}

.animated-img{
  transform: translateZ(0);
}
</style>
