<script setup>
import { useColorThemeStore } from '@/stores/colorThemeStore';
const store = useColorThemeStore()

</script>

<template>
    <div class="grey-area" :style="{ background: store.getColorTheme.area }">
    </div>
</template>


<style lang="scss" scoped>
.grey-area {
  position: absolute;
  width: 46%;
  height: 90vh;
  min-height: max(90vh, 550px);
  background: #F2F4F6;
  border-radius: 20px 0 0 20px;
}

@media screen and (max-width: 425px) {
  .grey-area {
    position: absolute;
    min-height: 600px;
    height: 600px;
    width: 100vw;
    transform: skewY(20deg) translateY(calc(-380px));
    border-radius: 0;
  }
}
</style>
