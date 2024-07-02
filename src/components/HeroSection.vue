<template>
  <section class="relative isolate overflow-hidden bg-cover h-screen main">
      <div class="absolute sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-left" />
      <div class="max-w-2xl lg:max-w-5xl">
        <figure class="mt-44">
          <blockquote class="text-left text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9 w-50 pl-12 bg-opacity-45 bg-black rounded-xl shadow-lg p-4">
            <p class="text-cyan-500 text-4xl mb-4">¡Alcanza Nuevas Metas y Transforma Tu Vida!</p>
            <p class="text-cyan-500 text-3xl mb-4">Atención de calidad, transparente y de confianza.</p>
            <p class="text-white">Encuentra los mejores cursos online para crecer profesional y personalmente.</p>
          </blockquote>
          <figcaption class="mt-10">
            <div class="flex">  
              <img class="mx-auto h-20 mr-0" src="../assets/imgs/img-Adrian.png" alt="Hotmart-Logo" />
              <img class="mx-auto h-20 ml-0 rounded-full" src="../assets/imgs/hotmart.png" alt="Img Adrian" />
            </div>
            <div class="mt-4 flex flex-col items-center justify-center space-y-3 text-base">
              <div class="flex items-center space-x-3">
                <div class="font-semibold text-cyan-500">Adrian Ospina</div>
                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div class="text-white">Marketing - Hotmart</div>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div class="fixed button-whatsapp bottom-0 right-2 mb-4 ml-4 z-50">
        <a href="https://wa.me/3205022794?text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20del%20producto" class="flex items-center hover:underline">
          <img src="../assets/imgs/whatsapp.png" alt="Whatsapp-Icon" class="h-16 w-16">
        </a>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg class="w-10 h-10 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
  </section>
</template>


<style scoped>
    .main {
      background-image: url('../assets/imgs/backg-main.png'), 
      linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
    }

    @keyframes scalePulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }
    
    .button-whatsapp {
      animation: scalePulse 2s infinite; /* Aplica la animación de escala infinita */
    }


    @media (max-width: 768px) { /* Target screens smaller than 768px (typical mobile breakpoint) */

      .main {
          background-image: url('../assets/imgs/movil-hero.png'); /* Use a smaller background image for mobile */
          background-size: cover; /* Ensure background covers the entire viewport */
      }
  
      .figure {
          margin-top: 20px; /* Adjust margin for mobile */
      }
  
      blockquote {
          font-size: 1.5rem; /* Reduce font size for mobile */
          justify-content: center;
          align-content: center;
          margin-right: 20px;
      }
  
      .button-whatsapp {
          bottom: 5px; /* Adjust position for mobile */
      }
  
      /* Add additional mobile-specific styles as needed */
  }
</style>
