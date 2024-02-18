<script setup>
import IconHome from './icons/IconHome.vue';
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
            <IconStar class="star" :style="{ fill: colorStore.getColorTheme.star }"/>
            <p class="title-text" :style="{ color: colorStore.getColorTheme.title }">
                {{ pagesStore.getPage.title }}
            </p>
        </div>
        <div class="links">
            <div class="nav-item">
                <div class="icon-stack" @click="pagesStore.changePageById('home')">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                    <IconHome style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />           
                </div> 
                <p class="nav-description">home</p>
            </div>
            <div class="nav-item middle-nav-item">
                <div class="icon-stack" @click="pagesStore.changePageById('biography')">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                    <IconPerson style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />      
                </div> 
                <p class="nav-description">bio</p>
            </div>
            <div class="nav-item">
                <div class="icon-stack" @click="pagesStore.changePageById('portfolio')">
                    <IconCircle style="font-size: 2.75rem;" :style="{ color: colorStore.getColorTheme.area }" />
                    <IconSuitcase style="font-size: 1.5rem" :style="{ color: colorStore.getColorTheme.icon}" />     
                </div> 
                <p class="nav-description">portfolio</p>
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

.middle-nav-item {
    margin: 0 35px 0 43px;
}
.nav {
    position: absolute;
    top: max(8%, 35px);
    width: 90vw;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding-left: 5vw;
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.nav-description {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 20px;
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

@media screen and (max-width: 425px) {
    .nav {
        flex-direction: column-reverse;
        align-items: baseline;
    }
    .title {
        display: none;
    }
    .links {
        justify-content: end;
    }
    .links {
        width: 100%;
        justify-content: center;
        align-items: start;
    }
    .nav {
        position: static;
        top: 54px;
    }
}
@media screen and (max-height: 380px) {
    .title {
        opacity: 0;
    }
}
</style>