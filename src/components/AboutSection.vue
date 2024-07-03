<template>
  <section class="hero relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center">
    <video autoplay muted loop class="absolute inset-0 w-full h-full object-cover z-0">
      <source src="../assets/imgs/about-video.mp4" type="video/mp4">
    </video>
    <div class="flex flex-col items-center justify-center min-h-screen px-8 md:px-16 lg:px-32 mx-auto z-10 pt-10 pb-10">
      <div class="bg-teal-400 opacity-70 rounded-md p-8 text-center flex flex-col items-center justify-center">
        <img src="../assets/imgs/img-Adrian.png" alt="Adrian-img" class="mb-4 w-25">
        <div class="flex flex-col items-center justify-center mb-10">
          <h1 class="text-5xl text-center font-bold mb-4">Sobre mi</h1>
          <p class="text-2xl mb-2 text-center">
            ¡Hola! soy <strong>Adrian Ospina</strong> y me dedico a recomendar los mejores cursos en Hotmart <strong>(Marketing de afiliados).</strong>
            <br>
            Mi misión es ayudarte a encontrar el curso perfecto en áreas como moda, belleza, salud, deporte y crecimiento personal. Confía en mi experiencia para guiarte hacia el éxito en tu aprendizaje y desarrollo personal.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  background-color: #000000;
}

.hero video {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}

@media (max-width: 768px) {
  .hero .flex-col { /* Selecciona el contenedor interno */
    display: flex; /* Habilita el layout flex */
    flex-direction: column; /* Apila elementos verticalmente */
    justify-content: center; /* Centra verticalmente */
    align-items: center; /* Centra horizontalmente */
    height: 90%; /* Ocupa toda la altura disponible */
    padding: 1rem; /* Añade espacio de padding para separación (opcional) */
  }

  img {
    width: 150px;
    height: auto;
  }
}
</style>