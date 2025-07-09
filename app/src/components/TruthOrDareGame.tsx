import React, { useState } from 'react';
import type { GameMode, GameSettings } from '../types/game';
import GameModeSelector from './GameModeSelector';
import GameSetup from './GameSetup';
import GameBoard from './GameBoard';
import StatsComponent from './StatsComponent';
import { motion, AnimatePresence } from 'framer-motion';

type GamePhase = 'mode-selection' | 'setup' | 'playing' | 'stats';

const TruthOrDareGame: React.FC = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('mode-selection');
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null);

  const handleModeSelect = (mode: GameMode) => {
    setGameMode(mode);
    setGamePhase('setup');
  };

  const handleStartGame = (settings: GameSettings) => {
    setGameSettings(settings);
    setGamePhase('playing');
  };

  const handleBackToModeSelection = () => {
    setGameMode(null);
    setGameSettings(null);
    setGamePhase('mode-selection');
  };

  const handleBackToSetup = () => {
    setGamePhase('setup');
  };

  const handleShowStats = () => {
    setGamePhase('stats');
  };

  const handleBackFromStats = () => {
    setGamePhase('mode-selection');
  };

  return (
    <div className="min-h-screen text-white overflow-hidden">
      <AnimatePresence mode="wait">
        {gamePhase === 'mode-selection' && (
          <motion.div
            key="mode-selection"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <GameModeSelector onModeSelect={handleModeSelect} onShowStats={handleShowStats} />
          </motion.div>
        )}

        {gamePhase === 'setup' && gameMode && (
          <motion.div
            key="setup"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <GameSetup 
              gameMode={gameMode}
              onStartGame={handleStartGame}
              onBack={handleBackToModeSelection}
            />
          </motion.div>
        )}

        {gamePhase === 'playing' && gameSettings && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <GameBoard 
              gameSettings={gameSettings}
              onBackToSetup={handleBackToSetup}
              onBackToMenu={handleBackToModeSelection}
            />
          </motion.div>
        )}

        {gamePhase === 'stats' && (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-4"
          >
            <div className="max-w-6xl w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBackFromStats}
                className="mb-6 btn-secondary flex items-center space-x-2"
              >
                <span>← Volver al Menú</span>
              </motion.button>
              
              <StatsComponent />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TruthOrDareGame;
