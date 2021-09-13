<template>
    <b-container fluid="md" id="title-header">
       <b-row class="justify-content-md-center">
           <b-col ><div id="title" class="neu-up">{{title}}</div></b-col>
        </b-row>
    </b-container >
</template>

<script>
export default {
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
        border-radius: 20px;
        font-size: 2em;
        font-weight: 700;
        padding-left: 15px;
    }

    @media screen and (max-width: 575px){
        #title {
        text-align: center;
        }
    }
</style>