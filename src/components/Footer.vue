<template>
    <div id='a-footer'>
        <div id="divider" class="neu-up"></div>
        
        <b-container style="max-width: 600px">
            <b-row>
                <b-col>
                    <img src="@/assets/logos/side-filled-color.png" alt="logo" width="100px">
                    <p>© {{year}} Ninkat Studio</p>
                </b-col>
                <b-col>
                    <h5>Connect with us!</h5>
                    <div>
                        <a href="https://www.ninkat.com/" target="_blank" rel="noopener noreferrer">
                            <div class="neu-up outer-container">
                                <img src="@/assets/logos/icon-filled-color.png" alt="ninkathome" width="25px">
                            </div>
                        </a>
                        <a href="https://www.facebook.com/ninkatstudio" target="_blank" rel="noopener noreferrer">
                            <div class="neu-up outer-container">
                                <img src="@/assets/logos/facebook.png" alt="fb" width="20px">
                            </div>
                        </a>
                        <a href="https://www.twitter.com/ninkatstudio" target="_blank" rel="noopener noreferrer">
                            <div class="neu-up outer-container">
                                <img src="@/assets/logos/twitter.png" alt="tw" width="20px">
                            </div>
                        </a>
                        <a href="https://www.github.com/hilse" target="_blank" rel="noopener noreferrer">
                            <div class="neu-up outer-container">
                                    <img src="@/assets/logos/github.png" alt="github" width="20px">
                            </div>
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            year: new Date(Date.now()).getFullYear()
        }
    }
}
</script>
<style scoped>
    #a-footer{
        text-align: center;
        margin-bottom: 2%;
    }
    #divider{
        border-radius: 10px;
        max-width: 300px;
        height: 8px;
        margin: 2% auto 10px auto;
    }
    p{
        margin-bottom: 6px;
    }
    h5{
        font-weight: 800;
        margin-top: 10%;
    }
    
    .outer-container{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        padding-top: 6px;
        margin: auto;
    }
    a{
        display: inline-block;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 10px;
    }
    .neu-down{
        
    box-shadow: inset 2px 2px 5px #9e9a92,
            inset -2px -2px 5px #ffffff;
    }
    .neu-up{
    box-shadow:  4px 4px 5px #9e9a92,
                -4px -4px 5px #ffffff;
}

    @media screen and (max-width: 575px){
        p {
            font-size: 0.7em;
        }
        h5{
            font-size: 1em;
        }
    }

</style>