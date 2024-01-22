<script setup>
import IconGitHub from './icons/IconGitHub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconMailSocial from './icons/IconMailSocial.vue';
</script>

<template>
    <div class="socials">
        <IconLinkedIn style="font-size: 1.1rem"/>
        <IconMailSocial style="font-size: 1.1rem"/>
        <IconGitHub style="font-size: 1.1rem"/>    
    </div>
</template>



<style lang="scss" scoped>
.socials {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 3.76%;
    bottom: 4%;
}
.socials > * {
    margin-top: 12px;
    color: #000000;
}

.socials > *:hover {
    background: none;
}
</style>