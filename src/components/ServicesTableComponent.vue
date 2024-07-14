<template>
  <section class="services_area">
    <div class="container">
      <h3 class="services_title">Nossos Serviços</h3>
      <div class="services_table">
        <table>
          <thead>
            <tr>
              <th style="width: 20%;">Nome do Serviço</th>
              <th style="width: 70%;">Descrição</th>
              <th style="width: 10%;">Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Transporte de Cargas</td>
              <td>Transporte seguro e eficiente de cargas variadas, garantindo pontualidade e segurança no transporte.</td>
              <td>R$100,00</td>
            </tr>
            <tr>
              <td>Gestão de Frota</td>
              <td>Otimização da gestão de frota, incluindo monitoramento em tempo real e manutenção preventiva.</td>
              <td>R$200,00</td>
            </tr>
            <tr>
              <td>Logística Reversa</td>
              <td>Processo de logística que envolve o retorno de produtos, visando o reaproveitamento e redução de resíduos.</td>
              <td>R$300,00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services_area {
  padding: 60px 0;
  background-color: #f9f9f9;
}

.services_title {
  font-size: 35px;
  margin-bottom: 20px;
  text-align: center;
}

.services_table {
  margin-top: 20px;
  overflow-x: auto; /* Adicionado para scroll horizontal em telas menores */
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Garante que a largura da tabela seja fixa */
}

th, td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap; /* Impede que o texto quebre em várias linhas */
  overflow: hidden; /* Impede que o texto vaze para fora da célula */
  text-overflow: ellipsis; /* Mostra "..." se o texto vazar */
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
