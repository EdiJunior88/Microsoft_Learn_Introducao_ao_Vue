<script setup lang="js">
const names = ['Susan', 'Peter', 'Bill']
</script>

<template>
  <ul>
    <li v-for="(name, index) in names" :key="index">📌 {{ name }}</li>
  </ul>
</template>

<style lang="css" scoped></style>
