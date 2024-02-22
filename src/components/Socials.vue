<script setup>
import IconGitHub from './icons/IconGitHub.vue';
import IconLinkedIn from './icons/IconLinkedIn.vue';
import IconMailSocial from './icons/IconMailSocial.vue';
import { useColorThemeStore } from '@/stores/colorThemeStore';
const store = useColorThemeStore()
</script>

<template>
    <div class="socials">
        <IconLinkedIn style="font-size: 1.1rem" :style="{ color: store.getColorTheme.socials }" />
        <IconMailSocial style="font-size: 1.1rem" :style="{ color: store.getColorTheme.socials }" />
        <IconGitHub style="font-size: 1.1rem" :style="{ color: store.getColorTheme.socials }" />    
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

}

.socials > *:hover {
    background: none;
}

@media screen and (max-width: 425px) {
    .socials{
        right: 10px;
        top: 70px;
    }
}
</style>