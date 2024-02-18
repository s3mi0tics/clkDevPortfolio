
<script setup>
import GreyArea from './GreyArea.vue';
import Nav from './Nav.vue';
import Carousel from './Carousel.vue';
import InfoPanel from './InfoPanel.vue';
import Arrows from './Arrows.vue'
import SelectSize from './SelectSize.vue';
import Socials from './Socials.vue';
import ConnectButton from './ConnectButton.vue';

import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()
</script>

<template>
  <div class="card-background" :style="{ background: colorStore.getColorTheme.card }">
    <GreyArea />
    <Nav />
    <Carousel />
    <div class="stack">
      <InfoPanel />
    </div>
    </div>
</template>
  

<style lang="scss" scoped>
.card-background {
  position: absolute;
  top: 5%;
  width: 95vw;
  min-width: 95vw;
  height: 90vh;
  min-height: max(90vh, fit-content);
  border-radius: 20px;
  box-shadow: 0px 0px 25px rgba(64, 64, 64, 0.2);
}
.stack {
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 108px;
  width: min(388px, 49%);
  height: fit-content;
}
@media screen and (max-width: 425px) {
  .card-background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    width: 100vw;
    min-height: 110%;
    height: 110%;
    border-radius: 0;
    top: -30px;
    align-items: center;
  }

  .stack {
    flex-direction: column-reverse;
    width: 80vw;
    top: 50%; 
    left: 0;
    margin-top: 0px;
    margin-left: 10px;
  }
}
</style>