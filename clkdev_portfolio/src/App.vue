<script setup>
const dynamicStyles = {
    bgcolor: '#F6F7F8'
}
</script>

<template>
    <div class="app">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>

  <RouterView />
</template>


<style lang="scss" scoped>
div {
    background-color: v-bind('dynamicStyles.bgcolor');
}
</style>