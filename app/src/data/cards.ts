import type { GameCard } from '../types/game';

// Cartas familiares (13+)
export const familyCards: GameCard[] = [
  // TRUTH cards
  {
    id: 'fam-t-001',
    type: 'truth',
    content: '¿Cuál es tu comida favorita y por qué?',
    category: 'family',
    difficulty: 1,
    tags: ['comida', 'favoritos']
  },
  {
    id: 'fam-t-002',
    type: 'truth',
    content: '¿Cuál es tu recuerdo más feliz de la infancia?',
    category: 'family',
    difficulty: 2,
    tags: ['infancia', 'recuerdos']
  },
  {
    id: 'fam-t-003',
    type: 'truth',
    content: '¿Qué superpoder te gustaría tener?',
    category: 'family',
    difficulty: 1,
    tags: ['fantasía', 'poderes']
  },
  {
    id: 'fam-t-004',
    type: 'truth',
    content: '¿Cuál es tu película favorita de todos los tiempos?',
    category: 'family',
    difficulty: 1,
    tags: ['películas', 'entretenimiento']
  },
  {
    id: 'fam-t-005',
    type: 'truth',
    content: '¿Qué lugar del mundo te gustaría visitar más?',
    category: 'family',
    difficulty: 2,
    tags: ['viajes', 'sueños']
  },
  {
    id: 'fam-t-006',
    type: 'truth',
    content: '¿Cuál es tu animal favorito y por qué?',
    category: 'family',
    difficulty: 1,
    tags: ['animales', 'favoritos']
  },
  {
    id: 'fam-t-007',
    type: 'truth',
    content: '¿Qué te gustaría ser cuando seas grande?',
    category: 'family',
    difficulty: 2,
    tags: ['futuro', 'sueños']
  },
  {
    id: 'fam-t-008',
    type: 'truth',
    content: '¿Cuál es tu materia favorita en la escuela?',
    category: 'family',
    difficulty: 1,
    tags: ['escuela', 'materias']
  },
  {
    id: 'fam-t-009',
    type: 'truth',
    content: '¿Qué es lo que más te gusta hacer en tu tiempo libre?',
    category: 'family',
    difficulty: 1,
    tags: ['tiempo libre', 'hobbies']
  },
  {
    id: 'fam-t-010',
    type: 'truth',
    content: '¿Cuál es tu color favorito?',
    category: 'family',
    difficulty: 1,
    tags: ['colores', 'favoritos']
  },

  // DARE cards
  {
    id: 'fam-d-001',
    type: 'dare',
    content: 'Canta tu canción favorita por 30 segundos',
    category: 'family',
    difficulty: 2,
    tags: ['música', 'actuación']
  },
  {
    id: 'fam-d-002',
    type: 'dare',
    content: 'Haz tu mejor imitación de un animal',
    category: 'family',
    difficulty: 2,
    tags: ['imitación', 'animales']
  },
  {
    id: 'fam-d-003',
    type: 'dare',
    content: 'Cuenta un chiste que haga reír a todos',
    category: 'family',
    difficulty: 3,
    tags: ['humor', 'entretenimiento']
  },
  {
    id: 'fam-d-004',
    type: 'dare',
    content: 'Haz 10 saltos de tijera',
    category: 'family',
    difficulty: 1,
    tags: ['ejercicio', 'físico']
  },
  {
    id: 'fam-d-005',
    type: 'dare',
    content: 'Describe tu día usando solo gestos (sin palabras)',
    category: 'family',
    difficulty: 3,
    tags: ['mímica', 'comunicación']
  },
  {
    id: 'fam-d-006',
    type: 'dare',
    content: 'Baila tu canción favorita por 1 minuto',
    category: 'family',
    difficulty: 2,
    tags: ['baile', 'música']
  },
  {
    id: 'fam-d-007',
    type: 'dare',
    content: 'Haz una cara graciosa y manténla por 10 segundos',
    category: 'family',
    difficulty: 1,
    tags: ['cara graciosa', 'humor']
  },
  {
    id: 'fam-d-008',
    type: 'dare',
    content: 'Recita un poema o trabalenguas',
    category: 'family',
    difficulty: 2,
    tags: ['poema', 'trabalenguas']
  },
  {
    id: 'fam-d-009',
    type: 'dare',
    content: 'Haz tu mejor imitación de un famoso',
    category: 'family',
    difficulty: 3,
    tags: ['imitación', 'famoso']
  },
  {
    id: 'fam-d-010',
    type: 'dare',
    content: 'Dibuja algo en el aire y que los demás adivinen qué es',
    category: 'family',
    difficulty: 2,
    tags: ['dibujar', 'adivinanza']
  },
];

