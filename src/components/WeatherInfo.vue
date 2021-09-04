<template>
    <div id='weather-info'>
        <left-panel v-if="currentWeather" v-bind:weatherInfo="currentWeather"></left-panel>
        <right-panel v-if="currentWeather" v-bind:weatherInfo="currentWeather"></right-panel>
        <!-- <button @click="changeLocation">change</button> -->
        
    </div>
    
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
        margin: 50px 5%;
        display: flex;
    }
    
    
</style>