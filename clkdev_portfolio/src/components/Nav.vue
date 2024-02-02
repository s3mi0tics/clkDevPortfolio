<script setup>
import IconMail from './icons/IconMail.vue';
import IconPerson from './icons/IconPerson.vue';
import IconStar from './icons/IconStar.vue';
import IconCircle from './icons/IconCircle.vue';
import IconSuitcase from './icons/IconSuitcase.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
import { usePagesStore } from '@/stores/pagesStore';
const colorStore = useColorThemeStore()
const pagesStore = usePagesStore()

</script>

<template>
    <div class="nav">
        <div class="title">
            <IconStar :style="{ fill: colorStore.getColorTheme.star }"/>
            <p class="title-text" :style="{ color: colorStore.getColorTheme.title }">
                {{ pagesStore.getPage.title }}
            </p>
        </div>
        <div class="links">
            <a href="mailto:colby.kauk@gmail.com">
                <div class="icon-stack mx-3">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                    <IconMail style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />           
                </div> 
            </a>
            <div class="icon-stack mx-5" @click="pagesStore.changePageById('biography')">
                <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                <IconPerson style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />      
            </div> 
            <div class="icon-stack ms-3" @click="pagesStore.changePageById('portfolio')">
                <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                <IconSuitcase style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />     
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
    text-transform: capitalize;
}

.title-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-left: 12px;
}

</style>