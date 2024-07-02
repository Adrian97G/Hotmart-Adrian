<template>
  <footer class="bg-gradient-to-r from-black via-cyan-500 to-black text-white py-12">
    <div class="container mx-auto px-8 md:px-16 lg:px-32">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 items-center mx-8"> <!-- Agregado items-center y mx-8 -->
        <!-- Logo and About Section -->
        <div class="flex flex-col items-center">
          <div class="flex mb-4">
            <img class="h-28 mr-4" src="../assets/imgs/img-Adrian.png" alt="Hotmart-Logo" /> <!-- Aumento de tamaño a h-28 -->
            <img class="h-28 ml-4 rounded-full" src="../assets/imgs/hotmart.png" alt="Img Adrian" /> <!-- Aumento de tamaño a h-28 -->
          </div>
          <p class="text-lg text-black font-bold text-center">¡Somos tu mejor opción para encontrar cursos y productos online de calidad!</p>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-xl text-black font-semibold mb-4">Contáctanos para mas información</h3>
          <ul>
            <li class="mb-4">
              <a href="mailto:ospinaadrian784@gmail.com" class="flex items-center hover:underline">
                <img src="../assets/imgs/email.png" class="w-7 pr-2" alt="Email-icon" />
                <span class="text-lg">ospinaadrian784@gmail.com</span>
              </a>
            </li>
            <li class="mb-4">
              <a href="https://www.instagram.com/modabelleza012/" class="flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                <img src="../assets/imgs/instagram.png" class="w-7 pr-2" alt="Instagram-icon" />
                <span class="text-lg">Moda y Belleza</span>
              </a>
            </li>
            <li class="mb-4">
              <a href="https://www.instagram.com/crecimiento.pers.01/" class="flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                <img src="../assets/imgs/instagram.png" class="w-7 pr-2" alt="Instagram-icon" />
                <span class="text-lg">Crecimiento Personal</span>
              </a>
            </li>
            <li class="mb-4">
              <a href="https://www.instagram.com/misaludactiva.1/" class="flex items-center hover:underline" target="_blank" rel="noopener noreferrer">
                <img src="../assets/imgs/instagram.png" class="w-7 pr-2" alt="Instagram-icon" />
                <span class="text-lg">Salud y Deporte</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/3205022794?text=%C2%A1Hola%21%20Me%20gustar%C3%ADa%20saber%20m%C3%A1s%20del%20producto" target="_blank" class="flex items-center hover:underline">
                <img src="../assets/imgs/whatsapp.png" class="w-7 pr-2" alt="Whatsapp-icon" />
                <span class="text-lg">Enviar mensaje</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8">
        <p class="text-lg text-black">&copy; 2024 Moda y Belleza. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
