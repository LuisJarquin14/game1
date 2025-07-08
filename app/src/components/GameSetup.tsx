import React, { useState } from 'react';
import type { GameMode, GameSettings, Player } from '../types/game';
import { motion } from 'framer-motion';
import { Plus, Minus, Users, Settings, AlertTriangle, Check, Heart, Zap, Shield, Target } from 'lucide-react';

interface GameSetupProps {
  gameMode: GameMode;
  onStartGame: (settings: GameSettings) => void;
  onBack: () => void;
}

type SetupStep = 'players' | 'avatars' | 'settings' | 'verification';

const GameSetup: React.FC<GameSetupProps> = ({ gameMode, onStartGame, onBack }) => {
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: '', avatar: '🎮', age: 0, isActive: true, score: 0 },
    { id: '2', name: '', avatar: '🎯', age: 0, isActive: true, score: 0 }
  ]);
  const [difficulty, setDifficulty] = useState({ min: 1, max: 3 });
  const [includeTruths, setIncludeTruths] = useState(true);
  const [includeDares, setIncludeDares] = useState(true);
  const [ageVerified, setAgeVerified] = useState(false);
  const [showAgeWarning, setShowAgeWarning] = useState(false);
  const [currentStep, setCurrentStep] = useState<SetupStep>('players');

  const isAdultMode = gameMode === 'adults' || gameMode === 'couples';
  const maxPlayers = gameMode === 'couples' ? 2 : 8;
  const minPlayers = gameMode === 'couples' ? 2 : 2;

  const avatarOptions = [
    '🎮', '🎯', '🎲', '🎪', '🎭', '🎨', '🎧', '🎤',
    '🔥', '⚡', '🌟', '💫', '🎊', '🎉', '💎', '🏆',
    '🦄', '🐉', '🦋', '🌈', '🌸', '🌺', '🌻', '🌷',
    '👑', '🎩', '🎪', '🃏', '🎲', '🎯', '🎮', '🕹️'
  ];

  const getModeInfo = () => {
    const modeInfo = {
      family: {
        title: 'Modo Familiar',
        description: 'Diversión para toda la familia',
        color: 'from-green-400 to-blue-500',
        icon: Users,
        maxDifficulty: 3,
        features: ['Preguntas familiares', 'Retos divertidos', 'Contenido seguro']
      },
      friends: {
        title: 'Modo Amigos',
        description: 'Para grupos de amigos',
        color: 'from-yellow-400 to-orange-500',
        icon: Target,
        maxDifficulty: 4,
        features: ['Preguntas atrevidas', 'Retos sociales', 'Diversión grupal']
      },
      adults: {
        title: 'Modo Adultos',
        description: 'Solo para mayores de edad',
        color: 'from-red-400 to-pink-500',
        icon: Zap,
        maxDifficulty: 5,
        features: ['Contenido picante', 'Preguntas íntimas', 'Retos atrevidos']
      },
      couples: {
        title: 'Modo Parejas',
        description: 'Intimidad entre dos personas',
        color: 'from-pink-400 to-purple-500',
        icon: Heart,
        maxDifficulty: 5,
        features: ['Solo para parejas', 'Muy íntimo', 'Máximo romance']
      }
    };
    return modeInfo[gameMode];
  };

  const handlePlayerCountChange = (increment: boolean) => {
    const newCount = increment ? 
      Math.min(playerCount + 1, maxPlayers) : 
      Math.max(playerCount - 1, minPlayers);
    
    setPlayerCount(newCount);
    
    const newPlayers = [...players];
    if (increment && newCount > players.length) {
      newPlayers.push({
        id: (newCount).toString(),
        name: '',
        avatar: avatarOptions[newCount - 1] || '🎮',
        age: 0,
        isActive: true,
        score: 0
      });
    } else if (!increment && newCount < players.length) {
      newPlayers.splice(newCount);
    }
    setPlayers(newPlayers);
  };

  const handlePlayerNameChange = (index: number, name: string) => {
    const newPlayers = [...players];
    newPlayers[index].name = name;
    setPlayers(newPlayers);
  };

  const handlePlayerAgeChange = (index: number, age: number) => {
    const newPlayers = [...players];
    newPlayers[index].age = age;
    setPlayers(newPlayers);
  };

  const handlePlayerAvatarChange = (index: number, avatar: string) => {
    const newPlayers = [...players];
    newPlayers[index].avatar = avatar;
    setPlayers(newPlayers);
  };

  const handleDifficultyChange = (type: 'min' | 'max', value: number) => {
    const maxDiff = getModeInfo().maxDifficulty;
    const newDifficulty = { ...difficulty };
    
    if (type === 'min') {
      newDifficulty.min = Math.max(1, Math.min(value, difficulty.max));
    } else {
      newDifficulty.max = Math.min(maxDiff, Math.max(value, difficulty.min));
    }
    
    setDifficulty(newDifficulty);
  };

  const validateAgeRequirements = () => {
    if (!isAdultMode) return true;
    
    const allPlayersAdult = players.every(player => 
      player.name.trim() !== '' && (player.age || 0) >= 18
    );
    
    if (!allPlayersAdult) {
      setShowAgeWarning(true);
      return false;
    }
    
    return ageVerified;
  };

  const handleStartGame = () => {
    if (!validateAgeRequirements()) {
      return;
    }

    const validPlayers = players.filter(p => p.name.trim() !== '');
    if (validPlayers.length < minPlayers) {
      alert(`Necesitas al menos ${minPlayers} jugadores`);
      return;
    }

    if (!includeTruths && !includeDares) {
      alert('Debes incluir al menos verdades o retos');
      return;
    }

    const settings: GameSettings = {
      mode: gameMode,
      playerCount: validPlayers.length,
      players: validPlayers,
      includeTruths,
      includeDares,
      difficulty,
      ageVerified,
      requiresAdultConsent: isAdultMode
    };

    onStartGame(settings);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 'players': {
        const validPlayerNames = players.filter(p => p.name.trim() !== '').length;
        return validPlayerNames >= minPlayers;
      }
      case 'avatars':
        return players.every(p => p.avatar && p.avatar.trim() !== '');
      case 'settings':
        return includeTruths || includeDares;
      case 'verification':
        return !isAdultMode || (ageVerified && players.every(p => (p.age || 0) >= 18));
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!validateCurrentStep()) return;

    const steps: SetupStep[] = isAdultMode 
      ? ['players', 'avatars', 'settings', 'verification']
      : ['players', 'avatars', 'settings'];
    
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    } else {
      handleStartGame();
    }
  };

  const prevStep = () => {
    const steps: SetupStep[] = isAdultMode 
      ? ['players', 'avatars', 'settings', 'verification']
      : ['players', 'avatars', 'settings'];
    
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      onBack();
    }
  };

  const getStepProgress = () => {
    const steps = isAdultMode ? 4 : 3;
    const currentStepIndex = isAdultMode 
      ? (['players', 'avatars', 'settings', 'verification'] as SetupStep[]).indexOf(currentStep)
      : (['players', 'avatars', 'settings'] as SetupStep[]).indexOf(currentStep);
    return ((currentStepIndex + 1) / steps) * 100;
  };

  const getStepTitle = (step: SetupStep) => {
    const titles = {
      players: 'Jugadores',
      avatars: 'Avatares',
      settings: 'Configuración',
      verification: 'Verificación'
    };
    return titles[step];
  };

  const modeInfo = getModeInfo();
  const IconComponent = modeInfo.icon;

  return (
    <div className="min-h-screen p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Header with Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${modeInfo.color} text-white font-bold text-lg mb-4`}>
            <IconComponent className="mr-2" size={20} />
            {modeInfo.title}
          </div>
          <p className="text-gray-300 mb-4">{modeInfo.description}</p>
          
          {/* Progress Bar */}
          <div className="glass-morphism rounded-full p-1 mb-4">
            <div className="bg-gray-600 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                style={{ width: `${getStepProgress()}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${getStepProgress()}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Paso {(isAdultMode ? ['players', 'avatars', 'settings', 'verification'] : ['players', 'avatars', 'settings']).indexOf(currentStep) + 1} de {isAdultMode ? 4 : 3}
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center space-x-4 mb-6">
            {(isAdultMode ? ['players', 'avatars', 'settings', 'verification'] : ['players', 'avatars', 'settings']).map((step) => (
              <div
                key={step}
                className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm ${
                  currentStep === step
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-600 text-gray-300'
                }`}
              >
                <div className="w-2 h-2 rounded-full bg-current" />
                <span className="capitalize">{getStepTitle(step as SetupStep)}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="glass-morphism rounded-2xl p-8 mb-8"
        >
          {/* Players Step */}
          {currentStep === 'players' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <Users className="mr-2" size={28} />
                Configurar Jugadores
              </h3>
              
              {/* Player Count Controls */}
              <div className="flex items-center justify-center space-x-6 mb-8">
                <button
                  onClick={() => handlePlayerCountChange(false)}
                  disabled={playerCount <= minPlayers}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Minus size={20} />
                </button>
                <div className="text-center">
                  <div className="text-4xl font-bold">{playerCount}</div>
                  <div className="text-sm text-gray-400">Jugadores</div>
                </div>
                <button
                  onClick={() => handlePlayerCountChange(true)}
                  disabled={playerCount >= maxPlayers}
                  className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Plus size={20} />
                </button>
              </div>

              {/* Player Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {players.map((player, index) => (
                  <div key={player.id} className="space-y-2">
                    <input
                      type="text"
                      placeholder={`Nombre del Jugador ${index + 1}`}
                      value={player.name}
                      onChange={(e) => handlePlayerNameChange(index, e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                    />
                    {isAdultMode && (
                      <input
                        type="number"
                        placeholder="Edad (18+)"
                        min="18"
                        max="100"
                        value={player.age || ''}
                        onChange={(e) => handlePlayerAgeChange(index, parseInt(e.target.value) || 0)}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Avatars Step */}
          {currentStep === 'avatars' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Elegir Avatares
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {players.filter(p => p.name.trim() !== '').map((player, index) => (
                  <div key={player.id} className="glass-morphism rounded-lg p-4">
                    <div className="text-center mb-4">
                      <div className="text-lg font-semibold">{player.name}</div>
                      <div className="text-4xl my-2">{player.avatar}</div>
                    </div>
                    <div className="grid grid-cols-8 gap-2">
                      {avatarOptions.map((avatar) => (
                        <button
                          key={avatar}
                          onClick={() => handlePlayerAvatarChange(index, avatar)}
                          className={`text-2xl p-2 rounded-lg transition-all ${
                            player.avatar === avatar
                              ? 'bg-purple-500 scale-110'
                              : 'bg-white/10 hover:bg-white/20 hover:scale-110'
                          }`}
                        >
                          {avatar}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Step */}
          {currentStep === 'settings' && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <Settings className="mr-2" size={28} />
                Configuración del Juego
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Game Type Selection */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Tipo de cartas:</h4>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 rounded-lg glass-morphism cursor-pointer hover:bg-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeTruths}
                        onChange={(e) => setIncludeTruths(e.target.checked)}
                        className="mr-4 w-5 h-5 accent-green-500"
                      />
                      <div className="flex items-center">
                        <Shield className="mr-2 text-green-400" size={20} />
                        <span className="text-green-400 font-semibold">Verdades</span>
                      </div>
                    </label>
                    <label className="flex items-center p-3 rounded-lg glass-morphism cursor-pointer hover:bg-white/20 transition-colors">
                      <input
                        type="checkbox"
                        checked={includeDares}
                        onChange={(e) => setIncludeDares(e.target.checked)}
                        className="mr-4 w-5 h-5 accent-pink-500"
                      />
                      <div className="flex items-center">
                        <Zap className="mr-2 text-pink-400" size={20} />
                        <span className="text-pink-400 font-semibold">Retos</span>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Difficulty Settings */}
                <div>
                  <h4 className="text-lg font-semibold mb-4">Nivel de dificultad:</h4>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Dificultad mínima</label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleDifficultyChange('min', star)}
                            disabled={star > modeInfo.maxDifficulty}
                            className={`text-3xl transition-all ${
                              star <= difficulty.min
                                ? 'text-yellow-400 scale-110'
                                : star <= modeInfo.maxDifficulty
                                ? 'text-gray-600 hover:text-yellow-400 hover:scale-110'
                                : 'text-gray-800 cursor-not-allowed'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Dificultad máxima</label>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => handleDifficultyChange('max', star)}
                            disabled={star > modeInfo.maxDifficulty}
                            className={`text-3xl transition-all ${
                              star <= difficulty.max
                                ? 'text-yellow-400 scale-110'
                                : star <= modeInfo.maxDifficulty
                                ? 'text-gray-600 hover:text-yellow-400 hover:scale-110'
                                : 'text-gray-800 cursor-not-allowed'
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features Preview */}
              <div className="mt-8 p-4 glass-morphism rounded-lg">
                <h4 className="font-semibold mb-2">Características del modo:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {modeInfo.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Verification Step */}
          {currentStep === 'verification' && isAdultMode && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center text-red-400 flex items-center justify-center">
                <AlertTriangle className="mr-2" size={28} />
                Verificación de Edad
              </h3>
              
              <div className="max-w-2xl mx-auto">
                <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🔞</div>
                    <p className="text-red-300 text-lg">
                      Este modo contiene contenido para mayores de 18 años
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-gray-300">
                      <strong>Todos los jugadores deben:</strong>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Ser mayores de 18 años</li>
                        <li>Consentir participar en el juego</li>
                        <li>Respetar los límites de otros jugadores</li>
                      </ul>
                    </div>
                    
                    {showAgeWarning && (
                      <div className="bg-red-600/30 border border-red-500 rounded-lg p-4 text-red-300">
                        ⚠️ Algunos jugadores no cumplen con los requisitos de edad
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={() => setAgeVerified(!ageVerified)}
                    className={`flex items-center space-x-3 px-6 py-4 rounded-lg transition-all mx-auto ${
                      ageVerified 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    <Check size={24} />
                    <span className="text-lg">
                      Confirmo que todos los jugadores son mayores de 18 años y consienten participar
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={prevStep}
            className="btn-secondary"
          >
            ← Anterior
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-400">
              {playerCount} jugadores • Dificultad {difficulty.min}-{difficulty.max}★
            </div>
          </div>
          
          <button
            onClick={nextStep}
            disabled={!validateCurrentStep()}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === (isAdultMode ? 'verification' : 'settings') ? 'Comenzar Juego' : 'Siguiente'} →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameSetup;
