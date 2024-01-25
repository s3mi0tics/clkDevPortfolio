<script setup>
import IconMail from './icons/IconMail.vue';
import IconPerson from './icons/IconPerson.vue';
import IconStar from './icons/IconStar.vue';
import IconCircle from './icons/IconCircle.vue';
import IconSuitcase from './icons/IconSuitcase.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const store = useColorThemeStore()

</script>

<template>
    <div class="nav">
        <div class="title">
            <IconStar :style="{ fill: store.getColorTheme.star }"/>
            <p class="title-text" :style="{ color: store.getColorTheme.title }">
                Full-Stack
            </p>
        </div>
        <div class="links">
                <div class="icon-stack mx-3">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: store.getColorTheme.area }" />
                    <IconMail style="font-size: 1.5rem" :style="{ color: store.getColorTheme.icon}" />           
                </div> 
                <div class="icon">
                    <div class="icon-stack mx-5">
                        <IconCircle style="font-size: 2.75rem;" :style="{ color: store.getColorTheme.area }" />
                        <IconPerson style="font-size: 1.5rem" :style="{ color: store.getColorTheme.icon}" />      
                    </div> 
                </div>
                <div class="icon-stack ms-3">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: store.getColorTheme.area }" />
                    <IconSuitcase style="font-size: 1.5rem" :style="{ color: store.getColorTheme.icon}" />     
                </div> 
        </div> 
    </div>
</template>


<style lang="scss" scoped>

.icon {
    position: relative;
}
.icon-stack {
    position: relative;
    // margin-right: 60px;
}
.icon-stack > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.links {
    display: flex;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin-top: 4.4%;
    margin-left: 5%;
    margin-right: 4.2%;
    font-size: 23px;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
}
.title {
    margin: 12px;
    display: flex;
    align-items: baseline;
}

.title-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-left: 12px;
}

</style>