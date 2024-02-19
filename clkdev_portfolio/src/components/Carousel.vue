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
                :class="image.class"
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


// images------------------------
.profile {
  height: 80%; 
  max-height: min(50vw, 80vh);
  min-height: max(30vw, 50vh, 340px);
  bottom: 0px;
  left:46%; 
  transform: translateX(calc(-100% + 15px)); 
}

.open-arms {
  height: 72%; 
  max-height: min(50vw, 80vh);
  min-height: max(30vw, 50vh);
  bottom: 0px;
  left: 50%;
  transform: translateX(calc(-100% + 15px)); 
}

.ops-image {
  height: 50%; 
  width: 43.5%; 
  border-radius: 6px; 
  bottom: 30%; 
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2); left: 5%; 
  cursor: pointer;
  transform: translateX(-20px)
}

// transitions------------------

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

@media screen and (max-width: 425px) {
  .image {
    position: static;
    top: 0;
    min-height: 200px;
    height: 300px;
    left: 20%;


  }
  // images---------------------------
  .profile {
    transform: translateX(-15px);
    border-radius: 30px;
  }
  .open-arms {
    transform: translateX(-0px);
    border-radius: 50px;
}

  // transitions----------------------
  .slide-in-enter-active,
  .slide-in-leave-active,
  .slide-out-enter-active,
  .slide-out-leave-active {
    transition: all 1s ease-in-out;
  }

  .slide-in-enter-from {
    transform: translateX(-100%);
    opacity: 0;
  }

  .slide-in-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-out-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-out-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
</style>