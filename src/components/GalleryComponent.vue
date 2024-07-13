<template>
    <section class="gallery">
      <div>
        <img src="@/assets/service1.jpg" alt="Gallery Image 1">
      </div>
      <div>
        <img src="@/assets/service2.jpg" alt="Gallery Image 2">
      </div>
      <div>
        <img src="@/assets/service3.jpg" alt="Gallery Image 3">
      </div>
    </section>
  </template>
  
  <style scoped>
  .gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .gallery img {
    max-width: 80%;
    height: auto;
    border: 2px solid #ccc;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 0 10px;
  }
  </style>
  