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

    <div>
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

      <img
        :src="produto.imagem.src"
        :alt="produto.imagem.descricao"
        :style="produto.imagem.style"
      />
    </div>
  </div>
</template>

<style lang="css">
body {
  background-color: #f2f2f2;
  margin-left: 5%;
  margin-right: 5%;
  margin: 0 5%;
  font-family: tahoma;
  color: #282828;
  font-size: 12px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  vertical-align: middle;
  margin: 5px;
}

.button {
  background-color: #39495c;
  border-radius: 5px;
  color: white;
  padding: 2px;
  text-align: center;
  cursor: pointer;
  margin-right: 10px;
}

.cart {
  margin: 25px 100px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 30px 30px;
  background-color: white;
}

.color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}

.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
}

.nav-bar {
  background: linear-gradient(-50deg, #010801, #0d0d60);
  height: 60px;
  margin-bottom: 25px;
}

.out-of-stock-img {
  opacity: 0.5;
}

p {
  font-size: 22px;
}

.main {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-images,
.product-desc {
  width: 50%;
}

.print-list {
  width: 66%;
  padding: 0 0 0 20px;
  background-color: lightyellow;
  margin-left: 40px;
  border: 2px dashed #d8d8d8;
}

.review-form {
  display: flex;
  flex-direction: column;
  width: 66%;
  padding: 20px;
  margin: 40px;
  border: 2px solid #d8d8d8;
  background-color: white;
}

.review-container {
  width: 425px;
  padding: 20px;
  background-color: white;
  margin-left: 40px;
  border: 2px solid #d8d8d8;
}

.review-container li {
  margin-bottom: 30px;
}

.review-form .button {
  display: block;
  margin: 30px auto;
}

select {
  height: 40px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
}

textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
}

@media only screen and (max-width: 600px) {
  .container {
    flex-direction: column;
  }

  .product-image,
  .product-info {
    margin-left: 10px;
    width: 100%;
  }

  .review-form {
    width: 90%;
  }
}
</style>
