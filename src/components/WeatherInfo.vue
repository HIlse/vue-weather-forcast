<template>
    <div id='weather-info'>
        <b-container fluid="md" >
            <b-row >
                <b-col sm="6">
                    <left-panel v-if="currentWeather" v-bind:weatherInfo="currentWeather"></left-panel>
                </b-col>
                <b-col sm="6" align-self="center">
                    <right-panel v-if="currentWeather" v-bind:weatherInfo="currentWeather"></right-panel>
                </b-col>
            </b-row>
            <!-- <button @click="changeLocation()">change</button> -->
        </b-container>
    </div>
    
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import RightPanel from '../components/RightPanel.vue'
import {bus} from '../main.js';
import axios from 'axios'

export default {
    components:{
        'left-panel': LeftPanel,
        'right-panel': RightPanel
    },
    data(){
        return{
            currentWeather: null,
            coord: {lat:0, lon: 0}
        }
    },
    created(){
        axios.get('https://api.ipdata.co/?api-key=' + process.env.VUE_APP_GEOIP_API_KEY)
            .then(response => {
                this.coord.lat = response.data.latitude;
                this.coord.lon = response.data.longitude;
                bus.$emit('locationChanged', this.coord);
                this.updateLocation();
            })
            .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        bus.$on('locationChanged', (data) =>{
            this.coord = data ;
            console.log('holla');
        })    
        
    },
    watch:{
       coord: function(){
           console.log('me is here');
           this.updateLocation();
       } 
    },
    methods:{
        updateLocation: function(){
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.coord.lat + '&lon=' + this.coord.lon + '&units=metric&APPID=' + process.env.VUE_APP_API_KEY)
                .then(response => {
                    this.currentWeather = response.data; 
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        },
        changeLocation: function(){
            this.coord = {lat: 21.028511, lon: 105.804817};
        }
    }
    
}
</script>

<style scoped>
    #weather-info{
        text-align: center;
    }
    @media screen and (max-width: 575px){
        #weather-info{
            margin-top: 50px;
        }
        
    }
    
</style>