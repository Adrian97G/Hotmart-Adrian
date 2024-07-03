import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  assetsInclude: [
    'src/assets/imgs/automaquillaje.PNG',
    'src/assets/imgs/backg-main.png',
    'src/assets/imgs/dieta.PNG',
    'src/assets/imgs/ejercicio.PNG',
    'src/assets/imgs/email.png',
    'src/assets/imgs/favicon.png.PNG',
    'src/assets/imgs/hotmart.png',
    'src/assets/imgs/img-Adrian.png',
    'src/assets/imgs/instagram.png',
    'src/assets/imgs/maquillaje-prof.PNG',
    'src/assets/imgs/movil-hero.png',
    'src/assets/imgs/whatsapp.png',
    'src/assets/imgs/yoga-facial.PNG',
    'src/assets/imgs/about-video.mp4'
  ]
});
