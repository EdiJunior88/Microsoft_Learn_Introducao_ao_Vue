<script setup lang="js">
import produtoImagem from '@/assets/cruise.jpg'
import { computed, ref } from 'vue'

const produto = {
  nome: 'Reserve um cruzeiro para a Lua',
  descricao:
    'Faça um cruzeiro até a lua em nosso luxuoso ônibus espacial. Veja os astronautas trabalhando do lado de fora da Estação Espacial Internacional',
  imagem: {
    src: produtoImagem,
    descricao:
      'Um astronauta flutua do lado de fora da janela enquanto você se senta confortavelmente',
    style: { 'border-radius': '15px' }
  },
  cabines: [
    { nome: 'Econômica', preco: 125000 },
    { nome: 'Executiva', preco: 275000 },
    { nome: 'VIP', preco: 430000 }
  ]
}

const reserva = ref({
  cabineIndex: 0,
  notas: '',
  completo: false
})

// TODO: Adicionando propriedade computada
const painelReservaCabine = computed(() => {
  const cabine = produto.cabines[reserva.value.cabineIndex]
  return `${cabine.nome}: ${cabine.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })}`
})

// TODO: Adicione a função
function reservaCabine() {
  reserva.value.completo = true
}
</script>

<template>
  <div class="nav-bar"></div>

  <div id="app">
    <h1>Excursões pela Galáxia da Relecloud</h1>
    <h2>{{ produto.nome }}</h2>
    <div>{{ produto.descricao }}</div>
    <hr />

    <!-- TODO: Adicionando formulário de reserva de compra -->
    <form v-show="!reserva.completo" @submit.prevent>
      <h2>Reserve agora!</h2>
      <div class="row">
        <label for="produto.cabine">Selecionar classe:</label>
        <select id="produto.cabine" v-model="reserva.cabineIndex">
          <option v-for="(cabine, index) in produto.cabines" :key="index" :value="index">
            {{ cabine.nome }}
            {{
              cabine.preco.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })
            }}
          </option>
        </select>
      </div>

      <div class="row">
        <label for="notas">Notas:</label>
        <textarea id="notas" v-model="reserva.notas" rows="3"></textarea>
      </div>

      <div class="row">
        <!--TODO: Adicionando o botão a partir daqui -->
        <button class="button" type="submit" @click="reservaCabine">Reserve agora!</button>
      </div>
    </form>

    <!-- TODO: Adicionando painel de reserva de cabine com o status "sucesso" -->
    <div v-show="reserva.completo">
      <h2 class="row">Você está no caminho certo!</h2>
      <div class="row">
        <div>Detalhes da reserva:</div>
        <div>{{ painelReservaCabine }}</div>
        <div>Notas: {{ reserva.notas }}</div>
      </div>
    </div>

    <img :src="produto.imagem.src" :alt="produto.imagem.descricao" :style="produto.imagem.style" />
  </div>
</template>
