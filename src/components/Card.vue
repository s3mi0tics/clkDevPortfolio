
<script setup>
import GreyArea from './GreyArea.vue';
import Nav from './Nav.vue';
import Carousel from './Carousel.vue';
import InfoPanel from './InfoPanel.vue';
import Socials from './Socials.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const colorStore = useColorThemeStore()

</script>

<template>
  <div class="card-background" :style="{ background: colorStore.getColorTheme.card }">
    <GreyArea />
    <div class="card-nav">
      <Nav />
    </div>
    <div class="card-carousel">
      <Carousel />
    </div>
    <div class="card-info">
      <InfoPanel />
    </div>
    <Socials />
  </div>
</template>
  

<style lang="scss" scoped>
.card-background {
  position: relative;
  top: 5%;
  width: 95vw;
  min-width: max(95vw, 610px);
  height: 90vh;
  min-height: max(90vh, 660px);
  border-radius: 20px;
  box-shadow: 0px 0px 25px rgba(64, 64, 64, 0.2);
  margin-top: 5vh;
  margin-bottom: 5vh;
}

.card-nav {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: max(8vh, 40px);
  width: 90vw;
}
.card-info {
  margin-top: max(8vh, 94px);
  margin-left: 50%;
  width: min(388px, 45%);
  height: fit-content;
}



@media screen and (max-width: 425px) {
  .card-background {
    min-width: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0;
    align-items: center;
    box-shadow: none;
  }

  .stack {
    flex-direction: column-reverse;
    width: 80vw;
    top: 50%; 
    left: 0;
    margin-top: 0px;
    margin-left: 10px;
  }
  .card-info{
    position: static;
    min-width: 95vw;
    margin-top: 0;
    margin-left: 0;
  }

  .card-nav {
    position: static;
  }
  .card-carousel {
    position: static;
    margin-top: -20px;
    height: 200px;
  }
}
@media screen and (max-width: 1000px) {
    .card-nav {
      top: 40px;
    }
  }
@media screen and (max-width: 870px) {
    .card-background {
      min-height: 810px;
    }
  }

</style>