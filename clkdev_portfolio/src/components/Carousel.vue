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
    <div v-for="(image, index) in imageStore.getImageSet.images" :key="`${image.img}-${index}`">
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
  transform: translateY(-100%);
  opacity: 0;
}

.slide-in-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.slide-out-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-out-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>