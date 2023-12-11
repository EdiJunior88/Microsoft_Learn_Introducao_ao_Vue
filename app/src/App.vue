<script setup lang="js">
const name = 'Cheryl'
const status = -1
const ativo = true
const benefíciosSelecionados = 'yes'
const statusLista = ['tempo integral', 'meio período', 'contratante']
</script>

<template>
  <input type="text" v-model="name" />

  <label>Está ativo <input type="checkbox" v-model="ativo" /></label>

  <label
    >Benefícios selecionado: {{ benefíciosSelecionados
    }}<input type="checkbox" v-model="benefíciosSelecionados" true-value="yes" false-value="no"
  /></label>

  <select v-model="statusIndex">
    <!-- Crie uma mensagem para selecionar -->
    <option disabled value="">Por favor selecione um item</option>
    <!-- Use o v-for para criar uma lista de opções -->
    <option v-for="(status, index) in statusLista" :value="index" :key="index">
      {{ status }}
    </option>
  </select>
</template>

<style lang="css" scoped></style>
