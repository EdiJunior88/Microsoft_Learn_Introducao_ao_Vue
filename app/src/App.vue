<script setup lang="js">
import productImage from '@/assets/cruise.jpg'

let productImageDescription =
  'Um astronauta flutua do lado de fora da janela enquanto você se senta confortavelmente'
let productImageStyle = { 'border-radius': '15px' }

let productName = 'Reserve um cruzeiro para a Lua'
let productDescription =
  'Faça um cruzeiro até a lua em nosso luxuoso ônibus espacial. Veja os astronautas trabalhando do lado de fora da Estação Espacial Internacional'

let productClasses = [
  {
    nome: 'Econômica',
    preco: 125000,
    assentosDisponiveis: 20,
    compraAntecipada: true
  },
  {
    nome: 'Executiva',
    preco: 275000,
    assentosDisponiveis: 6,
    compraAntecipada: true
  },
  {
    nome: 'VIP',
    preco: 430000,
    assentosDisponiveis: 2,
    compraAntecipada: false
  }
]
</script>

<template>
  <div class="nav-bar"></div>

  <div id="app">
    <h1>Excursões pela Galáxia da Relecloud</h1>
    <h2>{{ productName }}</h2>
    <div>{{ productDescription }}</div>
    <hr />

    <div v-for="(productClass, index) in productClasses" :key="index" class="row">
      <div class="column">{{ productClass.nome }}</div>
      <div class="column">
        {{
          productClass.preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }}
      </div>
    </div>

    <!-- TODO: Adicionar código para exibir classes -->
    <img :src="productImage" :alt="productImageDescription" :style="productImageStyle" />
  </div>
</template>

<style lang="css" scoped></style>
