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
];

// Cartas para adultos (18+)
export const adultCards: GameCard[] = [
  // TRUTH cards
  {
    id: 'adu-t-001',
    type: 'truth',
    content: '¿Cuál es tu mayor fantasía?',
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
];

// Cartas para parejas (18+)
export const couplesCards: GameCard[] = [
  // TRUTH cards
  {
    id: 'cop-t-001',
    type: 'truth',
    content: '¿Cuál es tu fantasía sexual conmigo?',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['fantasía', 'pareja']
  },
  {
    id: 'cop-t-002',
    type: 'truth',
    content: '¿Qué es lo que más te excita de mí?',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['excitación', 'atracción']
  },
  {
    id: 'cop-t-003',
    type: 'truth',
    content: '¿Alguna vez has fingido un orgasmo conmigo?',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['orgasmo', 'honestidad']
  },
  {
    id: 'cop-t-004',
    type: 'truth',
    content: '¿Cuál es tu parte favorita de mi cuerpo?',
    category: 'couples',
    difficulty: 2,
    isAdult: true,
    tags: ['cuerpo', 'preferencias']
  },
  {
    id: 'cop-t-005',
    type: 'truth',
    content: '¿Qué posición nueva te gustaría probar?',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['posiciones', 'nuevas']
  },

  // DARE cards
  {
    id: 'cop-d-001',
    type: 'dare',
    content: 'Dale un masaje sensual por 2 minutos',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['masaje', 'sensual']
  },
  {
    id: 'cop-d-002',
    type: 'dare',
    content: 'Susúrrale al oído tu fantasía más salvaje',
    category: 'couples',
    difficulty: 4,
    isAdult: true,
    tags: ['susurro', 'fantasía']
  },
  {
    id: 'cop-d-003',
    type: 'dare',
    content: 'Haz un striptease por 1 minuto',
    category: 'couples',
    difficulty: 5,
    isAdult: true,
    tags: ['striptease', 'baile']
  },
  {
    id: 'cop-d-004',
    type: 'dare',
    content: 'Bésalo/a apasionadamente por 30 segundos',
    category: 'couples',
    difficulty: 2,
    isAdult: true,
    tags: ['beso', 'pasión']
  },
  {
    id: 'cop-d-005',
    type: 'dare',
    content: 'Describe cómo te gustaría que fuera nuestra próxima noche romántica',
    category: 'couples',
    difficulty: 3,
    isAdult: true,
    tags: ['romance', 'noche']
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
