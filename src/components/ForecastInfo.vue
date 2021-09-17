<template>
    <div id='forecast-info'>
        <hourly-panel :hourlyData="hourlyData" :dailyData="dailyData"></hourly-panel>
        <daily-panel :dailyData="dailyData"></daily-panel>
    </div>
</template>

<script>
import {bus} from '../main.js'
import axios from 'axios'
import HourlyPanel from './HourlyPanel.vue'
import DailyPanel from './DailyPanel.vue'

export default {
    
    components:{
        'hourly-panel': HourlyPanel,
        'daily-panel': DailyPanel
    },
    data(){
        return{
            hourlyData: [],
            dailyData: []
        }
    },
    created(){
        bus.$on('locationChanged', (data) =>{
            this.changeLocation(data.lat, data.lon)
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
        margin: 10px 5%; 
        padding: 0;
    }
    
    
</style>