<script setup lang="js">
const name = 'Cheryl'
const status = -1
const active = true
const benefíciosSelecionados = 'yes'
const statusList = ['tempo integral', 'meio período', 'contratante']
</script>

<template>
  <input type="text" v-model="name" />
  <input type="checkbox" v-model="active" /> Está ativo
  <input type="checkbox" v-model="benefíciosSelecionados" true-value="yes" false-value="no" />
  Benefícios selecionado: {{ benefíciosSelecionados }}
</template>

<style lang="css" scoped></style>
