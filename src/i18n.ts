import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      'Our Happy Kingdom': 'Our Happy Kingdom',
      'Dashboard': 'Dashboard',
      'Two Roads': 'Two Roads',
      'Our Play': 'Our Play',
      'Gallery': 'Gallery',
      'About Us': 'About Us',
      
      // Dashboard
      'Two Roads, One Destiny': 'Two Roads, One Destiny',
      'Explore the paths that brought us together and the adventures that await us!': 'Explore the paths that brought us together and the adventures that await us!',
      'Start Journey →': 'Start Journey →',
      'Fun games and activities we can enjoy together in our pixel paradise!': 'Fun games and activities we can enjoy together in our pixel paradise!',
      "Let's Play! →": "Let's Play! →",
      'Beautiful memories captured in our pixel-art kingdom!': 'Beautiful memories captured in our pixel-art kingdom!',
      'View Memories →': 'View Memories →',
      'Learn more about our story and the love that built this kingdom!': 'Learn more about our story and the love that built this kingdom!',
      'Our Story →': 'Our Story →',
      
      // Special Features
      'Special Letter': 'Special Letter',
      'Click to read a special letter written just for you.': 'Click to read a special letter written just for you.',
      
      // Emotional Support Messages
      'You are loved': 'You are loved',
      'You are strong': 'You are strong',
      'You are never alone': 'You are never alone',
      'Together we are invincible': 'Together we are invincible',
      'Your love lights up my world': 'Your love lights up my world',
      'I am here for you always': 'I am here for you always',
      'Remember: You are stronger than you know, more loved than you can imagine, and never alone in this journey.': 'Remember: You are stronger than you know, more loved than you can imagine, and never alone in this journey.',
      'Music has the power to heal hearts and bring us closer together. You are loved.': 'Music has the power to heal hearts and bring us closer together. You are loved.',
      'Don\'t worry! Music will be available soon. You can still enjoy our magical world together.': 'Don\'t worry! Music will be available soon. You can still enjoy our magical world together.',
      
      // Games
      'Memory Match': 'Memory Match',
      'Love Quiz': 'Love Quiz',
      'Undertale Adventure': 'Undertale Adventure',
      'Terraria Build': 'Terraria Build',
      'Find matching pairs of our special moments!': 'Find matching pairs of our special moments!',
      'Test how well we know each other!': 'Test how well we know each other!',
      'Explore our friendship and love through Undertale themes!': 'Explore our friendship and love through Undertale themes!',
      'Build our perfect world together, block by block!': 'Build our perfect world together, block by block!',
      
      // Game Stats
      'LOVE': 'LOVE',
      'FRIENDSHIP': 'FRIENDSHIP',
      'DETERMINATION': 'DETERMINATION',
      'Nuestro Hogar': 'Our Home',
      'Nuestro Amor': 'Our Love',
      'Nuestro Reino': 'Our Kingdom',
      
      // Quiz
      'Question': 'Question',
      'of': 'of',
      'Correct!': 'Correct!',
      'Incorrect!': 'Incorrect!',
      'Your Score:': 'Your Score:',
      'Perfect! You know each other perfectly!': 'Perfect! You know each other perfectly!',
      'Great! You know each other very well!': 'Great! You know each other very well!',
      'Good! You know each other well!': 'Good! You know each other well!',
      'Keep learning about each other!': 'Keep learning about each other!',
      
      // Gallery
      'Our Memories': 'Our Memories',
      'Click to view': 'Click to view',
      'Close': 'Close',
      'Previous': 'Previous',
      'Next': 'Next',
      
      // About Us
      'Our Story': 'Our Story',
      'A moment that changed everything...': 'A moment that changed everything...',
      'The day we met, our worlds collided in the most beautiful way. Like in our favorite games, every choice we made led us to this perfect moment together.': 'The day we met, our worlds collided in the most beautiful way. Like in our favorite games, every choice we made led us to this perfect moment together.',
      'Our love story is like the best adventure game - full of challenges, growth, and endless possibilities. We\'ve built our own kingdom, pixel by pixel, with love as our foundation.': 'Our love story is like the best adventure game - full of challenges, growth, and endless possibilities. We\'ve built our own kingdom, pixel by pixel, with love as our foundation.',
      'In every moment, whether playing Undertale or building in Terraria, we discover new ways to love and support each other. Our journey together is the greatest adventure of all.': 'In every moment, whether playing Undertale or building in Terraria, we discover new ways to love and support each other. Our journey together is the greatest adventure of all.',
      'I promise to love you with all my heart, be your greatest support, your best friend, and your companion in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.': 'I promise to love you with all my heart, be your greatest support, your best friend, and your companion in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.',
      
      // Footer
      'Made with 💕 for our happy kingdom together': 'Made with 💕 for our happy kingdom together',
      'Remember: You are loved, you are strong, and you are never alone. 💕': 'Remember: You are loved, you are strong, and you are never alone. 💕',
      
      // Loading
      'Loading your magical world... 💕': 'Loading your magical world... 💕',
      
      // Greetings
      'Good morning': 'Good morning',
      'Good afternoon': 'Good afternoon',
      'Good evening': 'Good evening',
      'my love! Welcome to our magical pixel world together! 💕': 'my love! Welcome to our magical pixel world together! 💕',
    }
  },
  es: {
    translation: {
      // Navigation
      'Our Happy Kingdom': 'Nuestro Reino Feliz',
      'Dashboard': 'Inicio',
      'Two Roads': 'Dos Caminos',
      'Our Play': 'Nuestro Juego',
      'Gallery': 'Galería',
      'About Us': 'Sobre Nosotros',
      
      // Dashboard
      'Two Roads, One Destiny': 'Dos Caminos, Un Destino',
      'Explore the paths that brought us together and the adventures that await us!': '¡Explora los caminos que nos unieron y las aventuras que nos esperan!',
      'Start Journey →': 'Comenzar Viaje →',
      'Fun games and activities we can enjoy together in our pixel paradise!': '¡Juegos divertidos y actividades que podemos disfrutar juntos en nuestro paraíso de píxeles!',
      "Let's Play! →": '¡Juguemos! →',
      'Beautiful memories captured in our pixel-art kingdom!': '¡Hermosos recuerdos capturados en nuestro reino de pixel-art!',
      'View Memories →': 'Ver Recuerdos →',
      'Learn more about our story and the love that built this kingdom!': '¡Conoce más sobre nuestra historia y el amor que construyó este reino!',
      'Our Story →': 'Nuestra Historia →',
      
      // Special Features
      'Special Letter': 'Carta Especial',
      'Click to read a special letter written just for you.': 'Haz clic para leer una carta especial escrita solo para ti.',
      
      // Emotional Support Messages
      'You are loved': 'Eres amada',
      'You are strong': 'Eres fuerte',
      'You are never alone': 'Nunca estás sola',
      'Together we are invincible': 'Juntos somos invencibles',
      'Your love lights up my world': 'Tu amor ilumina mi mundo',
      'I am here for you always': 'Estoy aquí para ti siempre',
      'Remember: You are stronger than you know, more loved than you can imagine, and never alone in this journey.': 'Recuerda: Eres más fuerte de lo que sabes, más amada de lo que puedes imaginar, y nunca estás sola en este viaje.',
      'Music has the power to heal hearts and bring us closer together. You are loved.': 'La música tiene el poder de sanar corazones y acercarnos más. Eres amada.',
      'Don\'t worry! Music will be available soon. You can still enjoy our magical world together.': '¡No te preocupes! La música estará disponible pronto. Aún puedes disfrutar de nuestro mundo mágico juntos.',
      
      // Games
      'Memory Match': 'Memoria',
      'Love Quiz': 'Quiz de Amor',
      'Undertale Adventure': 'Aventura Undertale',
      'Terraria Build': 'Construcción Terraria',
      'Find matching pairs of our special moments!': '¡Encuentra pares de nuestros momentos especiales!',
      'Test how well we know each other!': '¡Pon a prueba qué tan bien nos conocemos!',
      'Explore our friendship and love through Undertale themes!': '¡Explora nuestra amistad y amor a través de temas de Undertale!',
      'Build our perfect world together, block by block!': '¡Construye nuestro mundo perfecto juntos, bloque por bloque!',
      
      // Game Stats
      'LOVE': 'AMOR',
      'FRIENDSHIP': 'AMISTAD',
      'DETERMINATION': 'DETERMINACIÓN',
      'Nuestro Hogar': 'Nuestro Hogar',
      'Nuestro Amor': 'Nuestro Amor',
      'Nuestro Reino': 'Nuestro Reino',
      
      // Quiz
      'Question': 'Pregunta',
      'of': 'de',
      'Correct!': '¡Correcto!',
      'Incorrect!': '¡Incorrecto!',
      'Your Score:': 'Tu Puntuación:',
      'Perfect! You know each other perfectly!': '¡Perfecto! ¡Se conocen perfectamente!',
      'Great! You know each other very well!': '¡Genial! ¡Se conocen muy bien!',
      'Good! You know each other well!': '¡Bien! ¡Se conocen bien!',
      'Keep learning about each other!': '¡Sigan aprendiendo sobre el otro!',
      
      // Gallery
      'Our Memories': 'Nuestros Recuerdos',
      'Click to view': 'Clic para ver',
      'Close': 'Cerrar',
      'Previous': 'Anterior',
      'Next': 'Siguiente',
      
      // About Us
      'Our Story': 'Nuestra Historia',
      'A moment that changed everything...': 'Un momento que cambió todo...',
      'The day we met, our worlds collided in the most beautiful way. Like in our favorite games, every choice we made led us to this perfect moment together.': 'El día que nos conocimos, nuestros mundos chocaron de la manera más hermosa. Como en nuestros juegos favoritos, cada decisión que tomamos nos llevó a este momento perfecto juntos.',
      'Our love story is like the best adventure game - full of challenges, growth, and endless possibilities. We\'ve built our own kingdom, pixel by pixel, with love as our foundation.': 'Nuestra historia de amor es como el mejor juego de aventuras - lleno de desafíos, crecimiento y posibilidades infinitas. Hemos construido nuestro propio reino, píxel por píxel, con el amor como nuestra base.',
      'In every moment, whether playing Undertale or building in Terraria, we discover new ways to love and support each other. Our journey together is the greatest adventure of all.': 'En cada momento, ya sea jugando Undertale o construyendo en Terraria, descubrimos nuevas formas de amarnos y apoyarnos mutuamente. Nuestro viaje juntos es la mayor aventura de todas.',
      'I promise to love you with all my heart, be your greatest support, your best friend, and your companion in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.': 'Prometo amarte con todo mi corazón, ser tu mayor apoyo, tu mejor amigo y tu compañero en todas las aventuras de la vida. Juntos, podemos conquistar cualquier cosa y construir el reino más hermoso.',
      
      // Footer
      'Made with 💕 for our happy kingdom together': 'Hecho con 💕 para nuestro reino feliz juntos',
      'Remember: You are loved, you are strong, and you are never alone. 💕': 'Recuerda: Eres amada, eres fuerte, y nunca estás sola. 💕',
      
      // Loading
      'Loading your magical world... 💕': 'Cargando tu mundo mágico... 💕',
      
      // Greetings
      'Good morning': 'Buenos días',
      'Good afternoon': 'Buenas tardes',
      'Good evening': 'Buenas noches',
      'my love! Welcome to our magical pixel world together! 💕': '¡mi amor! ¡Bienvenida a nuestro mundo mágico de píxeles juntos! 💕',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 