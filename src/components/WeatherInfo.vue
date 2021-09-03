<template>
    <div id='weather-info'>
        <div v-if="currentWeather"><left-panel v-bind:weatherInfo="currentWeather"></left-panel></div>
        <right-panel></right-panel>
        
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
        
    }
    
}
</script>

<style scoped>
    #weather-info{
        margin: 50px 5%;

    }
    
</style>