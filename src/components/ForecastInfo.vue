<template>
    <div id='forecast-info'>
        <hourly-panel :hourlyData="hourlyData" :dailyData="dailyData"></hourly-panel>
    </div>
</template>

<script>
import {bus} from '../main.js'
import axios from 'axios'
import HourlyPanel from './HourlyPanel.vue'

export default {
    
    components:{
        'hourly-panel': HourlyPanel
    },
    data(){
        return{
            currentWeather: null,
            hourlyData: [],
            dailyData: []
        }
    },
    created(){
        bus.$on('locationChanged', (data) =>{
            this.currentWeather = data;
            this.changeLocation(this.currentWeather.lat, this.currentWeather.lon)
        })
       
    },
    computed:{
        
    },
    methods:{
        changeLocation: function(lat,lon){
            axios.get('https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude=minutely&units=metric&APPID=' + process.env.VUE_APP_API_KEY)
                .then(response => {
                    this.hourlyData = response.data.hourly;
                    this.dailyData = response.data.daily;
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        }
    }
    
}
</script>

<style scoped>
#forecast-info{
        margin: 50px 5%; 
        padding: 0;
    }
    
    
</style>