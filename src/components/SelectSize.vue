<script setup>
import IconComputer from './icons/IconComputer.vue';

import IconSquare from './icons/IconSquare.vue';
import IconLaptop from './icons/IconLaptop.vue';
import IconTablet from './icons/IconTablet.vue';
import IconPhone from './icons/IconPhone.vue';
import IconWatch from './icons/IconWatch.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const store = useColorThemeStore()

</script>

<template>
    <div class="select-size">
        <div>
            <h3 class="text">Select Size</h3>
        </div>
        <div class="size-icons">
            <div class="icon-stack">
                <IconSquare class="square" :style="{ color: store.getColorTheme.star}" />
                <IconComputer class="svg" :style="{ fill: store.getColorTheme.socials}" />
            </div>
            <div class="icon-stack">
                <IconSquare class="square" :style="{ color: store.getColorTheme.star}" />
                <IconLaptop class="svg" :style="{ fill: store.getColorTheme.socials}" />
            </div>
            <div class="icon-stack">
                <IconSquare class="square" :style="{ color: store.getColorTheme.star}" />
                <IconTablet class="svg" :style="{ fill: store.getColorTheme.socials}" />
            </div>
            <div class="icon-stack">
                <IconSquare class="square" :style="{ color: store.getColorTheme.star}" />
                <IconPhone class="svg" :style="{ fill: store.getColorTheme.socials}" />
            </div>
            <div class="icon-stack">
                <IconSquare class="square" :style="{ color: store.getColorTheme.star}" />
                <IconWatch class="svg" :style="{ fill: store.getColorTheme.socials}" />
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
.size-icons {
    display: flex;

}
.select-size {
    margin-top: 30px;
}
.square {
    font-size: 2.5rem;
}
.text {
    color: #000000;
    text-decoration: none;
    font-family: Poppins, Arial;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: none;
    line-height: 23px;
}

@media screen and (max-width: 425px) {
    .icon-stack {
    margin-left: 10px;
    margin-top: 20px;
    margin-right: 30px
    
}
    .square {
        font-size: 2rem;
    }
    .text{
        display: none;
    }

    .svg {
        height: 14px;
        width: auto;
        stroke-width: 15px;
    }
}

@media screen and (max-height: 630px) {
  .text {
        display: none
    }
}
</style>

