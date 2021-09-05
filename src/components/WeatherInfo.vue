<template>
    <b-container fluid="md" id='weather-info'>
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
    
</template>

<script>
import LeftPanel from '../components/LeftPanel.vue'
import RightPanel from '../components/RightPanel.vue'
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
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=saigon,vn&units=metric&APPID=b5ad7de37c0132a11c568f7488a50a1c')
                .then(response => {
                    this.currentWeather = response.data; 
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
    },
    computed:{
        
    },
    methods:{
        changeLocation: function(){
            axios.get('https://api.openweathermap.org/data/2.5/weather?q=hanoi,vn&units=metric&APPID=b5ad7de37c0132a11c568f7488a50a1c')
                .then(response => {
                    this.currentWeather = response.data; 
                })
                .catch(error => this.answer = 'Error! Could not reach the API. ' + error);
        }
    }
    
}
</script>

<style scoped>
    #weather-info{
        margin: 50px auto;
        padding: 0;
        text-align: center;
    }
    
    
</style>