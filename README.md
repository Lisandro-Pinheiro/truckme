Projeto TruckMe - Teste Técnico para Desenvolvedor Frontend Jr
Introdução
Este projeto foi desenvolvido como parte do teste técnico para a posição de Desenvolvedor Frontend Jr na TruckMe. Utilizei o framework Vue.js para implementar as funcionalidades solicitadas, seguindo os critérios de avaliação detalhados.

Estrutura do Projeto
O projeto está estruturado da seguinte maneira:

Seção 1: HTML e CSS
Implementação de uma página web básica com cabeçalho, banner, seção "Sobre nós", tabela de serviços e formulário de contato.

Seção 2: JavaScript e Interatividade
Adição de interatividade com JavaScript, validação de formulário e funcionalidades como expansão de texto e galeria de imagens.

Seção 3: Frameworks e Componentização
Reescrita da página web utilizando o Vue.js, com componentização dos elementos principais.

Seção 4: Testes e Qualidade de Código 
Escrita de testes unitários para componentes Vue e análise de qualidade de código.

Para executar este projeto localmente, siga os passos abaixo:

Clone o repositório:
bash
Copiar código
git clone <https://github.com/Lisandro-Pinheiro/truckme.git>
cd truckme
Instale as dependências:

npm install
Compile e execute o projeto:

npm run serve

Acesse o projeto no seu navegador: http://localhost:8080

Componentes e Estrutura Vue
HeaderComponent
Componente que inclui o cabeçalho e o menu de navegação.
BannerComponent
Componente que exibe o banner com uma imagem de fundo e texto de boas-vindas.
AboutComponent
Componente que apresenta a seção "Sobre nós" com um botão "Leia mais" para expandir o texto.
ServicesTableComponent
Componente que exibe uma tabela com os serviços oferecidos.
ContactFormComponent
Componente que contém um formulário de contato com validação e mensagem de sucesso.
GalleryComponent
Componente que implementa uma galeria de imagens com navegação.
Testes Unitários
Para garantir a qualidade do código, foram escritos testes unitários para os seguintes componentes Vue:

HeaderComponent
AboutComponent
Os testes foram implementados utilizando Jest e @vue/test-utils para verificar a renderização e interatividade dos componentes.

Análise de Qualidade de Código
Utilizei ESLint para garantir a conformidade com padrões de código e boas práticas durante o desenvolvimento. A análise de qualidade de código ajudou a identificar e corrigir problemas potenciais.

Conclusão
Este projeto demonstra minha capacidade de desenvolver aplicações web responsivas utilizando Vue.js, aplicando práticas modernas de desenvolvimento e garantindo a qualidade do código através de testes e análises. Obrigado pela oportunidade de realizar este teste técnico.