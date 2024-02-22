
<script setup>
import IconMail from './icons/IconMail.vue';


</script>

<template>
<button id="connect-button">
    <IconMail  class="me-2" style="font-size: 1.25rem" />
    <div class="h7">Connect with me!</div>
</button>
</template>

<style lang="scss" scoped>

#connect-button {
    width: 233px;
    height: 48px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
    font-family: 'Poppins', Arial;
    font-size: 10.5pt;
    font-weight: 400;
    text-transform: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.h7 {
    font-size: 0.5;
}

</style>
