<template>

  <div class="container-fluid p-0">
    <div class="hero-section d-flex flex-column align-items-center justify-content-center vh-100 text-light">
      <div class="hero-content text-center">
        <h1 class="display-3 fw-bold mb-4">¡BIENVENIDOS!</h1>
        <p class="lead mb-4">Explora nuestras ofertas exclusivas y descubre el mejor sabor.</p>
        <div class="image-container mb-4">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0c/be/10/variedad-de-platos-a.jpg?w=300&h=-1&s=1"
            alt="Comida deliciosa" class="img-fluid rounded-circle shadow-lg" />
        </div>
        <router-link to="/producto">
          <button class="btn btn-primary btn-lg mx-4">
            Explorar Productos
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

.hero-section {
  position: relative;
  background-color: rgb(255, 255, 255);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 1;
  color: rgb(32, 32, 32);
}

h1 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(232, 62, 140);
}

.lead {
  font-size: 1.25rem;
  color: rgb(23, 162, 184);
}

.image-container {
  border: 8px solid rgb(232, 62, 140);
  padding: 10px;
  border-radius: 50%;
  display: inline-block;
}

.img-fluid {
  border-radius: 50%;
}

.btn-primary {
  background-color: rgb(23, 162, 184);
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1.25rem;
  color: white;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: rgb(18, 140, 158);
}
</style>
