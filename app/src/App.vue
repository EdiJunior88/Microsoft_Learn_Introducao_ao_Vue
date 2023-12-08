<script setup lang="js">
let productImage = 'src/assets/cruise.jpg'
let productImageDescription =
  'Um astronauta flutua do lado de fora da janela enquanto você se senta confortavelmente'
let productImageStyle = { 'border-radius': '15px' }

let productName = 'Reserve um cruzeiro para a Lua'
let productDescription =
  'Faça um cruzeiro até a lua em nosso luxuoso ônibus espacial. Veja os astronautas trabalhando do lado de fora da Estação Espacial Internacional'
</script>

<template>
  <div class="nav-bar"></div>
  <h1>Excursões pela Galáxia da Relecloud</h1>
  <h2>{{ productName }}</h2>
  <div>{{ productDescription }}</div>
  <img :src="productImage" :alt="productImageDescription" :style="productImageStyle" />
</template>

<style lang="css" scoped></style>
