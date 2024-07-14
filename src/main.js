import Vue from 'vue';  // Importa o Vue
import App from './App.vue';  // Importa o componente raiz App.vue
import './assets/styles.css';  // Importa o arquivo de estilos CSS


new Vue({
  el: '#app',  // Monta a aplicação no elemento com o id 'app' no index.html
  render: h => h(App)  // Renderiza o componente App.vue
});
