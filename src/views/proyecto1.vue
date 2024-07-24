<script setup>
import Header from '../components/header.vue'; // Importa el componente del encabezado
import Footer from '../components/footer.vue'; // Importa el componente del pie de página
import { ref, onMounted } from 'vue'; // Importa ref y onMounted de Vue
import { useRouter } from 'vue-router'; // Importa el enrutador de Vue Router

const router = useRouter(); // Crea una instancia del enrutador

const selected = ref('Inicio'); // Define una referencia reactiva para la sección seleccionada

// Función para actualizar la sección seleccionada
const select = (section) => {
  selected.value = section;
};
</script>


<template>
  <div class="home">
    <Header />
    <div class="home_">
      <div class="container">
        <h2 class="text-start">Carrera de Ingeniería Agroindustrial</h2>
        <h2 class="text-start">Proyecto de vinculación “Alimentación saludable”</h2>
        <div class="menu d-flex justify-content-center flex-wrap">
          <button 
            class="menu-button btn" 
            :class="{ active: selected === 'Inicio' }" 
            @click="select('Inicio')"
          >Inicio</button>
          <button 
            class="menu-button btn" 
            :class="{ active: selected === 'Productos' }" 
            @click="select('Productos')"
          >Productos</button>
          <button 
            class="menu-button btn" 
            :class="{ active: selected === 'Publicaciones' }" 
            @click="select('Publicaciones')"
          >Publicaciones</button>
          <button 
            class="menu-button btn" 
            :class="{ active: selected === 'Contacto' }" 
            @click="select('Contacto')"
          >Contacto</button>
        </div>
        <div class="datos" v-if="selected === 'Inicio'">
          <ul>
              <li class="rawr">
                  <div class="text-center mb-3">
                      <img src="/src/assets/img/inicio.png" class="img-fluid" alt="Imagen descriptiva" width="50%" height="50px">
                  </div>
              </li>
              <li>
                  <h3>Antecedentes:</h3>
                  <p class="bg-light-green text-dark rounded p-3">- El número de personas desnutridas ha aumentado lentamente durante varios años consecutivos mientras, al mismo tiempo, el número de personas con sobrepeso y obesidad en todo el mundo se incrementa a un ritmo alarmante, lo que presagia crecientes cargas de enfermedades no transmisibles. La producción de alimentos representa el uso del 48% de los recursos de la tierra y el 70% del agua dulce a nivel mundial. Para abordar estos desafíos, se centra en la transformación de los sistemas alimentarios para promover una alimentación saludable producida de forma sostenible y que mejore la nutrición. Los objetivos de las dietas saludables sostenibles son lograr un crecimiento y desarrollo óptimo de todos los individuos y apoyar el funcionamiento y el bienestar físico, mental y social en todas las etapas de la vida de las generaciones presentes y futuras; contribuir a la prevención de la malnutrición en todas sus formas (es decir, desnutrición, deficiencia de micronutrientes, sobrepeso y obesidad); reducir el riesgo de enfermedades no transmisibles relacionadas con la alimentación; y apoyar la preservación de la biodiversidad y la salud del planeta.</p>
              </li>
              <li>
                  <h4>Objetivo General:</h4>
                  <p class="bg-light-yellow text-dark rounded p-3">- Mejorar los hábitos de alimentación de estudiantes y padres de familia del Colegio Juan Montalvo de la ciudad de Manta a través de capacitaciones teóricas y prácticas</p>
              </li>
              <li>
                  <h3>Proyectos relacionados y/o complementarios:</h3>
                  <p class="bg-light-red text-dark rounded p-3">- El presente trabajo se encuentra relacionado con el proyecto de investigación “Fuentes sostenibles de proteína”, mismo que se encuentra vigente desde el año 2022. El proyecto de investigación trata sobre el uso de cultivos nativos de la región (quinoa, amaranto, lupino y fréjol) como fuentes sostenibles de proteína para el desarrollo y/o mejora de alimentos.</p>
              </li>
              <li>
                  <h3>Equipo de trabajo</h3>
                  <p class="bg-light-gray text-dark rounded p-3">
                      Miembro de Comisión de Vinculación: <strong>Ing Brígida Rodríguez</strong> <br>
                      Líder del proyecto: <strong>Stalin Santacruz Ph.D.</strong> <br>
                      Docentes participantes: <br>
                      &emsp;Carrera de Agroindustria: <strong>Ing. María Isabel Mantuano</strong>, <strong>Dr. Víctor Otero</strong>, <strong>Ing Robert Mero</strong>, <strong>Ing Mario López</strong><br>
                      &emsp;Carrera de Informática: <strong>Dra. Dolores Verduga</strong>, <strong>Ing. Adriana Macías</strong><br>
                      Estudiantes de sexto y séptimo semestre de la carrera de Agroindustria <br>
                      Dos estudiantes de la carrera de informática
                  </p>
              </li>
          </ul>
      </div>
      
        <div class="datos" v-if="selected === 'Productos'">
          <div class="productos">
            <h3>Productos</h3>
            <div class="video-container d-flex flex-wrap justify-content-center">
              <div class="video-item">
                <video controls>
                  <source src="/src/assets/videos/video1.mp4" type="video/mp4">
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              <div class="video-item">
                <video controls>
                  <source src="/src/assets/videos/video2.mp4" type="video/mp4">
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              <div class="video-item">
                <video controls>
                  <source src="/src/assets/videos/video3.mp4" type="video/mp4">
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              <div class="video-item">
                <video controls>
                  <source src="/src/assets/videos/video4.mp4" type="video/mp4">
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div class="datos" v-if="selected === 'Publicaciones'">
          <div class="publicaciones">
            <h3>Publicaciones</h3>
            <div class="pdf-preview">
              <h4>Uso de bacterias lacticas como control de calidad microbiológica en queso </h4>
              <iframe src="https://firebasestorage.googleapis.com/v0/b/vinculacionuleam-3209d.appspot.com/o/pdf1.pdf?alt=media&token=6a20a612-59ee-4b1f-88ec-ed079898ba31" width="100%" height="500px" allowfullscreen title="Lactobacillus acidophilus to control microbiological contamination of fresh cheese"></iframe>
            </div>
            <div class="pdf-preview">
              <h4>Uso de extractos de cacao como control de Salmonella en queso </h4>
              <iframe src="https://firebasestorage.googleapis.com/v0/b/vinculacionuleam-3209d.appspot.com/o/pdf2.pdf?alt=media&token=284ae931-bff2-4719-a1f7-c9fb9c41fceb" width="100%" height="500px" allowfullscreen title="Phenolic compounds and cheese preservation"></iframe>
            </div>
            <div class="pdf-preview">
              <h4>Presencia de Salmonella en alimentos de la costa Ecuatoriana</h4>
              <iframe src="https://firebasestorage.googleapis.com/v0/b/vinculacionuleam-3209d.appspot.com/o/pdf3.pdf?alt=media&token=cd717262-a53f-411d-9606-37524a9dcb39"  width="100%" height="500px" allowfullscreen title="Presencia de Salmonella en alimentos de la costa Ecuatoriana"></iframe>
            </div>
          </div>
        </div>
        <div class="datos" v-if="selected === 'Contacto'">
          <div class="contacto-container text-center">
            <h3>Contacto</h3>
            <img src="/src/assets/img/ing.jpg" alt="Foto de contacto" class="rounded-circle mb-3" width="150" height="150">
            <h4>Stalin Santacruz Ph.D.</h4>
            <p>stalin.santacruz@uleam.edu.ec</p>
            <a href="mailto:stalin.santacruz@uleam.edu.ec" class="btn btn-primary">Enviar correo</a>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<style scoped>
