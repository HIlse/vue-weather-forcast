<template>
    <div id="search-box-container">
        <input v-model='inputText' class="neu-down" id='search-box' type="text" name="search" placeholder="Search your city...">
        <b-list-group class="result-list-container" v-if="isShowList">
            <b-list-group-item 
                button v-on:click="chooseCity(city)" 
                class="result-list" 
                v-for="city in tempCityList.slice(0,5)" 
                :key='city.id'>
                    {{city.name}}{{city.state != '' ? ', ' + city.state : ''}}, {{city.country}}
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
var cityList = require('../assets/city.list.json');
import {bus} from '../main.js'

export default {
    data(){
        return{
            inputText: '',
            tempCityList:[],
            isShowList: false
        }
    },
    watch:{
        inputText: function(newText, oldText){
            if (newText.length >= 3) {
                if (this.tempCityList.length == 0) {
                    cityList.forEach(e => {
                        if (e.name.toLowerCase().replace(/\s+/g, '').includes(newText.toLowerCase().replace(/\s+/g, ''))) {
                            this.tempCityList.push(e);
                        }
                    });
                    this.isShowList = true;
                } else {
                    if (newText.length > oldText.length) {
                        let optimizedList = [];
                        this.tempCityList.forEach(e => {
                            if (e.name.toLowerCase().replace(/\s+/g, '').includes(newText.toLowerCase().replace(/\s+/g, ''))) {
                                optimizedList.push(e);
                            }
                        });
                        this.tempCityList.length=0;
                        this.tempCityList = [...optimizedList];
                        this.isShowList = true;
                    } else {
                        if (newText.length < 3) {
                            this.tempCityList.length = 0;
                            this.isShowList = false;
                        } else {
                            this.tempCityList.length = 0;
                            cityList.forEach(e => {
                                if (e.name.toLowerCase().replace(/\s+/g, '').includes(newText.toLowerCase().replace(/\s+/g, ''))) {
                                    this.tempCityList.push(e);
                                }
                            });
                            this.isShowList = true;
                        }
                    }
                }
            } else{
                this.tempCityList.length = 0;
                this.isShowList = false;
            }
            console.log(this.tempCityList);
        }
    },
    methods:{
        chooseCity: function(event){
            bus.$emit('locationChanged', {lat: event.coord.lat, lon: event.coord.lon, isFromGeo: false});
            this.tempCityList.length = 0;
            this.isShowList = false;
            this.inputText = '';
        }
    }
}
</script>

<style scoped>
#search-box-container{
    text-align: right;
    width: 200px;
    margin-left: auto;
    margin-right: 10px;
}

.neu-down{
    box-shadow: inset 2px 2px 6px #d1d1d1,
            inset -2px -2px 6px #ffffff;
    width: 200px;
    -webkit-appearance: none;
}

#search-box{
    border-width: 0;
    border-radius: 10px;
    padding-left: 10px;
}
.result-list-container{
    text-align: left;
    position: absolute;
    z-index: 1;
    margin-top: 10px;
    
}
.result-list{
    background: #f1f1f1;
}
:focus {
    outline:0 !important;
}

@media screen and (max-width: 767px){
    #search-box-container{
    width: 150px;
}
    .neu-down{
        width: 150px;
    }
}
@media screen and (max-width: 575px){
    #search-box-container{
    width: 200px;
    margin-right: auto;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 15px;
}
    .neu-down{
        width: 200px;
    }
}


</style>