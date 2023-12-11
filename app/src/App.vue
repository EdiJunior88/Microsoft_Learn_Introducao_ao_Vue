<script setup lang="js"></script>

<template>
  <div v-if="new Date().getMonth() < 3">É o primeiro trimestre</div>
  <div v-if="new Date().getMonth() < 6">É o segundo trimestre</div>
  <div v-if="new Date().getMonth() < 9">É o terceiro trimestre</div>
  <div>É o quarto trimestre</div>
</template>

<style lang="css" scoped></style>
