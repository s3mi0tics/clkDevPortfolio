<script setup>
import GreyArea from './GreyArea.vue';
import Nav from './Nav.vue';
import ProfileImage from './ProfileImage.vue';


</script>

<template>
    <div class="card-background">
      <div class="overlay-container">
        <Nav />
      </div>
      <GreyArea />
      <ProfileImage />
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
    width: 1381px;
    height: 100%;
  }
  
  </style>