import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Users, Target } from 'lucide-react';
import { useGameStats } from '../hooks/useGameStats';

const StatsComponent: React.FC = () => {
  const { stats, loading } = useGameStats();

  if (loading) {
    return (
      <div className="glass-morphism rounded-xl p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        <p className="text-center text-white mt-2">Cargando estadísticas...</p>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    
    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    }
    return `${minutes}m`;
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

  const getModeTitle = (mode: string) => {
    const titles = {
      family: 'Familiar',
      friends: 'Amigos',
      adults: 'Adultos',
      couples: 'Parejas'
    };
    return titles[mode as keyof typeof titles] || 'Desconocido';
  };

  return (
    <div className="glass-morphism rounded-xl p-6 max-w-4xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">📊 Estadísticas del Juego</h2>
        <p className="text-gray-400">Tu progreso en Truth or Dare</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 rounded-lg p-4 text-center"
        >
          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{stats.totalGames}</p>
          <p className="text-sm text-gray-400">Juegos</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 rounded-lg p-4 text-center"
        >
          <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{stats.averageCardsPerGame}</p>
          <p className="text-sm text-gray-400">Cartas/Juego</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/10 rounded-lg p-4 text-center"
        >
          <Clock className="w-8 h-8 text-green-400 mx-auto mb-2" />
          <p className="text-2xl font-bold text-white">{formatTime(stats.totalPlaytime)}</p>
          <p className="text-sm text-gray-400">Tiempo Total</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/10 rounded-lg p-4 text-center"
        >
          <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">{getModeEmoji(stats.favoriteMode)}</span>
            <div>
              <p className="text-lg font-bold text-white">{getModeTitle(stats.favoriteMode)}</p>
              <p className="text-sm text-gray-400">Modo Favorito</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          ¡Sigue jugando para desbloquear más estadísticas! 🎮
        </p>
      </div>
    </div>
  );
};

export default StatsComponent;
