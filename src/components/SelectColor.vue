<script setup>
import IconCircle from './icons/IconCircle.vue';
import IconCheck from './icons/IconCheck.vue'
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
</script>

<template>
    <div class="select-color">
        <div>
            <h3 class="text">Select Color</h3>
        </div>
        <div class="color-icons">
            <div class="icon-stack" @click="colorStore.changeColorTheme('dark')">
                <IconCircle class="icon-circle" style="color: #1d1f20;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'dark'" class="icon-check" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('blue')">
                <IconCircle class="icon-circle" style="color: #6ec8f0;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'blue'" class="icon-check" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('mint')">
                <IconCircle class="icon-circle" style="color: #98FFD3;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'mint'" class="icon-check" style="color: #434343;" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('light')">
                <IconCircle class="icon-circle" style="color: #F2F4F6;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'light'" class="icon-check" style="color: #434343;" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.icon-circle {
    font-size: 2.5rem;
}

.icon-check {
    font-size: 1.75rem;
    color: white;
} 
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
.color-icons {
    display: flex;

}
.select-color {
    margin-top: 40px;
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

.fe-block {
    background: black;
}
.fe-block > * {
    text-align: start;
    color: white;
}

@media screen and (max-width: 425px) {
    .select-color {
        margin-top: 0px;
    }
    .text {
        display: none;
    }
    .icon-circle {
        font-size: 1.75rem;
    }
    .icon-check {
        font-size: 1.3rem;
    }
    .icon-stack {
    margin-left: 10px;
    margin-right: 30px 
}
}
</style>
