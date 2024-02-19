<script setup>
import IconArrowRight from './icons/IconArrowRight.vue';
import IconArrowLeft from './icons/IconArrowLeft.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
import { usePagesStore } from '@/stores/pagesStore';
const pageStore = usePagesStore()
</script>

<template>
    <div class="arrows">
        <div v-if="pageStore.getIndex > 0" @click="pageStore.previousPage(pageStore.getPage.id)">
            <IconArrowLeft class="arrow-left" :style="{ color: colorStore.getColorTheme.star }"/>
        </div>
        <div v-else></div>
        <div v-if="pageStore.getIndex < pageStore.lastPage" @click="pageStore.nextPage(pageStore.getPage.id)">
            <IconArrowRight class="arrow-right" :style="{ color: colorStore.getColorTheme.star }"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.arrows {
    top: 0;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.arrow-right {
    cursor: pointer;

}

.arrow-left {
    cursor: pointer;

}


</style>