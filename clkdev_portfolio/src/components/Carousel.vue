<script setup>
import { usePagesStore } from '@/stores/pagesStore';
const pageStore = usePagesStore()

const getImgUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
};

</script>

<template>
        <img class="image" :src="getImgUrl(pageStore.getPage.photo)" alt="face profile" />
</template>


<style lang="scss" scoped>
.image {
    height: 86%;
    position: absolute;
    left: 15%;
    bottom: 0px;
}
</style>