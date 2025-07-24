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
      
      // Missing translations found in components
      'Our paths crossed and created something magical...': 'Our paths crossed and created something magical...',
      'Your Road': 'Your Road',
      'Your journey began with...': 'Your journey began with...',
      'Your dreams and aspirations...': 'Your dreams and aspirations...',
      'Your unique path in life...': 'Your unique path in life...',
      'My Road': 'My Road',
      'My journey began with...': 'My journey began with...',
      'My dreams and aspirations...': 'My dreams and aspirations...',
      'My unique path in life...': 'My unique path in life...',
      'Where Our Roads Meet': 'Where Our Roads Meet',
      'Here, in this magical intersection, our separate journeys became one beautiful adventure together. Every step we take now, we take hand in hand, building our own happy kingdom.': 'Here, in this magical intersection, our separate journeys became one beautiful adventure together. Every step we take now, we take hand in hand, building our own happy kingdom.',
      
      // Our Play translations
      "Let's have fun together in our pixel paradise!": "Let's have fun together in our pixel paradise!",
      'Love Puzzle': 'Love Puzzle',
      'Solve puzzles together and unlock our memories!': 'Solve puzzles together and unlock our memories!',
      'Our Adventure': 'Our Adventure',
      'Go on a pixel adventure through our kingdom!': 'Go on a pixel adventure through our kingdom!',
      'Score': 'Score',
      'Back to Games': 'Back to Games',
      'Quiz Complete!': 'Quiz Complete!',
      'Play Again': 'Play Again',
      'Start Game': 'Start Game',
      'What is your favorite color?': 'What is your favorite color?',
      'Pink': 'Pink',
      'Blue': 'Blue',
      'Purple': 'Purple',
      'Green': 'Green',
      'What is your favorite food?': 'What is your favorite food?',
      'Pizza': 'Pizza',
      'Sushi': 'Sushi',
      'Tacos': 'Tacos',
      'Pasta': 'Pasta',
      'What is your dream vacation?': 'What is your dream vacation?',
      'Beach': 'Beach',
      'Mountains': 'Mountains',
      'City': 'City',
      'Forest': 'Forest',
      
      // Gallery translations
      'Capturing our beautiful moments together in pixel-art style': 'Capturing our beautiful moments together in pixel-art style',
      'Our beautiful memories together': 'Our beautiful memories together',
      '← Back to Our Kingdom': '← Back to Our Kingdom',
      
      // About Us translations
      'Our love story in pixels...': 'Our love story in pixels...',
      'You': 'You',
      'You are the most amazing person I\'ve ever met. Your smile lights up my world, your laugh is my favorite sound, and your love makes every day feel like a fairy tale. You bring out the best in me and make me want to be better every day.': 'You are the most amazing person I\'ve ever met. Your smile lights up my world, your laugh is my favorite sound, and your love makes every day feel like a fairy tale. You bring out the best in me and make me want to be better every day.',
      'Me': 'Me',
      'I promise to love you with all my heart, to be your biggest supporter, your best friend, and your partner in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.': 'I promise to love you with all my heart, to be your biggest supporter, your best friend, and your partner in all of life\'s adventures. Together, we can conquer anything and build the most beautiful kingdom.',
      'Our Journey': 'Our Journey',
      'First Meeting': 'First Meeting',
      'The moment our eyes first met...': 'The moment our eyes first met...',
      'First Date': 'First Date',
      'Our magical first date together...': 'Our magical first date together...',
      'First Kiss': 'First Kiss',
      'Moving In': 'Moving In',
      'Building our home together...': 'Building our home together...',
      'Future Dreams': 'Future Dreams',
      'All the adventures yet to come...': 'All the adventures yet to come...',
      'Our Love Stats': 'Our Love Stats',
      'Infinite': 'Infinite',
      'Love': 'Love',
      'Endless': 'Endless',
      'Adventures': 'Adventures',
      'Countless': 'Countless',
      'Laughs': 'Laughs',
      'Forever': 'Forever',
      'Together': 'Together',
      'days together': 'days together',
      
      // Special letter translations (Spanish to English)
      'Mi amor, cada día que paso contigo es como una nueva aventura en nuestro propio reino de píxeles.': 'My love, every day I spend with you is like a new adventure in our own pixel kingdom.',
      'Como en Undertale, cada decisión que tomamos juntos nos acerca más, y como en Terraria, construimos nuestro mundo perfecto ladrillo a ladrillo.': 'Like in Undertale, every decision we make together brings us closer, and like in Terraria, we build our perfect world brick by brick.',
      'En estos momentos difíciles, quiero que sepas que eres increíblemente fuerte. Tu amor y tu luz iluminan mi mundo cada día.': 'In these difficult times, I want you to know that you are incredibly strong. Your love and your light illuminate my world every day.',
      'Juntos somos invencibles. Te amo infinitamente y estoy aquí para ti, siempre. 💕': 'Together we are invincible. I love you infinitely and I am here for you, always. 💕',
      
      // Undertale game translations (Spanish to English)
      'En Undertale, cada decisión importa. Juntos hemos elegido el camino del amor y la amistad.': 'In Undertale, every decision matters. Together we have chosen the path of love and friendship.',
      
      // Terraria game translations (Spanish to English)
      'Como en Terraria, construimos nuestro mundo perfecto juntos, ladrillo a ladrillo.': 'Like in Terraria, we build our perfect world together, brick by brick.',
      
      // Love Letter translations
      'My Dearest Love': 'My Dearest Love',
      'Our Adventure Together': 'Our Adventure Together',
      'Your Strength': 'Your Strength',
      'Forever Together': 'Forever Together',
      
      // Surprise Feature translations
      'A Special Surprise': 'A Special Surprise',
      'For the most amazing person in my life...': 'For the most amazing person in my life...',
      'You Are Everything': 'You Are Everything',
      'Every moment with you is a gift. You make my world complete.': 'Every moment with you is a gift. You make my world complete.',
      'My Promise to You': 'My Promise to You',
      'I promise to love you more each day, to be your strength when you need it, and to hold your hand through every adventure.': 'I promise to love you more each day, to be your strength when you need it, and to hold your hand through every adventure.',
      'Forever Yours': 'Forever Yours',
      'I love you more than words can express. You are my everything. 💕': 'I love you more than words can express. You are my everything. 💕',
      
      // Birthday Presentation Screen
      'Click to begin your special day...': 'Click to begin your special day...',
      'Enter Our Kingdom': 'Enter Our Kingdom',
      'Skip Presentation': 'Skip Presentation',
      
      // Return buttons and navigation
      'Back': 'Back',
      'Return': 'Return',
      'Go Back': 'Go Back',
      'Home': 'Home',
      'Main Menu': 'Main Menu',
      
      // Music Player
      'Volume': 'Volume',
      'Music Player': 'Music Player',
      'Open Music Player': 'Open Music Player',
      'Close Music Player': 'Close Music Player',
      'Previous Song': 'Previous Song',
      'Next Song': 'Next Song',
      'Play Music': 'Play Music',
      'Pause Music': 'Pause Music',
      'Music is loading...': 'Music is loading...',
      'Music will be available soon': 'Music will be available soon',
      
      // Emotional Support
      'You are beautiful': 'You are beautiful',
      'You are amazing': 'You are amazing',
      'You are perfect': 'You are perfect',
      'You are my everything': 'You are my everything',
      'You make me happy': 'You make me happy',
      'You are my dream come true': 'You are my dream come true',
      'You are my soulmate': 'You are my soulmate',
      'You are my best friend': 'You are my best friend',
      'You are my partner': 'You are my partner',
      'You are my love': 'You are my love',
      'You are my life': 'You are my life',
      'You are my future': 'You are my future',
      'You are my past': 'You are my past',
      'You are my present': 'You are my present',
      'You are my yesterday': 'You are my yesterday',
      'You are my today': 'You are my today',
      'You are my tomorrow': 'You are my tomorrow',
      'You are my always': 'You are my always',
      'You are my forever': 'You are my forever',
      'You are my never': 'You are my never',
      'You are my sometimes': 'You are my sometimes',
      'You are my rarely': 'You are my rarely',
      'You are my often': 'You are my often',
      'You are my seldom': 'You are my seldom',
      'You are my frequently': 'You are my frequently',
      'You are my constantly': 'You are my constantly',
      'You are my continuously': 'You are my continuously',
      'You are my perpetually': 'You are my perpetually',
      'You are my eternally': 'You are my eternally',

      // New translations for hardcoded text
      'Today you turn 26 and I want to celebrate every moment with you 💕': 'Today you turn 26 and I want to celebrate every moment with you 💕',
      'Start Special Celebration': 'Start Special Celebration',
      'Welcome to Our Kingdom!': 'Welcome to Our Kingdom!',
      'Your special music is starting... 💕': 'Your special music is starting... 💕',
      'Open Magic Theatre': 'Open Magic Theatre',
      'Beautiful Memory': 'Beautiful Memory',
      'Volume control': 'Volume control',
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
      'Start Special Celebration': 'Comenzar Celebración Especial',
      'Welcome to Our Kingdom!': '¡Bienvenida a Nuestro Reino!',
      'Your special music is starting... 💕': 'Tu música especial está comenzando... 💕',
      'Open Magic Theatre': 'Abrir Teatro Mágico',
      'Beautiful Memory': 'Hermoso Recuerdo',
      'Volume control': 'Control de volumen',
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