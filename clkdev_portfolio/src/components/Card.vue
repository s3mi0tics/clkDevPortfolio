<script setup>
import GreyArea from './GreyArea.vue';
import InfoPanel from './InfoPanel.vue';
import Nav from './Nav.vue';
import Carousel from './Carousel.vue';
import SelectSize from './SelectSize.vue';
import SelectColor from './SelectColor.vue'
import Socials from './Socials.vue';
import ConnectButton from './ConnectButton.vue';

import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
</script>

<template>
    <div class="card-background" :style="{ background: colorStore.getColorTheme.card }">
      <div class="overlay-container">
        <Nav />
      </div>
      <GreyArea />
      <Carousel />
      <Socials />
      <div class="info-column">
        <InfoPanel />
        <SelectSize />
        <SelectColor />
        <ConnectButton />
      </div>
    </div>
</template>
  
  
  <style lang="scss" scoped>
  .card-background {
    display: flex;
    position: relative;
    top: 5%;
    min-width: 95vw;
    height: 95vh;
    min-height: 715px;
    border-radius: 20px;
    box-shadow: 0px 0px 25px rgba(64, 64, 64, 0.2);
  }
  .info-column {
    align-items: center;
    position: absolute;
    left: 46%;
    transform: translateX(120px)
  }
  .overlay-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  @media screen and (min-width: 601px) and (max-width: 767px) {
    .card-background {
      min-width: 95vh;
      min-height: 600px; /* Adjust max-width for tablet screens */
    }
  }

@media screen and (min-width: 769px) and (max-width: 1024px){
  .info-column {
    transform: translateX(5px)
  }
}

  </style>