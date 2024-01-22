<script setup>
import IconArrowRight from './icons/IconArrowRight.vue';


</script>

<template>
    <div class="info-panel">
        <h2 class="description">
            software engineer
        </h2>
        <h1 class="heading">
            Colby Kauk
        </h1>
        <h3 class="paragraph">
            Crafting dynamic, elegent designs that enhance and elevate the experience for you, your users, and all of humanity.
        </h3>
        <div class="money-arrow">
            <div class="money">
            </div>
            <div class="flex-end throb">
                <IconArrowRight class="arrow-right" />
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>

.arrow-right {
    font-size: 2.5rem;
    color: #8B8D9A;
}
.description {
    text-transform: uppercase;
    color: #8d9697;
    font-family: Poppins, Arial; 
    font-size: 11.25pt;
    font-weight: 400;
    line-height: 21px;
}

.flex-end {
    display: flex;
    justify-content: flex-end;
}
.heading {
    text-transform: uppercase;
    color: #000000;
    font-family: Poppins, Ariel;
    font-size: 31.5pt;
    font-weight: 600;
    letter-spacing: 0.5px;
}

.info-panel {
    position: absolute;
    margin-top: 9%;
    margin-left: 58%;
    width: 388px;
}
.money{
    color: #000000;
    text-decoration: none;
    font-family: 'Poppins_20.0.0_google',Arial;
    font-size: 18.75pt;
    font-style: italic;
    font-weight: 700;
    text-transform: none;
    line-height: 31px;
    align-self: flex-end;
}

.money-arrow{
    display: flex;
    justify-content: space-between;
}
.paragraph {
    height: 164px;
    color: #8B8D9A;
    text-decoration: none;
    font-family: 'Poppins_20.0.0_google',Arial;
    font-size: 10.5pt;
    font-weight: 400;
    text-transform: none;
    line-height: 23px;
}

@keyframes throbbing {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.015);
    }
    100% {
        transform: scale(1);
    }
}
.throb {
    animation: throbbing 1s infinite;
}
</style>