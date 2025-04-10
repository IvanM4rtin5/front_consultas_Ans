# 💻 Frontend - Consulta de Despesas ANS (Agência Nacional de Saúde Suplementar)

[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-42b883?logo=vue.js)](https://vuejs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)](https://getbootstrap.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios)](https://axios-http.com/)

Interface web para visualização interativa das despesas das operadoras de saúde, baseada nos dados disponibilizados pela ANS.

---

## 🛠️ Tecnologias Utilizadas

<div align="left">
  <img src="https://img.shields.io/badge/Vue.js-42b883?logo=vue.js&logoColor=white" alt="Vue.js" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" alt="Axios" />
</div>

---

## 🧩 Funcionalidades Principais

### **Consulta Visual**
- Tabela interativa com despesas por operadora
- Filtro por trimestre, ano e nome da operadora
- Scroll ou navegação horizontal inteligente para listas grandes
- Integração com API Flask (backend)

### **Experiência do Usuário**
- Design responsivo (Bootstrap)
- Scroll horizontal com botões de navegação
- Feedback visual para carregamento e erros

---

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+
- NPM ou Yarn

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/IvanM4rtin5/front_consultas_Ans.git
cd front_consultas_Ans
```
2. Instale as dependências:

```bash
npm install
# ou
yarn install
```
3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
4. Acesse no navegador:

```arduino
http://localhost:5173
```
### 🔗 Integração com Backend

**Link Para o repositorio da API** [backend_Consultas_Ans](https://github.com/IvanM4rtin5/backend_Consultas_Ans)
Certifique-se de que a API Flask esteja em execução localmente ou em produção.
O frontend acessa os dados por meio de chamadas à API nos endpoints definidos.

### 📂 Estrutura do Projeto
```bash
📁 src 
 ┣ 📂 services          # Requisições HTTP com Axios
 ┣ 📜 App.vue           # Arquivo principal
 ┣ 📜 main.js           # Configuração do app
```
### 📌 Considerações Finais

Este projeto tem como objetivo facilitar a consulta pública dos dados financeiros das operadoras de saúde no Brasil, utilizando tecnologias modernas e responsivas.
Dados disponibilizados oficialmente pela ANS.
 ---
 
### 🧑‍💻 Autor

**Desenvolvedor:** Ivan Martins

***Email:** ivanmarti.alves@gmail.com

**LinkedIn:** https://www.linkedin.com/in/ivan-martins-alves/
