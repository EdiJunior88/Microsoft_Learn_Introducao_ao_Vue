<script setup lang="js">
import { computed, ref } from 'vue'

const props = defineProps({
  reservas: {
    type: Array,
    default: () => [],
    required: true
  }
})

const totalPainel = computed(() => {
  const custoTotal = ref(0)

  if (props.reservas && props.reservas.length > 0) {
    custoTotal.value = props.reservas.map((b) => b.preco).reduce((a, b) => a + b)
  }

  return custoTotal.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})
</script>

<template>
  <section>
    <h2>Reservas atuais:</h2>

    <div class="row" v-for="(reserva, index) in reservas" :key="index">
      <div>{{ reserva.cabine }}</div>
    </div>

    <h3 class="row">Total: {{ totalPainel }}</h3>
  </section>
</template>
