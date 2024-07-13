<template>
    <header>
      <nav class="navbar-default">
        <img src="@/assets/logo.png" alt="TruckMe Logo" class="logo">
        <ul class="navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .navbar-default .navbar-nav>li>a {
    color: #777;
    text-transform: uppercase;
  }
  .navbar-default .navbar-nav>li>a:hover {
    color: red;
  }
  header {
    background: url('@/assets/map.png');
    background-size: cover;
    background-repeat: no-repeat;
  }
  .logo {
    width: 120px;
  }
  .navbar-nav {
    list-style: none;
    display: flex;
    justify-content: space-around;
  }
  .navbar-nav a {
    text-decoration: none;
  }
  </style>
  