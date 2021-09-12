<template>
  <div id="left-panel">
    <h1>{{ cityName }}</h1>
    <p>{{ date }}</p>
    <b-container id="info-card-container">
      <b-row class="justify-content-sm-center">
        <b-col xl="3" cols="6" ><info-card :info="sunriseTime" image="tile000.png" suffix=""></info-card></b-col>
        <b-col xl="3" cols="6" ><info-card :info="sunsetTime" image="tile003.png" suffix=""></info-card></b-col>
        <b-col xl="3" cols="6" ><info-card :info="cloudiness" image="tile011.png" suffix=" %"></info-card></b-col>
        <b-col xl="3" cols="6" ><info-card :info="windSpeed" image="tile015.png" suffix=" m/s"></info-card></b-col>
      </b-row>
      
    </b-container>
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
      cloudiness:""
    };
  },
  created() {
    this.updateInfo();
  },
  watch: {
    weatherInfo: function(){
      this.updateInfo();
    }
  },
  methods: {
    updateInfo: function(){
      this.cityName = this.weatherInfo.name;
      this.date = TimeConverter(Date.now(), 'fullDate'),
      this.sunriseTime = TimeConverter(this.weatherInfo.sys.sunrise * 1000, 'timeOnly');
      this.sunsetTime = TimeConverter(this.weatherInfo.sys.sunset * 1000, 'timeOnly');
      this.windSpeed = this.weatherInfo.wind.speed;
      this.cloudiness = this.weatherInfo.clouds.all;      
    }
      
  }

}

</script>

<style scoped>
h1 {
  margin-left: 15px;
  font-size: 3em;
}
p {
  margin-left: 15px;
  font-size: 1.5em;
}
#left-panel {
  text-align: left;
  margin-top: 2%;
  border-radius: 10px;
}
#info-card-container {
  margin: 10% auto 5% auto;
}

@media screen and (max-width: 575px){
  #left-panel {
  text-align: center;
}
}
</style>
