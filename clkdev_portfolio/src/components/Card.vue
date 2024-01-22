<script setup>
import GreyArea from './GreyArea.vue';
import InfoPanel from './InfoPanel.vue';
import Nav from './Nav.vue';
import ProfileImage from './ProfileImage.vue';
import SelectSize from './SelectSize.vue';
import Socials from './Socials.vue';



</script>

<template>
    <div class="card-background">
      <div class="overlay-container">
        <Nav />
      </div>
      <GreyArea />
      <ProfileImage />
      <Socials />
      <InfoPanel />
      <SelectSize />
    </div>
</template>
  
  
  <style lang="scss" scoped>
  .card-background {
    display: flex;
    position: relative;
    width: 1381px;
    height: 847px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 0px 25px rgba(64, 64, 64, 0.2);

  }
  
  .overlay-container {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  </style>