import React, { useState, useEffect } from 'react';
import type { GameSettings, GameCard, Player } from '../types/game';
import { getCardsByMode } from '../data/cards';
import { motion } from 'framer-motion';
import { ArrowLeft, RotateCcw, Shuffle, Settings, Users } from 'lucide-react';

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

  useEffect(() => {
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
  }, [gameSettings]);

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
  };

  const handleNextCard = () => {
    setIsFlipped(false);
    // Move to next player
    setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
    drawRandomCard(cards, usedCards);
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

  const getCardColor = (type: 'truth' | 'dare') => {
    return type === 'truth' 
      ? 'from-truth-500 to-truth-700' 
      : 'from-dare-500 to-dare-700';
  };

  const getCardText = (type: 'truth' | 'dare') => {
    return type === 'truth' ? 'VERDAD' : 'RETO';
  };

  const currentPlayer = players[currentPlayerIndex];

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
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBackToSetup}
          className="flex items-center space-x-2 btn-secondary"
        >
          <ArrowLeft size={20} />
          <span>Configurar</span>
        </motion.button>

        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {getModeTitle()}
          </h1>
          <p className="text-sm text-gray-400">
            Dificultad: {gameSettings.difficulty.min}★ - {gameSettings.difficulty.max}★
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBackToMenu}
          className="btn-secondary"
        >
          <Settings size={20} />
        </motion.button>
      </div>

      {/* Current Player */}
      <div className="text-center mb-6">
        <div className="glass-morphism rounded-xl p-4 max-w-md mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <Users size={20} className="text-purple-400" />
            <span className="text-lg font-semibold">Turno de:</span>
          </div>
          <div className="flex items-center justify-center space-x-3 mb-2">
            <div className="text-3xl">{currentPlayer.avatar}</div>
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {currentPlayer.name}
            </div>
          </div>
          {gameSettings.mode === 'adults' || gameSettings.mode === 'couples' ? (
            <div className="text-sm text-gray-400">
              {currentPlayer.age} años
            </div>
          ) : null}
        </div>
      </div>

      {/* Game Stats */}
      <div className="text-center mb-6">
        <div className="glass-morphism rounded-xl p-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-300">Jugadores</div>
              <div className="text-xl font-bold">{players.length}</div>
            </div>
            <div>
              <div className="text-gray-300">Cartas usadas</div>
              <div className="text-xl font-bold">{usedCards.length}</div>
            </div>
            <div>
              <div className="text-gray-300">Cartas restantes</div>
              <div className="text-xl font-bold">{cards.length - usedCards.length}</div>
            </div>
            <div>
              <div className="text-gray-300">Dificultad</div>
              <div className="text-xl font-bold">
                {'★'.repeat(currentCard.difficulty)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Card */}
      <div className="flex-1 flex items-center justify-center">
        <div className="game-card" onClick={handleCardFlip}>
          <motion.div
            className={`game-card-inner ${isFlipped ? 'flipped' : ''}`}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Front */}
            <div className={`game-card-front bg-gradient-to-br ${getCardColor(currentCard.type)} flex items-center justify-center`}>
              <div className="text-center p-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {getCardText(currentCard.type)}
                  </h2>
                  <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
                  <p className="text-white/80 text-lg font-medium">
                    Toca para revelar
                  </p>
                  <div className="mt-4 text-white/60">
                    {'★'.repeat(currentCard.difficulty)}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Card Back */}
            <div className={`game-card-back bg-gradient-to-br ${getCardColor(currentCard.type)} flex items-center justify-center`}>
              <div className="text-center p-8">
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    {getCardText(currentCard.type)}
                  </h3>
                  <p className="text-white text-lg md:text-xl leading-relaxed">
                    {currentCard.content}
                  </p>
                  <div className="mt-4 text-white/60">
                    {'★'.repeat(currentCard.difficulty)}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Player List */}
      <div className="mb-6">
        <div className="flex justify-center">
          <div className="glass-morphism rounded-xl p-4 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className={`text-center p-3 rounded-lg transition-all ${
                    index === currentPlayerIndex
                      ? 'player-active'
                      : 'player-inactive'
                  }`}
                >
                  <div className="text-2xl mb-1">{player.avatar}</div>
                  <div className="font-semibold text-sm">{player.name}</div>
                  {(gameSettings.mode === 'adults' || gameSettings.mode === 'couples') && (
                    <div className="text-xs text-gray-400">{player.age} años</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="btn-secondary flex items-center space-x-2"
        >
          <RotateCcw size={20} />
          <span>Reiniciar</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextCard}
          className="btn-primary flex items-center space-x-2"
        >
          <Shuffle size={20} />
          <span>Siguiente Carta</span>
        </motion.button>
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 text-gray-400">
        <p className="text-sm">
          Toca la carta para revelar • Usa "Siguiente Carta" para continuar al siguiente jugador
        </p>
      </div>
    </div>
  );
};

export default GameBoard;
