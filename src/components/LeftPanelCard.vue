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
div.neu-up{
    border-radius: 10px;
    margin-right: 30px;
    padding: 5px;
}
img{
    padding-right: 45px;
}

span{
    font-size: 1.2rem;
    margin-top: 35px;
    font-weight: 600;
    display: block;
}
#left-panel-card div{
    
    text-align: right;
}
</style>
