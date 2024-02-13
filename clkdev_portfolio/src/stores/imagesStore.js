import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { usePagesStore } from './pagesStore';

const screenshotStyle = 'height: 50%; width: 43.5%; border-radius: 6px; bottom: 30%; box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.2); left: 5%; cursor: pointer;'

const imageSets = {
  home: {
    id: 'home',
    images: [
      {
        img: 'profile.png', 
        alt: 'face profile', 
        style: 'height: 80%; bottom: 0px; left:46%; transform: translateX(calc(-100% + 15px)); cursor: pointer'
      },  
    ],
  },  
  biography: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        style: 'height: 72%; bottom: 0px; left: -15px; cursor: pointer'
      }
    ],
  },
  biography2: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        style: 'height: 72%; bottom: 0px; left: -15px; cursor: pointer'
      }
    ],
  },
  biography3: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        style: 'height: 72%; bottom: 0px; left: -15px; cursor: pointer'
      }
    ],
  },
  biography4: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        style: 'height: 72%; bottom: 0px; left: -15px; cursor: pointer'
      }
    ],
  },
  portfolio: {
    id: 'portfolio',
    images: [
      {
        img: 'opsHome.png',
        alt: 'screenshot showing home page',
        style: screenshotStyle      },
      {
        img: 'opsNewJob.png',
        alt: 'screenshot showing new job modal',
        style: screenshotStyle      },
      {
        img: 'opsJobDetails.png',
        alt: 'screenshot showing job details',
        style: screenshotStyle
      },
      {
        img: 'opsSchedule.png',
        alt: 'screenshot showing the scheduling modal',
        style: screenshotStyle
      }
    ]
  },
}


export const useImagesStore = defineStore('images', () => {
  const pageStore = usePagesStore()
  const imageSet = ref(imageSets["home"])
  const index = ref(0) 
  const direction = ref('slide-out')
  const lastIndex = ref(imageSet.value.images.length - 1)
  const slideInterval = ref(3500)
  
  const getImageSet = computed(() => imageSet.value)
  const getImage = computed(() => imageSet.value.images[index.value])
  const getIndex = computed(() => index.value)
  const getDirection = computed (() => direction.value)
  const getLastIndex = computed (() => lastIndex.value)

  function prevImage (step = -1) {
    const newIndex = index.value > 0 ? index.value + step : lastIndex
    index.value = newIndex
  }

  function _nextImage(step = 1) {
    lastIndex.value = getImageSet.value.images.length -1
    const newIndex = index.value < lastIndex.value ? index.value + step : 0;
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

  watch(
    () => pageStore.getPage.id,
    (newPageId) => {

      // Update imageSet based on newPageId
      imageSet.value = imageSets[newPageId] || imageSets["home"];
      if (lastIndex.value > 0) {
        startSlideTimer()
      }
    }
  );
  
    return {  getImageSet, getImage, getIndex, getDirection, getLastIndex, prevImage, stopSlideTimer, startSlideTimer, switchSlide };
  });
  
