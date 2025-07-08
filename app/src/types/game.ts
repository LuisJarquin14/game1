export interface GameCard {
  id: string;
  type: 'truth' | 'dare';
  content: string;
  category: GameMode;
  difficulty: 1 | 2 | 3 | 4 | 5;
  isAdult?: boolean;
  tags?: string[];
}

export type GameMode = 'family' | 'friends' | 'adults' | 'couples';

export interface GameState {
  mode: GameMode;
  currentCard: GameCard | null;
  usedCards: string[];
  players: Player[];
  currentPlayer: number;
  score: { [playerId: string]: number };
  isPlaying: boolean;
  cardFlipped: boolean;
  settings: GameSettings;
}

export interface Player {
  id: string;
  name: string;
  avatar?: string;
  age?: number;
  isActive: boolean;
  score: number;
}

export interface GameSettings {
  mode: GameMode;
  playerCount: number;
  players: Player[];
  includeTruths: boolean;
  includeDares: boolean;
  difficulty: {
    min: number;
    max: number;
  };
  timeLimit?: number;
  ageVerified: boolean;
  requiresAdultConsent: boolean;
}

export interface CardDeck {
  truths: GameCard[];
  dares: GameCard[];
}

export interface GameSession {
  id: string;
  createdAt: Date;
  players: Player[];
  settings: GameSettings;
  isActive: boolean;
  hostId: string;
}

export interface AgeVerification {
  verified: boolean;
  birthYear?: number;
  consentGiven: boolean;
}
