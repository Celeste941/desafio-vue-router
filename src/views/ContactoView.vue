<template>
  <div class="container">
    <h1 class="text-center my-5">Contacto</h1>
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre" />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo electrónico</label>
            <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea class="form-control" id="message" rows="4" placeholder="Escribe tu mensaje"
              maxlength="300"></textarea>
          </div>
          <button type="submit" class="btn btn-custom w-100">Enviar</button>
        </form>
        <div class="text-center mt-4">
          <router-link to="/">
            <a class="btn btn-secondary w-100">Ir al inicio</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

h1 {
  margin: 100px auto;
  text-align: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: rgb(232, 62, 140);
}

.btn-custom {
  background-color: rgb(232, 62, 140);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: rgb(200, 50, 120);
}

.btn-secondary {
  background-color: rgb(23, 162, 184);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  margin-bottom: 20px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: rgb(18, 140, 158);
}

.form-control {
  border-radius: 20px;
  border: 1px solid rgb(232, 62, 140);
}

.form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(232, 62, 140, 0.25);
  border-color: rgb(232, 62, 140);
}
</style>
