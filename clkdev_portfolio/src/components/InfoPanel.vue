<script setup>
import Arrows from './Arrows.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
import { usePagesStore } from '@/stores/pagesStore';
import SelectSize from './SelectSize.vue';
import SelectColor from './SelectColor.vue';
const pageStore = usePagesStore()
</script>

<template>
    <div class="info-panel">
        <h2 class="description" :style="{ color: colorStore.getColorTheme.paragraph }">
            {{ pageStore.getPage.subtitle }}
        </h2>
        <h1 class="heading" :style="{ color: colorStore.getColorTheme.title }">
            {{ pageStore.getPage.name }}
        </h1>
        <Arrows />
        <div class="paragraph">
            <h3 class="paragraph-text" :style="{ color: colorStore.getColorTheme.paragraph }">
                {{ pageStore.getPage.paragraph }} <a :style="{ color: colorStore.getColorTheme.socials }"
                    href="https://github.com/s3mi0tics/installOps">{{ pageStore.getPage.link }}</a>
            </h3>
        </div>
        <SelectSize />
        <SelectColor />
    </div>
</template>

<style lang="scss" scoped>

.description {
    text-transform: uppercase;
    font-family: Poppins, Arial;
    font-size: 11.25pt;
    font-weight: 400;
    line-height: 21px;
}

.heading {
    text-transform: uppercase;
    color: #000000;
    font-family: Poppins, Ariel;
    font-size: 31.5pt;
    font-weight: 600;
    letter-spacing: 0.5px;
}


.paragraph {
    height: min(204px, fit-content);
    overflow: hidden;
    overflow-x: hidden;
}

.paragraph-text {
    text-decoration: none;
    font-family: 'Poppins_20.0.0_google', Arial;
    font-size: 10.5pt;
    font-weight: 400;
    text-transform: none;
    line-height: 23px;
    height: max(204px, fit-content);
}

::-webkit-scrollbar-track {
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    background-color: transparent;
}

@media screen and (max-width: 425px) {

    .description {
        font-size: 0.7rem;
    }

    .heading {
        font-size: 2rem;
    }

    .paragraph {
        font-size: 0.66rem;
    }

    .info-panel {
        width: 70vw;
    }
}
</style>