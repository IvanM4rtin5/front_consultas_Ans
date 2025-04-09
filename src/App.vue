<template>
    <div class="container mt-5">
      <h1 class="mb-4">Consulta de Operadoras</h1>
  
      <div class="mb-3">
        <input v-model="razaoSocial" class="form-control" placeholder="Digite a razão social" />
        <button @click="buscarPorRazaoSocial" class="btn btn-primary mt-2">Buscar Operadora</button>
      </div>
  
      <div class="mb-3">
        <button @click="getAllOperators" class="btn btn-success me-2">Todas as Operadoras</button>
        <button @click="getMaioresDespesas" class="btn btn-warning">Maiores Despesas</button>
      </div>
  
      <div v-if="resultado.length" class="mt-4">
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
  
      <div v-if="mensagem" class="alert alert-info mt-3">{{ mensagem }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import api from './service/index'
  
  const razaoSocial = ref('')
  const resultado = ref([])
  const mensagem = ref('')
  
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
  