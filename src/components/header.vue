<script setup>
// Importación de funciones y componentes necesarios de Vue y Vue Router
import { ref, onMounted } from 'vue'; // Funciones de la API de composición de Vue
import { useRouter, RouterView } from 'vue-router'; // Funciones y componentes de Vue Router

// Uso del router de Vue
const router = useRouter();

// Función de redirección
const redireccion = () => {
  router.push('/'); // Redirección a la ruta raíz
};
</script>

<template>
  <!-- Encabezado con imagen que redirige al hacer clic -->
  <div class="header" @click="redireccion">
    <img src="/src/assets/img/header.png" class="img-fluid w-100" alt="Encabezado">
  </div>

  <!-- Barra de navegación -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-success" id="Menu-Escritorio">
    <li class="mr-6" style="list-style: none;"></li>
  </nav>
</template>

<style scoped>
/* Estilos para el componente */
.header {
  cursor: pointer; /* Cambia el cursor a pointer para indicar que es clicable */
}

nav#Menu-Escritorio {
  width: 100%;
  background-color: #2C9A42; /* Color de fondo verde */
}
</style>
