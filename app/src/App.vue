<script setup lang="js">
import produtoImagem from '@/assets/cruise.jpg'

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

const reserva = {
  cabineIndex: 0,
  notas: '',
  completo: false
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
    <form v-show="!reserva.completo">
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
        <textarea v-model="reserva.notas" rows="3"></textarea>
      </div>
    </form>

    <!-- TODO: Adicionando código para exibir imagem -->
    <img :src="produto.imagem.src" :alt="produto.imagem.descricao" :style="produto.imagem.style" />
  </div>
</template>
