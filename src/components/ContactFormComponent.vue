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
  background-color: #f1f1f1; 
  padding: 30px;
  text-align: center; 
}

.contact-form {
  background-color: #fff;
  padding: 20px; 
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px; 
  text-align: left; 
}

label {
  font-weight: bold;
}

.form-control {
  height: 40px; 
  border: 1px solid #000;
  background-color: transparent; 
  padding: 0 15px;
  transition: border-color 0.3s;
  width: 100%; 
  box-sizing: border-box; 
}

.form-control:focus {
  border-color: #555;
  outline: none;
}

textarea.form-control {
  height: 120px; 
  resize: vertical; 
  width: 100%; 
  box-sizing: border-box; 
}

.btn-primary {
  background-color: red;
  border: none;
  border-radius: 5px;
  color: #fff;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%; 
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
