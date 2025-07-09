import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, Star, Shuffle } from 'lucide-react';

interface GameStatsProps {
  players: number;
  usedCards: number;
  totalCards: number;
  currentDifficulty: number;
  gameTime?: number;
}

const GameStats: React.FC<GameStatsProps> = ({ 
  players, 
  usedCards, 
  totalCards, 
  currentDifficulty,
  gameTime 
}) => {
  const progress = (usedCards / totalCards) * 100;

  const stats = [
    {
      icon: Users,
      label: 'Jugadores',
      value: players,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20'
    },
    {
      icon: Shuffle,
      label: 'Cartas usadas',
      value: usedCards,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20'
    },
    {
      icon: Clock,
      label: 'Restantes',
      value: totalCards - usedCards,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/20'
    },
    {
      icon: Star,
      label: 'Dificultad',
      value: '★'.repeat(currentDifficulty),
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass-morphism rounded-2xl p-6 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
            className={`${stat.bgColor} rounded-xl p-4 text-center backdrop-blur-sm border border-white/10`}
          >
            <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-sm text-gray-300 mb-1">{stat.label}</div>
            <div className={`text-xl font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progreso del juego</span>
          <span className="text-sm text-gray-400">{progress.toFixed(1)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />
        </div>
      </div>

      {gameTime && (
        <div className="text-center">
          <div className="text-sm text-gray-400">
            Tiempo de juego: {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GameStats;
