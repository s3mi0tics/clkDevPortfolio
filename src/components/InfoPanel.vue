<script setup>
import Arrows from './Arrows.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
import { usePagesStore } from '@/stores/pagesStore';
import SelectColor from './SelectColor.vue';
import ConnectButton from './ConnectButton.vue';
const pageStore = usePagesStore()
console.log(pageStore.getPage.link)
</script>

<template>
    <div class="info">
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
                    {{ pageStore.getPage.paragraph }} 
                    <a target="_blank" v-if="pageStore.getPage.link" :style="{ color: colorStore.getColorTheme.socials }"
                        :href="pageStore.getPage.link">Explore the code here</a>
                </h3>
            </div>
        </div>
        <div class="select-size">
        </div>
        <div class="select-color">
            <SelectColor />
        </div>
        <div class="connect-button">
            <ConnectButton />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.connect-button {
    margin-top: 50px;
}

.description {
    text-transform: uppercase;
    font-family: 'Poppins', Arial;
    font-size: 11.25pt;
    font-weight: 400;
    font-style: normal;
    line-height: 21px;
}

.heading {
    text-transform: uppercase;
    color: #000000;
    font-family: 'Poppins', Ariel;
    font-size: 31.5pt;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.5px;
}

.paragraph {
    height: min(204px, fit-content);
    overflow: hidden;
    overflow-x: hidden;
}

.paragraph-text {
    text-decoration: none;
    font-family: 'Poppins', Arial;
    font-size: 10.5pt;
    font-weight: 400;
    font-style: normal;
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
    .connect-button {
        margin-top: 25px;
        align-self: center;
    }

    .description {
        font-size: 0.9rem;
        margin-top: 40px;
    }

    .heading {
        font-size: 2rem;
        margin-top: 0px;
    }

    .paragraph {
        font-size: 0.66rem;
    }

    .info {
        width: 90vw;
        display: flex;
        flex-direction: column-reverse;
    }

    .info-panel {
        margin-top: 30px;
    }

    .select-color {
        margin-top: 10px;
    }
}</style>