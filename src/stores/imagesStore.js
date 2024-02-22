import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { usePagesStore } from './pagesStore';


const imageSets = {
  home: {
    id: 'home',
    images: [
      {
        img: 'profile.png', 
        alt: 'face profile', 
        class: 'profile',
      },  
    ],
  },  
  biography: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography2: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography3: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography4: {
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  portfolio: {
    id: 'portfolio',
    images: [
      {
        img: 'opsHome.png',
        alt: 'screenshot showing home page',
        class: 'ops-image',
      },
      {
        img: 'opsNewJob.png',
        alt: 'screenshot showing new job modal',
        class: 'ops-image',
      },
      {
        img: 'opsJobDetails.png',
        alt: 'screenshot showing job details',
        class: 'ops-image',
      },
      {
        img: 'opsSchedule.png',
        alt: 'screenshot showing the scheduling modal',
        class: 'ops-image',
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
  
