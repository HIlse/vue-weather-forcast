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
            <!-- <button @click="changeLocation">change</button> -->
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
            currentWeather: null

        }
    },
    created(){
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&APPID=' + process.env.VUE_APP_API_KEY)
                .then(response => {
                    this.currentWeather = response.data;
                    bus.$emit('locationChanged', this.currentWeather.coord); 
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
    },
    computed:{
        
    },
    methods:{
        changeLocation: function(){
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi,vn&units=metric&APPID=' + process.env.VUE_APP_API_KEY)
                .then(response => {
                    this.currentWeather = response.data; 
                    bus.$emit('locationChanged', this.currentWeather.coord); 
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        }
    }
    
}
</script>

<style scoped>
    #weather-info{
        text-align: center;
    }
    
    
</style>