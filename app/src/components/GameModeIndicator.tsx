import React from 'react';
import { motion } from 'framer-motion';

interface GameModeIndicatorProps {
  mode: 'family' | 'friends' | 'adults' | 'couples';
  difficulty: { min: number; max: number };
}

const GameModeIndicator: React.FC<GameModeIndicatorProps> = ({ mode, difficulty }) => {
  const getModeConfig = () => {
    const configs = {
      family: {
        title: 'Modo Familiar',
        emoji: '👨‍👩‍👧‍👦',
        colors: 'from-emerald-500 to-teal-600',
        description: 'Diversión para toda la familia',
        age: '13+',
        bgColor: 'bg-emerald-500/20',
        borderColor: 'border-emerald-500/50'
      },
      friends: {
        title: 'Modo Amigos',
        emoji: '👥',
        colors: 'from-amber-500 to-orange-600',
        description: 'Verdades y retos entre amigos',
        age: '16+',
        bgColor: 'bg-amber-500/20',
        borderColor: 'border-amber-500/50'
      },
      adults: {
        title: 'Modo Adultos',
        emoji: '🔞',
        colors: 'from-pink-500 to-purple-600',
        description: 'Para adultos aventureros',
        age: '18+',
        bgColor: 'bg-pink-500/20',
        borderColor: 'border-pink-500/50'
      },
      couples: {
        title: 'Modo Parejas',
        emoji: '💕',
        colors: 'from-red-600 to-rose-800',
        description: 'Intimidad y pasión',
        age: '18+',
        bgColor: 'bg-red-600/20',
        borderColor: 'border-red-600/50'
      }
    };
    return configs[mode];
  };

  const config = getModeConfig();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`glass-morphism rounded-2xl p-6 ${config.bgColor} ${config.borderColor} border-2`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="text-4xl">{config.emoji}</div>
          <div>
            <h2 className={`text-2xl font-bold bg-gradient-to-r ${config.colors} bg-clip-text text-transparent`}>
              {config.title}
            </h2>
            <p className="text-gray-300 text-sm">{config.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-lg font-bold bg-gradient-to-r ${config.colors} bg-clip-text text-transparent`}>
            {config.age}
          </div>
          <div className="text-sm text-gray-400">
            Dificultad: {difficulty.min}★ - {difficulty.max}★
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">VERDAD</div>
          <div className="text-sm text-gray-400">Truth</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-400">RETO</div>
          <div className="text-sm text-gray-400">Dare</div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameModeIndicator;
