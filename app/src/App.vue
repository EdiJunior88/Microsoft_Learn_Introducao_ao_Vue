<script setup lang="js">
const name = 'Cheryl'

function displayName() {
  console.log(name)
}
</script>

<template>
  <button @click="displayName">Display name</button>
</template>

<style lang="css" scoped></style>
