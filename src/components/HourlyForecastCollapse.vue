<template>
    <b-container id='collapse-container'>
        <b-row cols-lg='6' cols-md="4" cols-sm="3" cols="4" v-if="isCollapsed" class="mr-auto">
                <b-col v-for="e in tweleItems" :key="e.dt" >
                    <div id="card-container">
                        <img class='animated-img' :src="require('@/assets/images/' + e.weather.icon + '.svg')" :alt="e.dt" width="35px">
                        <p>{{e.time}}</p>
                    </div>               
                </b-col>
        </b-row>
        
        <b-collapse @hide="checkHide" @show="checkShow" :id="day">
            <b-row cols-lg='6' cols-md="4" cols-sm="3" cols="4" class="mr-auto">
                <b-col v-for="e in hourlyInfo.hourly" :key="e.dt" >
                    <div id="card-container">
                        <img class='animated-img' :src="require('@/assets/images/' + e.weather.icon + '.svg')" :alt="e.dt" width="35px">
                        <p>{{e.time}}</p>
                    </div>               
                </b-col>
            </b-row>
        </b-collapse>
        <div v-if="collapsible" v-b-toggle="day">
            <img class='when-closed' src="@/assets/images/caret-down.png" width="15px">
            <img class='when-open' src="@/assets/images/caret-arrow-up.png" width="15px">
        </div>
    </b-container>
</template>
<script>

export default {
    props:['hourlyInfo','day'],

    data(){
        return{
            tweleItems:[],
            collapsible: false,
            isCollapsed:true
        }
    },
    created(){
        this.updateData();
    },
    watch:{
        hourlyInfo: function(){
            this.updateData();
        }
    },
    methods:{
        updateData: function(){
            this.tweleItems.length = 0;
            if (this.hourlyInfo.hourly.length > 12) {
                this.collapsible = true;
                for (let i = 0; i < 12; i++) {
                    this.tweleItems[i] = this.hourlyInfo.hourly[i];             
                }
            } else {
                this.collapsible = false;
                for (let i = 0; i < this.hourlyInfo.hourly.length; i++) {
                    this.tweleItems[i] = this.hourlyInfo.hourly[i];             
                }
            }
        },
        checkHide: function(){
            this.isCollapsed = true;
        },
        checkShow: function(){
            this.isCollapsed = false;
        }
    }
    
}
</script>
<style scoped>
p{
    font-size: 0.7em;
    font-weight: 600;
}
#collapse-container{
    text-align: center;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
:focus {
    outline:0 !important;
}

</style>