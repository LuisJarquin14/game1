import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, X } from 'lucide-react';

interface AdultContentWarningProps {
  mode: 'adults' | 'couples';
  onAccept: () => void;
  onDecline: () => void;
}

const AdultContentWarning: React.FC<AdultContentWarningProps> = ({ mode, onAccept, onDecline }) => {
  const getWarningConfig = () => {
    const configs = {
      adults: {
        title: 'Contenido para Adultos',
        description: 'Este modo contiene preguntas y retos de naturaleza sexual y adulta.',
        emoji: '🔞',
        color: 'from-pink-500 to-purple-600'
      },
      couples: {
        title: 'Contenido Íntimo para Parejas',
        description: 'Este modo contiene contenido muy íntimo y sexual diseñado exclusivamente para parejas.',
        emoji: '💕',
        color: 'from-red-600 to-rose-800'
      }
    };
    return configs[mode];
  };

  const config = getWarningConfig();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="glass-morphism-strong rounded-3xl p-8 max-w-md w-full mx-auto border-2 border-red-500/50"
      >
        <div className="text-center">
          <div className="text-6xl mb-4">{config.emoji}</div>
          <h2 className={`text-2xl font-bold bg-gradient-to-r ${config.color} bg-clip-text text-transparent mb-4`}>
            {config.title}
          </h2>
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
            <span className="text-red-400 font-semibold">Solo para mayores de 18 años</span>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {config.description}
          </p>
          <div className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 mb-6">
            <p className="text-red-300 text-sm">
              ⚠️ Al continuar, confirmas que eres mayor de 18 años y consientes en ver contenido para adultos.
            </p>
          </div>
        </div>

        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDecline}
            className="flex-1 btn-secondary flex items-center justify-center space-x-2"
          >
            <X size={20} />
            <span>Cancelar</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAccept}
            className="flex-1 btn-danger flex items-center justify-center space-x-2"
          >
            <AlertTriangle size={20} />
            <span>Acepto (18+)</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AdultContentWarning;
