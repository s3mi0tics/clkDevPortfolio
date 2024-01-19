<script setup>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
</script>


<template>
   <div class="app">
     <nav>
        <RouterLink to="/">home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
   </div>
  <RouterView />
</template>

<style scoped>
  .app{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>