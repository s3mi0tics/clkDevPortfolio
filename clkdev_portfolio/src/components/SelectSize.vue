<script setup>
import IconComputer from './icons/IconComputer.vue';

import IconSquare from './icons/IconSquare.vue';
import IconLaptop from './icons/IconLaptop.vue';
import IconTablet from './icons/IconTablet.vue';
import IconPhone from './icons/IconPhone.vue';

import IconWatch from './icons/IconWatch.vue';

</script>

<template>
    <div class="select-size">
        <div>
            <h3 class="text">Select Size</h3>
        </div>
        <div class="size-icons">
            <div class="icon-stack">
                <IconSquare class="square" style="font-size: 2.5rem;"/>
                <IconComputer />
            </div>
            <div class="icon-stack">
                <IconSquare class="square" style="font-size: 2.5rem;"/>
                <IconLaptop class="icon"/>
            </div>
            <div class="icon-stack">
                <IconSquare class="square" style="font-size: 2.5rem;"/>
                <IconTablet class="icon"/>
            </div>
            <div class="icon-stack">
                <IconSquare class="square" style="font-size: 2.5rem;"/>
                <IconPhone class="icon"/>
            </div>
            <div class="icon-stack">
                <IconSquare class="square" style="font-size: 2.5rem;"/>
                <IconWatch class="icon"/>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.icon-stack {
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 39px
    
}
.icon-stack > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.icon {
    color: #434343;
}

.size-icons {
    display: flex;

}
.select-size {
    position: absolute;
    margin-top: 33.5%;
    margin-left: 58%;
}
.square {
    color: #cccccc
}
.text {
    color: #000000;
    text-decoration: none;
    font-family: Poppins, Arial;
    font-size: 10.5pt;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: none;
    line-height: 23px;
}
</style>

