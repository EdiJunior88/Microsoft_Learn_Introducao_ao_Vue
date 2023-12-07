<script setup>
import { reactive } from 'vue'

const styleObject = reactive({
  'background-color': 'red'
})
</script>

<template>
  <div :style="styleObject">Olá, Vue!</div>
</template>

<style lang="css" scoped>
.centered {
  display: flex;
}

.active {
  display: flex;
  justify-content: center;
}
</style>
