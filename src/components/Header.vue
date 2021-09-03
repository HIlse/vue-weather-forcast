<template>
    <div   class="neu-up">
       {{title}}
    </div>
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
    div{
        border-radius: 20px;
        margin: 20px 20px auto;
        padding: 15px 20px;
        font-size: 2rem;
        font-weight: 700;
        display: inline-block;
    }
</style>