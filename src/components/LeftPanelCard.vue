<template>
  <div id="left-panel-card" class="neu-up">
    <img :src="require('@/assets/images/' + image)" :alt="info" width="70px">
    <div><span>{{info + suffix}}</span></div>
  </div>
</template>

<script>
export default {
  props: ["info", 'image', 'suffix']
};
</script>

<style scoped>
#left-panel-card{
  margin-left: auto;
  margin-right: auto;
}
div.neu-up{
    max-width: 150px;
    border-radius: 10px;
    margin-top: 30px;
    padding: 5px;
}
img{
  margin-right: auto;
}

span{
    font-size: 1.5em;
    margin-top: 35px;
    font-weight: 600;
    display: block;
}
#left-panel-card div{   
    text-align: right;
}

@media screen and (max-width: 1199px){
  img {
    width: 45px;
  }
  span{
    font-size: 1em;
    margin-top: 20px;
  }
}
@media screen and (max-width: 575px){
  img {
    width: 35px;
  }
  span{
    font-size: 0.8em;
    margin-top: 20px;
  }
  div.neu-up{
    margin-top: 0px;
    max-width: 75px;
}
}
</style>