// Cartas para amigos (16+)
export const friendsCards: GameCard[] = [
  // TRUTH cards
  {
    id: 'fri-t-001',
    type: 'truth',
    content: '¿Cuál es tu mayor miedo?',
    category: 'friends',
    difficulty: 3,
    tags: ['miedos', 'personal']
  },
  {
    id: 'fri-t-002',
    type: 'truth',
    content: '¿Alguna vez has mentido para salir de una situación incómoda?',
    category: 'friends',
    difficulty: 3,
    tags: ['mentiras', 'situaciones']
  },
  {
    id: 'fri-t-003',
    type: 'truth',
    content: '¿Cuál es la cosa más vergonzosa que has hecho en público?',
    category: 'friends',
    difficulty: 4,
    tags: ['vergüenza', 'público']
  },
  {
    id: 'fri-t-004',
    type: 'truth',
    content: '¿A quién de este grupo considerarías tu mejor amigo?',
    category: 'friends',
    difficulty: 4,
    tags: ['amistad', 'relaciones']
  },
  {
    id: 'fri-t-005',
    type: 'truth',
    content: '¿Cuál es tu mayor secreto que nunca has contado?',
    category: 'friends',
    difficulty: 5,
    tags: ['secretos', 'confidencial']
  },
  {
    id: 'fri-t-006',
    type: 'truth',
    content: '¿Alguna vez has tenido un crush con alguien de este grupo?',
    category: 'friends',
    difficulty: 5,
    tags: ['crush', 'grupo', 'atracción']
  },
  {
    id: 'fri-t-007',
    type: 'truth',
    content: '¿Cuál es la mentira más grande que has dicho?',
    category: 'friends',
    difficulty: 4,
    tags: ['mentira', 'grande']
  },
  {
    id: 'fri-t-008',
    type: 'truth',
    content: '¿Qué es lo más loco que has hecho por amor?',
    category: 'friends',
    difficulty: 4,
    tags: ['amor', 'loco']
  },
  {
    id: 'fri-t-009',
    type: 'truth',
    content: '¿Alguna vez has espiado a alguien en redes sociales obsesivamente?',
    category: 'friends',
    difficulty: 3,
    tags: ['espiar', 'redes sociales', 'obsesivo']
  },
  {
    id: 'fri-t-010',
    type: 'truth',
    content: '¿Cuál es tu hábito más extraño?',
    category: 'friends',
    difficulty: 3,
    tags: ['hábito', 'extraño']
  },

  // DARE cards
  {
    id: 'fri-d-001',
    type: 'dare',
    content: 'Envía un mensaje de texto raro a tu mamá',
    category: 'friends',
    difficulty: 3,
    tags: ['mensajes', 'familia']
  },
  {
    id: 'fri-d-002',
    type: 'dare',
    content: 'Haz una llamada a un número aleatorio y pregunta por "Pedro"',
    category: 'friends',
    difficulty: 4,
    tags: ['llamadas', 'extraños']
  },
  {
    id: 'fri-d-003',
    type: 'dare',
    content: 'Imita a cada persona del grupo por 1 minuto',
    category: 'friends',
    difficulty: 4,
    tags: ['imitación', 'grupo']
  },
  {
    id: 'fri-d-004',
    type: 'dare',
    content: 'Baila sin música por 2 minutos',
    category: 'friends',
    difficulty: 3,
    tags: ['baile', 'música']
  },
  {
    id: 'fri-d-005',
    type: 'dare',
    content: 'Deja que el grupo revise tu galería de fotos por 30 segundos',
    category: 'friends',
    difficulty: 5,
    tags: ['privacidad', 'fotos']
  },
  {
    id: 'fri-d-006',
    type: 'dare',
    content: 'Habla con acento extranjero durante 3 turnos',
    category: 'friends',
    difficulty: 3,
    tags: ['acento', 'extranjero']
  },
  {
    id: 'fri-d-007',
    type: 'dare',
    content: 'Actúa como si fueras un animal por 1 minuto',
    category: 'friends',
    difficulty: 3,
    tags: ['animal', 'actuar']
  },
  {
    id: 'fri-d-008',
    type: 'dare',
    content: 'Canta una canción romántica a la persona de tu izquierda',
    category: 'friends',
    difficulty: 4,
    tags: ['cantar', 'romántica']
  },
  {
    id: 'fri-d-009',
    type: 'dare',
    content: 'Haz 20 flexiones o toma un shot',
    category: 'friends',
    difficulty: 3,
    tags: ['flexiones', 'shot', 'ejercicio']
  },
  {
    id: 'fri-d-010',
    type: 'dare',
    content: 'Deja que alguien publique un estado en tu Facebook',
    category: 'friends',
    difficulty: 5,
    tags: ['Facebook', 'estado', 'redes sociales']
  },
];

