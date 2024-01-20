<script setup>
import IconMail from './icons/IconMail.vue';
import IconPerson from './icons/IconPerson.vue';
import IconStar from './icons/IconStar.vue';
import IconCircle from './icons/IconCircle.vue';
import IconSuitcase from './icons/IconSuitcase.vue';


</script>

<template>
    <div class="nav">
        <div class="title">
            <IconStar />
            <p class="title-text">
                Full-Stack
            </p>
        </div>
        <div class="links">
                <div class="icon-stack mx-3">
                    <IconCircle style="font-size: 2.75rem; color: #F1F4F6" />
                    <IconMail style="font-size: 1.5rem" />           
                </div> 
                <div class="icon">
                    <div class="icon-stack mx-5">
                        <IconCircle style="font-size: 2.75rem; color: #F1F4F6" />
                        <IconPerson style="font-size: 1.5rem" />      
                    </div> 
                </div>
               

                <div class="icon-stack ms-3">
                    <IconCircle style="font-size: 2.75rem; color: #F1F4F6" />
                    <IconSuitcase style="font-size: 1.5rem" />     
                </div> 
        </div> 
    </div>
</template>


<style lang="scss" scoped>

.icon {
    position: relative;
}
.icon-stack {
    position: relative;
    // margin-right: 60px;
}
.icon-stack > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.links {
    display: flex;
}
.nav {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin-top: 4.4%;
    margin-left: 5%;
    margin-right: 4.2%;
    font-size: 23px;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
}
.title {
    margin: 12px;
    display: flex;
    align-items: baseline;
}

.title-text {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-left: 12px;
}

</style>