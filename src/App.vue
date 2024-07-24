<script setup>
// Importación de componentes y funciones necesarias para el enrutamiento en Vue
import { RouterLink, RouterView, useRouter } from 'vue-router'; // Componentes y hooks de enrutamiento
import { onMounted } from 'vue'; // Función de ciclo de vida de Vue

// Uso del router de Vue
const router = useRouter();

// Función que se ejecuta al montar el componente
onMounted(() => {
  router.push('/'); // Redirección a la ruta raíz
});
</script>

<template>
  <!-- Contenedor principal de la aplicación -->
  <div class="app" style="height: 100vh">
    <!-- Renderizado de la vista según la ruta actual -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Estilos para el componente */
.app {
  background-color: #f0f0f0; /* Fondo gris claro */
}
</style>
