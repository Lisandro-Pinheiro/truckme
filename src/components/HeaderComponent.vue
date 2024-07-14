<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar-default">
    <div class="container">
      <router-link to="/" class="nav-link" exact>
        <img src="@/assets/logo_truck_me_frete_plataforma.png" alt="TruckMe Logo" class="logo">
      </router-link>
      <ul class="navbar-nav">
        <router-link to="/" class="nav-link" exact>Home</router-link>
        <router-link to="/about" class="nav-link">Sobre</router-link>
        <router-link to="/services" class="nav-link">Serviços</router-link>
        <router-link to="/contact" class="nav-link">Contato</router-link>
      </ul>
    </div>
  </nav>

    <!-- Conteúdo dinâmico (Banner Component) -->
    <router-view name="banner" />

    <!-- Rota principal -->
    <router-view />
  </header>
</template>

<script>
export default {
  // Se houver necessidade de configurar algo específico para o HeaderComponent
};
</script>

<style scoped>
/* Estilos para a Navbar */
.navbar-default {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 15px 0;
  top: 0;
}


.navbar-default .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  width: 120px;
}

.navbar-nav {
  list-style: none;
  display: flex;
}

.navbar-nav .nav-link {
  color: #777;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 15px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: red;
}

/* Outros estilos fornecidos */
.navbar-form .form-group {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}

.navbar-form .form-control {
  display: inline-block;
  width: auto;
  vertical-align: middle;
}

.navbar-form .form-control-static {
  display: inline-block;
}

.navbar-form .input-group {
  display: inline-table;
  vertical-align: middle;
}

.navbar-form .input-group .input-group-addon,
.navbar-form .input-group .input-group-btn,
.navbar-form .input-group .form-control {
  width: auto;
}

.navbar-form .input-group>.form-control {
  width: 100%;
}

.navbar-form .control-label {
  margin-bottom: 0;
  vertical-align: middle;
}

.navbar-form .radio,
.navbar-form .checkbox {
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
  vertical-align: middle;
}

.navbar-form .radio label,
.navbar-form .checkbox label {
  padding-left: 0;
}

.navbar-form .radio input[type=radio],
.navbar-form .checkbox input[type=checkbox] {
  position: relative;
  margin-left: 0;
}

.navbar-form .has-feedback .form-control-feedback {
  top: 0;
}

.navbar-default .navbar-nav>li>.dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.navbar-btn {
  margin-top: 8px;
  margin-bottom: 8px;
}

.navbar-btn.btn-sm {
  margin-top: 10px;
  margin-bottom: 10px;
}

.navbar-btn.btn-xs {
  margin-top: 14px;
  margin-bottom: 14px;
}

.navbar-text {
  margin-top: 15px;
  margin-bottom: 15px;
}

.navbar-left {
  float: left !important;
}

.navbar-right {
  float: right !important;
  margin-right: -15px;
}

.navbar-right~.navbar-right {
  margin-right: 0;
}

.navbar-default {
  background-color: #F3F3F3;
}

.navbar-default .navbar-brand {
  color: #777;
}

.navbar-default .navbar-brand:hover,
.navbar-default .navbar-brand:focus {
  color: #5e5e5e;
  background-color: transparent;
}

.navbar-default .navbar-text {
  color: #777;
}

.navbar-default .navbar-nav>li>a {
  color: #777;
}

.navbar-default .navbar-nav>li>a:hover,
.navbar-default .navbar-nav>li>a:focus {
  color: #333;
  background-color: transparent;
}

.navbar-default .navbar-nav>.active>a,
.navbar-default .navbar-nav>.active>a:hover,
.navbar-default .navbar-nav>.active>a:focus {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav>.disabled>a,
.navbar-default .navbar-nav>.disabled>a:hover,
.navbar-default .navbar-nav>.disabled>a:focus {
  color: #ccc;
  background-color: transparent;
}

.navbar-default .navbar-toggle {
  border-color: #ddd;
}

.navbar-default .navbar-toggle:hover,
.navbar-default .navbar-toggle:focus {
  background-color: #ddd;
}

.navbar-default .navbar-toggle .icon-bar {
  background-color: #888;
}

.navbar-default .navbar-collapse,
.navbar-default .navbar-form {
  border-color: #e7e7e7;
}

.navbar-default .navbar-nav>.open>a,
.navbar-default .navbar-nav>.open>a:hover,
.navbar-default .navbar-nav>.open>a:focus {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav .open .dropdown-menu>li>a {
  color: #777;
}

.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover,
.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus {
  color: #333;
  background-color: transparent;
}

.navbar-default .navbar-nav .open .dropdown-menu>.active>a,
.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover,
.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus {
  color: #555;
  background-color: #e7e7e7;
}

.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,
.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover,
.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus {
  color: #ccc;
  background-color: transparent;
}

.navbar-default .navbar-link {
  color: #777;
}

.navbar-default .navbar-link:hover {
  color: #333;
}

.navbar-default .btn-link {
  color: #777;
}

.navbar-default .btn-link:hover,
.navbar-default .btn-link:focus {
  color: #333;
}

.navbar-default .btn-link[disabled]:hover,
fieldset[disabled] .navbar-default .btn-link:hover,
.navbar-default .btn-link[disabled]:focus,
fieldset[disabled] .navbar-default .btn-link:focus {
  color: #ccc;
}

.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}

.navbar-inverse .navbar-brand {
  color: #9d9d9d;
}

.navbar-inverse .navbar-brand:hover,
.navbar-inverse .navbar-brand:focus {
  color: #fff;
  background-color: transparent;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

