<template>
  <section class="products-section border-solid-12 bg-black min-h-screen py-12">
    <div class="container mx-auto px-8 md:px-16 lg:px-32 text-center">
      <h2 class="text-4xl text-cyan-500 font-bold mb-4">¡Productos para ti!</h2>
      <p class="text-2xl text-white mb-8">Descubre nuestra sección de productos cuidadosamente elegidos para tu evolución, gusto, necesidad y crecimiento. Cada curso o producto online en nuestra colección está diseñado para brindarte resultados increíbles y una experiencia de lujo.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        <div class="product-card bg-black opacity-80 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-104">
          <img src="../assets/imgs/automaquillaje.PNG" alt="Product Image 1" class="mb-4 rounded w-full h-auto object-cover">
          <h3 class="text-2xl text-cyan-500 font-bold mb-2">Desata tu genialidad
            a otro nivel creativo</h3>
          <p class="text-white mb-4">¡Descubre los secretos detrás de una mirada impactante y potencia tu habilidad con el maquillaje!</p>
          <p class="text-white">- Sin tener que gastar una fortuna en maquillaje
            <br>
             - Sin tener experiencia en maquillaje
            <br>
             - Sin tener que volver a gastar dinero para que te maquillen</p>
          <a href="https://go.hotmart.com/D94079727L" target="_blank">
            <button class="bg-cyan-500 text-black mt-3 py-2 px-4 rounded transition-colors duration-300 hover:bg-cyan-600 font-bold">Ver más</button>
          </a>
        </div>

        <div class="product-card bg-black opacity-80 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-104">
          <img src="../assets/imgs/yoga-facial.PNG" alt="Product Image 2" class="mb-4 rounded w-full h-auto object-cover">
          <h3 class="text-2xl text-cyan-500 font-bold mb-2">✨MÉTODO KY✨ Yoga facial</h3>
          <p class="text-white mb-4">Las personas gastan mucho tiempo y dinero en terapias de equilibrio energético cuando pueden encontrar ese equilibrio por sí mismas (Sé una persona empoderada, enamórate de lo que ves en el espejo a diario y elimina el estrés de tu vida)</p>
          <a href="https://go.hotmart.com/U94078764N" target="_blank">
            <button class="bg-cyan-500 text-black py-2 px-4 rounded transition-colors duration-300 hover:bg-cyan-600 font-bold">Ver más</button>
          </a>
        </div>

        <div class="product-card bg-black opacity-80 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-104">
          <img src="../assets/imgs/ejercicio.PNG" alt="Product Image 3" class="mb-4 rounded w-full h-auto object-cover">
          <h3 class="text-2xl text-cyan-500 font-bold mb-2">Adelgaza sin salir de casa</h3>
          <p class="text-white mb-4">Descubre cómo poder estar en forma y tener una vida saludable sin necesidad de gastar dinero en gimnasios, con resultados a partir de la tercera semana.</p>
          <a href="https://go.hotmart.com/B94078740K" target="_blank">
            <button class="bg-cyan-500 text-black py-2 px-4 rounded transition-colors duration-300 hover:bg-cyan-600 font-bold">Ver más</button>
          </a>
        </div>

        <div class="product-card bg-black opacity-80 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-104">
          <img src="../assets/imgs/dieta.PNG" alt="Product Image 4" class="mb-4 rounded w-full h-auto object-cover">
          <h3 class="text-2xl text-cyan-500 font-bold mb-2">200 Recetass Diabéticas que Revolucionarán tu Alimentación + Bonos</h3>
          <p class="text-white mb-4">
            Según estudios, se estima que el 83% de los pacientes con Diabetes mejoran enormemente su calidad de vida y hasta pueden prolongarla con una buena alimentación.</p>
          <a href="https://go.hotmart.com/P94064105M" target="_blank">
            <button class="bg-cyan-500 text-black py-2 px-4 rounded transition-colors duration-300 hover:bg-cyan-600 font-bold">Ver más</button>
          </a>
        </div>

        <div class="product-card bg-black opacity-80 p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-transform duration-300 hover:scale-104">
          <img src="../assets/imgs/maquillaje-prof.PNG" alt="Product Image 5" class="mb-4 rounded w-full h-auto object-cover">
          <h3 class="text-2xl text-cyan-500 font-bold mb-2">"Tú también puedes lograr un maquillaje perfecto"</h3>
          <p class="text-white mb-4">¿Quieres dominar las técnicas de maquillaje avanzado? En pocos pasos te llevaré de la mano para que lo logres.</p>
          <a href="https://go.hotmart.com/M94078793B" target="_blank">
            <button class="bg-cyan-500 text-black py-2 px-4 rounded transition-colors duration-300 hover:bg-cyan-600 font-bold">Ver más</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-card {
  border: 1px solid transparent;
  background-clip: padding-box;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.product-card::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.3), transparent);
  transition: transform 0.5s ease;
  z-index: 1;
}

.product-card:hover::before {
  transform: translate(25%, 25%);
}

.product-card img {
  z-index: 2;
  position: relative;
}

.product-card h3,
.product-card p,
.product-card button {
  z-index: 2;
  position: relative;
}
</style>
