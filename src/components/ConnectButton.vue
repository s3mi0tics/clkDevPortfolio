
<script setup>
import IconMail from './icons/IconMail.vue';


</script>

<template>
    <a class="anchor" href="mailto:colby.kauk@gmail.com">
        <button id="connect-button">
            <IconMail  class="me-2" style="font-size: 1.25rem" />
            <div class="h7">Connect with me!</div>
        </button>
    </a>
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
    font-style: normal;
    text-transform: none;
    display: flex;
    justify-content: center;
    align-items: center;


}


.h7 {
    font-size: 1rem;
    margin-left: 5px;

}
.anchor {
    text-decoration: none; 
    display: inline-block;
}

</style>
