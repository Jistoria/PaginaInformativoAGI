// Importaciones necesarias para la aplicación
import { createApp } from 'vue' // Función para crear la aplicación Vue
import { createPinia } from 'pinia' // Biblioteca para el manejo del estado
import router from './routes/index.js' // Configuración de las rutas de la aplicación

// Importaciones de Bootstrap y sus dependencias
import 'bootstrap/dist/css/bootstrap.min.css' // Estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js' // JavaScript de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css' // Íconos de Bootstrap

// Importación del componente principal de la aplicación
import App from './App.vue'

// Creación de la aplicación Vue
const app = createApp(App)

// Uso de Pinia para el estado de la aplicación
app.use(createPinia())
// Uso de Vue Router para la gestión de rutas
app.use(router)

// Montaje de la aplicación en el elemento con ID 'app'
app.mount('#app')

