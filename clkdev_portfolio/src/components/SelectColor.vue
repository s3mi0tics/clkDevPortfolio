<script setup>
import IconCircle from './icons/IconCircle.vue';
import IconCheck from './icons/IconCheck.vue'

</script>

<template>
    <div class="select-color">
        <div>
            <h3 class="text">Select Color</h3>
        </div>
        <div class="color-icons">
            <div class="icon-stack">
                <IconCircle style="font-size: 2.5rem; color: #1d1f20;"/>
                <IconCheck class="check" style="font-size:1.75rem" />
            </div>
            <div class="icon-stack">
                <IconCircle style="font-size: 2.5rem; color: #6ec8f0;"/>
                <IconCheck class="check" style="font-size:1.75rem" />
            </div>
            <div class="icon-stack">
                <IconCircle style="font-size: 2.5rem; color: #98FFD3;"/>
                <IconCheck class="check" style="font-size:1.75rem; color: #434343;" />
            </div>
            <div class="icon-stack">
                <IconCircle style="font-size: 2.5rem; color: #F2F4F6;"/>
                <IconCheck class="check" style="font-size:1.75rem; color: #434343;" />
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.check {
    color: white;
}
.icon-stack {
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    margin-right: 39px
    
}
.icon-stack > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.icon {
    color: #434343;
}

.color-icons {
    display: flex;

}
.select-color {
    position: absolute;
    margin-top: 40%;
    margin-left: 58%;
}
.text {
    color: #000000;
    text-decoration: none;
    font-family: Poppins, Arial;
    font-size: 10.5pt;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: none;
    line-height: 23px;
}
</style>
