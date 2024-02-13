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
  width: 46%;
  height: auto;
  background: #F2F4F6;
  border-radius: 20px 0 0 20px;
}

@media screen and (max-width: 425px) {
  .grey-area {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff0000 0%, #ff0000 25%, #F2F4F6 25%, #F2F4F6 75%, #00ff00 75%, #00ff00 100%);
  }
}
</style>