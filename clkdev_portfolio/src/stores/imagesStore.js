import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const imageSets = {
  home: {
    id: 'home',
    images: [
      {
        img: 'profile.png', 
        alt: 'face profile', 
        style: 'height: 86%; bottom: 0px; left:17%; cursor: pointer'
      }, 
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        style: 'height: 72%; bottom: 0px; left: -15px; cursor: pointer'
      }
    ],
  },  
  biography: {
    id: 'biography',
    images: ['openArms.png'],
    imgStyle: 'height: 72%; bottom: 0px;'
  },

  portfolio: {
    id: 'portfolio',
    images: ['opsScheduleJob.png'],
    imgStyle: 'height: 50%; border-radius: 3px; bottom: 30%; box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2);'

  },
}


export const useImagesStore = defineStore('images', () => {
  const imageSet = ref(imageSets["home"])
  const index = ref(0) 
  const direction = ref('slide-out')
  const lastIndex = imageSet.value.images.length - 1
  const slideInterval = ref(3500)
  
  const getImageSet = computed(() => imageSet.value)
  const getImage = computed(() => imageSet.value.images[index.value])
  const getIndex = computed(() => index.value)
  const getDirection = computed (() => direction.value)

  function prevImage (step = -1) {
    const newIndex = index.value > 0 ? index.value + step : lastIndex
    index.value = newIndex
  }

  function _nextImage(step = 1) {
    const newIndex = index.value < lastIndex ? index.value + step : 0;
    index.value = newIndex
  }

  function nextImage (step = 1) {
    _nextImage(step)
  }

  function stopSlideTimer () {
    clearInterval(slideInterval.value)
  }

  function startSlideTimer () {
    stopSlideTimer()
    slideInterval.value = 3500
    slideInterval.value = setInterval(() => {
        _nextImage()
    }, slideInterval.value)
  }

  function switchSlide (i) {
    const step = i - index.value
    if (step > 0) {
        nextImage(step)
    }
    else {
        prevImage(step)
    }
  }

  
    return {  getImageSet, getImage, getIndex, getDirection, prevImage, stopSlideTimer, startSlideTimer, switchSlide };
  });
  