.bg-light-green {
  background-color: #adfabf;
}
.bg-light-yellow {
  background-color: #f9e297;
}
.bg-light-red {
  background-color: #f7b1b6;
}
.bg-light-gray {
  background-color: #98c8f7;
}
.rounded {
  border-radius: 15px;
}
.p-3 {
  padding: 1rem;
}
.rawr {
  margin-bottom: 20px;
  list-style: none;
}
.home {
  background-color: #f0f0f0; /* Fondo gris claro para resaltar la hoja */
}
.home p {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.home_ {
  margin-top: 40px; /* Ajuste de margen superior */
  margin-bottom: 20px; /* Ajuste de margen inferior */
}

.datos {
  margin: 0 10px;
}

.datos p {
  margin-left: 20px;
  font-size: 16px;
}

.datos h3, .datos h4 {
  margin-bottom: 10px;
}

.container h2 {
  margin-bottom: 20px;
}

.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu-button {
  background-color: #2C9A42; /* Color verde */
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 0%;
}

.menu-button:last-child {
  border-right: none;
}

.menu-button.active {
  background-color: #B3E5BE; /* Color verde más oscuro para la sección seleccionada */
  color: #2C9A42;
}
.contacto-container {
  background-color: #ffffff; /* Fondo blanco */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: auto;
}

.contacto-container img {
  border: 2px solid #2C9A42; /* Borde verde */
}

.contacto-container h3 {
  margin-bottom: 20px;
}

.contacto-container h4 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.contacto-container p {
  margin-bottom: 20px;
}

.contacto-container .btn {
  background-color: #2C9A42; /* Color verde */
  border: none;
}

.contacto-container .btn:hover {
  background-color: #B3E5BE; /* Color verde más claro */
}
.publicaciones {
  margin-top: 20px;
}

.pdf-preview {
  margin-bottom: 20px;
}

.pdf-preview h4 {
  margin-bottom: 10px;
}

.pdf-preview iframe {
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.productos {
  margin-top: 20px;
}

.video-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.video-item {
  flex: 1 1 30%; /* Ajusta el tamaño de cada video */
  margin: 10px;
}

video {
  width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
@media (max-width: 767px) {
  .menu {
    flex-direction: row; /* Botones en una columna para pantallas pequeñas */
  }

  .menu-button {
    min-width: auto; /* Eliminar el ancho mínimo para pantallas pequeñas */
    width: 50%; /* Hacer que los botones ocupen todo el ancho */
  }
}
</style>

  