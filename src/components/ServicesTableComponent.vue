<template>
    <section class="services services_area">
      <div class="container">
        <h2 class="services_title">Nossos Serviços</h2>
        <table class="services_table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transporte de Cargas</td>
              <td>Transporte seguro e eficiente...</td>
              <td>R$100,00</td>
            </tr>
            <tr>
              <td>Gestão de Frota</td>
              <td>Otimização da gestão de frota...</td>
              <td>R$200,00</td>
            </tr>
            <tr>
              <td>Logística Reversa</td>
              <td>Processo de logística que envolve...</td>
              <td>R$300,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </template>
  
  <style scoped>
  .services {
    padding-top: 96px;
  }
  .container {
    border-bottom: 1px solid #ddd;
  }
  .services_title h2 {
    font-size: 2.5em;
    margin-bottom: 20px;
  }
  .services_table {
    margin-top: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  th {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #f1f1f1;
  }
  </style>
  