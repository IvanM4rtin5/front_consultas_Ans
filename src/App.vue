<template>
    <div class="container mt-5">
      <h1 class="mb-4">Consulta de Operadoras ANS</h1>
  
      <div class="mb-3 ">
        <input v-model="razaoSocial" class="form-control" placeholder="Digite a razão social" />
        <button @click="buscarPorRazaoSocial" class="btn btn-primary me-2 mt-2">Buscar Operadora</button>

        <button @click="getAllOperators" class="btn btn-success me-2 mt-2">Todas as Operadoras</button>
        
        <button @click="getMaioresDespesas" class="btn btn-warning mt-2">Maiores Despesas/Trimestre</button>
      </div>
  
      <div v-if="resultado.length" class="mt-4 table-scroll-wrapper position-relative">
        <button class="scroll-btn left me-2" @click="scrollLeft">←</button>
        <button class="scroll-btn right" @click="scrollRight">→</button>

       <div ref="scrollContainer" class="table-responsive custom-scroll">
        <table class="table table-bordered table-hover">
          <thead class="table-dark">
            <tr>
              <th v-for="(valor, chave) in resultado[0]" :key="chave">{{ chave }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in resultado" :key="index">
              <td v-for="valor in item" :key="valor">{{ valor }}</td>
            </tr>
          </tbody>
        </table>
       </div>
      </div>
  
      <div v-if="mensagem" class="alert alert-info mt-3">{{ mensagem }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import api from './service/index'
  
  const razaoSocial = ref('')
  const resultado = ref([])
  const mensagem = ref('')
  
  const scrollContainer = ref(null)
  
  const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
}
  
  const buscarPorRazaoSocial = async () => {
    try {
      const { data } = await api.post('/seach_operators', {
        razao_social: razaoSocial.value
      })
      resultado.value = data.data
      mensagem.value = ''
    } catch (err) {
      resultado.value = []
      mensagem.value = err.response?.data?.message || 'Erro na consulta.'
    }
  }
  
  const getAllOperators = async () => {
    try {
      const { data } = await api.get('/operators')
      resultado.value = data.data
      mensagem.value = ''
    } catch (err) {
      resultado.value = []
      mensagem.value = err.response?.data?.message || 'Erro ao buscar operadoras.'
    }
  }
  
  const getMaioresDespesas = async () => {
    try {
      const { data } = await api.get('/despesas/trimestre')
      resultado.value = data.data
      mensagem.value = ''
    } catch (err) {
      resultado.value = []
      mensagem.value = err.response?.data?.message || 'Erro ao buscar despesas.'
    }
  }
  </script>
  
  <style scoped> 

    body {
      background-color: #f8f9fa;
    }
  
    .container {
      /* max-width: 800px; */
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    h1 {
      color: #007bff;
      text-align: center;
    }
  
    .form-control {
      margin-bottom: 10px;
    }
    .table th,
    .table td {
      text-align: center;
      vertical-align: middle;
    }
  
    .table-dark th,
    .table-dark td {
      background-color: #343a40;
      color: #fff;
    }
  
    .alert {
      margin-top: 20px;
    } 
  </style>
  