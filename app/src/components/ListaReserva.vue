<script setup lang="js">
import { computed } from 'vue'

const reservas = defineProps({
  reservas: Array
})

const totalPainel = computed(() => {
  let custoTotal = 0

  if (reservas && reservas.length > 0) {
    custoTotal = reservas.map((b) => b.preco).reduce((a, b) => a + b)
  }

  return `${custoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
})
</script>

<template>
  <section>
    <h2>Reservas atuais:</h2>

    <div class="row" v-for="(reserva, index) in reservas" :key="index">
      <div>{{ reserva.nome }}</div>
    </div>

    <h3 class="row">Total: {{ totalPainel }}</h3>
  </section>
</template>