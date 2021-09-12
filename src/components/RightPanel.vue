<template>
    <b-container id="right-panel">
        <b-row>
            <b-col lg="6" id="detail" order="2" order-lg="1">
                <div>
                    <img src="@/assets/images/tile022.png" alt="temp" width="100px">
                    <span>{{temp}}°C</span>
                </div>
                <p>Feels like: <strong>{{feelsLike}}°C</strong></p>
                <p>Humidity: <strong>{{humidity}}%</strong></p>
            </b-col>
        <!-- <div style="width: 5px;border-radius:20px" class="neu-up"></div> -->
            <b-col lg="6" id="weather-profile" order="1" order-lg="2">
                <div id="img-outer-container" class="neu-up">
                    <div id="img-inner-container" class="neu-down" >
                        <img :src="require('@/assets/images/'+ icon + '.png')" alt="weather" width="120px">
                    </div>

                </div>
                <h2>{{main}}</h2>
                <h3>{{description}}</h3>
            </b-col>    

        </b-row>
          
    </b-container> 
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
    margin-top: 2%;

}

/* #detail{
    
} */
/* #detail div{
    display: flex;
} */
#detail img{
    align-self: center;
}

#detail span{
    font-size: 2.5em;
    font-weight: bold;
    line-height: 4;
}
#weather-profile{
    text-align: center;
} 
#img-inner-container{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding-top: 15px;
    margin: auto;
}
#img-outer-container{
    width:154px;
    height: 154px;
    border-radius: 50%;
    padding-top: 2px;
    margin: auto;
}
h2{
    margin-top: 10px;
}
p{
    margin-left: 25px;
    font-size: 1.5em;
}
    
</style>