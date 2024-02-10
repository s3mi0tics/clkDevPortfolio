<script setup>
import { useImagesStore } from '@/stores/imagesStore';
const imageStore = useImagesStore()
console.log(imageStore.getIndex)

const getImgUrl = (name) => {
    const imgUrl = new URL(`../assets/${name}`, import.meta.url).href;
    console.log(imgUrl)
    return new URL(`../assets/${name}`, import.meta.url).href;
};


</script>

<template>
    <div v-if="imageStore.getImageSet.images.length === 1">
        <img class="image" :src="getImgUrl(imageStore.getImageSet.images[0].img)" :alt="imageStore.getImageSet.images[0].alt" :style="imageStore.getImageSet.images[0].style"/>
    </div>    
    <div v-else v-for="(image, index) in imageStore.getImageSet.images" :key="`${image.img}-${index}`">
        <transition :name="imageStore.getDirection">
            <img 
                v-show="index === imageStore.getIndex" 
                class="image" :src="getImgUrl(image.img)" 
                :alt="image.alt" 
                :style="image.style"
                @mouseenter="imageStore.stopSlideTimer()"
                @mouseout="imageStore.startSlideTimer()"
            /> 
        </transition>
    </div>
</template>


<style lang="scss" scoped>
.image {
    position: absolute;
}

.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}

.slide-in-enter-from {
  transform: translateX(-100%)
}

.slide-in-leave-to {
  transform: translateX(100%)
}

.slide-out-enter-from {
  transform: translateX(100%)
}

.slide-out-leave-to {
  transform: translateX(-100%)
}
</style>