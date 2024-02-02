<script setup>
import IconCircle from './icons/IconCircle.vue';
import IconCheck from './icons/IconCheck.vue'
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
console.log(colorStore.getColorTheme)
</script>

<template>
    <div class="select-color">
        <div>
            <h3 class="text">Select Color</h3>
        </div>
        <div class="color-icons">
            <div class="icon-stack" @click="colorStore.changeColorTheme('dark')">
                <IconCircle style="font-size: 2.5rem; color: #1d1f20;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'dark'" class="check" style="font-size:1.75rem" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('blue')">
                <IconCircle style="font-size: 2.5rem; color: #6ec8f0;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'blue'" class="check" style="font-size:1.75rem" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('mint')">
                <IconCircle style="font-size: 2.5rem; color: #98FFD3;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'mint'" class="check" style="font-size:1.75rem; color: #434343;" />
            </div>
            <div class="icon-stack" @click="colorStore.changeColorTheme('light')">
                <IconCircle style="font-size: 2.5rem; color: #F2F4F6;"/>
                <IconCheck v-show="colorStore.getColorTheme.theme === 'light'" class="check" style="font-size:1.75rem; color: #434343;" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.check {
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

.icon {
    color: #434343;
}

.color-icons {
    display: flex;

}
.select-color {
    position: absolute;
    margin-top: 41%;
    margin-left: 58%;
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

.fe-block {
    background: black;
}
.fe-block > * {
    text-align: start;
    color: white;
}
</style>
