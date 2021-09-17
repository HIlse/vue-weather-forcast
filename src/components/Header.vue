<template>
    <b-container fluid="md" id="title-header">
       <b-row class="justify-content-md-center neu-up" >
           <b-col md="9" ><div id="title" >{{title}}</div></b-col>
           <b-col md="3" align-self='center' ><city-search></city-search></b-col>
        </b-row>
    </b-container >
</template>

<script>
import CitySearch from './CitySearch.vue'

export default {
    components:{
        'city-search': CitySearch
    },
    data(){
        return{
            title: "How's the weather?"
        }
    }
    
}
</script>

<style scoped>
    #title-header{
        
        margin: 5% auto 20px auto;
    }
    #title{
        font-size: 2em;
        font-weight: 600;
        padding-left: 15px;
    }
    .neu-up{
        border-radius: 20px;
    }

    @media screen and (max-width: 575px){
        #title {

        padding-left: 0;
        text-align: center;
        }
    }
</style>