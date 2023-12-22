<script setup lang="js">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="logo">
    <img alt="Vue logo" src="./assets/logo.png" />
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<style lang="css" scoped>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
}

.logo {
  display: flex;
  justify-content: center;
}
</style>
