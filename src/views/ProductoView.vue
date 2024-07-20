<template>
  <div>
    <Card
      :nombre="nombre"
      :descripcion="descripcion"
      :precio="precio"
      :cantidad="cantidad" />
      
    <router-link to="/">
      <div class="text-center  mb-4">
        <a href="" class="btn btn-primary">Ir al inicio</a>
      </div>
    </router-link>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "ProductoView",
  components: {
    Card,
  },
  props: {
    nombre: String,
    descripcion: String,
    precio: String,
    cantidad: String,
  },
};
</script>

<style scoped>
.btn-primary {
  background-color: rgb(23, 162, 184);
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1.25rem;
  color: white;
  transition: background-color 0.3s ease;
}
</style>
