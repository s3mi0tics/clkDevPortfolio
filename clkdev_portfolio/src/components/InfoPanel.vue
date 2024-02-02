<script setup>
import IconArrowRight from './icons/IconArrowRight.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
import { usePagesStore } from '@/stores/pagesStore';
const colorStore = useColorThemeStore()
const pageStore = usePagesStore()



</script>

<template>
    <div class="info-panel">
        <h2 class="description" :style="{color: colorStore.getColorTheme.paragraph}">
            {{pageStore.getPage.subtitle}}
        </h2>
        <h1 class="heading" :style="{color: colorStore.getColorTheme.title}">
            {{pageStore.getPage.name}}
        </h1>
        <h3 class="paragraph" :style="{color: colorStore.getColorTheme.paragraph}">
            {{pageStore.getPage.paragraph}} <a :style="{color: colorStore.getColorTheme.socials}" href="https://github.com/s3mi0tics/installOps">{{ pageStore.getPage.link }}</a>
        </h3>
        <div class="arrows">
            <div v-if="pageStore.getIndex > 0" class="arrow-left" @click="pageStore.previousPage(pageStore.getPage.id)">
                <IconArrowLeft class="arrow-left" />
            </div>
            <div v-else></div>
            <div v-if="pageStore.getIndex < pageStore.lastPage" class="arrow-right" @click="pageStore.nextPage(pageStore.getPage.id)">
                <IconArrowRight class="arrow-right" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.arrows{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.arrow-right {
    font-size: 2rem;
    color: #8B8D9A;
    cursor: pointer;
    padding-top: 0px;
}
.arrow-left {
    font-size: 2rem;
    color: #8B8D9A;
    cursor: pointer;
}
.description {
    text-transform: uppercase;
    font-family: Poppins, Arial; 
    font-size: 11.25pt;
    font-weight: 400;
    line-height: 21px;
}

.arrow-right {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
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

.paragraph {
    height: 204px;
    color: #8B8D9A;
    text-decoration: none;
    font-family: 'Poppins_20.0.0_google',Arial;
    font-size: 10.5pt;
    font-weight: 400;
    text-transform: none;
    line-height: 23px;
    overflow: hidden;
    overflow-x: hidden;
}

::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: transparent;
}
</style>