// Cartas para adultos (18+)
export const adultCards: GameCard[] = [
  // TRUTH cards
  {
    id: 'adu-t-001',
    type: 'truth',
    content: '¿Cuál es tu mayor fantasía sexual?',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['fantasías', 'adulto']
  },
  {
    id: 'adu-t-002',
    type: 'truth',
    content: '¿Alguna vez has tenido un sueño erótico con alguien de este grupo?',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['sueños', 'grupo']
  },
  {
    id: 'adu-t-003',
    type: 'truth',
    content: '¿Cuál es el lugar más raro donde has tenido intimidad?',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['intimidad', 'lugares']
  },
  {
    id: 'adu-t-004',
    type: 'truth',
    content: '¿Cuál es tu posición favorita?',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['posiciones', 'preferencias']
  },
  {
    id: 'adu-t-005',
    type: 'truth',
    content: '¿Alguna vez has hecho un trío?',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['experiencias', 'trío']
  },
  {
    id: 'adu-t-006',
    type: 'truth',
    content: '¿Cuál es el fetiche más raro que tienes?',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['fetiche', 'raro']
  },
  {
    id: 'adu-t-007',
    type: 'truth',
    content: '¿Alguna vez has grabado un video íntimo?',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['video', 'íntimo', 'grabación']
  },
  {
    id: 'adu-t-008',
    type: 'truth',
    content: '¿Cuál es la experiencia sexual más intensa que has tenido?',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['experiencia', 'intensa']
  },
  {
    id: 'adu-t-009',
    type: 'truth',
    content: '¿Alguna vez has tenido relaciones en un lugar público?',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['público', 'relaciones']
  },
  {
    id: 'adu-t-010',
    type: 'truth',
    content: '¿Cuántas personas has besado en esta habitación?',
    category: 'adults',
    difficulty: 3,
    isAdult: true,
    tags: ['besos', 'habitación']
  },

  // DARE cards
  {
    id: 'adu-d-001',
    type: 'dare',
    content: 'Haz un baile sensual por 1 minuto',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['baile', 'sensual']
  },
  {
    id: 'adu-d-002',
    type: 'dare',
    content: 'Describe tu primera vez con detalles',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['primera vez', 'detalles']
  },
  {
    id: 'adu-d-003',
    type: 'dare',
    content: 'Haz sonidos sensuales por 30 segundos',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['sonidos', 'sensual']
  },
  {
    id: 'adu-d-004',
    type: 'dare',
    content: 'Quítate una prenda de ropa',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['ropa', 'desnudez']
  },
  {
    id: 'adu-d-005',
    type: 'dare',
    content: 'Besa a la persona más atractiva del grupo',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['beso', 'atracción']
  },
  {
    id: 'adu-d-006',
    type: 'dare',
    content: 'Haz una imitación de una escena de película para adultos',
    category: 'adults',
    difficulty: 5,
    isAdult: true,
    tags: ['imitación', 'película', 'adultos']
  },
  {
    id: 'adu-d-007',
    type: 'dare',
    content: 'Cuenta tu experiencia sexual más vergonzosa',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['experiencia', 'vergonzosa']
  },
  {
    id: 'adu-d-008',
    type: 'dare',
    content: 'Demuestra tu mejor técnica de seducción',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['seducción', 'técnica']
  },
  {
    id: 'adu-d-009',
    type: 'dare',
    content: 'Haz una pose sexy y mantén la por 10 segundos',
    category: 'adults',
    difficulty: 3,
    isAdult: true,
    tags: ['pose', 'sexy']
  },
  {
    id: 'adu-d-010',
    type: 'dare',
    content: 'Describe tu fantasía sexual ideal con detalles',
    category: 'adults',
    difficulty: 4,
    isAdult: true,
    tags: ['fantasía', 'ideal', 'detalles']
  },
];

