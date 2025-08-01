import React, { useState, useEffect } from 'react';
import type { GameSettings, GameCard, Player } from '../types/game';
import { getCardsByMode } from '../data/cards';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Shuffle, Settings } from 'lucide-react';
import AdultContentWarning from './AdultContentWarning';
import { useGameStats } from '../hooks/useGameStats';

interface GameBoardProps {
  gameSettings: GameSettings;
  onBackToSetup: () => void;
  onBackToMenu: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameSettings, onBackToSetup, onBackToMenu }) => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [currentCard, setCurrentCard] = useState<GameCard | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [usedCards, setUsedCards] = useState<string[]>([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [players] = useState<Player[]>(gameSettings.players);
  const [showAdultWarning, setShowAdultWarning] = useState(false);
  const [gameStartTime] = useState(Date.now());
  const { saveGameSession } = useGameStats();

  const initializeGame = () => {
    const gameCards = getCardsByMode(gameSettings.mode);
    const filteredCards = gameCards.filter(card => {
      // Filter by type
      if (!gameSettings.includeTruths && card.type === 'truth') return false;
      if (!gameSettings.includeDares && card.type === 'dare') return false;
      
      // Filter by difficulty
      if (card.difficulty < gameSettings.difficulty.min || card.difficulty > gameSettings.difficulty.max) {
        return false;
      }
      
      return true;
    });
    
    setCards(filteredCards);
    drawRandomCard(filteredCards, []);
  };

  useEffect(() => {
    // Show adult warning for adults and couples mode
    if (gameSettings.mode === 'adults' || gameSettings.mode === 'couples') {
      setShowAdultWarning(true);
    } else {
      initializeGame();
    }
  }, [gameSettings]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAcceptAdultWarning = () => {
    setShowAdultWarning(false);
    initializeGame();
  };

  const handleDeclineAdultWarning = () => {
    onBackToSetup();
  };

  const drawRandomCard = (cardDeck: GameCard[], used: string[]) => {
    const availableCards = cardDeck.filter(card => !used.includes(card.id));
    
    if (availableCards.length === 0) {
      // Reset if all cards are used
      setUsedCards([]);
      setCurrentCard(cardDeck[Math.floor(Math.random() * cardDeck.length)]);
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const selectedCard = availableCards[randomIndex];
    setCurrentCard(selectedCard);
    setUsedCards([...used, selectedCard.id]);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
    // Vibración en dispositivos móviles
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    // Move to next player
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    drawRandomCard(cards, usedCards);
    // Vibración en dispositivos móviles
    if (navigator.vibrate) {
      navigator.vibrate([30, 50, 30]);
    }
  };

  const handleBackToMenu = () => {
    // Save game session before leaving
    const gameDuration = Math.floor((Date.now() - gameStartTime) / 1000);
    saveGameSession(gameSettings, usedCards.length, gameDuration);
    onBackToMenu();
  };

  const handleBackToSetup = () => {
    // Save game session before leaving
    const gameDuration = Math.floor((Date.now() - gameStartTime) / 1000);
    saveGameSession(gameSettings, usedCards.length, gameDuration);
    onBackToSetup();
  };

  const handleReset = () => {
    setUsedCards([]);
    setIsFlipped(false);
    setCurrentPlayerIndex(0);
    drawRandomCard(cards, []);
  };

  const getModeTitle = () => {
    const titles = {
      family: 'Modo Familiar',
      friends: 'Modo Amigos',
      adults: 'Modo Adultos',
      couples: 'Modo Parejas'
    };
    return titles[gameSettings.mode];
  };

  const getCardColor = (type: 'truth' | 'dare', mode: string) => {
    const colorMap = {
      family: {
        truth: 'family-card-truth',
        dare: 'family-card-dare'
      },
      friends: {
        truth: 'friends-card-truth',
        dare: 'friends-card-dare'
      },
      adults: {
        truth: 'adults-card-truth',
        dare: 'adults-card-dare'
      },
      couples: {
        truth: 'couples-card-truth',
        dare: 'couples-card-dare'
      }
    };
    return colorMap[mode as keyof typeof colorMap][type] || 'family-card-truth';
  };

  const getCardText = (type: 'truth' | 'dare') => {
    return type === 'truth' ? 'VERDAD' : 'RETO';
  };

  const getModeEmoji = (mode: string) => {
    const emojis = {
      family: '👨‍👩‍👧‍👦',
      friends: '👥',
      adults: '🔞',
      couples: '💕'
    };
    return emojis[mode as keyof typeof emojis] || '🎮';
  };

  const renderDifficultyDots = (difficulty: number) => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <div
          key={i}
          className={`difficulty-dot ${i <= difficulty ? '' : 'inactive'}`}
        />
      );
    }
    return dots;
  };

  const currentPlayer = players[currentPlayerIndex];

  // Show adult warning if needed
  if (showAdultWarning) {
    return (
      <AdultContentWarning
        mode={gameSettings.mode as 'adults' | 'couples'}
        onAccept={handleAcceptAdultWarning}
        onDecline={handleDeclineAdultWarning}
      />
    );
  }

  if (!currentCard) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Cargando cartas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 flex flex-col">
      {/* Minimal Header */}
      <div className="flex items-center justify-between mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToSetup}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <ArrowLeft size={20} />
        </motion.button>

        {/* Enhanced Current Player Indicator */}
        <div className="player-turn-indicator flex items-center space-x-3 rounded-full px-4 py-2">
          <div className="text-2xl animate-pulse">{currentPlayer.avatar}</div>
          <div className="text-lg font-bold text-white drop-shadow-lg">
            {currentPlayer.name}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBackToMenu}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Settings size={20} />
        </motion.button>
      </div>

      {/* Main Card - Takes Most of the Screen */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="game-card" onClick={handleCardFlip}>
          <motion.div
            className={`game-card-inner ${isFlipped ? 'flipped' : ''}`}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Front */}
            <div className={`game-card-front ${getCardColor(currentCard.type, gameSettings.mode)}`}>
              <div className="card-brand">Truth or Dare</div>
              <div className="card-corner-number">{getModeEmoji(gameSettings.mode)}</div>
              
              <div className="card-content-wrapper">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <div className="text-6xl md:text-8xl font-black text-white mb-4 text-center leading-none">
                    {getCardText(currentCard.type)}
                  </div>
                  <div className="w-20 h-1 bg-white/50 mb-6"></div>
                  <p className="text-white/80 text-lg font-medium">
                    Toca para revelar
                  </p>
                </motion.div>
              </div>
              
              <div className="card-type-label">
                <span className="text-white font-semibold text-sm">
                  {getModeTitle()}
                </span>
              </div>
              
              <div className="card-difficulty-indicator">
                {renderDifficultyDots(currentCard.difficulty)}
              </div>
            </div>

            {/* Card Back */}
            <div className={`game-card-back ${getCardColor(currentCard.type, gameSettings.mode)}`}>
              <div className="card-brand">Truth or Dare</div>
              <div className="card-corner-number">{getModeEmoji(gameSettings.mode)}</div>
              
              <div className="card-content-wrapper">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center justify-center h-full"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                    {getCardText(currentCard.type)}
                  </h3>
                  <div className="flex-1 flex items-center justify-center">
                    <p className="text-white text-lg md:text-xl leading-relaxed text-center px-4">
                      {currentCard.content}
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="card-type-label">
                <span className="text-white font-semibold text-sm">
                  {getModeTitle()}
                </span>
              </div>
              
              <div className="card-difficulty-indicator">
                {renderDifficultyDots(currentCard.difficulty)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal Bottom Controls */}
      <div className="flex justify-center space-x-6 pb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center space-x-2"
        >
          <RotateCcw size={20} />
          <span className="hidden sm:inline">Reiniciar</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextCard}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all flex items-center space-x-2 font-semibold"
        >
          <Shuffle size={20} />
          <span>Siguiente</span>
        </motion.button>
      </div>

      {/* Subtle Instructions */}
      <div className="text-center text-gray-500 text-sm pb-2">
        Toca la carta para revelar
      </div>
    </div>
  );
};

export default GameBoard;
