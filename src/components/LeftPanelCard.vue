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
</style>
