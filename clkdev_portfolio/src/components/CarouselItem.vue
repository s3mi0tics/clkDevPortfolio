<script setup>
import { useImagesStore } from '@/stores/imagesStore';
const imageStore = useImagesStore()

const getImgUrl = (name) => {
    return new URL(`../assets/${name}`, import.meta.url).href;
};

const transitionEffect = () => {
  return imageStore.getDirection === "right" ? "slide-out" : "slide-in"
}

</script>

<template>
    <transition :name="transitionEffect()">
      <div class="carousel-item" v-show="imageStore.getImage">
        <img class="image" :src="getImgUrl(imageStore.getImage)" alt="face profile" :style="imageStore.getImageStyle" />
      </div>
    </transition>     
</template>


<style lang="scss" scoped>
.image {
    height: 86%;
    position: absolute;
    left: 35%;
    transform: translateX(-60%);
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