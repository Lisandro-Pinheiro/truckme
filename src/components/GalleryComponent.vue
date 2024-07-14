<template>
    <section class="gallery">
      <div class="gallery-content">
        <img v-if="currentImageIndex === 0" src="@/assets/service1.jpg" alt="Gallery Image 1">
        <img v-else-if="currentImageIndex === 1" src="@/assets/service2.jpg" alt="Gallery Image 2">
        <img v-else src="@/assets/service3.jpg" alt="Gallery Image 3">
      </div>
      <div class="gallery-controls">
        <button class="gallery-btn" @click="previousImage">Anterior</button>
        <button class="gallery-btn" @click="nextImage">Próximo</button>
      </div>
      <br>
      <br>
    </section>
  </template>
  
  <script>
  export default {
    name: 'GalleryComponent',
    data() {
      return {
        currentImageIndex: 0,
        totalImages: 3  
      };
    },
    methods: {
      previousImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
      },
      nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
      }
    }
  };
  </script>
  
  <style scoped>
  .gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  
  .gallery-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .gallery img {
    max-width: 80%;
    height: auto;
    border: 2px solid #ccc;
    padding: 5px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 0 10px;
  }
  
  .gallery-controls {
    display: flex;
    justify-content: center;
  }
  
  .gallery-btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .gallery-btn:hover {
    background-color: #555;
  }
  </style>
  