<template>
    <b-container id='hourly-panel' fluid='md'>
        <b-row>
            <b-col sm='6' class='p-3' >
                <div id='hourly-container'  class="neu-down">
                    <div id='container-title'>
                        <h3>{{dates[0]}}</h3>
                        <p>Temperature: {{day1Data.minTemp}}°C - {{day1Data.maxTemp}}°C</p>
                    </div>
                    <hr>
                    <hourly :hourlyInfo="day1Data" day='collapse-1'></hourly>
                </div>
            </b-col >
            <b-col sm='6' class='p-3'>
                <div id='hourly-container' class="neu-down">
                    <div id='container-title'>
                        <h3>{{dates[1]}}</h3>
                        <p>Temperature: {{day2Data.minTemp}}°C - {{day2Data.maxTemp}}°C</p>
                    </div>
                    <hr>
                    <hourly :hourlyInfo="day2Data" day='collapse-2'></hourly>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import TimeConverter from "../mixins/timeFormatter";
import HourlyCollapse from './HourlyForecastCollapse.vue'


export default {
    props: ['hourlyData', 'dailyData'],
    components:{
        'hourly': HourlyCollapse
    },
    data(){
        return{
            dates:[],
            day1Data:{
                minTemp: 0,
                maxTemp: 0,
                hourly:[]
            },
            day2Data:{
                minTemp: 0,
                maxTemp: 0,
                hourly:[]
            }
        }
    },
    watch:{
        hourlyData: function(){
            this.updateData();
        }
    },
    methods: {
        updateData: function(){
                this.day1Data = {minTemp: 0, maxTemp: 0, hourly:[]};
                this.day2Data = {minTemp: 0, maxTemp: 0, hourly:[]};
                this.day1Data.minTemp = Math.round(this.dailyData[0].temp.min);
                this.day1Data.maxTemp = Math.round(this.dailyData[0].temp.max);
                this.day2Data.minTemp = Math.round(this.dailyData[1].temp.min);
                this.day2Data.maxTemp = Math.round(this.dailyData[1].temp.max);
                this.dates.length = 0;
                this.hourlyData.forEach((e) => {
                let date = TimeConverter(e.dt*1000, 'dateOnly');
                if (this.dates.length == 0) {
                    this.dates[0] = date;
                } else if (date != this.dates[this.dates.length-1]) {
                    this.dates.push(date);
                }
                if (date == this.dates[0]) {
                    this.day1Data.hourly.push({time: TimeConverter(e.dt*1000,'timeOnly'), weather: e.weather[0]})
                }
                if (date == this.dates[1]) {
                    this.day2Data.hourly.push({time: TimeConverter(e.dt*1000,'timeOnly'), weather: e.weather[0]})
                }
            });
            
            
        },
    }
    
}
</script>

<style scoped>

#hourly-container{
    border-radius: 10px;
    padding: 10px
}
#container-title{
    display: flex;
}
h3{
    margin: 10px;
}
p{
    margin-left: auto;
    margin-bottom: 0;
    align-self: center;
    margin-right: 10px;
}

hr{
    border-width: 2px;
    border-color: black;
    margin: 0 10px
}
@media screen and (max-width: 991px){
  h3{
      font-size: 1em;
  }
  p{
      font-size: 0.7em;
  }
}

</style>