import React from 'react';
import type { GameMode } from '../types/game';
import { motion } from 'framer-motion';
import { Users, Heart, Zap, UserCheck, BarChart3 } from 'lucide-react';

interface GameModeSelectorProps {
  onModeSelect: (mode: GameMode) => void;
  onShowStats?: () => void;
}

const GameModeSelector: React.FC<GameModeSelectorProps> = ({ onModeSelect, onShowStats }) => {
  const gameModes = [
    {
      id: 'family' as GameMode,
      title: 'Familiar',
      description: 'Diversión para toda la familia',
      icon: Users,
      color: 'from-green-400 to-blue-500',
      ageRating: '13+',
      features: ['Preguntas divertidas', 'Retos familiares', 'Sin contenido adulto']
    },
    {
      id: 'friends' as GameMode,
      title: 'Amigos',
      description: 'Para grupos de amigos',
      icon: UserCheck,
      color: 'from-yellow-400 to-orange-500',
      ageRating: '16+',
      features: ['Preguntas más atrevidas', 'Retos divertidos', 'Contenido moderado']
    },
    {
      id: 'adults' as GameMode,
      title: 'Adultos',
      description: 'Solo para mayores de edad',
      icon: Zap,
      color: 'from-red-400 to-pink-500',
      ageRating: '18+',
      features: ['Contenido picante', 'Preguntas íntimas', 'Retos atrevidos']
    },
    {
      id: 'couples' as GameMode,
      title: 'Parejas',
      description: 'Intimidad entre dos',
      icon: Heart,
      color: 'from-pink-400 to-purple-500',
      ageRating: '18+',
      features: ['Solo para parejas', 'Muy íntimo', 'Máximo romance']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          Truth or Dare
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Elige tu modo de juego y personaliza tu experiencia
        </motion.p>
        
        {/* Interactive elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <div className="glass-morphism px-4 py-2 rounded-full">
            <span className="text-sm text-gray-300">🎮 Multijugador</span>
          </div>
          <div className="glass-morphism px-4 py-2 rounded-full">
            <span className="text-sm text-gray-300">🎯 Personalizable</span>
          </div>
          <div className="glass-morphism px-4 py-2 rounded-full">
            <span className="text-sm text-gray-300">🔥 Interactivo</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Game Mode Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full"
      >
        {gameModes.map((mode, index) => {
          const IconComponent = mode.icon;
          
          return (
            <motion.div
              key={mode.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => onModeSelect(mode.id)}
            >
              <div className={`relative h-96 rounded-2xl bg-gradient-to-br ${mode.color} p-[2px] shadow-2xl overflow-hidden`}>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-30 animate-pulse"></div>
                
                <div className="relative h-full rounded-2xl bg-black/20 backdrop-blur-sm p-6 flex flex-col">
                  {/* Age Rating Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {mode.ageRating}
                  </motion.div>

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <motion.div 
                      className="p-4 rounded-full bg-white/20 backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent size={48} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-2xl font-bold text-center mb-2 text-white">
                    {mode.title}
                  </h3>
                  <p className="text-center text-gray-200 mb-6 flex-grow">
                    {mode.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {mode.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-white/60 mr-3"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.2
                          }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Play Button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-semibold py-3 rounded-lg transition-all duration-300 relative overflow-hidden"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 300] }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative z-10">¡Jugar Ahora!</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="mt-12 text-center max-w-4xl"
      >
        <div className="glass-morphism rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            ¿Qué hace especial a este Truth or Dare?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <div className="text-purple-400 font-semibold mb-1">🎭 Personalizable</div>
              <div>Configura jugadores, dificultad y tipo de cartas</div>
            </div>
            <div>
              <div className="text-pink-400 font-semibold mb-1">🔄 Inteligente</div>
              <div>Sin repetición de cartas y turnos automáticos</div>
            </div>
            <div>
              <div className="text-blue-400 font-semibold mb-1">🛡️ Seguro</div>
              <div>Verificación de edad para contenido adulto</div>
            </div>
          </div>
        </div>
        
        {/* Stats Button */}
        {onShowStats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShowStats}
              className="glass-morphism px-6 py-3 rounded-full flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <BarChart3 size={20} />
              <span>Ver Estadísticas</span>
            </motion.button>
          </motion.div>
        )}
        
        <p className="text-sm text-gray-400">
          ⚠️ Juega responsablemente. Los modos 18+ requieren verificación de edad y consentimiento.
        </p>
      </motion.div>
    </div>
  );
};

export default GameModeSelector;
