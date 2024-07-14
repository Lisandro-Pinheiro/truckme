<template>
  <section class="contact">
    <div class="container">
      <h2 class="text-center mb-4">Contato</h2>
      <br>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nome:</label>
                <input type="text" id="name" v-model="name" class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" class="form-control">
              </div>
              <div class="form-group">
                <label for="message">Mensagem:</label>
                <textarea id="message" v-model="message" class="form-control textarea-message"></textarea>
              </div>
              <div class="form-group text-center">
                <button type="submit" class="btn btn-primary btn-submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      if (this.name && this.email && this.message) {
        // Validação e envio do formulário
        alert('Formulário enviado!');
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    }
  }
};
</script>

<style scoped>
.contact {
  background-color: #f1f1f1; /* Cor de fundo cinza como solicitado */
  padding: 30px;
  text-align: center; /* Centraliza o texto e conteúdo */
}

.contact-form {
  background-color: #fff; /* Fundo branco para o formulário */
  padding: 20px; /* Reduzido o padding para diminuir o tamanho geral */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px; /* Reduzido o espaço entre os grupos de formulário */
  text-align: left; /* Alinha o texto dos labels à esquerda */
}

label {
  font-weight: bold;
}

.form-control {
  height: 40px; /* Altura dos inputs de texto */
  border: 1px solid #000; /* Borda preta */
  background-color: transparent; /* Fundo transparente */
  padding: 0 15px;
  transition: border-color 0.3s;
  width: 100%; /* Largura total */
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */
}

.form-control:focus {
  border-color: #555;
  outline: none;
}

textarea.form-control {
  height: 120px; /* Altura do textarea */
  resize: vertical; /* Permite redimensionamento vertical */
  width: 100%; /* Largura total */
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */
}

.btn-primary {
  background-color: red;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; /* Largura total */
}

.btn-primary:hover {
  background-color: #b30000;
}

.textarea-message {
  min-height: 120px; /* Altura mínima para o textarea */
  max-height: 200px; /* Altura máxima para o textarea */
  overflow-y: auto; /* Adiciona barra de rolagem vertical se necessário */
}
</style>
