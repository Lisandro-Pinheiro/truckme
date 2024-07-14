<template>
  <section id="about-us">
    <div class="container">
      <h2>Sobre Nós</h2>
      <p v-if="!showFullText">
        A TruckMe é uma empresa dedicada a oferecer soluções de transporte confiáveis e eficientes. Nosso compromisso é conectar empresas e clientes com serviços de transporte de qualidade, utilizando tecnologia avançada para garantir uma experiência segura e satisfatória.
      </p>
      <p v-if="showFullText">
        A TruckMe é uma empresa dedicada a oferecer soluções de transporte confiáveis e eficientes. Nosso compromisso é conectar empresas e clientes com serviços de transporte de qualidade, utilizando tecnologia avançada para garantir uma experiência segura e satisfatória. Conectamos vocês Embarcadores aos mais qualificados transportadores autônomos, através de um criterioso processo de gestão e simplificação de processos do frete!
      </p>
      <button class="gallery-btn" @click="toggleText">
        {{ showFullText ? 'Ver menos' : 'Leia mais' }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutComponent',
  data() {
    return {
      showFullText: false
    };
  },
  methods: {
    toggleText() {
      this.showFullText = !this.showFullText;
    }
  }
}
</script>

<style scoped>
/* Estilos específicos para o componente AboutComponent */
#about-us {
  background-color: #f7f7f7;
  padding: 50px 0;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.gallery-btn {
  background-color: #ff3333; /* Vermelho */
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.gallery-btn:hover {
  background-color: #cc0000; /* Vermelho mais escuro ao passar o mouse */
}
</style>
