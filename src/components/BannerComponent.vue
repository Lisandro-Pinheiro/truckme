<template>
  <div class="banner">
    <div class="section_overlay">
      <div class="home_text">
        <h2>Bem-vindo à TruckMe</h2>
        <h3>Solução Inteligente em Fretes</h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  background-image: url('@/assets/map.png');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section_overlay {
  background: rgba(250, 250, 250, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
}

.home_text {
  padding: 210px 0;
}

.home_text h2 {
  color: #010101;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: 13px;
}

.home_text p {
  color: #404040;
  font-size: 14px;
  text-transform: uppercase;
}
</style>