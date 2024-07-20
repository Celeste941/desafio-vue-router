<template>
    <section class="container" id="productos">
      <h1 class="text-center">Nuestros Productos</h1>
      <div class="row justify-content-center">
        <div class="col-sm-4 col-12 px-5 mb-4">
          <div class="card">
            <img
              src="../assets/img/colaciones.jpg"
              class="card-img-top"
              alt="colaciones" />
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ nombre }}</h5>
              <p class="card-text">{{ descripcion }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: {{ precio }}</li>
              <li class="list-group-item">Cantidad: {{ cantidad }}</li>
            </ul>
            <div class="card-body">
              <a href="#" class="card-link">Ver más</a>
              <a href="#" class="card-link">Comprar</a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
 
</template>

<script>
export default {
  name: "Card",
  props: ["nombre", "descripcion", "precio", "cantidad"],
};
</script>

<style scoped>

h1 {
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(232, 62, 140);
}

.btn-secondary {
  background-color: #6c757d;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
}

.btn-secondary:hover {
  background-color: #5a6268;
  color: white;
}
</style>
