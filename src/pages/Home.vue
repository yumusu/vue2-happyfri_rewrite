<template>
<div class="home">
    <header class="header_tips">
        <span>第一周</span>
    </header>
    <div class="home_main">
        <div class="home_logo">
        </div>
        <router-link to="/resolve" class="start"></router-link>
    </div>
</div>
</template>

<script>
const homeLogo = require('../images/home_logo.png')
export default {
    name: 'Home',
    data(){
        return {}
    },
    computed: {
        count(){
            return this.$store.state.count;
        }
    }
}
</script>

<style>
.header_tips{
    position: absolute;
    top: -1rem;
    right: 1rem;
    width: 3rem;
    height: 6rem;
    background: url(../images/home_header.png) no-repeat;
    background-size: 100% 100%;
    z-index: 5;
}

.header_tips span{
    position: absolute;
    bottom: 0.85rem;
    right: 0.55rem;
    font-size: 0.5rem;
    color: #a57c50;
    font-weight: bold;
}

.home_logo{
    position: absolute;
    top: 3rem;
    left: 1rem;
    width: 14rem;
    height: 14rem;
    background: url(../images/home_logo.png) no-repeat;
    background-size: 100% 100%;
}

.start{
    position: absolute;
    top: 17rem;
    left: 5rem;
    width: 6rem;
    height: 2.91rem;
    background: url(../images/start.png) no-repeat;
    background-size: 100% 100%;
}
</style>