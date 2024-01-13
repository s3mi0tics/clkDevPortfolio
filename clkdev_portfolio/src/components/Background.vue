<script setup>
    const dynamicStyles = {
        bgColor: '#000000',
        width: '1381px',
        height: '847px',
        borderRadius: '20px',
        boxShadow: '0px, 0px, 25px rgba(64,64,64,0.2)',
    }
</script>

<template>
    <div>

    </div>
</template>



<style lang="scss" scoped>
    div {
        background-color: v-bind('dynamicStyles.bgColor');
        width: v-bind('dynamicStyles.width');
        height: v-bind('dynamicStyles.height');
        border-radius: v-bind('dynamicStyles.borderRadius');
        box-shadow: v-bind('dynamicStyles.boxShadow');
    }
</style>