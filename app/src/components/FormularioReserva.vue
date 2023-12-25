<script setup lang="js">
import { ref } from 'vue'

const props = defineProps({
  cabines: Array
})

const emit = defineEmits(['reservaCriada'])
const cabineIndex = ref(-1)

function reservaCabine() {
  if (cabineIndex.value < 0) return

  emit('reservaCriada', cabineIndex.value)
  cabineIndex.value = -1
}
</script>

<template>
  <section>
    <h2>Reserve agora mesmo!</h2>

    <form>
      <div class="row">
        <label for="product-cabin">Selecionar classe:</label>
        <select id="product-cabin" v-model="cabineIndex">
          <option disabled value="-1">Selecione uma cabine</option>
          <option v-for="(cabine, index) in props.cabines" :value="index" :key="index">
            {{ cabine.nome }}
            {{ cabine.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
          </option>
        </select>
      </div>

      <div class="row">
        <button class="button" type="button" @click="reservaCabine">Reserve agora mesmo!</button>
      </div>
    </form>
  </section>
</template>
