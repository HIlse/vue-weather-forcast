<template>
    <div id="right-panel">
        <div id="detail">
            <div>
                <img src="@/assets/images/tile022.png" alt="temp" width="100px">
                <span>{{temp}} °C</span>
            </div>
            <p>Feels like: <strong>{{feelsLike}} °C</strong></p>
            <p>Humidity: <strong>{{humidity}}%</strong></p>
        </div>
        <div style="width: 5px;border-radius:20px" class="neu-up"></div>
        <div id="weather-profile">
            <div class="neu-up">
                <img class="neu-down" :src="require('@/assets/images/'+ icon + '.png')" alt="weather" width="150px">
            </div>
            <h2>{{main}}</h2>
            <h3>{{description}}</h3>
        </div>      
    </div> 
</template>

<script>
import CapitalFirstLetter from "../mixins/capitalFirstLetter"

export default {
    props:['weatherInfo'],
    data(){
        return{
            temp:0,
            feelsLike:0,
            humidity:0,
            main:'',
            description:'',
            icon:''

        }
    },
    created(){
        this.updateInfo();
    },
    watch:{
        weatherInfo: function(){
            this.updateInfo();
        }
    },
    methods:{
        updateInfo: function(){
            this.temp = Math.round(this.weatherInfo.main.temp);
            this.feelsLike = Math.round(this.weatherInfo.main.feels_like);
            this.humidity = this.weatherInfo.main.humidity;
            this.main = this.weatherInfo.weather[0].main;
            this.description = CapitalFirstLetter(this.weatherInfo.weather[0].description);
            this.icon = this.weatherInfo.weather[0].icon;
        }
    }
    
}
</script>

<style scoped>
#right-panel{
    display: flex;
    margin-top: 2%;
}

#detail{
    padding-right: 20px;
    
}
#detail div{
    display: flex;
}
#detail img{
    align-self: center;
}

#detail span{
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 4;
}
#weather-profile{
    text-align: center;
    padding: 0 30px;
} 
#weather-profile img{
    padding: 10px;
    border-radius: 50%;
}
#weather-profile div{
    width:170px;
    height: 170px;
    border-radius: 50%;
    padding: 2px;
}
p{
    margin-left: 25px;
    font-size: 1.5rem;
}
    
</style>