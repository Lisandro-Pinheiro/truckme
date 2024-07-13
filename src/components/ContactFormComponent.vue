<template>
    <section class="contact contact-form">
      <h2>Contato</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="name" class="form-control">
        
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" class="form-control">
        
        <label for="message">Mensagem:</label>
        <textarea id="message" v-model="message" class="form-control"></textarea>
        
        <button type="submit" class="form_submit">Enviar</button>
      </form>
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
        // Validação e envio do formulário
        if (this.name && this.email && this.message) {
          alert('Formulário enviado!');
        } else {
          alert('Por favor, preencha todos os campos.');
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    background-color: #f1f1f1;
    padding: 30px;
  }
  .form-control {
    height: 43px;
    border-radius: 0px;
    margin-bottom: 20px;
    border: 0px solid #fff;
  }
  #message {
    height: 104px;
  }
  .form_submit {
    width: 100%;
    background: red;
    border-radius: 0px;
    color: #fff;
    padding-top: 13px;
    padding-bottom: 10px;
    transition: all 1s;
  }
  </style>
  