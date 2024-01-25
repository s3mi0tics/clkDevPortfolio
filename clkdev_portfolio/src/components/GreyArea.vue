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
    height: 100%;
    background: #F2F4F6;
    border-radius: 20px 0 0 20px;

}
</style>