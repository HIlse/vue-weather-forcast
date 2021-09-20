<template>
  <div id="left-panel">
    <h1>{{ cityName }}</h1>
    <p>{{ date }}</p>
    <b-container id="info-card-container">
      <b-row class="justify-content-sm-center">
        <b-col cols='3' sm='6' lg='3' class="info-card"><info-card :info="sunriseTime" image="tile000.svg" suffix=""></info-card></b-col>
        <b-col cols='3' sm='6' lg='3' class="info-card"><info-card :info="sunsetTime" image="tile003.svg" suffix=""></info-card></b-col>
        <b-col cols='3' sm='6' lg='3' class="info-card"><info-card :info="cloudiness" image="tile011.svg" suffix="%"></info-card></b-col>
        <b-col cols='3' sm='6' lg='3' class="info-card"><info-card :info="windSpeed" image="tile015.svg" suffix="m/s"></info-card></b-col>
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
      this.windSpeed = this.weatherInfo.wind.speed.toFixed(1);
      this.cloudiness = this.weatherInfo.clouds.all;      
    }
      
  }

}

</script>

<style scoped>
h1 {
  margin-left: 15px;
  font-size: 3em;
  font-weight: 700;
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
  text-align: left;
  margin: 10% auto 5% auto;
}

@media screen and (max-width: 991px){
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 1em;
  }
  #info-card-container {
  text-align: left;
  margin: 5% auto 5% auto;
  }
}

@media screen and (max-width: 575px){
  #left-panel {
  text-align: center;
  }
  .info-card{
    padding:7px;
  }
  h1 {
  margin-left: 0;
  }
  p {
    margin-left: 0;
  } 
  
}
@media screen and (max-width: 991px){
p{
    margin-bottom: 2%;
}
#info-card-container{
  margin-top:0;
}
}
</style>
