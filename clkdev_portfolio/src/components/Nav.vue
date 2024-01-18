<script setup>

</script>

<template>
    <div class="nav">
        <div class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.729999542236328" height="22.935474395751953" viewBox="85.0 64.0 21.729999542236328 22.935474395751953" preserveAspectRatio="none"> 
                <g>                      	    
                    <defs>                      	      
                        <path id="s-Path_167-26265" d="M98.09661253831736 64.0 L98.02361502722128 71.5475634558616 L104.53542234887644 67.73704914467064 L106.72999948811874 71.84070744029262 L100.14555314288395 75.43118442186514 L106.73 79.16787505482799 L104.5354228607577 83.2711748387422 L98.02361553910255 79.387911700916 L98.09661253831736 86.93547515677761 L93.70602669854611 86.93547515677761 L93.7793820413108 79.387911700916 L87.26793249800328 83.19770933045665 L85.0 79.16787505482799 L91.58480517400542 75.43118442186514 L85.0 71.8407070985274 L87.2679324553465 67.66394214809286 L93.78009758200979 71.54756311409639 L93.70674264981653 64.0 L98.09661253831736 64.0 Z "></path>                      	    
                    </defs>                      	    
                    <g style="mix-blend-mode:normal">                      	      
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#s-Path_167-26265" fill="#1EAAF1" fill-opacity="1.0"></use>                      	    
                    </g>                      	  
                </g>                      	
            </svg>
            <p class="title-text">
                Full-Stack
            </p>
        </div>
        <div class="links svg-container">
                <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle with red fill and black border -->
                    <circle cx="22" cy="22" r="20" fill="#F1F4F6" />
                </svg>
                <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle with red fill and black border -->
                    <circle cx="22" cy="22" r="20" fill="#F1F4F6" />
                </svg>
                <svg width="44" height="44" xmlns="http://www.w3.org/2000/svg">
                    <!-- Circle with red fill and black border -->
                    <circle cx="22" cy="22" r="20" fill="#F1F4F6" />
                </svg>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-item: center;
    position: relative;
    margin-top: 72px;
    margin-left: 65px;
    margin-right: 51px;
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

.links {
    display: flex;
}

.svg-container > * {
    margin-left: 16px;
}


</style>