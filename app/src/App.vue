<script setup>
import { reactive } from 'vue'

const classObject = reactive({
  centered: true,
  active: true
})
</script>

<template>
  <div :class="classObject">Olá, Vue!</div>
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
