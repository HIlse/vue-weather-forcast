<template>
    <b-container >
        <b-row cols="3" cols-sm="4" cols-md="5">
            <b-col lg="" v-for="info in dailyInfo" :key="info.day" >
                <div class="neu-up info-container">
                    <div class='img-container neu-down'>
                        <img :src="require('@/assets/images/'+ info.weather.icon + '.svg')" width='70px'>
                    </div>
                    <h5>{{info.day}}</h5>
                    <h6>{{info.date}}</h6>
                    <hr>
                    <p>{{Math.round(info.temp.min)}}°C - {{Math.round(info.temp.max)}}°C</p>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import timeConverter from '../mixins/timeFormatter';

export default {
    props: ['dailyData'],
    data(){
        return{
            dailyInfo: []
        }
    },
    created(){
        this.updateData();
    },
    watch: {
        dailyData: function(){
            this.updateData();
        }
    },
    methods: {
        updateData: function(){
            this.dailyInfo.length = 0;
            for (let i = 1; i < this.dailyData.length; i++){
               let dayInfo = {day: '', date: '', temp:{}, weather:{}};
               dayInfo.day = timeConverter(this.dailyData[i].dt*1000, 'shortDay');
               dayInfo.date = timeConverter(this.dailyData[i].dt*1000, 'dateOnly');
               dayInfo.temp = this.dailyData[i].temp;
               dayInfo.weather = this.dailyData[i].weather[0];
               this.dailyInfo.push(dayInfo);
            }
            
        }
    }
}
</script>

<style scoped>
.info-container{
    text-align: center;
    margin: 10% auto;
    border-radius: 100px 100px 20px 20px;
    padding-top: 5px;
    width: 100px;
    height: 190px;
}
.img-container{
    margin-left: auto;
    margin-right: auto;
    padding-top: 5px;
    width: 90px;
    height: 90px;
    border-radius: 50px;
}
.neu-down{
    box-shadow: inset 3px 3px 7px #d1d1d1,
            inset -3px -3px 7px #ffffff;
}
h5{
    margin-top: 8px;
    margin-bottom: 2px;
    font-size: 1em;
}
h6{
    font-size: 0.7em;
}
hr{
    margin: 8px auto;
    border-width: 1px;
    border-color: black;
    width: 80px;
}
p{
    font-size: 0.9em;
    font-weight: 700;
}

@media screen and (max-width: 575px){
    img{
        width: 60px;
    }
    .info-container{
        text-align: center;
        margin: 7% auto;
        border-radius: 80px 80px 10px 10px;
        padding-top: 5px;
        width: 80px;
        height: 160px;
    }
    .img-container{
        margin-left: auto;
        margin-right: auto;
        padding-top: 3px;
        width: 70px;
        height: 70px;
        border-radius: 50px;
    }
    h5{
        margin-top: 8px;
        margin-bottom: 2px;
        font-size: 0.85em;
    }
    h6{
        font-size: 0.6em;
    }
    hr{
        margin: 4px auto;
        border-width: 1px;
        border-color: black;
        width: 60px;
    }
    p{
        font-size: 0.75em;
        font-weight: 700;
    }
    }

</style>