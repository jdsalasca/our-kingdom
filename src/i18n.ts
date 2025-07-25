import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
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
      
      // Missing translations found in components
      'Our paths crossed and created something magical...': 'Nuestros caminos se cruzaron y crearon algo mágico...',
      'Your Road': 'Tu Camino',
      'Your journey began with...': 'Tu viaje comenzó con...',
      'Your dreams and aspirations...': 'Tus sueños y aspiraciones...',
      'Your unique path in life...': 'Tu camino único en la vida...',
      'My Road': 'Mi Camino',
      'My journey began with...': 'Mi viaje comenzó con...',
      'My dreams and aspirations...': 'Mis sueños y aspiraciones...',
      'My unique path in life...': 'Mi camino único en la vida...',
      'Where Our Roads Meet': 'Donde Nuestros Caminos Se Encuentran',
      'Here, in this magical intersection, our separate journeys became one beautiful adventure together. Every step we take now, we take hand in hand, building our own happy kingdom.': 'Aquí, en esta intersección mágica, nuestros viajes separados se convirtieron en una hermosa aventura juntos. Cada paso que damos ahora, lo damos de la mano, construyendo nuestro propio reino feliz.',
      
      // Our Play translations
      "Let's have fun together in our pixel paradise!": '¡Divirtámonos juntos en nuestro paraíso de píxeles!',
      'Love Puzzle': 'Rompecabezas de Amor',
      'Solve puzzles together and unlock our memories!': '¡Resuelve rompecabezas juntos y desbloquea nuestros recuerdos!',
      'Our Adventure': 'Nuestra Aventura',
      'Go on a pixel adventure through our kingdom!': '¡Ve en una aventura de píxeles por nuestro reino!',
      'Score': 'Puntuación',
      'Back to Games': 'Volver a Juegos',
      'Quiz Complete!': '¡Quiz Completado!',
      'Play Again': 'Jugar de Nuevo',
      'Start Game': 'Comenzar Juego',
      'What is your favorite color?': '¿Cuál es tu color favorito?',
      'Pink': 'Rosa',
      'Blue': 'Azul',
      'Purple': 'Morado',
      'Green': 'Verde',
      'What is your favorite food?': '¿Cuál es tu comida favorita?',
      'Pizza': 'Pizza',
      'Sushi': 'Sushi',
      'Tacos': 'Tacos',
      'Pasta': 'Pasta',
      'What is your dream vacation?': '¿Cuál es tu vacación soñada?',
      'Beach': 'Playa',
      'Mountains': 'Montañas',
      'City': 'Ciudad',
      'Forest': 'Bosque',
      
      // Gallery translations
      'Capturing our beautiful moments together in pixel-art style': 'Capturando nuestros hermosos momentos juntos en estilo pixel-art',
      'Our beautiful memories together': 'Nuestros hermosos recuerdos juntos',
      '← Back to Our Kingdom': '← Volver a Nuestro Reino',
      
      // About Us translations
      'Our love story in pixels...': 'Nuestra historia de amor en píxeles...',
      'You': 'Tú',
      'You are the most amazing person I\'ve ever met. Your smile lights up my world, your laugh is my favorite sound, and your love makes every day feel like a fairy tale. You bring out the best in me and make me want to be better every day.': 'Eres la persona más increíble que he conocido. Tu sonrisa ilumina mi mundo, tu risa es mi sonido favorito, y tu amor hace que cada día se sienta como un cuento de hadas. Sacas lo mejor de mí y me haces querer ser mejor cada día.',
      'Me': 'Yo',
      'I promise to love you with all my heart, to be your biggest supporter, your best friend, and your partner in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.': 'Prometo amarte con todo mi corazón, ser tu mayor apoyo, tu mejor amigo y tu compañero en todas las aventuras de la vida. Juntos, podemos conquistar cualquier cosa y construir el reino más hermoso.',
      'Our Journey': 'Nuestro Viaje',
      'First Meeting': 'Primer Encuentro',
      'The moment our eyes first met...': 'El momento en que nuestros ojos se encontraron por primera vez...',
      'First Date': 'Primera Cita',
      'Our magical first date together...': 'Nuestra mágica primera cita juntos...',
      'First Kiss': 'Primer Beso',
      'Moving In': 'Mudanza Juntos',
      'Building our home together...': 'Construyendo nuestro hogar juntos...',
      'Future Dreams': 'Sueños Futuros',
      'All the adventures yet to come...': 'Todas las aventuras que están por venir...',
      'Our Love Stats': 'Nuestras Estadísticas de Amor',
      'Infinite': 'Infinito',
      'Love': 'Amor',
      'Endless': 'Interminable',
      'Adventures': 'Aventuras',
      'Countless': 'Innumerables',
      'Laughs': 'Risas',
      'Forever': 'Para Siempre',
      'Together': 'Juntos',
      'days together': 'días juntos',
      
      // Special letter translations
      'Mi amor, cada día que paso contigo es como una nueva aventura en nuestro propio reino de píxeles.': 'Mi amor, cada día que paso contigo es como una nueva aventura en nuestro propio reino de píxeles.',
      'Como en Undertale, cada decisión que tomamos juntos nos acerca más, y como en Terraria, construimos nuestro mundo perfecto ladrillo a ladrillo.': 'Como en Undertale, cada decisión que tomamos juntos nos acerca más, y como en Terraria, construimos nuestro mundo perfecto ladrillo a ladrillo.',
      'En estos momentos difíciles, quiero que sepas que eres increíblemente fuerte. Tu amor y tu luz iluminan mi mundo cada día.': 'En estos momentos difíciles, quiero que sepas que eres increíblemente fuerte. Tu amor y tu luz iluminan mi mundo cada día.',
      'Juntos somos invencibles. Te amo infinitamente y estoy aquí para ti, siempre. 💕': 'Juntos somos invencibles. Te amo infinitamente y estoy aquí para ti, siempre. 💕',
      
      // Undertale game translations
      'En Undertale, cada decisión importa. Juntos hemos elegido el camino del amor y la amistad.': 'En Undertale, cada decisión importa. Juntos hemos elegido el camino del amor y la amistad.',
      
      // Terraria game translations
      'Como en Terraria, construimos nuestro mundo perfecto juntos, ladrillo a ladrillo.': 'Como en Terraria, construimos nuestro mundo perfecto juntos, ladrillo a ladrillo.',
      
      // Love Letter translations
      'My Dearest Love': 'Mi Amor Más Querido',
      'Our Adventure Together': 'Nuestra Aventura Juntos',
      'Your Strength': 'Tu Fuerza',
      'Forever Together': 'Para Siempre Juntos',
      
      // Surprise Feature translations
      'A Special Surprise': 'Una Sorpresa Especial',
      'For the most amazing person in my life...': 'Para la persona más increíble de mi vida...',
      'You Are Everything': 'Eres Todo',
      'Every moment with you is a gift. You make my world complete.': 'Cada momento contigo es un regalo. Haces que mi mundo esté completo.',
      'My Promise to You': 'Mi Promesa Para Ti',
      'I promise to love you more each day, to be your strength when you need it, and to hold your hand through every adventure.': 'Prometo amarte más cada día, ser tu fuerza cuando la necesites, y sostener tu mano en cada aventura.',
      'Forever Yours': 'Para Siempre Tuya',
      'I love you more than words can express. You are my everything. 💕': 'Te amo más de lo que las palabras pueden expresar. Eres mi todo. 💕',
      
      // Birthday Presentation Screen
      'Click to begin your special day...': 'Haz clic para comenzar tu día especial...',
      'Enter Our Kingdom': 'Entrar a Nuestro Reino',
      'Skip Presentation': 'Saltar Presentación',
      
      // Return buttons and navigation
      'Back': 'Atrás',
      'Return': 'Volver',
      'Go Back': 'Regresar',
      'Home': 'Inicio',
      'Main Menu': 'Menú Principal',
      
      // Music Player
      'Volume': 'Volumen',
      'Music Player': 'Reproductor de Música',
      'Open Music Player': 'Abrir Reproductor de Música',
      'Close Music Player': 'Cerrar Reproductor de Música',
      'Previous Song': 'Canción Anterior',
      'Next Song': 'Siguiente Canción',
      'Play Music': 'Reproducir Música',
      'Pause Music': 'Pausar Música',
      'Music is loading...': 'La música se está cargando...',
      'Music will be available soon': 'La música estará disponible pronto',
      
      // Emotional Support
      'You are beautiful': 'Eres hermosa',
      'You are amazing': 'Eres increíble',
      'You are perfect': 'Eres perfecta',
      'You are my everything': 'Eres mi todo',
      'You make me happy': 'Me haces feliz',
      'You are my dream come true': 'Eres mi sueño hecho realidad',
      'You are my soulmate': 'Eres mi alma gemela',
      'You are my best friend': 'Eres mi mejor amiga',
      'You are my partner': 'Eres mi compañera',
      'You are my love': 'Eres mi amor',
      'You are my life': 'Eres mi vida',
      'You are my future': 'Eres mi futuro',
      'You are my past': 'Eres mi pasado',
      'You are my present': 'Eres mi presente',
      'You are my yesterday': 'Eres mi ayer',
      'You are my today': 'Eres mi hoy',
      'You are my tomorrow': 'Eres mi mañana',
      'You are my always': 'Eres mi siempre',
      'You are my forever': 'Eres mi para siempre',
      'You are my never': 'Eres mi nunca',
      'You are my sometimes': 'Eres mi a veces',
      'You are my rarely': 'Eres mi raramente',
      'You are my often': 'Eres mi frecuentemente',
      'You are my seldom': 'Eres mi pocas veces',
      'You are my frequently': 'Eres mi frecuentemente',
      'You are my constantly': 'Eres mi constantemente',
      'You are my continuously': 'Eres mi continuamente',
      'You are my perpetually': 'Eres mi perpetuamente',
      'You are my eternally': 'Eres mi eternamente',

      // New translations for hardcoded text
      'Today you turn 26 and I want to celebrate every moment with you 💕': 'Hoy cumples 26 años y quiero celebrar cada momento contigo 💕',
      'Welcome to Our Kingdom!': '¡Bienvenida a Nuestro Reino!',
      'Your special music is starting... 💕': 'Tu música especial está comenzando... 💕',
      'Open Magic Theatre': 'Abrir Teatro Mágico',
      'Beautiful Memory': 'Hermoso Recuerdo',
      'Volume control': 'Control de volumen',
      
      // Birthday Presentation Phrases
      'Happy Birthday, My Love!': '¡Feliz Cumpleaños, Mi Amor!',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Default to Spanish
    fallbackLng: 'es',
    debug: false,
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 