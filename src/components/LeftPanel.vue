<template>
  <div id="left-panel">
    <h1>{{ cityName }}</h1>
    <p>{{ date }}</p>
    <div id="info-card-container">
      <info-card :info="sunriseTime" image="tile000.png" suffix=""></info-card>
      <info-card :info="sunsetTime" image="tile003.png" suffix=""></info-card>
      <info-card :info="cloudiness" image="tile011.png" suffix=" %"></info-card>
      <info-card
        :info="windSpeed"
        image="tile015.png"
        suffix=" m/s"
      ></info-card>
    </div>
  </div>
</template>

<script>
import TimeConverter from "../mixins/timeFormatter";
import LeftPanelCard from "./LeftPanelCard.vue";

export default {
  props: ["weatherInfo"],
  components: {
    "info-card": LeftPanelCard,
  },
  data() {
    return {
      cityName: "",
      date: TimeConverter(Date.now(), true),
      sunriseTime: "",
      sunsetTime: "",
      windSpeed: "",
    };
  },
  created() {
    this.cityName = this.weatherInfo.name;
    this.sunriseTime = TimeConverter(
      this.weatherInfo.sys.sunrise * 1000,
      false
    );
    this.sunsetTime = TimeConverter(this.weatherInfo.sys.sunset * 1000, false);
    this.windSpeed = this.weatherInfo.wind.speed;
    this.cloudiness = this.weatherInfo.clouds.all;
  },
};
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 3rem;
}
p {
  margin: 0;
  font-size: 1.5rem;
}
#left-panel {
  text-align: left;
  margin-top: 2%;
  margin-right: 2%;
  border-radius: 10px;
  padding: 10px;
  display: inline-block;
}
#info-card-container {
  margin: 10% 0 5% 0;
  display: flex;
  align-items: center;
}
</style>
