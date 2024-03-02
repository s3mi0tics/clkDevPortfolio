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
    id: 'biography',
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography2: {
    id: 'biography2',
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography3: {
    id: 'biography3',
    images: [
      {
        img: 'openArms.png', 
        alt: 'photo of open arms',
        class: 'open-arms',
      }
    ],
  },
  biography4: {
    id: 'biography4',
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
        class: 'screenshot',
      },
      {
        img: 'opsNewJob.png',
        alt: 'screenshot showing new job modal',
        class: 'screenshot',
      },
      {
        img: 'opsJobDetails.png',
        alt: 'screenshot showing job details',
        class: 'screenshot',
      },
      {
        img: 'opsSchedule.png',
        alt: 'screenshot showing the scheduling modal',
        class: 'screenshot',
      }
    ]
  },
  portfolio3: {
    id: 'portfolio3',
    images: [
      {
        img: 'admin_dashboard.png',
        alt: 'screenshot showing admin dashboard with charts graphs and tables',
        class: 'screenshot'
      },
      {
        img: 'admin_products.png',
        alt: 'screenshot showing products',
        class: 'screenshot'
      },
      {
        img: 'admin_daily_sales.png',
        alt: 'screenshot showing daily sales graph',
        class: 'screenshot'
      },
      {
        img: 'admin_monthly_sales.png',
        alt: 'screenshot showing monthly sales graph',
        class: 'screenshot'
      },
      {
        img: 'admin_performance.png',
        alt: 'screenshot showing performance table',
        class: 'screenshot'
      },
      {
        img: 'admin_pie_chart.png',
        alt: 'screenshot showing breakdown with a pie chart',
        class: 'screenshot'
      }
    ]
  }
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
  
