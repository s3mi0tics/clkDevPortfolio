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
      <InfoPanel />
      <SelectSize />
      <SelectColor />
      <ConnectButton />
    </div>
</template>
  
  
  <style lang="scss" scoped>
  .card-background {
    display: flex;
    position: relative;
    width: 1381px;
    height: 847px;
    border-radius: 20px;
    box-shadow: 0px 0px 25px rgba(64, 64, 64, 0.2);

  }
  
  .overlay-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  </style>