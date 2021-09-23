<template>
    <div id='weather-info'>
        <b-container fluid="md" >
            <div v-if="!gotLocation">
                <img class="animated-img" src="@/assets/images/compass.svg" alt="compass" width=100xpx>
                <h2>Getting your location...</h2>
            </div>
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
            coord: {lat:0, lon: 0, isFromGeo: false},
            gotLocation: false
        }
    },
    created(){
        navigator.geolocation.getCurrentPosition((position) =>{
            axios.get('https://revgeocode.search.hereapi.com/v1/revgeocode?at=' + position.coords.latitude + ',' + position.coords.longitude + '&lang=en-US&apiKey=' + process.env.VUE_APP_HERE_API_KEY)
            .then(response =>{
                this.gotLocation = true;
                let cityName = response.data.items[0].address.district + ', ' + response.data.items[0].address.city;
                this.updateLocation(true, cityName);
                bus.$emit('locationChanged', {lat: position.coords.latitude, lon: position.coords.longitude, isFromGeo: true});
            })
            .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        }, (error) =>{
            console.log(error);
            axios.get('https://api.ipdata.co/?api-key=' + process.env.VUE_APP_GEOIP_API_KEY)
            .then(response => {
                this.gotLocation = true;
                this.coord.lat = response.data.latitude;
                this.coord.lon = response.data.longitude;
                this.coord.isFromGeo = false
                this.updateLocation();
                bus.$emit('locationChanged', this.coord);
            })
            .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        })
        
        bus.$on('locationChanged', (data) =>{
            this.coord = data ;
        })    
        
    },
    watch:{
       coord: function(){
           if (!this.coord.isFromGeo) {
               this.updateLocation();
           }
           
       } 
    },
    methods:{
        updateLocation: function(isByGeo = false, cityName){
            axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + this.coord.lat + '&lon=' + this.coord.lon + '&units=metric&APPID=' + process.env.VUE_APP_API_KEY)
                .then(response => {
                    this.currentWeather = response.data;
                    if (isByGeo) {
                        this.currentWeather.name = cityName;
                    }
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
        .animate-img{
            width: 70px;
        
        }
        h2{
            font-size: 1.5em;
        }
    }
    
</style>