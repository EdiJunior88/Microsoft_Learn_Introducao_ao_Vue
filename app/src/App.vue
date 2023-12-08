<script setup lang="js">
const names = ['Susan', 'Peter', 'Bill']
</script>

<template>
  <ul>
    <li v-for="name in names">📌 {{ name }}</li>
  </ul>
</template>

<style lang="css" scoped></style>
