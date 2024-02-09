<script setup>
import { usePagesStore } from '@/stores/pagesStore';
const pageStore = usePagesStore()

const getImgUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
};

</script>

<template>
    <div v-for="(item, index) of pageStore.getPage.images" :key="index">
        <img class="image" :src="getImgUrl(item)" alt="face profile" />
    </div>
</template>


<style lang="scss" scoped>
.image {
    height: 86%;
    position: absolute;
    left: 15%;
    bottom: 0px;
}
</style>