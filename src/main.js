import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../src/service/index.js'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.mount('#app')