// Cartas para parejas (18+)
export const couplesCards: GameCard[] = [
  // TRUTH cards - Más picantes y adultas
  {
    id: 'cop-t-001',
    type: 'truth',
    content: '¿Cuál es tu fantasía sexual más salvaje conmigo?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['fantasía', 'pareja', 'sexual']
  },
  {
    id: 'cop-t-002',
    type: 'truth',
    content: '¿Qué parte de mi cuerpo te excita más cuando la tocas?',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['excitación', 'cuerpo', 'tacto']
  },
  {
    id: 'cop-t-003',
    type: 'truth',
    content: '¿Alguna vez has fingido un orgasmo conmigo? ¿Cuándo?',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['orgasmo', 'honestidad', 'fingir']
  },
  {
    id: 'cop-t-004',
    type: 'truth',
    content: '¿Qué posición sexual te pone más caliente?',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['posiciones', 'excitación', 'caliente']
  },
  {
    id: 'cop-t-005',
    type: 'truth',
    content: '¿Qué juguete sexual te gustaría que usáramos juntos?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['juguetes', 'sexual', 'experimentar']
  },
  {
    id: 'cop-t-006',
    type: 'truth',
    content: '¿Cuál es el lugar más atrevido donde te gustaría hacer el amor?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['lugares', 'atrevido', 'público']
  },
  {
    id: 'cop-t-007',
    type: 'truth',
    content: '¿Qué me harías si fuéramos los únicos en el mundo por una noche?',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['fantasía', 'noche', 'solos']
  },
  {
    id: 'cop-t-008',
    type: 'truth',
    content: '¿Cuál es tu zona erógena favorita que yo toque?',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['zona erógena', 'tacto', 'favorita']
  },
  {
    id: 'cop-t-009',
    type: 'truth',
    content: '¿Qué fetiche secreto tienes que no me has contado?',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['fetiche', 'secreto', 'oculto']
  },
  {
    id: 'cop-t-010',
    type: 'truth',
    content: '¿Cuándo fue la última vez que te masturbaste pensando en mí?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['masturbación', 'pensar', 'última vez']
  },
  {
    id: 'cop-t-011',
    type: 'truth',
    content: '¿Qué te gustaría que hiciera con mi boca durante el sexo?',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['boca', 'sexo oral', 'deseo']
  },
  {
    id: 'cop-t-012',
    type: 'truth',
    content: '¿Cuál es tu palabra sucia favorita que quieres que te diga?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['palabras sucias', 'dirty talk', 'favorita']
  },

  // DARE cards - Más intensos y picantes
  {
    id: 'cop-d-001',
    type: 'dare',
    content: 'Dame un masaje sensual en ropa interior por 3 minutos',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['masaje', 'sensual', 'ropa interior']
  },
  {
    id: 'cop-d-002',
    type: 'dare',
    content: 'Susúrrame al oído tu fantasía más caliente mientras me tocas',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['susurro', 'fantasía', 'tocar']
  },
  {
    id: 'cop-d-003',
    type: 'dare',
    content: 'Haz un striptease lento y sensual solo para mí',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['striptease', 'lento', 'sensual']
  },
  {
    id: 'cop-d-004',
    type: 'dare',
    content: 'Bésame apasionadamente en el cuello por 1 minuto',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['beso', 'cuello', 'apasionado']
  },
  {
    id: 'cop-d-005',
    type: 'dare',
    content: 'Usa solo tus manos para excitarme por 2 minutos',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['manos', 'excitar', 'preliminares']
  },
  {
    id: 'cop-d-006',
    type: 'dare',
    content: 'Baila para mí de forma sexy con tu canción favorita',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['baile', 'sexy', 'música']
  },
  {
    id: 'cop-d-007',
    type: 'dare',
    content: 'Describe con detalles lo que quieres hacer conmigo ahora mismo',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['describir', 'deseo', 'ahora']
  },
  {
    id: 'cop-d-008',
    type: 'dare',
    content: 'Dime palabras sucias al oído mientras me abrazas',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['palabras sucias', 'oído', 'abrazo']
  },
  {
    id: 'cop-d-009',
    type: 'dare',
    content: 'Usa tu lengua para besarme en 3 lugares diferentes',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['lengua', 'besar', 'lugares']
  },
  {
    id: 'cop-d-010',
    type: 'dare',
    content: 'Quítate una prenda lentamente mientras me miras a los ojos',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['quitar ropa', 'lento', 'mirar']
  },
  {
    id: 'cop-d-011',
    type: 'dare',
    content: 'Haz que me excite usando solo tu voz por 1 minuto',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['voz', 'excitar', 'seducir']
  },
  {
    id: 'cop-d-012',
    type: 'dare',
    content: 'Actúa tu posición favorita conmigo (solo actuar)',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['actuar', 'posición', 'favorita']
  },
  {
    id: 'cop-d-013',
    type: 'dare',
    content: 'Describe paso a paso cómo te gusta que te bese',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['describir', 'besar', 'paso a paso']
  },
  {
    id: 'cop-d-014',
    type: 'dare',
    content: 'Haz sonidos sexys mientras me tocas suavemente',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['sonidos', 'sexy', 'tocar']
  },
  {
    id: 'cop-d-015',
    type: 'dare',
    content: 'Planea nuestra próxima noche romántica con todos los detalles picantes',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['planear', 'romántica', 'picante']
  },
];

// Función para obtener cartas por modo
export const getCardsByMode = (mode: string): GameCard[] => {
  switch (mode) {
    case 'family':
      return familyCards;
    case 'friends':
      return friendsCards;
    case 'adults':
      return adultCards;
    case 'couples':
      return couplesCards;
    default:
      return familyCards;
  }
};
